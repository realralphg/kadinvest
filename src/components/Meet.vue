<template>
  <div ref="speakers" class="wrapper cards_div section">
    <div class="hold small_container">
      <div ref="speakers" class="meet section">
        <header class="heading">
          <div class="abt">
            <h2 class="about">Meet the</h2>
            <h2 class="about">Speakers</h2>
          </div>

          <div class="line"></div>
        </header>
        <div class="speakers"><Ourstaff /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Ourstaff from "../components/Ourstaff.vue";

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
    };
  },
  components: {
    Ourstaff,
  },
  mounted() {
    this.$store.animate.refs.push(this.$refs);
    console.log(this.$store.animate.refs);
    // console.log(this.$refs.about);
  },
};
</script>

<style scoped lang="scss">
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
// .para_hold {
//   padding-bottom: 30rem;
// }
.paragraphs p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 190%;
  text-align: justify;
  text-transform: capitalize;
  color: #ffffff;
}
.hold {
  position: relative;
}

.meet {
  position: relative;
  margin-top: -40%;
  margin-bottom: 10%;
}

.card {
  background: #ffffff;
  box-shadow: 0px 13px 45px 13px rgba(0, 0, 0, 0.08);
  border-radius: 22.6933px;
  background: #ffffff;
  box-shadow: 0px 13px 45px 13px rgba(0, 0, 0, 0.08);
  border-radius: 22.6933px;
  height: 100%;
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
  width: 350px;
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
  padding: 5rem 0 10rem;
  gap: 2rem;
}
.tap img {
  width: 150px;
}
.btnn {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 108.5%;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 950px) {
  .meet {
    margin-top: -55%;
  }
}
@media (max-width: 800px) {
  .paragraphs {
    grid-template-columns: 1fr;
    padding-bottom: 3rem;
  }
  .heading {
    flex-wrap: wrap;
  }

  .meet {
    margin-top: -70%;
    margin-bottom: 25%;
  }

  .para_hold {
    padding-bottom: 24rem;
  }
}

@media (max-width: 764px) {
  .meet {
    margin-top: -90%;
    margin-bottom: 25%;
  }
  .heading {
    padding: 4rem 0 5rem !important;
  }
}
@media (max-width: 500px) {
  .meet {
    margin-top: -120%;
  }
  .heading {
    padding: 4rem 0 5rem !important;
  }
}

@media (max-width: 380px) {
  .tap {
    padding: 5rem 0 4rem;
  }
}

@media (max-width: 320px) {
  .para_hold {
    padding-bottom: 18rem;
  }

  .btnn {
    font-size: 12px;
  }
  .tap img {
    width: 70px;
    transform: rotate(-20deg);
  }
}
</style>
