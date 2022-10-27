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
      subtitle: "Direzione Ovest",
      text: `Si imbocca via Garibardi e si arriva, con una discesa lieve a Porta Schiavonia, di lì si procede verso Faenza (Ovest) costeggiando dalla parte destra viale Bologna.
      Si arriva alla Cava e oltrepassandola si arriva sino a villanova utilizzando tutta pista ciclabile.`,
      table: [
        { id: "KM", value: "6" },
        { id: "Dislivello", value: "Basso (tutta pianura)" },
        { id: "Tempo", value: "20m" },
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