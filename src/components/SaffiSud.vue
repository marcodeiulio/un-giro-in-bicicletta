<template>
  <div class="container">
    <Route :text="text" :subtitle="subtitle" :table="table" />
  </div>
</template>
  
  <script>
import Route from "@/components/Route.vue";

export default {
  components: {
    Route,
  },
  data() {
    return {
      subtitle: "Direzione Sud",
      text: `Si imbocca Corso Diaz, per giungere poi alla rocca di Ravaldino.
      Di lì si scende tutto corso dell’Appennino dove la ciclabile perdura fino alla località di San Martino.
      La ciclabile rimane sulla sinistra guardando verso Sud.`,
      table: [
        { id: "KM", value: "6,5" },
        { id: "Dislivello", value: "Basso (tutta pianura)" },
        { id: "Tempo", value: "25m" },
        { id: "Suolo", value: "Asfalto" },
        { id: "Ristorazione", value: "Ristoranti" },
        { id: "Bambini", value: "Sì" },
      ],
    };
  },
};
</script>
  
<style>
</style>