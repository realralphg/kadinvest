<template>
  <q-page class="">
    <div ref="wholePage" class="section wholepage">
      <Hero id="home" />
      <About id="about" />
      <Goals id="goals" />
      <Features id="features" />
      <Meet id="meet" /> <Attend id="attend" />
      <Metaverse id="metaverse" />
      <Sponsors id="sponsors" />
      <Footer />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Goals from "../components/Goals.vue";
import Features from "../components/Features.vue";
import Meet from "../components/Meet.vue";
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
    Meet,
    Features,
    Attend,
    Metaverse,
    Sponsors,
    Footer,
  },
  created() {
    this.$store.animate.refs.push(this.$refs);
  },
  mounted() {
    this.$store.animate.refs.push(this.$refs);
    // window.location.reload();
  },
});
</script>
