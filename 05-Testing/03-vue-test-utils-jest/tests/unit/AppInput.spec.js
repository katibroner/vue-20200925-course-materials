const { shallowMount } = require('@vue/test-utils');
// or import { shallowMount } from '@vue/test-utils';
import AppInput from '@/components/AppInput';

describe('AppInput', () => {
  it('should be defined', () => {
    expect(AppInput).toBeDefined();
  });

  describe('without initial props', () => {
    let wrapper;
    let inputGroup;
    let formControl;

    beforeEach(() => {
      wrapper = shallowMount(AppInput);
      inputGroup = wrapper.find('.input-group');
      formControl = inputGroup.find('.form-control');
    });

    afterEach(async () => {
      await wrapper.destroy();
    });

    it('should render input.input-group inside form-control', async () => {
      expect(inputGroup.exists()).toBe(true);
      expect(inputGroup.find('.form-control').exists()).toBe(true);
    });

    it('should have form-control_rounded on input only with when rounded is true', async () => {
      expect(formControl.classes('form-control_rounded')).toBe(false);
      await wrapper.setProps({ rounded: true });
      // await wrapper.vm.$nextTick();
      expect(formControl.classes('form-control_rounded')).toBe(true);
    });

    it('should render current value', async () => {
      const value = 'SameValue';
      await wrapper.setProps({ value });
      expect(formControl.element.value).toBe(value);
    });

    it('should match snapshot', async () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  it.each(['password', 'num', 'range', 'date', 'time', 'email', 'tel'])(
    'should render current input type (%s)',
    type => {
      const wrapper = shallowMount(AppInput, {
        attrs: { type },
      });
      expect(wrapper.find('.form-control').attributes('type')).toBe(type);
    },
  );

  it('should handle native input event and emit input with inputed value', async () => {
    const value = 'SomeText';
    const handler = jest.fn();
    const wrapper = shallowMount(AppInput, {
      listeners: {
        input: $event => handler($event),
      },
    });
    // wrapper.find('.form-control').element.value = value;
    // await wrapper.find('.form-control').trigger('input');
    await wrapper.find('.form-control').setValue(value);
    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledWith(value);
    // or
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input).toHaveLength(1);
    expect(wrapper.emitted().input[0]).toEqual([value]);
  });
});
