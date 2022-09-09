<template>
  <div ref="metaverse" class="wrapper metaverse">
    <div class="hold small_container">
      <div class="top_cards">
        <img class="hand" src="/images/hand.png" alt="" />
        <div class="top_card">
          <div class="left">
            <img class="logo" src="/images/logo.png" alt="" />
            <p class="meta">KADINVEST 7.0</p>
            <p class="des">KADUNA, KADUNA STATE</p>
          </div>
          <div class="right">
            <p class="date">SEPTEMBER 26TH - 28TH</p>
            <h3 class="heading reducepad">
              Building a resilient <br />
              Economy
            </h3>

            <div class="btns">
              <q-btn class="join"> Join us live </q-btn>
              <q-btn class="submit"> Submit programme </q-btn>
            </div>
          </div>
        </div>
      </div>

      <div class="q-py-xl about_meta">
        <div class="about_images">
          <img src="/images/pose2.png" alt="" />
          <img src="/images/pose3.png" alt="" />

          <img src="/images/pose1.png" alt="" />
        </div>

        <div class="info">
          <p class="info_date">SEPTEMBER 28TH</p>
          <h3 class="info_main">
            Experience KADINVEST <br />
            in the metaverse
          </h3>
          <q-btn class="enter"> ENTER THE METAVERSE </q-btn>
        </div>
      </div>
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
.wrapper {
  /* background: linear-gradient(274.66deg, #f9a838 33.66%, #463cdf 80.38%); */
  background: url("/images/bg_mete.jpg") center center/cover;
  mix-blend-mode: hard-light;
  margin-top: 23rem;
  /* height: 100vh; */
}
.top_cards {
  display: flex;
  justify-content: center;
  position: relative;
}

.hand {
  position: absolute;
  width: 300px;
  left: -20%;
  top: 50%;
  transform: translateY(-50%);
}

.btns {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1.5rem 0;
}
.top_card {
  background: linear-gradient(274.66deg, #2d25a6 33.66%, #463cdf 80.38%);
  border-radius: 30px;
  display: flex;
  /* padding: 1rem; */
  align-items: center;
  gap: 2rem;
  margin: 4rem 0 2rem;
  width: 100%;
}

.logo {
  width: 150px;
}

.top_card .left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px dashed #ffffff;
  padding: 2rem;
}

.top_card .right {
  padding: 2rem;
}
p.meta {
  font-style: normal;
  font-weight: 700;
  font-size: 27.4131px;
  line-height: 108.5%;
  text-align: center;
  text-transform: capitalize;
  color: #fefefe;
}

p.des {
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 110%;
  letter-spacing: 0.4em;
  color: #ffffff;
}

p.date {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0.4em;
  color: #fdfdfd;
}

h3.heading {
  font-style: normal;
  font-weight: 700;
  font-size: 48.57px;
  line-height: 117%;
  text-transform: capitalize;
  color: #ffffff;
  margin: 0.3rem 0;
}

.join {
  background: #00a250;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 13.2px;
  line-height: 110%;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #ffffff;
  padding: 1rem;
}

.submit {
  background: #463cdf;
  padding: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 13.2px;
  line-height: 110%;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #ffffff;
}

.about_meta {
  position: relative;
  height: 100%;
  padding: 3rem 0 0;
}

.info {
  background: linear-gradient(
    90.07deg,
    rgba(137, 255, 195, 0.9) -16.67%,
    rgba(0, 162, 80, 0.9) 99.07%
  );
  border-radius: 30px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  width: 100%;
  top: 70%;
  transform: translate(-50%, -70%);
}

.about_images {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 0 auto;
}
.about_meta img {
  height: 500px;
}

.info_date {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 110%;
  text-align: center;
  letter-spacing: 0.4em;
  color: #fdfdfd;
}

.info_main {
  font-style: normal;
  font-weight: 700;
  font-size: 48.57px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
}

.enter {
  font-style: normal;
  font-weight: 700;
  font-size: 13.2px;
  line-height: 110%;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #00a250;
  background: #f2f2f2;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 1rem;
}

@media (max-width: 1024px) {
  .info_main,
  h3.heading {
    font-size: 40.57px;
  }
  .hand {
    left: -22%;
  }
}
@media (max-width: 800px) {
  .wrapper {
    margin-top: 25rem;
  }
  .top_card {
    display: grid;
  }
  .top_card .left {
    border-right: none;
    border-bottom: 1px dashed #ffffff;
    text-align: center;
  }

  .top_card .right {
    text-align: center;
  }
  .btns {
    justify-content: center;
  }
  .hand {
    top: 40%;
  }
}
@media (max-width: 800px) {
  .hand {
    top: 25%;
  }
}
@media (max-width: 500px) {
  .hand {
    width: 200px;
  }

  .about_images {
    width: 100%;
  }
  .reducepad {
    padding: 1rem 0 !important;
  }
}
@media (max-width: 320px) {
  .info_main,
  h3.heading {
    font-size: 30.57px;
  }

  .wrapper {
    margin-top: 15rem;
  }
  .btns {
    flex-wrap: wrap;
  }
}
</style>
