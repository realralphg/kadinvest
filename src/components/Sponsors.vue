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
          <img src="/images/maima.jpeg" alt="" />
          <img src="/images/ocp.png" alt="" />
          <img src="/images/bank.jpeg" alt="" />
          <img
            src="https://kkkingdom.com/wp-content/uploads/2021/07/logo.jpg"
            alt=""
          />

          <img
            src="https://desk.zoho.com/DocsDisplay?zgId=4763768&mode=inline&blockId=f99hp7d629615b3de49228417d302be8cc055"
            alt=""
          />
          <img
            src="https://i0.wp.com/insidebusiness.ng/wp-content/uploads/2017/08/pwc.jpg?fit=640%2C360&ssl=1"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/86/NESG_Official_Logo.png"
            alt=""
          />
          <img
            src="https://play-lh.googleusercontent.com/Rvr_Z24TXfc1iBkcX-3ENupW7ZI92-3WoumuTRgvb1x2jYjBLhq-5YArjgXoTNWtFJ0"
            alt=""
          />
          <img
            src="https://sunnewsonline.com/wp-content/uploads/2020/12/Zenith-bank.jpg"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/bubble-finder/$0pYwTFUuHeVEKaA6Xw7dvdvn3hprJNNqS3ai8hFLaEgfrGkjcuXAVe"
            alt=""
          />
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
  font-size: 18px;
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
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  align-items: center;
  gap: 1rem;
}

.sponsors_wrap img {
  width: 100px;
  opacity: 0.7;
  transition: all 0.5s ease-in-out;
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
</style>
