<template>
  <section class="container">
    <div class="container__scene">
      <Request />
      <RequestsQueue />
      <div
        class="container__devices-group"
      >
        <ServiceDevice />
        <ServiceDevice />
        <ServiceDevice type="NO" />
        <ServiceDevice type="NO" />
        <ServiceDevice type="NO" />
        <ServiceDevice type="NO" />
        <ServiceDevice type="NO" />
      </div>
    </div>
  </section>
</template>

<script>
import Request from '~/components/Request.vue'
import RequestsQueue from '~/components/RequestsQueue.vue'
import ServiceDevice from '~/components/ServiceDevice.vue'

export default {
  components: {
    Request,
    RequestsQueue,
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
  height: 768px;
  display: flex;
  justify-content: flex-end;
}

.container__devices-group {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
}

</style>
