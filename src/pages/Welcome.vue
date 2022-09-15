<template>
  <div
    ref="welcome"
    id="scrollable"
    :class="value ? 'bg_light wrapper' : 'wrapper bg_dark'"
  >
    <!-- <div class="slide-1 slide"></div>
    <div class="slide-2 slide"></div> -->
    <div class="hold welcome">
      <img v-show="value" src="/images/bulb.png" alt="" />
      <img v-show="!value" src="/images/bulb1.png" alt="" />
      <p :class="value ? 'dark_color side' : 'light_color side'">
        BUILDING A RESILIENT ECONOMY
      </p>
      <!-- <i class="fa-duotone fa-lock"></i> -->
      <h1 :class="value ? 'dark_color welcome' : 'light_color welcome'">
        Welcome to
      </h1>
      <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <h1 class="kad">KADINVEST 7.0</h1>
      </transition>

      <q-toggle
        v-show="show"
        unchecked-icon="lightbulb"
        checked-icon="check"
        size="md"
        ref="btn"
        color="white"
        v-model="value"
        label="Off"
      />

      <div v-show="!show" class="q-my-lg text-center">
        <!-- <q-spinner-hourglass color="info" size="2em" /> -->
        <h6
          :class="
            value
              ? 'dark_color text-center welcome_text'
              : 'light_color text-center welcome_text'
          "
        >
          Your experience would <br />
          begin soon!
        </h6>

        <!-- <q-tooltip :offset="[0, 8]">QSpinnerHourglass</q-tooltip> -->
      </div>
    </div>
  </div>
  <!-- <div class="addscroll"></div> -->
</template>

<script>
import gsap from "gsap";
import { ref } from "vue";

export default {
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done,
        delay: 1,
      });
    };

    const afterEnter = (el) => {
      console.log("after enter");
    };
    return {
      beforeEnter,
      enter,
      afterEnter,
      value: ref(false),
      show: true,
    };
  },
  mounted() {
    // this.functiondisable();

    console.log(document.querySelector("body"));
    document.querySelector("body").classList.add("no_scroll");
    // this.$store.animate.refs[5].wholePage.style.display = "0";
    // console.log((this.$store.animate.refs[5].wholePage.style.opacity = "0"));
  },
  methods: {
    preventScroll(e) {
      e.preventDefault();
      e.stopPropagation();

      return false;
    },

    functiondisable() {
      // window.scrollTo(0, 0);
      document.querySelector("#scrollable").addEventListener("scroll", (e) => {
        window.addEventListener("scroll", () => {
          window.scrollTo(0, 0);
        });
      });
      // document.querySelector("#scrollable").addEventListener("wheel", (e) => {
      //   e.preventDefault();
      //   e.stopPropagation();
      //   return false;
      // });
    },
    functionenable() {
      document
        .querySelector("#scrollable")
        .removeEventListener("scroll", () => {
          window.scrollTo(0, 0);
        });
    },
    // functionenable() {
    //   document
    //     .querySelector("#scrollable")
    //     .removeEventListener("wheel", (e) => {
    //       e.preventDefault();
    //       e.stopPropagation();
    //       return false;
    //     });
    // },
  },
  watch: {
    value: function () {
      if (this.value === true) {
        this.show = false;
        setTimeout(() => {
          document.querySelector("body").classList.remove("no_scroll");
          // this.functionenable();
          window.scrollBy(0, 100);
          document.querySelector("#scrollable").style.display = "none";

          //   this.$router.replace("/home");
        }, 2000);
      } else {
        console.log("not disabled");
      }
    },
  },
};
</script>

<style scoped>
/* #scrollable .slide {
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  background: #fff;
}

#scrollable .slide-2 {
  height: 0;
} */
img {
  height: 40vh;
  top: -20%;
  position: relative;
}
p {
  margin-bottom: 0;
}
.wrapper {
  height: 100vh;
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  gap: 2rem;
  transition: all 0.7s ease-in-out;
}
/* .add_height {
  height: 5000px !important;
} */
.hold {
  overflow: hidden !important;
}
.bg_dark {
  background: #05031b;
}
.bg_light {
  background: linear-gradient(180deg, #030303 -61.83%, #ffffff 81.36%);
}

h6 {
  line-height: 1.2;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-top: 1rem;
}
p,
h1.dark_colorlight_color,
h6.dark_colorlight_color {
  color: #ffffff;
}
p.dark_color,
h1.dark_color,
h6.dark_color {
  color: #030303;
  text-transform: capitalize;
}
p {
  font-style: normal;
  font-weight: 700;
  font-size: 14.31px;
  line-height: 117%;
  text-align: center;
  letter-spacing: 0.7em;
  text-transform: uppercase;
  transform: rotate(-90deg);
  position: absolute;
  top: 45%;
  left: -25%;
  padding: 1rem;
}

.welcome {
  font-style: normal;
  font-weight: 250;
  font-size: 50.3121px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
}
.welcome_text {
  font-style: normal;
  font-weight: 250;
  font-size: 20.3121px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  /* color: #ffffff; */
}

.kad {
  font-style: normal;
  font-weight: 900;
  font-size: 56.947px;
  line-height: 117%;
  text-align: center;
  color: #00a250;
}

.spinn {
  display: flex;
  align-items: center;
}
.spinn h6 {
  flex: 2;
}

@media (min-width: 1020px) {
  p {
    left: -20%;
  }
}
@media (min-width: 1300px) {
  p {
    left: -10%;
  }
}
@media (max-width: 600px) {
  .welcome {
    font-size: 30.3121px;
    /* margin: 0.5rem; */
  }
  .hold {
    padding-bottom: 10rem;
  }

  .kad {
    font-size: 36.947px;
    margin-bottom: 0.4rem;
  }

  .welcome_text {
    font-size: 14.3121px;
  }
}

@media (max-width: 800px) {
  p {
    transform: rotate(0);
    position: relative;
    left: unset;
    /* padding-bottom: 4rem; */
  }
}
</style>
