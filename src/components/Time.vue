<template>
  <div class="timeline q-pb-md">
    <div class="hold">
      <div class="grid">
        <div class="left">
          <img src="/images/gol5.png" alt="" />
        </div>
        <div class="right">
          <div class="left_div">
            <h6>Establishing the State as a Knowledge Based Economy</h6>
            <p>
              Leveraging on the urgent need to diversify and the increased
              prioritization of key sectors such as ICT and services, which
              accounts for 52% of the National GDP, key discussions will revolve
              around the ttransformation of Kaduna State into a Knowledge-based
              economy in line with the State Development Plan (SDP) 2021-2025.
            </p>
          </div>
        </div>
      </div>
      <div class="center_next">
        <div class="next">Next</div>
      </div>
    </div>

    <div class="hold">
      <div class="grid flexer">
        <div class="left">
          <div class="right_div">
            <h6>Showcase investment opportunities in Kaduna State</h6>
            <p>
              The event is intended to showcase strategic investment
              opportunities in Kaduna State and consolidate its existing
              investment gains to maximise the State's economic potential.
              Initiated in 2016, the yearly summit has assisted in drawing
              investments worth over $4 billion into the state in sectors such
              as agriculture & food processing, mining, light manufacturing and
              services.
            </p>
          </div>
        </div>
        <div class="right">
          <img src="/images/new1.png" alt="" />
        </div>
      </div>
      <div class="center_next">
        <div class="next">Next</div>
      </div>
    </div>

    <div class="hold">
      <div class="grid">
        <div class="left">
          <img src="/images/gol3.png" alt="" />
        </div>
        <div class="right">
          <div class="left_div">
            <h6>Enhance Job Creation & Employment Opportunities</h6>
            <p>
              Acceleration of economic growth through diversification and
              development of new opportunities; we believe that that we can
              harness the skills and talents of our youths with the jobs and
              opportunities of the modern age by tapping into the growth
              potentials of the digital economy and the fourth industrial
              revolution.
            </p>
          </div>
        </div>
      </div>
      <div class="center_next">
        <div class="next">Next</div>
      </div>
    </div>

    <div class="hold">
      <div class="grid flexer">
        <div class="left">
          <div class="right_div">
            <h6>Digital and Technological Transformation</h6>
            <p>
              Showcasing the measures undertaken to ease access and
              interactivity to promote digitization as well as the efforts put
              in place to catalyze the technological transformation of Kaduna
              State to meet up with the skills demand and a need to cluster
              remote workers for efficiency gains in the sector.
            </p>
          </div>
        </div>
        <div class="right">
          <img src="/images/new2.png" alt="" />
        </div>
      </div>
      <div class="center_next">
        <div class="next">Next</div>
      </div>
    </div>

    <div class="hold">
      <div class="grid">
        <div class="left">
          <img src="/images/gol6.png" alt="" />
        </div>
        <div class="right">
          <div class="left_div">
            <h6>Building on Infrastructure, Human and Capacity Development</h6>
            <p>
              The event will further highlight the key economic pillars of the
              SDP, focusing on value added economic activities and
              infrastructural development the State has undergone. It will also
              serve as an avenue for cross-sectoral interactions and sharing of
              ideas between businesses and experts to keep up to date with the
              current economic climate as this will aid in the development and
              adoption of contemporary global business practices across the
              State.
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="center_next">
        <div class="next">Next</div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.timeline {
  position: relative;
  overflow: hidden;
  padding-bottom: 9rem;
}
img {
  object-fit: cover;
}

.timeline h6 {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 117%;
  text-align: left;
  color: #00a250;
  margin-bottom: 1rem;
}
.timeline p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 148%;
  color: #000000;
  text-align: left;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem;
  align-items: center;
  position: relative;
}
.grid::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 100%;
  background: #00a250;
  left: 50%;
}
.grid::after {
  content: "\f192";
  font-family: "FontAwesome";
  position: absolute;
  color: #00a250;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  border-radius: 100%;
  background: rgba(0, 162, 80, 0.28);
  backdrop-filter: blur(10px);
  backdrop-filter: grayscale(0.5) opacity(0.8);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s infinite;
  animation-delay: 2s;
}
@keyframes pulse {
  0% {
    /* box-shadow: 0 0 0 0 #a2042a; */
    box-shadow: 0 0 0 0 #90b9cc;
  }
  70% {
    box-shadow: 0 0 0 2rem rgba(253, 87, 191, 0);
  }
  100% {
    /* box-shadow: 0 0 0 0 #a2042a; */
    box-shadow: 0 0 0 0 #779ecc;
  }
}

.hold {
  margin-top: 9rem;
  position: relative;
}
.hold:nth-child(1) {
  margin-top: 4rem;
}

.center_next {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}
.next {
  padding: 9px 44px;

  background: #ffffff;
  box-shadow: 0px 1px 54px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 148%;
  letter-spacing: 0.9em;
  margin: 4rem 0;
  color: #00a250;
  /* rotate: 90deg; */
  transform: rotate(90deg);
}

@media (max-width: 550px) {
  .next {
    padding: 9px 24px;
    opacity: 0.2;

    font-size: 14px;
  }
  .timeline h6 {
    font-size: 20px;
  }
  .grid {
    gap: 2rem;
    grid-template-columns: 1fr;
  }
  img {
    z-index: 1900;
    position: relative;
  }
  .grid::after {
    font-size: 1rem;
  }
  .grid::before {
    opacity: 0.1;
  }
  .grid::after {
    opacity: 0.1;
  }
}
</style>
