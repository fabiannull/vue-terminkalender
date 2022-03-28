<template>
  <div class="card">
    <div
      class="card-header text-center bg-vue"
      style="cursor: pointer"
      @click="setActiveDay(day.id)"
    >
      <strong> {{ day.fullName }}</strong>
    </div>

    <div class="card-body">
      <div>{{ day.id }}</div>
      <CalendarEvent
        v-for="(event, index) in day.events"
        v-bind:key="index"
        v-bind:event="event"
        v-bind:day="day"
      />
    </div>
  </div>
</template>

<script>
import CalendarEvent from './CalendarEvent.vue';
import { store } from '../store.js';

export default {
  name: 'CalendarDay',
  components: { CalendarEvent },
  methods: {
    setActiveDay(dayID) {
      store.setActiveDay(dayID);
    },
  },
  props: ['day'],
};
</script>

<style scoped>
.bg-vue {
  background-color: rgb(52, 73, 94);
  color: white;
}

.bg-vue2 {
  background-color: rgb(65, 184, 131);
  color: white;
}

.square {
  width: 40px;
  height: 40px;
}
</style>
