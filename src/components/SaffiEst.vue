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
      subtitle: "Direzione Est - Forlimpopoli",
      text: `Corso della Repubblica, la pista ciclabile percorre il lato destro della strada fino a Piazzale della Vittoria, segue l’attraversamento della stessa con arrivo in viale Roma che dispone di doppia pista ciclabile.
      Una volta completata Viale Roma ci si sposta sul lato sinistro e si arriva alla bruschetteria “I Du Matt”, si prosegue e la pista ciclabile continua con qualche interruzione per intersecazione con strade maggiori.
      Si arriva diretti in via 25 Ottobre davanti al bennet.`,
      table: [
        { id: "KM", value: "7,5" },
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