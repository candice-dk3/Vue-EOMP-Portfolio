<template>
  <div class="spinner" v-if="isLoading">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
</template>
<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style scoped>
.spinner {
  width: 40px;
  height: 40px;
  position: relative;
  margin: auto;
  background-color:transparent;
}
.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgb(255, 245, 0, 22%);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bounce 2.0s infinite ease-in-out;
}
.double-bounce2 {
  animation-delay: -1.0s;
}
@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0);
  } 50% {
    transform: scale(1);
  }
}
</style>