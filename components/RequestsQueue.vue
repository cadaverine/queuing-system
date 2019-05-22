<template>
  <div class="queue">
    <Request
      v-for="(_, index) of Array(length).fill(0)"
      :key="index"
    />
  </div>
</template>

<script>
import Request from './Request.vue'

export default {
  components: {
    Request
  },
  props: {
    length: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="scss">
.queue {
  height: 70px;
  width: 300px;
  display: flex;
  border: 2px solid #479CFF;
}
</style>
