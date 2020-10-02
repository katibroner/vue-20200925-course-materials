import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import meetups from './meetups-data.js';

function getMeetups() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(meetups);
    }, 1000);
  })
}

const app = new Vue({
  el: "#app",

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

});
