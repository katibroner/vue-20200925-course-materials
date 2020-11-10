import { MeetupsList } from './MeetupsList.js';
import { MeetupsCalendar } from './MeetupsCalendar.js';
import { PageTabs}  from './PageTabs.js';
import { FormCheck } from './FormCheck.js';
import { AppEmpty } from './AppEmpty.js';
import meetups from './meetups-data.js';

function getMeetups() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(meetups);
    }, 1000);
  })
}

const template = `
<div class="container">

  <div class="filters-panel">
    <div class="filters-panel__col">
      <form-check :options="$options.dateFilterOptions" v-model="filter.date"></form-check>
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
        <page-tabs :selected.sync="view"></page-tabs>
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

  dateFilterOptions: [
    { text: 'Все', value: 'all' },
    { text: 'Прошедшие', value: 'past' },
    { text: 'Ожидаемые', value: 'future' },
  ],

  components: {
    MeetupsList,
    MeetupsCalendar,
    PageTabs,
    FormCheck,
    AppEmpty,
  },

  data() {
    return {
      rawMeetups: [],
      filter: {
        date: 'all',
        participation: 'all',
        search: '',
      },
      view: 'list',
    };
  },

  mounted() {
    this.fetchMeetups();
  },

  computed: {
    meetups() {
      return this.rawMeetups.map((meetup) => ({
        ...meetup,
        cover: meetup.imageId ? `https://course-vue.javascript.ru/api/images/${meetup.imageId}` : undefined,
        date: new Date(meetup.date),
        localDate: new Date(meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        ISODate: new Date(meetup.date).toISOString().substr(0, 10),
      }));
    },

    filteredMeetups() {
      let filteredMeetups = this.meetups;

      if (this.filter.date === 'past') {
        filteredMeetups = filteredMeetups.filter((meetup) => new Date(meetup.date) <= new Date());
      } else if (this.filter.date === 'future') {
        filteredMeetups = filteredMeetups.filter((meetup) => new Date(meetup.date) > new Date());
      }

      if (this.filter.participation === 'organizing') {
        filteredMeetups = filteredMeetups.filter((meetup) => meetup.organizing);
      } else if (this.filter.participation === 'attending') {
        filteredMeetups = filteredMeetups.filter((meetup) => meetup.attending);
      }

      if (this.filter.search) {
        const concatMeetupText = (meetup) =>
          [meetup.title, meetup.description, meetup.place, meetup.organizer].join(' ').toLowerCase();
        filteredMeetups = filteredMeetups.filter((meetup) =>
          concatMeetupText(meetup).includes(this.filter.search.toLowerCase()),
        );
      }

      return filteredMeetups;
    },
  },

  methods: {
    async fetchMeetups() {
      this.rawMeetups = await getMeetups();
    },
  },

};
