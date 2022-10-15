<template>
  <div class="count_wrapper">
    <!-- <div
      style="width: 100%; height: 0; padding-bottom: 56%; position: relative"
    >
      <iframe
        src="https://giphy.com/embed/IsCM8aCBUjpRwJ2IJN"
        width="100%"
        height="100%"
        style="position: absolute"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div> -->
    <header class="heading">
      <div class="">
        <h2 class="about">
          Welcome to the <br />
          Metaverse
        </h2>
        <!-- <h2 class="about">to the Metaverse</h2> -->
      </div>
    </header>
    <!-- <div class="container">
      <div class="" data-text="Welcome to the Metaverse"></div>
    </div> -->
    <div class="count_hold">
      <div class="auto_grid">
        <div class="card">
          <p>
            Enter KADINVEST 7.0 <br />
            Main Summit
          </p>
          <img src="/images/9.png" alt="" />
          <!-- <i class="fa-sharp fa-solid fa-user-astronaut"></i> -->
          <a
            target="_blank"
            href="https://spatial.io/s/KADINVEST-7-0_Agric-63402dd8e290f80001a1bce5?share=192474115220888067"
            class="enter ellipsis"
          >
            Enter
          </a>
        </div>
        <div class="card">
          <p>
            Enter KADINVEST 7.0 <br />
            Exhibition
          </p>
          <!-- <i class="fa-sharp fa-solid fa-user-astronaut"></i> -->
          <img src="/images/10.png" alt="" />
          <a
            target="_blank"
            href="https://spatial.io/s/KADINVEST_Exhibition-633d966fe290f800019990a3?share=707216404350606130"
            class="enter ellipsis"
          >
            Enter
          </a>
        </div>

        <!-- <a
          target="_blank"
          href="https://spatial.io/s/KADINVEST-7-0_Solid-minerals-6347c35e76bb8b0001759319?share=7456321790297307554"
          class="enter ellipsis"
        >
          Join the Solid Minerals Expo
        </a>
        <a
          target="_blank"
          href="https://spatial.io/s/KADINVEST-7-0_Tech-6347c44076bb8b0001759328?share=7375352181393008270"
          class="enter ellipsis"
        >
          Join the Technology Expo
        </a> -->
      </div>
      <!-- <vue-countdown
        :time="2 * 24 * 60 * 60 * 13000"
        :transform="transformSlotProps"
        v-slot="{ days, hours, minutes, seconds }"
      >
        <div class="container">
          <h2>Coming soon</h2>
          <div class="wrapper">
            <div class="days">
              <h4 id="days" class="time">{{ days }}</h4>
              <p>Days</p>
            </div>

            <div class="hours">
              <h4 id="hours" class="time">{{ hours }}</h4>
              <p>Hours</p>
            </div>

            <div class="minutes">
              <h4 id="min" class="time">{{ minutes }}</h4>
              <p>Minutes</p>
            </div>

            <div class="seconds">
              <h4 id="seconds" class="time">{{ seconds }}</h4>
              <p>Seconds</p>
            </div>
          </div>
        </div>
        
      </vue-countdown> -->
    </div>
  </div>
</template>

<script>
import VueCountdown from "@chenfengyuan/vue-countdown";
export default {
  components: {
    VueCountdown,
  },
  data() {
    return {
      showLinks: false,
    };
  },
  // methods: {
  //   transformSlotProps(props) {
  //     const formattedProps = {};

  //     Object.entries(props).forEach(([key, value]) => {
  //       formattedProps[key] = value < 10 ? `0${value}` : String(value);
  //     });

  //     return formattedProps;
  //   },
  // },
};
</script>

<style scoped>
.count_hold {
  text-align: center;
  width: 100%;
}
.about {
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 108.5%;
  text-transform: none;
  color: #ffffff;
  margin: 0;
}

.line {
  height: 7px;
  background: white;
  width: 60%;
  margin-bottom: 1.5rem;
}

.heading {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  justify-content: space-between;
  padding: 4rem 0;
}

.count_wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.auto_grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  /* margin-top: 20rem; */
}

.auto_grid .enter {
  text-overflow: ellipsis;
  width: 200px;
}

