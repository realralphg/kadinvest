<template>
  <div
    ref="welcome"
    id="scrollable"
    :class="value ? 'bg_light wrapper' : 'wrapper bg_dark'"
  >
    <div class="hold welcome">
      <img v-show="value" src="/images/bulb.png" alt="" />
      <img v-show="!value" src="/images/bulb1.png" alt="" />
      <p :class="value ? 'dark_color side' : 'light_color side'">
        BUILDING A RESILIENT ECONOMY
      </p>
      <h1 :class="value ? 'dark_color welcome' : 'light_color welcome'">
        Welcome to
      </h1>
      <h1 class="kad">KADINVEST 7.0</h1>

      <q-toggle
        v-show="show"
        unchecked-icon="lightbulb"
        checked-icon="check"
        size="xl"
        ref="btn"
        color="white"
        v-model="value"
        label="Off"
      />

      <div v-show="!show" class="q-mt-lg text-center">
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
import { ref } from "vue";

export default {
  setup() {
    return {
      value: ref(false),
      show: true,
    };
  },
  mounted() {
    this.functiondisable();
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
      document.querySelector("#scrollable").addEventListener("wheel", (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    },
    functionenable() {
      document
        .querySelector("#scrollable")
        .removeEventListener("wheel", (e) => {
          e.preventDefault();
          e.stopPropagation();

          return false;
        });
      //   function preventScroll(e) {}
      console.log("first");
    },
  },
  watch: {
    value: function () {
      if (this.value === true) {
        this.show = false;
        setTimeout(() => {
          this.functionenable();
          //   this.PageUp();

          window.scrollBy(0, 100);

          //   this.$store.animate.refs[0].home.scrollIntoView({
          //     behavior: "smooth",
          //   });
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
.addscroll {
  height: 5000px;
}
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  gap: 2rem;
  transition: all 0.7s ease-in-out;
}
.add_height {
  height: 5000px !important;
}
.hold {
  max-width: 1440px;
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
  }
  .hold {
    padding-bottom: 4rem;
  }

  .kad {
    font-size: 36.947px;
  }
}

@media (max-width: 800px) {
  p {
    transform: rotate(0);
    position: relative;
    left: unset;
  }
}
</style>
