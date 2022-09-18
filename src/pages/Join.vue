<template>
  <div class="count_wrapper">
    <div class="count_hold">
      <vue-countdown
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
        <!-- <div class="time">
          <span class="days">{{ days }}Days</span>
          <span class="hours">{{ hours }}Hours</span>
          <span class="minutes">{{ minutes }}Minutes</span>
          <span class="secs"> {{ seconds }} seconds</span>
        </div> -->
      </vue-countdown>
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
