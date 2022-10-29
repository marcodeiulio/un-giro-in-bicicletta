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
      images: [
        "villafranca35.jpeg",
        "villafranca36.jpeg",
        "villafranca38.jpeg",
        "villafranca39.jpeg",
        "villafranca40.jpeg",
        "villafranca41.jpeg",
        "villafranca43.jpeg",
        "villafranca45.jpeg",
        "villafranca46.jpeg",
        "villafranca48.jpeg",
        "villafranca49.jpeg",
        "villafranca50.jpeg",
        "villafranca51.jpeg",
        "villafranca52.jpeg",
        "villafranca53.jpeg",
        "villafranca54.jpeg",
        "villafranca55.jpeg",
        "villafranca56.jpeg",
        "villafranca57.jpeg",
        "villafranca58.jpeg",
        "villafranca59.jpeg",
        "villafranca60.jpeg",
        "villafranca61.jpeg",
        "villafranca62.jpeg",
        "villafranca63.jpeg",
        "villafranca64.jpeg",
        "villafranca65.jpeg",
        "villafranca67.jpeg",
      ],
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