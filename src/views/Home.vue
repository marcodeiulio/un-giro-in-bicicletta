<template>
  <div class="home container-sm">
    <h2>Un Giro in Bicicletta</h2>
    <p class="text-center">
      Di seguito saranno elencate le piste ciclabili forlivesi con partenza dal
      centro, Piazza Saffi:
    </p>
    <SaffiEst />
    <hr />
    <SaffiOvest />
    <hr />
    <SaffiNord />
    <hr />
    <SaffiSud />
  </div>
</template>

<script>
import SaffiEst from "@/components/SaffiEst.vue";
import SaffiOvest from "@/components/SaffiOvest.vue";
import SaffiNord from "@/components/SaffiNord.vue";
import SaffiSud from "@/components/SaffiSud.vue";

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    SaffiEst,
    SaffiOvest,
    SaffiNord,
    SaffiSud,
  },
};
</script>
