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
      <transition
        name="loading"
        @after-enter="stopLoading"
      >
        <div
          v-show="loadingStarted"
          class="request__loader-line"
        />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
      default: 2
    }
  },
  data() {
    return {
      loadingStarted: false,
      loadingStoped: false
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
    }
  },
  methods: {
    stopLoading() {
      this.loadingStoped = true
    }
  }
}
</script>

<style lang="scss">
.request {
  width: 67px;
  height: 23px;
  position: absolute;
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
  width: 100%;
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

.loading-enter-active,
.loading-leave-active {
  transition-duration: 1s;
  transition-property: width;
  transition-timing-function: linear;
}

.loading-enter,
.loading-leave-to {
  width: 0%
}

</style>
