<template>
  <div class="">
    <div class="team">
      <!-- <h2 class="text-primary">Our Team</h2> -->
      <!-- <p class="desc">Our tranined staff</p> -->
      <div class="grid">
        <figure
          v-for="(speaker, index) in speakers"
          :key="index"
          class="effect-sadie"
        >
          <img :src="speaker.img" alt="img02" />
          <figcaption>
            <h2>
              <span class="title"> {{ speaker.title }}</span> <br />
              <span class="name"> {{ speaker.name }}</span> <br />
              <span class="office">
                {{ speaker.office }}
              </span>
            </h2>
            <p @click="toggleBio(speaker)">Read Bio</p>
          </figcaption>
        </figure>
      </div>
    </div>
    <q-dialog full-width v-model="speakerDialog">
      <q-card style="height: 50%; width: 70%" class="dialog_wid">
        <div class="delp row">
          <div class="img col-md-6 col-sm-12 col-xs-12">
            <q-card-section>
              <img :src="profile.img" alt="" class="imgg" />
            </q-card-section>
          </div>

          <!-- <q-separator /> -->
          <div class="col-md-6 q-pa-md col-sm-12 col-xs-12">
            <q-card-section class="scroll">
              <div class="detr">
                <h5 class="text-weight-bold">{{ profile.name }}</h5>
              </div>
              <p class="mk-lead">
                {{ profile.profile }}
              </p>
            </q-card-section>
          </div>
        </div>

        <!-- <q-separator /> -->

        <q-card-actions align="right">
          <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
          <q-btn
            class="bg-dark white q-pa-sm text-white"
            flat
            icon="close"
            color="white"
            label=""
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: [],
      speakerDialog: false,
      speakers: [
        {
          img: "/images/speaker1.png",

          title: "HIS EXCELLENCY",
          name: "Muhammadu Sanusi II",
          office: "Executive Governor, Kaduna State",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },

        {
          img: "/images/speaker6.png",
          title: "HIS HIGHNESS",
          name: "Muhammadu Sanusi II",
          office: "Vice Chairman, KADIPA",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },

        {
          img: "/images/speaker2.png",
          title: "HIS EXCELLENCY",
          name: "Muhammadu Sanusi II",
          office: "Executive Governor, Kaduna State",

          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },
        {
          img: "/images/speaker3.png",
          title: "HIS EXCELLENCY",
          name: "Muhammadu Sanusi II",
          office: "Executive Governor, Kaduna State",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },
        {
          img: "/images/speaker4.png",
          title: "HIS EXCELLENCY",
          name: "Muhammadu Sanusi II",
          office: "Executive Governor, Kaduna State",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },
        {
          img: "/images/speaker5.png",
          title: "HIS EXCELLENCY",
          name: "Muhammadu Sanusi II",
          office: "Executive Governor, Kaduna State",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },
      ],
    };
  },

  methods: {
    toggleBio(speakerMember) {
      this.speakerDialog = true;
      this.profile = speakerMember;
    },
  },
};
</script>

<style scoped>
.team {
  padding: 2rem 0 0;
}
.team h2 {
  color: #000;
  font-size: 60px;
  font-weight: 100;
  line-height: 72px;
  text-align: center;
}
.delp p {
  font-size: 1.1rem;
  line-height: 1.5;
}
.delp h5 {
  font-weight: 400;
  font-size: 21px;
  line-height: 123.5%;
  letter-spacing: 0.335em;
  text-transform: capitalize;
  color: #00a250;
  margin-bottom: 1rem;
}

.delp img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p.desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 179.4%;
  color: rgba(51, 51, 51, 0.92);
  text-align: center;
  margin: 1rem 0;
}
.white {
  color: white !important;
}
.team {
  position: relative;
}

/* .team::before {
  content: "";
  position: absolute;
  background: rgba(217, 217, 217, 0.4);
  filter: blur(2px);
  width: 120%;
  left: -10%;
  height: 20%;
  top: -1%;
}
.team::after {
  content: "";
  position: absolute;
  background: #ffffff;
  filter: blur(2px);
  width: 105%;
  left: -2%;
  top: 2%;
  height: 20%;
} */
.grid {
  position: relative;

  padding: 1em 0 4em;

  list-style: none;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  align-items: center;
  gap: 1rem;
  z-index: 10;
}

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 300px;
  max-width: 480px;
  max-height: 360px;
  width: 100%;
  /* background: #3085a3; */
  text-align: center;
  cursor: pointer;
}

.grid figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  /* opacity: 0.8; */
  border-radius: 15px;
  width: 100%;
  height: 350px;
  object-fit: cover;
}

span.title {
  font-weight: 400;
  font-size: 18px;
  line-height: 123.5%;
  text-align: center;
  letter-spacing: 0.335em;
  text-transform: capitalize;
  color: #ffffff;
}
span.name {
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 123.5% !important;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
  letter-spacing: 0.0635em;
}
span.office {
  font-weight: 700 !important;
  font-size: 14px !important;
  line-height: 123.5% !important;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
  letter-spacing: 0.0635em;
  font-style: italic !important;
}

.grid figure figcaption {
  padding: 2em;
  /* border-radius: 15px; */
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: linear-gradient(
    180.14deg,
    rgba(0, 0, 0, 0.04) 26.82%,
    #00a250 99.88%
  );
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure h2 span {
  font-style: normal;
  font-weight: 400;
  font-size: 11.4185px;
  line-height: 13px;

  color: #ffffff;
}
figure.effect-sadie {
  opacity: 1;
}
figure.effect-sadie:hover {
  opacity: 0.9;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
  font-size: 20px;
  padding: 0.6rem;
  text-decoration: underline;
}
.grid figure p i {
  font-size: 25px;
  margin: 0 1rem;
}

figure.effect-sadie figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  content: "";
  opacity: 0;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}

figure.effect-sadie h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 19.5746px;
  line-height: 23px;
  color: #ffffff;
  position: absolute;
  bottom: -20%;
  padding: 2rem 0;
  left: 0;
  width: 100%;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

figure.effect-sadie figcaption::before,
figure.effect-sadie p {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-sadie p {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}

figure.effect-sadie:hover h2 {
  color: #fff;
  -webkit-transform: translate3d(0, -280%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -280%, 0) translate3d(0, -40px, 0);
  background: none;
}

figure.effect-sadie:hover figcaption::before,
figure.effect-sadie:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 0, 0);
}

@media (min-width: 1300px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
@media (max-width: 800px) {
  .grid figure {
    min-width: 250px;
    width: 100%;
  }
  .grid {
    position: relative;
    /* margin: 0 auto; */
    padding: 1em 0 4em;
    max-width: 1100px;
    list-style: none;
    text-align: center;
    /* width: 350px; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    gap: 0.65rem;
  }
}
@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
