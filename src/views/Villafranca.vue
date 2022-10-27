<template>
  <div class="container">
    <Route
      :images="images"
      :text="text"
      :title="title"
      :table="table"
      :route="route"
    />
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
      // images: [
      //   "villafranca35.jpg",
      //   "villafranca36.jpg",
      //   "villafranca38.jpg",
      //   "villafranca39.jpg",
      //   "villafranca40.jpg",
      //   "villafranca41.jpg",
      //   "villafranca43.jpg",
      //   "villafranca45.jpg",
      //   "villafranca46.jpg",
      //   "villafranca48.jpg",
      //   "villafranca49.jpg",
      //   "villafranca50.jpg",
      //   "villafranca51.jpg",
      //   "villafranca52.jpg",
      //   "villafranca53.jpg",
      //   "villafranca54.jpg",
      //   "villafranca55.jpg",
      //   "villafranca56.jpg",
      //   "villafranca57.jpg",
      //   "villafranca58.jpg",
      //   "villafranca59.jpg",
      //   "villafranca60.jpg",
      //   "villafranca61.jpg",
      //   "villafranca62.jpg",
      //   "villafranca63.jpg",
      //   "villafranca64.jpg",
      //   "villafranca65.jpg",
      //   "villafranca67.jpg",
      // ],
      title: "Forlì - Villafranca",
      text: `A due passi dal centro di Forlì, un bellissimo percorso in bicicletta immerso nei campi della periferia forlivese.
            Partenza Piazza Saffi, direzione est, si imbocca Corso Garibaldi e si raggiunge porta Schiavonia.
            Oltrepassata, si sale sul ponte del fiume montone e lo si attraversa, si imbocca poi il primo ingresso a destra che dà il via al percorso che costeggia l’argine del fiume. 
            Il percorso è interamente immerso nel verde e costeggia l’argine del fiume Montone a destra e a sinistra. E’ caratterizzato da un terreno sterrato misto erboso e a tratti ghiaioso.
            Il tragitto è molto semplice in quanto privo di dislivelli significativi, sono presenti solo due sottopassaggi; il primo sotto la ferrovia ed il secondo sotto l’autostrada (che dà poi il via al percorso ghiaioso).
            A seconda dell’allenamento del ciclista può essere fatto un percorso che rispecchi le sue esigenze in quanto ci sono diverse uscite:
            Uscita Villafranca, circuito, prima argine sinistro poi argine destro
            Uscita San Pancrazio
            Uscita Ravenna (Esp)
            Uscita Lido Di Dante/Lido Adriano

            Il tragitto è particolarmente tranquillo e privo di pericoli.
            Adatto a sportivi di tutti i livelli, ragazzi e adulti.

            Precauzioni:
            Munirsi di una borraccia d’acqua (in quanto non presenti punti di ristoro).   
            Munirsi di Cappellino, la zona non è protetta da alberi.
            Sconsigliato fare il percorso nelle ore più calde.`,
      table: [
        { id: "KM", value: "11.4" },
        { id: "Dislivello", value: "Facile" },
        { id: "Tempo", value: "1.20h" },
        { id: "Suolo", value: "Asfalto, sterrato, ghiaioso" },
        { id: "Ristorazione", value: "No" },
        { id: "Bambini", value: "12<" },
      ],
      route: "Percorso Azzurro",
    };
  },
};
</script>
  
<style>
</style>