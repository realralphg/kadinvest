<template>
  <div class="wrapper small_container">
    <div class="hold">
      <h6 class="small_text">KADINVEST 7.0</h6>
      <h3>
        You can attend in <br />
        the Metaverse
      </h3>

      <div class="images_sec">
        <div class="images_hold">
          <div class="img mal_meta">
            <img class="gov" src="/images/malmeta.jpeg" alt="" />
            <img class="emoji emoji1" src="/images/emoji1.png" alt="" />
          </div>
          <div></div>
          <img class="bump" src="/images/bump.png" alt="" />
          <div class="img">
            <img class="es" src="/images/secretary.png" alt="" />

            <img class="emoji emoji2" src="/images/emoji2.png" alt="" />
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
.hold {
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 45.12px;
  line-height: 98.5%;
  text-align: center;
  text-transform: capitalize;
  color: #1f1b5e;
}
h6.small_text {
  color: #00a250;
  font-style: normal;
  font-weight: 600;
  font-size: 18.12px;
  line-height: 110%;
  letter-spacing: 0.4em;
  margin-bottom: 1rem;
}

.images_sec {
  padding-top: 5rem;
  width: 100%;
}
.images_hold {
  display: flex;
  justify-content: space-between;
}
.images_hold .img {
  position: relative;
  height: 100%;
  width: 30%;
}

.images_hold .img .emoji {
  position: absolute;
  bottom: -12%;
  left: 35%;
}

.emoji2 {
  width: 80px;
  background: #dbd1fc;
  box-shadow: 8px -5px 64px 7px rgba(0, 0, 0, 0.15);
  border-radius: 3.62264px;
}
.emoji1 {
  width: 80px;
  background: #d7d7d9;
  box-shadow: 8px -5px 64px 7px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

.bump {
  width: 60%;
  height: 3%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.mal_meta img.gov,
.img img.es {
  object-fit: cover;
  height: 250px;
  border-radius: 5px;
}
@media (max-width: 1025px) {
  .images_sec {
    width: 100%;
  }

  .emoji2 {
    left: unset !important;
    right: 0 !important;
  }
  .emoji1 {
    left: 0 !important;
  }
}

@media (max-width: 800px) {
  .bump {
    width: 100%;
  }

  .images_hold .img {
    width: 40%;
  }
}
@media (max-width: 600px) {
  .emoji,
  .emoji2 {
    width: 40px;
  }
  .mal_meta img.gov,
  .img img.es {
    object-fit: cover;
    height: 178px;
    border-radius: 5px;
  }
}
@media (max-width: 320px) {
  .images_hold .img .emoji {
    width: 50px;
  }

  .bump {
    height: 300px;
  }
  h3 {
    font-size: 35.12px;
  }
}
</style>
