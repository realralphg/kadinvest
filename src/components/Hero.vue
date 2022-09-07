<template>
  <div ref="home" class="wrapper">
    <div class="hold">
      <img src="/images/logo.png" alt="" />
      <p class="small_spaced_text">SEPTEMBER 26TH - 28TH</p>
      <h1 class="main_text">KADINVEST 7.0</h1>
      <p class="smaller_text">KADUNA, KADUNA STATE</p>
      <h2 class="subtext">Building a resilient Economy</h2>

      <q-btn class="register"> Register Now </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.animate.refs.push(this.$refs);
  },
};
</script>

<style scoped>
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
</style>
