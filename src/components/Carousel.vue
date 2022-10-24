<template>
  <div id="carousel" class="container w-sm-100 w-lg-50">
    <h3>Le foto</h3>
    <!-- BS Carousel -->
    <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" v-for="(image, i) in images" :key="i">
          <img
            class="d-block w-100"
            :src="require(`@/assets/pictures/castrocaro/${image}`)"
            :alt="image"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["images"],
  // data() {
  //   return {
  //     images: ["castrocaro1.jpg", "castrocaro2.jpg", "castrocaro3.jpg"],
  //   };
  // },
};
</script>

<style>
/* #carousel {
  width: 40vw;
} */
</style>