import { MeetupsList } from './MeetupsList.js';
import { MeetupsCalendar } from './MeetupsCalendar.js';
import { PageTabs}  from './PageTabs.js';
import { FormCheck } from './FormCheck.js';
import { AppEmpty } from './AppEmpty.js';
import { useMeetupsFilters } from './composibles/useMeetupsFilters.js';
import { useMeetupsFetch } from './composibles/useMeetupsFetch.js';

const template = `
<div class="container">

  <div class="filters-panel">
    <div class="filters-panel__col">
      <form-check :options="dateFilterOptions" v-model="filter.date"></form-check>
    </div>

    <div class="filters-panel__col">
      <div class="form-group form-group_inline">
        <div class="input-group input-group_icon input-group_icon-left">
          <img class="icon" alt="icon" src="/assets/icons/icon-search.svg"/>
          <input
            id="filters-panel__search"
            class="form-control form-control_rounded form-control_sm"
            type="text"
            placeholder="Поиск"
            v-model="filter.search"
          />
        </div>
      </div>
      <div class="form-group form-group_inline">
        <page-tabs v-model:selected="view"></page-tabs>
      </div>
    </div>
  </div>


  <template v-if="filteredMeetups && filteredMeetups.length">
    <meetups-list v-if="view === 'list'" :meetups="filteredMeetups" key="list"></meetups-list>
    <meetups-calendar v-else-if="view === 'calendar'" :meetups="filteredMeetups" key="calendar"></meetups-calendar>
  </template>
  <app-empty v-else>Митапов по заданным условиям не найдено...</app-empty>
</div>
`;

export const MeetupsPage = {
  name: 'MeetupsPage',

  template,

  components: {
    MeetupsList,
    MeetupsCalendar,
    PageTabs,
    FormCheck,
    AppEmpty,
  },

  setup(props) {
    const { meetups } = useMeetupsFetch(props);
    return {
      meetups,
      ...useMeetupsFilters(meetups),
    };
  },
};
