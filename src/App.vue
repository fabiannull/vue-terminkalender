<template>
  <div id="app">
    <CalendarWeek />

    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalenderEntry.vue';

export default {
  name: 'App',
  components: { CalendarWeek, CalendarEntry },
};
</script>

<style scoped></style>
