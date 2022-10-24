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
      title: "Forlì-Villafranca",
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
    };
  },
};
</script>
  
<style>
</style>