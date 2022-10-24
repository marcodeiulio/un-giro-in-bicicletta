<template>
  <div class="container">
    <Route />
  </div>
</template>
  
  <script>
import Route from "@/components/Route.vue";

export default {
  components: {
    Route,
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