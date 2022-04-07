<template>
  <button class="btn btn-danger btn-block" @click="emptyCalendar()">
    <i class="fas fa-eraser"></i>
    Alle Termine löschen
  </button>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'ButtonEmptyCalender',
  methods: {
    emptyCalendar() {
      store.emptyCalendar();
    },
  },
};
</script>
