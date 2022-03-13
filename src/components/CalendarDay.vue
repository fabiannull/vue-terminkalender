<template>
  <div class="card">
    <div class="card-header text-center bg-vue">
      <strong> {{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <div>{{ day.id }}</div>
      <div class="alert alert-success text-center">
        <div>Müll rausbringen</div>
        <div>
          <i class="fas fa-edit mr-2"></i>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarDay',
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
