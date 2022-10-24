<template>
  <div class="container">
    <Route :images="images" :text="text" :title="title" />
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
      images: ["castrocaro1.jpg", "castrocaro2.jpg", "castrocaro3.jpg"],
      title: "Forlì Centro - Castrocaro",
      text: `Questo, è certamente il percorso più conosciuto tra tutti quelli che iniziano a Forlì.
			Partendo da Piazza Saffi, si scende Corso Diaz e, tenendo la destra, si arriva ai musei di San Domenico, dove, su via Andrelini dalla parte opposta da dove si è entrati, si imbocca l’ingresso del Parco Urbano.
			Di lì, in 600m si è nell’incrocio del parco dove a sinistra si va per l’uscita del parcheggio della “Collina Dei Conigli” e a destra si imbocca la strada sterrata che costeggia il perimetro del parco.
			Si imbocca la destra e alla fine del vialetto si gira a sinistra e si esce dal parco.
			Un centinaio di metri più avanti sulla destra, c’è la discesa che porta all’attraversamento del Fiume Montone, lo si oltrepassa e si mantiene la sinistra seguendo la strada ormai sterrata.
			Si prosegue per alcuni km mantenendo la sinistra e arriva sotto il cavalcavia della strada provinciale.
			Proseguendo il percorso, inizia a spiccare la quantità di verde e d’immersione nella natura in quanto non ci sono intersezioni con strade e talvolta i rami degli alberi che compongono il paesaggio formano un arco ripara dal sole e che estranea dalla vita urbana.
			Ci sono tre brevi strappetti (salite di decine di metri) che rendono il percorso un po’ scosceso.
			Si finisce su via Delle Vigne prima di Villa Rovere e si prende la strada verso sinistra.
			Si prosegue fino alla sinistra della chiesa di Villa Rovere dove inizia il percorso ghiaiato che giunge fino ad una piccola diga.
			Lasciando la diga si continua dritto mantenendo la sinistra seguendo il tracciato.
			Si giunge direttamente a Terra del Sole dove si intravede la rocca.`,
    };
  },
};
</script>
  
<style>
</style>