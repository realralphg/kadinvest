<template>
  <div ref="sponsors" class="wrapper section">
    <div class="hold small_container">
      <header class="heading">
        <div class="abt">
          <h2 class="about">Partners &</h2>
          <h2 class="about">Sponsors</h2>
        </div>

        <div class="line line5"></div>
      </header>

      <div class="sponsors">
        <div class="sponsors_wrap">
          <img
            class="bigger"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            class="bigger"
            src="https://pbs.twimg.com/profile_images/1351875712110755840/dXISVR3y_400x400.jpg"
            alt=""
          />
          <img
            style="width: 60px"
            class="small"
            src="/images/maima.jpeg"
            alt=""
          />
          <img style="width: 60px" class="small" src="/images/ocp.png" alt="" />
          <img src="/images/bank.jpeg" alt="" />

          <img
            src="https://i0.wp.com/insidebusiness.ng/wp-content/uploads/2017/08/pwc.jpg?fit=640%2C360&ssl=1"
            alt=""
          />
          <!-- <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/86/NESG_Official_Logo.png"
            alt=""
          /> -->
          <!-- <img
            src="https://play-lh.googleusercontent.com/Rvr_Z24TXfc1iBkcX-3ENupW7ZI92-3WoumuTRgvb1x2jYjBLhq-5YArjgXoTNWtFJ0"
            alt=""
          /> -->
          <img
            src="https://sunnewsonline.com/wp-content/uploads/2020/12/Zenith-bank.jpg"
            alt=""
          />
          <!-- <img
            src="https://storage.googleapis.com/bubble-finder/$0pYwTFUuHeVEKaA6Xw7dvdvn3hprJNNqS3ai8hFLaEgfrGkjcuXAVe"
            alt=""
          /> -->
          <img src="https://cdn1.vc4a.com/media/2017/08/Logo-25.png" alt="" />
          <img
            src="https://media.premiumtimesng.com/wp-content/files/2022/02/Nigerian-Breweries.jpg"
            alt=""
          />
          <img src="/images/spo1.jpeg" alt="" />
          <img src="/images/spo2.jpeg" alt="" />
          <img src="/images/log.svg" alt="" />
          <!-- <div class="grey row items-center">
            <img src="/images/log.svg" alt="" />
            <span>GreySoft NG</span>
          </div> -->
        </div>
      </div>
      <div class="become q-mt-lg flex justify-end">
        <q-btn to="/sponsor" class="become_btn"> Become A Sponsor</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    gsap.from(".line5", {
      scrollTrigger: {
        trigger: this.$refs.sponsors,
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
.become_btn {
  font-weight: 500;
  font-size: 14px;
  line-height: 27px;
  color: #ffffff;
  padding: 14px 10px;
  background: #1f1b5e;
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

.sponsors_wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  align-items: center;
  gap: 1rem;
}

.sponsors_wrap img {
  width: 100px;
  opacity: 0.7;
  transition: all 0.5s ease-in-out;
}

.small {
  margin: 0 auto !important;
}

.bigger {
  width: 200px !important;
}
.sponsors_wrap img:hover {
  opacity: 1;
  transform: scale(1.1);
}
@media (max-width: 800px) {
  .heading {
    flex-wrap: wrap;
  }
  .wrapper {
    margin-top: 3rem;
  }
}
@media (max-width: 400px) {
  .small {
    margin: 0 !important;
  }
}
</style>
