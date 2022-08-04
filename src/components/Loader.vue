<template>
  <div class="d-flex justify-content-center align-items-center loader">
    <button class="btn btn-primary" type="button" disabled>
      <span
        class="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Загрузка...
    </button>
  </div>
</template>

<script>
export default {
  name: "v-Loader",
};
</script>

<style scoped lang="scss">
.loader {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
