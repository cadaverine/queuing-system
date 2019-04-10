<template>
  <div
    class="service-device"
    :class="typeClass"
  >
    <div class="service-device__header">
      {{ type }}
    </div>
    <div class="service-device__container" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'NX'
    }
  },
  computed: {
    typeClass() {
      return `service-device_type_${this.type}`
    }
  }
}
</script>

<style>
  .service-device {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 167px;
    height: 106px;
    background-color: #2686DE;
    padding-bottom: 10px;
  }

  .service-device_type_NO {
    background-color: #F63261;
  }

  .service-device__header {
    color: #fff;
    font-size: 24px;
  }

  .service-device__container {
    width: 90%;
    height: 60%;
    background-color: #fff;
  }
</style>
