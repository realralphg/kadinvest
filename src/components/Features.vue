<template>
  <div ref="features" class="wrapper cards_div section">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fff" fill-opacity="1" d="M0,288L1440,32L1440,0L0,0Z"></path>
    </svg>
    <div class="hold rotate_sec small_container">
      <header class="heading">
        <div class="abt">
          <h2 class="about">Expected</h2>
          <h2 class="about">Outcomes</h2>
        </div>

        <div class="line line3"></div>
      </header>
      <div class="para_hold">
        <div class="paragraphs">
          <div class="left">
            <p class="">
              Participants will have a close-up experience of Kaduna's famed
              effective facilitation processes and the internationally acclaimed
              innovative business environment. This should precipitate a slew of
              fresh international and domestic investors, creating a ripple
              effect which will cause a considerable increase in capital
              investments in Kaduna State over the coming years. Increased local
              interest is also expected, cementing Kaduna's status as the
              agship state for investments in Nigeria and the following:
            </p>
          </div>

          <div class="right q-pt-lg">
            <!-- <Cards
            :cards="visibleCards"
            @cardAccepted="handleCardAccepted"
            @cardRejected="handleCardRejected"
            @cardSkipped="handleCardSkipped"
            @hideCard="removeCardFromDeck"
          /> -->
            <!-- <img src="/images/cards.png" alt="" /> -->

            <swiper
              :effect="'cards'"
              :grabCursor="true"
              :modules="modules"
              class="mySwiper"
            >
              <div class="trig"></div>

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
            <div class="tap">
              <img src="/images/vec.png" alt="" />
              <q-btn class="btnn"> Flip to see cards or scroll page</q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import Ourstaff from "../components/Ourstaff.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default {
  setup() {
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
      });
    };
    return {
      beforeEnter,
      enter,
      modules: [EffectCards],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Ourstaff,
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
          body: "Greater awareness of the benets of innovation which will trigger highly expanded engagements and opportunities for the state",
        },
        {
          heading: "Expectation #6",
          body: "Comprehensive educational discussions leading to greater enlightenment on design, implementation and sustenance of a viable investment strategy",
        },
        {
          heading: "Expectation #7",
          body: "Build a resilient and diversied economic structure for a better sustainable Kaduna State and accomplishment of the SDP 2021-2025.",
        },
        // {
        //   heading: "Expectation #4",
        //   body: "The results of key reforms in the last 7 years gaining international recognition should be brought to light and consolidated",
        // },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.defaults({ ease: "none", duration: 5 });
    let cards = gsap.utils.toArray(".card");
    const container = document.querySelector(".cards_div");
    // console.log(container);
    const card1 = cards[0];
    const card2 = cards[1];
    const card3 = cards[2];
    const card4 = cards[3];
    const card5 = cards[4];
    const card6 = cards[5];
    const card7 = cards[6];
    // const card4 = cards[3];
    // console.log(card1);

    cards.forEach((card) => {
      //   console.log(card);
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
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".line3", {
      scrollTrigger: {
        trigger: this.$refs.features,
        toggleActions: "play complete reset",
      },
      scaleX: 0,
      duration: 10,
      repeat: -1,
      transformOrigin: "left center",
      ease: "none",
    });
    this.$store.animate.refs.push(this.$refs);
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  background: linear-gradient(180deg, #150f70 0%, #463cdf 100%);
  position: relative;
  //   margin-bottom: 45%;
}
.about {
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 108.5%;
  text-transform: capitalize;
  color: #fff;
  margin: 0;
}

.line {
  height: 7px;
  background: #fff;
  width: 60%;
  margin-bottom: 1.5rem;
}

.heading {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  justify-content: space-between;
  padding: 4rem 0 2rem;
}

.paragraphs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}
.para_hold {
  padding-bottom: 13rem;
}
.paragraphs p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 190%;
  text-align: left;
  text-transform: capitalize;
  color: #ffffff;
}
.hold {
  position: relative;
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

// swiper
.swiper {
  width: 320px;
  height: 420px;
  //   width: 240px;
  //   height: 320px;
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

.tap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  position: relative;
  padding: 5rem 0 22rem;
  gap: 2rem;
}
.tap img {
  width: 150px;
}
.btnn {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 108.5%;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.5);
}

.btnn:before {
  box-shadow: none;
}

@media (max-width: 1025px) {
  .card {
    min-height: 450px;
  }
}
@media (max-width: 800px) {
  .paragraphs {
    grid-template-columns: 1fr;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column-reverse;
  }
  .heading {
    flex-wrap: wrap;
  }

  .para_hold {
    padding-bottom: 22rem;
  }
  .tap {
    padding: 5rem 0 4rem;
  }
  .paragraphs p {
    padding: 5rem 0 6rem;
  }
}

@media (max-width: 500px) {
  .card {
    width: 300px;
  }
  .swiper-slide {
    width: 300px !important;
  }
}
@media (max-width: 380px) {
  .tap {
    padding: 5rem 0 1rem;
  }
  .paragraphs p {
    padding: 3rem 0 4rem;
  }
  .btnn {
    font-size: 12px;
  }

  .tap img {
    width: 100px;
  }
}
@media (max-width: 320px) {
  .para_hold {
    padding-bottom: 18rem;
  }

  .tap img {
    width: 70px;
    transform: rotate(-20deg);
  }
}
</style>
