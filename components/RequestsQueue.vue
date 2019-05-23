<template>
  <div class="queue">
    <div class="queue__container">
      <Request
        v-for="(_, index) of Array(length).fill(0)"
        :key="index"
        :type="getRandomRequestType()"
        :coords="{ top: 3, left: 460 - index * (45 / 2) }"
      />
    </div>
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
      default: 21
    }
  },
  data() {
    return {
      requestTypes: ['XCHG', 'CARD', 'CRED', 'ACNT']
    }
  },
  methods: {
    getRandomRequestType() {
      const { length } = this.requestTypes
      const type = this.requestTypes[(Math.round(Math.random() * 10) % length)]

      return type
    }
  }
}
</script>

<style lang="scss">
.queue {
  top: 230px;
  left: 550px;
  width: 500px;
  height: 33px;
  border: 2px solid #479CFF;
  display: flex;
  position: absolute;
  overflow-x: visible;
}

.queue__container {
  left: -1%;
  width: 102%;
  height: 100%;
  position: absolute;
  background-color: white;
}
</style>
