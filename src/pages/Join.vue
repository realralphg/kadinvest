<template>
  <div class="count_wrapper">
    <div class="count_hold">
      <div class="auto_grid">
        <a
          target="_blank"
          href="https://spatial.io/s/KADINVEST-7-0_Infrastructure-6347c0dc61f1bf000134a03c?share=8127328616726458222"
          class="enter ellipsis"
        >
          Join the Infrastructure Expo
        </a>
        <a
          target="_blank"
          href="https://spatial.io/s/KADINVEST-7-0_Agric-63402dd8e290f80001a1bce5?share=192474115220888067"
          class="enter ellipsis"
        >
          Join the Agriculture Expo
        </a>
        <a
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
        </a>
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
  methods: {
    transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });

      return formattedProps;
    },
  },
};
</script>

<style scoped>
.count_hold {
  text-align: center;
  width: 100%;
}

.count_wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auto_grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
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
  color: #00a250;
  background: #f2f2f2;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 1rem;
}
.count_wrapper {
  background: hsl(234, 17%, 12%) no-repeat center center/cover;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
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

@media (max-width: 500px) {
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
}
</style>
