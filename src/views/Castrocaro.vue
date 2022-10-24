<template>
  <div class="container">
    <section>
      <div class="row g-5 mb-5">
        <div class="col-sm-12 col-lg-6">
          <h3>Percorso Bubu</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            magnam aliquid optio sed reprehenderit quis possimus debitis
            accusantium voluptates ea ex expedita, vitae quaerat quo aut?
            Dignissimos placeat itaque, quod minus dicta, at et velit molestiae,
            totam voluptatum ut necessitatibus ullam suscipit perferendis! Quod
            assumenda cum illo sequi praesentium iste sed. Sapiente temporibus
            incidunt deserunt! Corrupti, eum? Tempore ut iste quaerat totam,
            explicabo ea saepe, modi obcaecati enim nobis illum voluptate non
            optio deleniti? Repellat quaerat iure perspiciatis excepturi
            distinctio sint et, dolorem rerum? Veniam error, exercitationem nisi
            reprehenderit esse dignissimos tempora voluptatum pariatur fugiat.
            Accusamus rerum ad odit adipisci dicta quaerat vitae culpa! Aperiam
            ex iste officia, similique reprehenderit cupiditate sapiente.
            Officia, odio. Odio minus rerum recusandae praesentium voluptates
            corrupti molestias ipsam, qui molestiae nesciunt officia! Excepturi
            necessitatibus sint ut? Cumque ipsam doloribus assumenda magni
            eveniet sed? Quam perspiciatis, illum ipsum, eius magnam temporibus
            alias maxime sed qui culpa dolore ex libero ea laudantium
            voluptatibus atque amet blanditiis incidunt porro iste deserunt
            beatae tempore. Corrupti ducimus illum atque rerum error distinctio
            ex fugiat non voluptatem ratione, iste, veniam soluta! Voluptatem
            doloremque blanditiis libero ex explicabo accusantium minus illum
            dicta nam minima inventore, nisi fugiat, nihil hic suscipit
            excepturi enim.
          </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <Carousel />
        </div>
        <div class="col-12">
          <h3>La mappa</h3>
          <div class="map-container">
            <iframe
              id="test-map"
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
};
</script>
  
  <style>
p {
  text-align: left;
}
.map-container {
  width: 100%;
  height: 45vh;
  overflow: hidden;
}
#test-map {
  width: 100%;
  height: 200%;
  border: 0;
  margin-top: -150px;
}
</style>