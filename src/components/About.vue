<template>
  <div ref="about" class="wrapper section">
    <!-- <p class="text-white">
      {{ this.$store.animate.refs }}
    </p> -->
    <div class="hold small_container">
      <header class="heading">
        <div class="abt">
          <h2 class="about">About</h2>
          <h2 class="about">The Summit</h2>
        </div>

        <div class="line"></div>
      </header>
      <div class="paragraphs">
        <div class="left">
          <p>
            KADINVEST 7.0 would be the 7th edition of this programme and it is
            targeted at efforts undertaken to build a resilient economy in
            Kaduna across the state's priority sectors. This event is intended
            to attract the private sector, domestic and international investors,
            policymakers, members of the general public, and civil society to
            brainstorm and continue the discussion on how to position and
            sustain Kaduna State as the number one investment destination in
            Africa and certainly, the World. Since there are significant
            opportunities to be tapped in Kaduna State due to its abundant
            natural and human resources, infrastructure, and conducive business
            environment, this event would function as a roundtable for critical
            stakeholders to express their peculiar concerns and suggest possible
            solutions to achieve sustainable economic growth in the State. The
            event will further highlight the key economic pillars of the SDP,
            namely developing the digital economy, focusing on value added
            economic activities and infrastructural development. KADINVEST 7.0
            will also showcase projects such as the development of a technology
            city to meet the increased demand for ICT skills and a need to
            cluster remote workers for efficiency gains in the sector.
          </p>
        </div>
        <div class="right">
          <img src="/images/tweet.png" alt="" />
          <img src="/images/tweet.png" alt="" />
        </div>
      </div>

      <div class="imgs">
        <div class="bottom_images">
          <img src="/images/khalil.png" class="im image1" alt="" />
          <div class="bgh">
            <img src="/images/ror.png" class="im image2" alt="" />
          </div>
          <img src="/images/mallam.png" class="im image3" alt="" />
          <a href="" class="download text-white q-pa-md"> Download </a>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,288L1440,0L1440,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.animate.refs.push(this.$refs);
    console.log(this.$store.animate.refs);
    // console.log(this.$refs.about);
  },
};
</script>

<style scoped>
.wrapper {
  background: linear-gradient(180deg, #150f70 0%, #463cdf 100%);
  position: relative;
}
.about {
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 108.5%;
  text-transform: capitalize;
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

.paragraphs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-bottom: 22rem;
}
.paragraphs p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 190%;
  text-align: justify;
  text-transform: capitalize;
  color: #ffffff;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.right img {
  width: 60%;
  margin: 0 auto;
}
.imgs {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom_images {
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: -7%;
}

.bottom_images .image2 {
  width: 100%;
  z-index: 10;
  /* transform: rotate(-13deg); */
  position: relative;
  transition: all 0.5s ease-in-out;
}

.bottom_images .image1 {
  width: 80%;
  position: absolute;
  bottom: 20%;
  left: -28%;
  z-index: 9;
}
.im {
  transition: all 0.5s ease-in-out;
}
.bottom_images .im:hover {
  z-index: 200;
  transform: scale(1.1);
  cursor: pointer;
}
.bottom_images .image2:hover {
  transform: rotate(13deg);
}

.bottom_images .image3 {
  width: 65%;
  position: absolute;
  bottom: 20%;
  right: -25%;
  z-index: 9;
}
.download {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  border-radius: 10px;
  background: olive;
}

.bottom_images:hover .download {
  z-index: 500;
}
.bottom_images .image2:hover .bgh {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  left: 16%;
  transform: translateX(-50%);
  width: 390px;
  height: 600px;
  cursor: pointer;
  transform: scale(1.1);
  background: rgba(45, 37, 166, 0.68);
  transform: rotate(-13deg);
  z-index: 100;
}

@media (max-width: 1281px) {
  .line {
    width: 50%;
  }
  .right img {
    width: 80%;
  }
}
@media (max-width: 1024px) {
  .bottom_images .image1 {
    width: 50%;
    position: absolute;
    bottom: 20%;
    left: -13%;
    z-index: 9;
  }
  .bottom_images .image3 {
    width: 45%;
    position: absolute;
    bottom: 20%;
    right: 5%;
    z-index: 9;
  }
}
@media (max-width: 800px) {
  .paragraphs {
    grid-template-columns: 1fr;
    padding-bottom: 15rem;
  }
  .heading {
    flex-wrap: wrap;
  }
  .right {
    margin-bottom: 20rem;
  }
  .right img {
    width: 70%;
  }
  .bottom_images {
    width: 90%;
  }
  .bottom_images .image2 {
    width: 100%;
  }
  .bottom_images .image3 {
    right: -15%;
  }
}

/* @media (max-width: 800px) {
  .paragraphs {
    grid-template-columns: 1fr;
    padding-bottom: 25rem;
  }
} */
@media (max-width: 550px) {
  .paragraphs {
    padding-bottom: 7rem;
  }
  .right {
    margin-bottom: 10rem;
  }
}

@media (max-width: 320px) {
  .paragraphs {
    padding-bottom: 17rem;
  }
  .bottom_images {
    bottom: -2%;
  }
}
</style>
