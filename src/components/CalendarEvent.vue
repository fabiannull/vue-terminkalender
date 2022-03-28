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
        <i class="far fa-trash-alt" style="cursor: pointer"></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" class="form-control" :placeholder="event.title" />
      <hr />
      <i class="fas fa-check"></i>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'CalendarEvent',
  props: ['event', 'day'],
  computed: {
    getEventColor() {
      return 'alert-' + this.event.color;
    },
  },
  methods: {
    editEvent(dayId, eventTitle) {
      store.editEvent(dayId, eventTitle);
    },
  },
};
</script>

<style scoped></style>
