<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-header text-center bg-vue">
            <h5>Neuer Termin für: <strong>Dienstag</strong></h5>
          </div>
          <div class="card-body">
            <input
              type="text"
              class="form-control"
              placeholder="Neuer Termin"
              name=""
              id=""
            />
            <div class="mt-3 text-center">
              <span
                v-for="(color, index) in [
                  'primary',
                  'success',
                  'info',
                  'warning',
                  'danger',
                ]"
                v-bind:key="index"
                class="alert mr-2 square"
                v-bind:class="['alert-' + color]"
                style="cursor: pointer"
              ></span>
            </div>
            <hr />
            <button class="btn btn-primary w-100 btn-block bg-vue2">
              Eintragen.
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarEntry',
  data() {
    return {
      eventColor: 'primary',
    };
  },
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
