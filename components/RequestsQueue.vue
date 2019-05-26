<template>
  <div
    class="queue"
    :style="sizeStyles"
  >
    <div class="queue__container">
      <Request
        v-for="(_, index) of Array(requestNumber).fill(0)"
        :id="index"
        :key="index"
        :type="getRandomRequestType()"
        :coords="{
          top: 3,
          left: width - requestSize.width - index * (requestSize.width / 2)
        }"
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
    },
    capacity: {
      type: Number,
      default: 20
    },
    requestNumber: {
      type: Number,
      default: 10
    },
    requestSize: {
      type: Object,
      default: () => ({ width: 45, height: 23 })
    }
  },
  data() {
    return {
      requestTypes: ['XCHG', 'CARD', 'CRED', 'ACNT']
    }
  },
  computed: {
    width() {
      return this.requestSize.width / 2 * this.capacity
    },
    height() {
      return this.requestSize.height + 5 * 2
    },
    sizeStyles() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
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
  left: 250px;
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
