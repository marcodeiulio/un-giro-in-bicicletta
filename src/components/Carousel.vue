<template>
  <div class="container vh-100">
    <div class="row">
      <div class="col-6">
        <img
          v-for="(image, i) in images"
          :key="i"
          :src="require(`@/assets/pictures/castrocaro/${image}`)"
          :alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      // currentImage: 0,
      // autoPlay: undefined,
      images: ["castrocaro1.jpg", "castrocaro2.jpg", "castrocaro3.jpg"],
    };
  },
  // methods: {
  //   nextImage() {
  //     this.currentImage === this.images.length - 1
  //       ? (this.currentImage = 0)
  //       : this.currentImage++;
  //   },
  //   prevImage() {
  //     this.currentImage === 0
  //       ? (this.currentImage = this.images.length - 1)
  //       : this.currentImage--;
  //   },
  //   isActive(index) {
  //     return index === this.currentImage;
  //   },
  //   setImage(index) {
  //     this.currentImage = index;
  //   },
  //   startAutoPlay() {
  //     this.autoPlay = setInterval(this.nextImage, 3000);
  //   },
  //   stopAutoPlay() {
  //     clearInterval(this.autoPlay);
  //   },
  // },
  // created() {
  //   this.startAutoPlay();
  // },
};
</script>

<style>
</style>