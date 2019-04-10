<template>
  <section class="container">
    <div class="container__scene">
      <div
        class="container__devices-group"
      >
        <ServiceDevice />
        <ServiceDevice />
        <ServiceDevice type="NO" />
        <ServiceDevice type="NO" />
        <ServiceDevice type="NO" />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceDevice from '~/components/ServiceDevice.vue'

export default {
  components: {
    ServiceDevice
  }
}
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container__scene {
  width: 1024px;
}

.container__devices-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

</style>