.enter {
  font-style: normal;
  font-weight: 700;
  font-size: 13.2px;
  line-height: 110%;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #fff;
  /* color: #233042; */
  background: #00a250;
  /* background: #f2f2f2; */
  border-radius: 10px;
  margin: 1rem 0;
  padding: 1rem;
}
.count_wrapper {
  /* background: hsl(234, 17%, 12%) no-repeat center center/cover; */
  background: url("/images/bg_mete.jpg") center center/cover;
  mix-blend-mode: hard-light;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.card {
  background: #ffffff;
  box-shadow: 0px 13px 45px 13px rgba(0, 0, 0, 0.08);
  border-radius: 22.6933px;
  background: #ffffff;
  box-shadow: 0px 13px 45px 13px rgba(0, 0, 0, 0.08);
  border-radius: 22.6933px;
  min-height: 300px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 300px;
  align-items: center;
  cursor: pointer;
}

.card p {
  font-style: normal;
  font-weight: 800;
  font-size: 20.2437px;
  line-height: 1.2;
  color: #233042;
}
.card img {
  width: 100px;
  animation: spinner 8s linear infinite;
}
@keyframes spinner {
  100% {
    transform: rotate(180deg);
  }
}
/* .card i {
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 36px;
  color: #233042;
} */
.container {
  margin: 0 auto;
  padding: 20px;
  width: 90%;
}

h2 {
  margin: 1rem 0 4rem;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

.wrapper p {
  font-size: 9px;
  opacity: 0.5;
  color: hsl(0, 0%, 100%);
}

.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
}

.time {
  position: relative;
  width: 3rem;
  height: 3rem;
  padding: 2.5rem;
  margin-bottom: 0.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(235, 44%, 17%);
  z-index: 1;
  color: #00a250;
  /* color: hsl(345, 95%, 68%); */
}

.time::before {
  content: "";
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  background-color: hsl(236, 21%, 26%);
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  right: 100%;
  z-index: -1;
}

.time::after {
  content: "";
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  right: 100%;
  background-color: hsl(235, 18%, 20%);
  z-index: -1;
}

.glitch,
.glow {
  color: #fff;
  position: relative;
  margin-top: -1%;
  font-size: 7vw;
  text-align: center;
  animation: glitch 5s 5s infinite;
  /* margin-bottom: 10%;  */
}
.glitch::before,
.glow::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: -5px 0 magenta;
  /* background: black; */
  text-align: center;
  line-height: 1.1;
  overflow: hidden;
  top: -20%;
  animation: noise-1 3s linear infinite alternate-reverse,
    glitch 5s 5.05s infinite;
}
.glitch::after,
.glow::after {
  content: attr(data-text);
  line-height: 1.1;
  position: absolute;
  text-align: center;
  left: 2px;
  text-shadow: -5px 0 lightgreen;
  /* background: black; */
  overflow: hidden;
  top: -20%;
  animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
}
@keyframes glitch {
  1% {
    transform: rotateX(10deg) skewX(90deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
@keyframes noise-1 {
  3.3333333333% {
    clip-path: inset(10px 0 73px 0);
  }
  6.6666666667% {
    clip-path: inset(80px 0 1px 0);
  }
  10% {
    clip-path: inset(63px 0 14px 0);
  }
  13.3333333333% {
    clip-path: inset(3px 0 67px 0);
  }
  16.6666666667% {
    clip-path: inset(95px 0 3px 0);
  }
  20% {
    clip-path: inset(42px 0 2px 0);
  }
  23.3333333333% {
    clip-path: inset(60px 0 37px 0);
  }
  26.6666666667% {
    clip-path: inset(11px 0 25px 0);
  }
  30% {
    clip-path: inset(93px 0 7px 0);
  }
  33.3333333333% {
    clip-path: inset(5px 0 51px 0);
  }
  36.6666666667% {
    clip-path: inset(7px 0 91px 0);
  }
  40% {
    clip-path: inset(48px 0 7px 0);
  }
  43.3333333333% {
    clip-path: inset(23px 0 72px 0);
  }
  46.6666666667% {
    clip-path: inset(57px 0 26px 0);
  }
  50% {
    clip-path: inset(29px 0 17px 0);
  }
  53.3333333333% {
    clip-path: inset(97px 0 3px 0);
  }
  56.6666666667% {
    clip-path: inset(36px 0 15px 0);
  }
  60% {
    clip-path: inset(34px 0 49px 0);
  }
  63.3333333333% {
    clip-path: inset(37px 0 35px 0);
  }
  66.6666666667% {
    clip-path: inset(5px 0 66px 0);
  }
  70% {
    clip-path: inset(53px 0 37px 0);
  }
  73.3333333333% {
    clip-path: inset(44px 0 15px 0);
  }
  76.6666666667% {
    clip-path: inset(13px 0 46px 0);
  }
  80% {
    clip-path: inset(81px 0 11px 0);
  }
  83.3333333333% {
    clip-path: inset(100px 0 1px 0);
  }
  86.6666666667% {
    clip-path: inset(74px 0 27px 0);
  }
  90% {
    clip-path: inset(26px 0 51px 0);
  }
  93.3333333333% {
    clip-path: inset(12px 0 81px 0);
  }
  96.6666666667% {
    clip-path: inset(3px 0 30px 0);
  }
  100% {
    clip-path: inset(29px 0 11px 0);
  }
}
@keyframes noise-2 {
  0% {
    clip-path: inset(60px 0 6px 0);
  }
  3.3333333333% {
    clip-path: inset(37px 0 44px 0);
  }
  6.6666666667% {
    clip-path: inset(30px 0 5px 0);
  }
  10% {
    clip-path: inset(15px 0 43px 0);
  }
  13.3333333333% {
    clip-path: inset(92px 0 3px 0);
  }
  16.6666666667% {
    clip-path: inset(47px 0 50px 0);
  }
  20% {
    clip-path: inset(91px 0 8px 0);
  }
  23.3333333333% {
    clip-path: inset(52px 0 19px 0);
  }
  26.6666666667% {
    clip-path: inset(19px 0 5px 0);
  }
  30% {
    clip-path: inset(39px 0 4px 0);
  }
  33.3333333333% {
    clip-path: inset(55px 0 3px 0);
  }
  36.6666666667% {
    clip-path: inset(30px 0 56px 0);
  }
  40% {
    clip-path: inset(42px 0 55px 0);
  }
  43.3333333333% {
    clip-path: inset(49px 0 5px 0);
  }
  46.6666666667% {
    clip-path: inset(60px 0 21px 0);
  }
  50% {
    clip-path: inset(80px 0 6px 0);
  }
  53.3333333333% {
    clip-path: inset(72px 0 27px 0);
  }
  56.6666666667% {
    clip-path: inset(63px 0 18px 0);
  }
  60% {
    clip-path: inset(99px 0 2px 0);
  }
  63.3333333333% {
    clip-path: inset(11px 0 64px 0);
  }
  66.6666666667% {
    clip-path: inset(35px 0 61px 0);
  }
  70% {
    clip-path: inset(98px 0 1px 0);
  }
  73.3333333333% {
    clip-path: inset(55px 0 2px 0);
  }
  76.6666666667% {
    clip-path: inset(84px 0 5px 0);
  }
  80% {
    clip-path: inset(41px 0 16px 0);
  }
  83.3333333333% {
    clip-path: inset(56px 0 28px 0);
  }
  86.6666666667% {
    clip-path: inset(80px 0 2px 0);
  }
  90% {
    clip-path: inset(18px 0 19px 0);
  }
  93.3333333333% {
    clip-path: inset(43px 0 7px 0);
  }
  96.6666666667% {
    clip-path: inset(35px 0 15px 0);
  }
  100% {
    clip-path: inset(78px 0 2px 0);
  }
}
.scanlines {
  overflow: hidden;
  mix-blend-mode: difference;
}
.scanlines::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 0.5%,
    transparent 1%
  );
  animation: fudge 7s ease-in-out alternate infinite;
}
@keyframes fudge {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(0px, 2%);
  }
}
.glow {
  text-shadow: 0 0 1000px #dfbfbf;
  color: transparent;
  position: absolute;
  top: 0;
}
.subtitle {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  font-size: 1.3vw;
  color: rgba(165, 141, 141, 0.4);
  text-transform: uppercase;
  letter-spacing: 1em;
  text-align: center;
  position: absolute;
  left: 17%;
  animation: glitch-2 5s 5.02s infinite;
}
@keyframes glitch-2 {
  1% {
    transform: rotateX(10deg) skewX(70deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
/* 
@media (min-width: 1024px) {
  .auto_grid {
    margin-top: 15rem;
  }
}
@media (max-width: 1024px) {
  .auto_grid {
    margin-top: 10rem;
  }
} */
@media (max-width: 800px) {
  h2 {
    font-size: 2rem;
  }

  .time {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 2rem;
  }

  .wrapper p {
    font-size: 9px !important;
  }

  .count_hold {
    padding: 4rem 0;
  }

  .count_wrapper {
    height: 100vh;
  }

  .auto_grid {
    margin-top: 8px;
  }

  .glitch {
    padding-top: 4rem;
    font-size: 3rem;
    margin: 30% 0 10%;
  }
}

@media (max-width: 600px) {
  .count_wrapper {
    height: 100%;
  }
  .about {
    padding-top: 4rem;
    width: 90%;
    margin: 0 auto;
  }
}
@media (max-width: 320px) {
  .card {
    width: 90%;
  }
  .glitch {
    padding-top: 4rem;
    font-size: 2rem;
    margin: 50% 0 10%;
  }
}
</style>
