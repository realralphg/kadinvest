<template>
  <q-page class="">
    <div ref="wholePage" class="section wholepage">
      <Hero />
      <About />
      <Goals />
      <Features />
      <Meet /> <Attend />
      <Metaverse />
      <Sponsors />
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
  mounted() {
    this.$store.animate.refs.push(this.$refs);
    // gsap.registerPlugin(ScrollTrigger);
    // let sections = gsap.utils.toArray(".section");
    // console.log(sections);

    // sections.forEach((section) => {
    //   let title = section.querySelector(".about");
    //   let text = section.querySelector(".line");
    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         trigger: title,
    //         start: " top center",
    //         end: "+=400",
    //         scrub: true,
    //         markers: false,
    //       },
    //     })

    //     .from(text, {
    //       opacity: 0,
    //       x: 500,
    //     })

    //     .from(title, {
    //       xPercent: -120,
    //     });
    // });
  },
});
</script>
