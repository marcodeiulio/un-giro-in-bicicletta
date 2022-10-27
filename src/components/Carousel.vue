<template>
  <div id="carousel" class="container w-sm-100 w-lg-50">
    <h3 class="mb-lg-5 mb-md-3">Le foto</h3>
    <!-- BS Carousel -->
    <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: i === 0 }"
          v-for="(image, i) in images"
          :key="i"
        >
          <img
            class="d-block w-100"
            :src="require(`@/assets/pictures/photos/${image}`)"
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
};
</script>

<style>
#carouselControls .carousel-item img {
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  height: 75vh;
}

@media only screen and (min-width: 300px) {
  #carouselControls .carousel-item img {
    height: 60vh;
  }
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  background-color: #42b983;
  border-radius: 5px;
}
</style>