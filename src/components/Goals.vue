<template>
  <div ref="goals" class="wrapper section">
    <div class="hold small_container">
      <header class="heading">
        <div class="abt">
          <h2 class="about">KADINVEST 7.0</h2>
          <h2 class="about">Goals</h2>
        </div>

        <div class="line line2"></div>
      </header>

      <div class="small_section">
        <div class="img">
          <img src="/images/had.jpeg" alt="" />
        </div>
        <p class="title">Her Excellency</p>
        <p class="name">Dr. Hadiza Sabuwa Balarabe</p>
        <p class="text-center grey_text">Chairman KADIPA Board</p>
        <p class="desc">
          KADINVEST 7.0 is a curtain raise towards “building a resilient
          economy” in Kaduna State. Some key objectives of the summit will
          include:
        </p>
      </div>

      <Time />
    </div>
  </div>
</template>

<script>
import Time from "../components/Time.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  components: {
    Time,
  },

  mounted() {
    this.$store.animate.refs.push(this.$refs);
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".line2", {
      scrollTrigger: {
        trigger: this.$refs.goals,
        toggleActions: "play complete reset",
      },
      scaleX: 0,
      duration: 10,
      repeat: -1,
      transformOrigin: "left center",
      ease: "none",
    });
  },
};
</script>

<style scoped>
.wrapper {
  margin-top: 7rem;
  position: relative;
}
.about {
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 108.5%;
  text-transform: capitalize;
  color: #2d25a6;
  margin: 0;
}

.line {
  height: 7px;
  background: #2d25a6;
  width: 40%;
  margin-bottom: 1.5rem;
}

.heading {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  justify-content: space-between;
  padding: 4rem 0 2rem;
}

.name {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 117%;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #00a250;
}
.title {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 117%;
  letter-spacing: 0.3em;
  text-align: center;
  margin: 0.5rem 0;

  color: #00a250;
}
.grey_text {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 117%;
  color: #8f8f8f;
}

.desc {
  font-style: italic;
  font-weight: 500;
  font-size: 25px;
  line-height: 148%;
  text-align: center;
  color: #000000;
}

.img img {
  width: 300px;
  border-radius: 10px;
}
.small_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 2rem auto 0;
}

.wrapper::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 70%;
  left: 0;
  top: 20%;
  background: url("/images/backdrop.png") no-repeat;
}
.wrapper::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 30%;
  right: 0;
  top: 60%;
  /* transform: rotate(-180deg); */
  background: url("/images/drop.png") no-repeat;
}
</style>
