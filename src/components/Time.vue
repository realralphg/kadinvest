<template>
  <div class="timeline q-pb-md">
    <div class="hold">
      <div class="grid">
        <div class="left">
          <img src="/images/gol1.png" alt="" />
        </div>
        <div class="right">
          <div class="left_div">
            <h6>Showcase</h6>
            <p>
              Showcasing Kaduna State as Nigeria's leading investment
              destination in at least four priority sectors: agro-processing,
              ICT, mining and manufacturing.
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
            <h6>Healthy Competition</h6>
            <p>
              Articulating the investment advantages across the Local
              Governments in the State to stimulate healthy competition and
              jumpstart local economies.
            </p>
          </div>
        </div>
        <div class="right">
          <img src="/images/gol2.png" alt="" />
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
            <h6>Investment Ideas</h6>
            <p>
              Highlighting the State's commitment towards prioritizing
              innovative investment ideas
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
            <h6>Engaging Partners</h6>
            <p>
              Engaging partners for basic infrastructure towards full automation
              of processes.
            </p>
          </div>
        </div>
        <div class="right">
          <img src="/images/gol4.png" alt="" />
        </div>
      </div>
      <div class="center_next">
        <div class="next">Next</div>
      </div>
    </div>

    <div class="hold">
      <div class="grid">
        <div class="left">
          <img src="/images/gol5.png" alt="" />
        </div>
        <div class="right">
          <div class="left_div">
            <h6>Discussions</h6>
            <p>
              Facilitating more robust discussions between investors and the
              government with a view to building linkages for investments and
              job creation
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
            <h6>Industrialization</h6>
            <p>
              Paving the way for industrialization and tech-related investments
              in the State.
            </p>
          </div>
        </div>
        <div class="right">
          <img src="/images/gol6.png" alt="" />
        </div>
      </div>
      <div class="center_next">
        <div class="next">Next</div>
      </div>
    </div>

    <div class="hold">
      <div class="grid">
        <div class="left">
          <img src="/images/gol7.png" alt="" />
        </div>
        <div class="right">
          <div class="left_div">
            <h6>Job Creation</h6>
            <p>
              Continuous improvement of the business environment for economic
              viability and creation of jobs.
            </p>
          </div>
        </div>
      </div>
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
  font-size: 30px;
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
