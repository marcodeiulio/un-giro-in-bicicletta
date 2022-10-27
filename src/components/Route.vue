<template>
  <div class="container mb-5">
    <section>
      <div class="row g-3 mb-5">
        <h3>{{ title }}</h3>
        <h4 v-if="subtitle">{{ subtitle }}</h4>
        <div class="col">
          <h4 class="mb-lg-5 mb-sm-3">Presentazione</h4>
          <p>{{ text }}</p>
          <table class="table" :class="{ 'w-50 m-auto': !images }">
            <tbody>
              <tr v-for="titem in table" :key="titem.id">
                <th class="text-start" scope="row">{{ titem.id }}</th>
                <td scope="row">{{ titem.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="images" class="col-sm-12 col-lg-6">
          <Carousel :images="images" />
        </div>
        <div v-if="route" class="col-12">
          <h4 class="">La mappa</h4>
          <p class="lead text-center mb-lg-5 mb-sm-3">{{ route }}</p>
          <div class="map-container">
            <iframe
              class="inner-map"
              src="https://www.google.com/maps/d/embed?mid=1Kq2YI7-ohTjUu_Vv0jNhSUhfixq1s4s&ehbc=2E312F"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  components: {
    Carousel,
  },
  props: ["images", "text", "subtitle", "table", "route"],
};
</script>

<style>
p {
  text-align: left;
}
.map-container {
  width: 100%;
  height: 45vh;
  /* overflow: hidden; */
}
.inner-map {
  width: 100%;
  height: 100%;
  border: 0;
  /* margin-top: -150px; */
}
</style>