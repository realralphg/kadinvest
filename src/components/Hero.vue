<template>
  <div ref="home" class="wrapper main_we">
    <div class="hold">
      <img src="/images/logoc.png" alt="" />
      <p class="small_spaced_text">OCTOBER 13TH - 15TH, 2022</p>
      <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <h1 class="main_text">KADINVEST 7.0</h1>
      </transition>
      <p class="smaller_text">KADUNA, KADUNA STATE</p>
      <h2 class="subtext">Building a resilient Economy</h2>

      <q-btn to="/register" class="register"> Register Now </q-btn>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    };

    const afterEnter = (el) => {
      console.log("after enter");
    };

    return {
      beforeEnter,
      enter,
      afterEnter,
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    this.$store.animate.refs.push(this.$refs);
  },
};
</script>

<style scoped>
.wrapper {
  padding: 4rem 0 6rem;
}
.hold {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hold img {
  width: 186px;
  height: 241.22px;
}
.small_spaced_text {
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
  letter-spacing: 0.4em;
  color: #1f1b5e;
  margin: 0.9rem 0;
}

.main_text {
  font-style: normal;
  font-weight: 700;
  font-size: 83.2511px;
  line-height: 117%;
  text-align: center;
  color: #1f1b5e;
  margin: 0;
}

.smaller_text {
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 110%;
  letter-spacing: 0.4em;
  color: #071364;
  margin: 0.5rem 0;
}

.subtext {
  font-style: normal;
  font-weight: 700;
  font-size: 40.8774px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #00a250;
}

.register {
  width: 282px;
  height: 58.08px;
  border: 2px solid #00a250;
  color: #00a250;
  transition: all 0.5s ease-in-out;
  margin-top: 2rem;
}
.register:hover {
  border: 2px solid #00a250;
  background: #00a250;
  color: #fff;
}

@media (max-width: 550px) {
  .main_text {
    font-size: 53.2511px;
  }

  .subtext {
    font-size: 30px;
  }
}
@media (max-width: 320px) {
  .hold {
    text-align: center;
  }
  .main_text {
    font-size: 33.2511px;
  }

  .subtext {
    font-size: 18px;
  }
  .register {
    width: 182px;
  }
  .small_spaced_text {
    padding: 0.3rem;
    line-height: 1.5;
  }
}
</style>
