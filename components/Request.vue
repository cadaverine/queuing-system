<template>
  <div
    class="request"
    :class="typeClass"
    :style="[positionStyles]"
  >
    <div class="request__header">
      {{ type }}
    </div>
    <div class="request__loader">
      <div
        class="request__loader-line"
        :style="widthStyles"
      />
    </div>
  </div>
</template>

<script>
import { animate } from '../assets/helpers'

export default {
  props: {
    id: {
      type: Number,
      default: -1
    },
    type: {
      type: String,
      default: 'XCHG',
      validator: value => ['XCHG', 'CARD', 'CRED', 'ACNT'].includes(value)
    },
    coords: {
      type: Object,
      default: () => ({ top: 42, left: 1206 })
    },
    serviceTime: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      serviceProgress: 0
    }
  },
  computed: {
    typeClass() {
      return `request_type_${this.type}`
    },
    positionStyles() {
      return {
        top: `${this.coords.top}px`,
        left: `${this.coords.left}px`
      }
    },
    transitionStyles() {
      return { 'transition-duration': `${this.serviceTime}s` }
    },
    widthStyles() {
      return { width: `${this.serviceProgress}%` }
    }
  },
  methods: {
    async service(duration) {
      await animate(this, { serviceProgress: 100 }, duration)
      this.$emit('serviced', this.id)
    }
  }
}
</script>

<style lang="scss">
.request {
  width: 45px;
  height: 23px;
  position: absolute;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border: 2px solid #777;
  border-radius: 5px;
}

.request__header {
  display: flex;
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}

.request__loader {
  width: 90%;
  height: 20%;
  margin: 0 5%;
  background-color: #fff;
}

.request__loader-line {
  height: 100%;
  will-change: width;
  background-color: green;
}

.request_type {
  &_XCHG {
    background-color: #40DC91;
  }

  &_CARD {
    background-color: #54B7FF;
  }

  &_CRED {
    background-color: #724EFF;
  }

  &_ACNT {
    background-color: #FD5D5D;
  }
}
</style>
