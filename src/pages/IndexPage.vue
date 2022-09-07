<template>
  <q-page class="">
    <Hero />
    <About />
    <Goals />
    <Timeline />
    <Features />
    <Attend />
    <Metaverse />
    <Sponsors />
    <Footer />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Goals from "../components/Goals.vue";
import Timeline from "../components/Timeline.vue";
import Features from "../components/Features.vue";
import Attend from "../components/Attend.vue";
import Metaverse from "../components/Metaverse.vue";
import Sponsors from "../components/Sponsors.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const about = ref("");

    return {
      about,
      autoplay: ref(true),
    };
  },
  components: {
    Hero,
    About,
    Goals,
    Timeline,
    Features,
    Attend,
    Metaverse,
    Sponsors,
    Footer,
  },
  mounted() {
    // this.$store.animate.refs = this.$refs;
    // console.log(this.$store.animate.refs);
    console.log(this.$refs);
  },
});
</script>
