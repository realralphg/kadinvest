<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      class="card_cards"
      v-for="(card, index) in cards"
      :key="index"
    >
      <div :data-index="index" class="card">
        <div class="top">
          <h6 class="headerrr">{{ card.heading }}</h6>
        </div>

        <p>
          {{ card.body }}
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
  data() {
    return {
      cards: [
        {
          heading: "Expectation #1",
          body: "The results of key reforms in the last 7 years gaining international recognition should be brought to light and consolidated.",
        },
        {
          heading: "Expectation #2",
          body: "Showcasing the commitment of Kaduna State towards creating jobs and all- round economic empowerment of its youthful population.",
        },
        {
          heading: "Expectation #3",
          body: "Exposing priority sectors to even more innovation and potential investors, particularly in manufacturing, ICT, textiles and agriculture",
        },
        {
          heading: "Expectation #4",
          body: "Greater insight into methods that make Kaduna the preferred investment destination and the number 1 in the World Bank Ease of Doing Business Subnational Rankings",
        },
        {
          heading: "Expectation #5",
          body: "Greater awareness of the benefits of innovation which will trigger highly expanded engagements and opportunities for the state",
        },
        {
          heading: "Expectation #6",
          body: "Comprehensive educational discussions leading to greater enlightenment on design, implementation and sustenance of a viable investment strategy",
        },
        {
          heading: "Expectation #7",
          body: "Build a resilient and diversified economic structure to create jobs for Kaduna State residents in line with SDP 2021-2025.",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    let cards = gsap.utils.toArray(".card");
    const container = document.querySelector(".mySwiper");
    const card1 = cards[0];
    const card2 = cards[1];
    const card3 = cards[2];
    const card4 = cards[3];
    const card5 = cards[4];
    const card6 = cards[5];
    const card7 = cards[6];

    if (!this.$q.platform.is.ios) {
      cards.forEach((card) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=4000",
              scrub: true,
              markers: false,
              pin: true,
              anticipatePin: 1,
              normalizeScroll: true,
            },
          })
          .to(card1, {
            x: 500,
            y: -500,
            rotateZ: -100,
          })
          .to(card2, {
            x: 400,
            y: -400,
            rotateZ: -80,
          })
          .to(card3, {
            x: 300,
            y: -350,
            rotateZ: -60,
          })
          .to(card4, {
            x: 280,
            y: -330,
            rotateZ: -40,
          })
          .to(card5, {
            x: 260,
            y: -300,
            rotateZ: -20,
          })
          .to(card6, {
            x: 240,
            y: -280,
            rotateZ: -10,
          })
          .to(card7, {
            x: 0,
            y: 0,
            rotateZ: 0,
          });
      });
    }
  },
};
</script>
<style scoped>
.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.card {
  background: #ffffff;
  box-shadow: 0px 13px 45px 13px rgba(0, 0, 0, 0.08);
  border-radius: 22.6933px;
  background: #ffffff;
  box-shadow: 0px 13px 45px 13px rgba(0, 0, 0, 0.08);
  border-radius: 22.6933px;
  min-height: 500px;
  padding: 1.5rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.right {
  margin: 0 auto;
  position: relative;
  height: 100%;
}

.card span {
  width: 20px;
  height: 20px;
  background: #2d25a6;
}

.card h6 {
  font-style: normal;
  font-weight: 600;
  font-size: 15.5738px;
  line-height: 36px;
  color: #2d25a6;
  margin-bottom: 2rem;
}

.card p {
  font-style: normal;
  font-weight: 400;
  font-size: 18.2437px;
  line-height: 36px;
  /* or 195% */

  color: #233042;
}
.swiper {
  width: 320px;
  height: 420px;
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
@media (max-width: 1025px) {
  .card {
    min-height: 450px;
  }
}

@media (max-width: 500px) {
  .card {
    width: 350px;
  }
  /* .swiper-slide {
    width: 300px !important;
  } */
  .swiper {
    width: 420px;
    height: 420px;
  }
}

@media (max-width: 320px) {
  .card {
    padding: 1rem;
    width: 270px;
    min-height: 350px;
  }

  .swiper {
    width: 350px;
  }

  .swiper-slide {
    width: 250px !important;
  }
}
</style>
