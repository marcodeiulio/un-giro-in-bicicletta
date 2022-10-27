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
      subtitle: "Direzione Nord",
      text: `Si sale attraverso Corso Mazzini e si arriva alla rotonda con via Ravegnana.
      Sul lato sinistro si arriva all’attravesamento pedonale di via V.Veneto, si prosegue su via Ravegnana, andando verso nord sul lato sinistro si colloca la pista ciclabile che accompagna tutta la strada. Si attraversa anche Foro Boario e si raggiunge il cimitero monumentale, lì, la pista ciclabile continua fino alla rotonda dell’autostrada.`,
      table: [
        { id: "KM", value: "5" },
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