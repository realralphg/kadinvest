<template>
  <div ref="goals" class="wrapper">
    <div class="hold section small_container">
      <header class="heading">
        <div class="abt">
          <h2 class="about">KadInvest</h2>
          <h2 class="about">Goals</h2>
        </div>

        <div class="line"></div>
      </header>

      <div class="small_section">
        <div class="img">
          <img src="/images/kha.png" alt="" />
        </div>
        <p class="name">Khalil Nur Khalil</p>
        <p class="text-center grey_text">
          Executive Secrectary Kaduna Investment and Promotion Agency
        </p>
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

export default {
  components: {
    Time,
  },
  mounted() {
    this.$store.animate.refs.push(this.$refs);
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

.name {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 117%;
  text-align: center;
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
  width: 100px;
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
  top: 50%;
  background: url("/images/drop.png") no-repeat;
}
</style>
