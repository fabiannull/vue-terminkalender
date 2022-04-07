<template>
  <div class="alert text-center" v-bind:class="getEventColor">
    <div v-if="!event.edit">
      <div>{{ event.title }}</div>
      <div>
        <i
          class="fas fa-edit mr-2"
          style="cursor: pointer"
          @click="editEvent(day.id, event.title)"
        ></i>
        <i
          class="far fa-trash-alt"
          style="cursor: pointer"
          @click="deleteEvent(day.id, event.title)"
        ></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input
        type="text"
        class="form-control"
        :placeholder="event.title"
        v-model="newEventTitle"
      />
      <hr />
      <i
        class="fas fa-check"
        @click="updateEvent(day.id, event.title, newEventTitle)"
      ></i>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'CalendarEvent',
  props: ['event', 'day'],
  data() {
    return {
      newEventTitle: '',
    };
  },
  computed: {
    getEventColor() {
      return 'alert-' + this.event.color;
    },
  },
  methods: {
    editEvent(dayId, eventTitle) {
      store.editEvent(dayId, eventTitle);
    },
    updateEvent(dayId, oldEventTitle, newEventTitle) {
      if (newEventTitle === '') newEventTitle = oldEventTitle;
      store.updateEvent(dayId, oldEventTitle, newEventTitle);
      this.newEventTitle = '';
    },
    deleteEvent(dayId, eventTitle) {
      console.log(dayId, eventTitle);
      store.deleteEvent(dayId, eventTitle);
    },
  },
};
</script>

<style scoped></style>
