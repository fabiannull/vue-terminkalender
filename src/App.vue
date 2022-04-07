<template>
  <div id="app">
    <CalendarWeek />

    <CalendarEntry />

    <div class="container mt-3">
      <div class="row">
        <div class="col-6 offset-3">
          <ButtonEmptyCalender />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalenderEntry.vue';
import ButtonEmptyCalender from './components/ButtonEmptyCalendar.vue';

export default {
  name: 'App',
  components: { CalendarWeek, CalendarEntry, ButtonEmptyCalender },
};
</script>

<style scoped></style>
