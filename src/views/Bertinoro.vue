<template>
  <div class="container">
    <Route :text="text" :title="title" :table="table" />
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
      title: "Forlì - Bertinoro",
      text: `Si parte da Piazza Saffi e, andando in direzione Est, si percorre Corso della Repubblica dove, sulla destra, c’è la pista ciclabile.
            Si finisce corso della Repubblica, si attraversa Piazzale della Vittoria e si continua per tutto Viale Roma, direzione Forlimpopoli (tutta pista ciclabile). 
            Giunti davanti alla Bruschetteria “I Du Mat”, dall’altra parte della strada, si scende e si entra a Roncolido, un campo sportivo.
            Si mantiene la sinistra all’interno del campo sportivo e si sale sull’argine da un piccolo strappettino. Lì inizia il percorso nella natura, un habitat completamente diverso a cinque minuti dal centro di Forlì.
            Il terreno è misto erboso e sterrato, principalmente piano con la prima parte esposta al sole e la seconda, la finale, immersa nel verde e coperta dalle fronde degli alberi.
            Il tragitto percorre il fiume Ronco sul lato destro ed è in mezzo ai laghetti del circondario di Forlì.
            Arrivati all’ex cava di Selbagnone si mantiene la strada principale sterrata che arriva direttamente alla rotonda di Selbagnone dove si prosegue dritto direzione Bertinoro.
            Il percorso inizia il suo pezzo più difficile in quanto inizia la salita verso Bertinoro in via Maestrina, che, con i suoi 4km e 200 di dislivello arriva nel centro di Bertinoro.`,
      table: [
        { id: "KM", value: "16" },
        { id: "Dislivello", value: "Intermedio" },
        { id: "Tempo", value: "2h" },
        { id: "Suolo", value: "Asfalto, sterrato" },
        { id: "Ristorazione", value: "Ristoranti" },
        { id: "Bambini", value: "16<x" },
      ],
    };
  },
};
</script>
  
<style>
</style>