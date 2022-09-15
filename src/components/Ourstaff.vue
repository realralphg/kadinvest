<template>
  <div class="">
    <div class="team">
      <!-- <h2 class="text-primary">Our Team</h2> -->
      <!-- <p class="desc">Our tranined staff</p> -->
      <div class="grid">
        <figure
          v-for="(host, index) in hosts"
          :key="index"
          class="effect-sadie"
        >
          <img :src="host.img" alt="img02" />
          <figcaption>
            <h2>
              <span class="title"> {{ host.title }}</span> <br />
              <span class="name"> {{ host.name }}</span> <br />
              <span class="office">
                {{ host.office }}
              </span>
            </h2>
            <p @click="toggleBio(host)">Read Bio</p>
          </figcaption>
        </figure>
      </div>

      <header class="headingg">
        <div class="abt">
          <h2 class="about">Meet the Speakers</h2>
        </div>
      </header>
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
      <header class="headingg">
        <div class="abt">
          <h2 class="about">Meet the Special Guests</h2>
        </div>
      </header>
      <div class="grid">
        <figure
          v-for="(guest, index) in guests"
          :key="index"
          class="effect-sadie"
        >
          <img :src="guest.img" alt="img02" />
          <figcaption>
            <h2>
              <span class="title"> {{ guest.title }}</span> <br />
              <span class="name"> {{ guest.name }}</span> <br />
              <span class="office">
                {{ guest.office }}
              </span>
            </h2>
            <p @click="toggleBio(guest)">Read Bio</p>
          </figcaption>
        </figure>
      </div>
    </div>
    <q-dialog full-width v-model="speakerDialog">
      <q-card style="height: 500px; width: 100%" class="dialog_wid">
        <div class="delp row">
          <div class="img col-md-6 col-sm-12 col-xs-12">
            <q-card-section>
              <q-img height="500px" :src="profile.img" alt="" class="imgg" />
            </q-card-section>
          </div>

          <!-- <q-separator /> -->
          <div class="col-md-6 q-pa-md col-sm-12 col-xs-12">
            <q-card-section class="scroll">
              <div class="detr">
                <h5 class="text-weight-bold">{{ profile.name }}</h5>
              </div>

              <q-scroll-area style="height: 400px">
                <p class="mk-lead">
                  {{ profile.profile }}
                </p>
              </q-scroll-area>
            </q-card-section>
          </div>
        </div>

        <!-- <q-separator /> -->

        <q-card-actions class="absolute-bottom" align="right">
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
      hosts: [
        {
          img: "/images/el.png",

          title: "HIS EXCELLENCY",
          name: "Mallam Nasir Ahmad El Rufai,OFR",
          office: "Governor of Kaduna State",
          profile:
            "Malam Nasir Ahmad El-Rufai is the 22nd executive Governor of Kaduna State, Nigeria. Before then, he had served the country in different capacities. First, he served as the Director General of Bureau of Public Enterprises. He also served as the Head of Privatisation agency in Nigeria. See Also: Biography, Net Worth And Career Of Seyi Makinde, the 28th Governor Of Oyo State El-Rufai Backgroun.El-Rufai was born on February 16, 1960 in Daudawa of Faskari Local Government Area in Katsina State. Sadly, El-Rufai lost his father when he was just 8 years old. Luckily, he got sponsored to school by an uncle in Kaduna. This is why he sites Kaduna state as his state of origin.",
        },
        {
          img: "/images/had.jpeg",

          // title: "HIS EXCELLENCY",
          name: "DR. Hadiza Sabuwa Balarabe",
          office: "Deputy Governor, Kaduna State",
          profile:
            "The Kaduna state deputy governor, Hadiza Sabuwa Balarabe was born 1966, to the family of alhaji abubakar balarabe, sanga local government in Kaduna state, had a secondary school education in girls college soba. Further studied medicine in University of maiduguri. Dr. Hadiza have Masters in public health.She worked as senior Registerar at the Ahmadu Bello University Teaching Hospital, when she proceeded to Federal Capital Territory in 2014 where she served as Director of the public health, she was executive secretary of the kaduna state primary health care development agency.Hadiza balarabe, a mother of four children for one husband, has been very active in governance, she is a good leader which have paved way into politics for women, Dr. Hadiza who is the first Deputy governor of Kaduna state. ",
        },
      ],
      speakers: [
        {
          img: "/images/white.jpeg",
          // title: "HIS HIGHNESS",
          name: "Alok Gupta",
          office: "Group Managing Director, African Industries Group",
          profile:
            "Alok Gupta, currently, serves as Senior Associate Dean of Faculty, Research and Administration at the Carlson School of Management, University of Minnesota.  He holds Curtis L. Carlson Schoolwide Chair in Information Management.  He is responsible for school’s $120 MM budget, faculty hiring, review and evaluations, research infrastructure, IT infrastructure, facility and classroom management, and academic programs management and scheduling.  He is also serving in his second term as Editor-in-Chief for Information Systems Research, a top journal in the area of information systems since January 2017.  From 2006 to 2014, he served as the Department Chair of Information and Decision Sciences department at Carlson School.  He started his academic career in 1996 as a visiting Assistant Professor at Dept. of OPIM, University of Connecticut. He received his Ph.D. in Management Science and Information from the University of Texas, Austin in 1996.  His research focuses on Economic Engineering of systems – where system design explicitly considers incentives of participants – as applied to a variety of transactional systems from Internet, real-time databases, B2B systems to e-commerce. ",
        },
        {
          img: "/images/zainab.jpeg",
          // title: "HIS EXCELLENCY",
          name: "Zainab Usman",
          office:
            "Director of the African program at the Carnegie Endowment for International Peace",
          profile:
            "Zainab Usman is a senior fellow and director of the Africa Program at the Carnegie Endowment for International Peace in Washington, D.C. Her fields of expertise include institutions, economic policy, energy policy, and emerging economies in Africa. Prior to Carnegie, Usman was at the World Bank initially as part of the prestigious Young Professionals Program and later as a public sector specialist. At the World Bank, she worked on social sustainability, policy reforms, natural resources management, and disruptive technologies. She has worked on these issues in Cote d’Ivoire, Morocco, Nigeria, Papua New Guinea, the Republic of Congo, Serbia, Tanzania, and Uzbekistan. She has also worked at the Blavatnik School of Government at the University of Oxford and has consulted for the Department of International Development (DfID) and the Office of the National Security Adviser (ONSA) in Nigeria.",
        },
      ],
      guests: [
        {
          img: "/images/king.jpeg",
          title: "HIS HIGHNESS KHALIFA",
          name: "Muhammad Sanusi II",
          office: "Vice chairman, KADIPA board",
          profile:
            "His Highness Muhammad Sanusi II was the 14th Fulani Emir of Kano, Nigeria from 2014 - 2019. His Highness studied at King’s College Lagos, then earned Bachelor’s and Master’s degrees in Economics at Ahmadu Bello University, Zaria, where he later also taught Economics. In 1985, he launched a distinguished banking career, becoming Group Managing Director of First Bank Nigeria in 2009. His Highness was appointed Governor of the Central Bank of Nigeria in 2009 at a time when the world saw the worst financial crisis since the Great Depression. He pursued a campaign against high level governmental corruption in Nigeria and pioneered the introduction of Islamic banking into the Nigerian banking sector. Alongside this work in the financial industry, His Highness pursued his scholarship in Islamic history, thought, and law. After years of private study under the tutorial of a number of learned ulama', he enrolled in the Africa International University in Khartoum, Sudan, where he earned a degree in Islamic studies and fiqh in 1997.",
        },

        {
          img: "/images/hau.jpeg",
          // title: "HIS EXCELLENCY",
          name: "Senator Uba Sani",
          office:
            "Senator, Kaduna Central, Kaduna State APC, Gubernatorial Candidate",
          profile:
            "Uba Sani (born 31 December 1970) is a Nigerian polician and the incumbent senator for Kaduna Central senatorial district of Kaduna State at the National Assembly Abuja, Nigeria.[1] He was elected on 23 February 2019 Nigerian general elections, under the platform of the All Progressive Congress (APC).[2] He defeated the incumbent senator Shehu Sani of the PRP. Uba Sani was born on December 31, 1970 in Zaria local government area of Kaduna State. After completing his early childhood and secondary education, he went to Kaduna Polytechnic where he studied mechanical engineering HND and University of Abuja for a post graduate Diploma in Business Administration and done a Masters Degree in finance at the University of Calabar in Cross River State, Nigeria. Uba Sani joined into politics after the return of Democracy in Nigeria in 1999 and supported the then president chief Olusegun Obasanjo's candidacy, after winning the presidential election, Sani was appointed Special advisor on public affairs to the president. He later worked at the federal ministry of the FCT on some advisory roles, and the Kaduna state ministry of housing and works. In 2011 Sani contested in the People's Democratic Party primaries for the Kaduna Central Senatorial seat but was defeated by Alhaji Hamisu Abubakar, and in 2015 he was appointed by the Kaduna state governor Malam Nasir Ahmad el-Rufai as the Special Assistant political and intergovernmental affairs. However in 2019, Uba Sani shone interest and contested the second time for the Kaduna Central senatorial seat under the ruling political party APC and was successfully elected senator during the February 2019 Nigeria general elections.",
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
.about {
  font-style: normal;
  font-weight: 600 !important;
  font-size: 26px !important;
  line-height: 1.3 !important;
  text-transform: none;
  color: #fff;
  text-align: left !important;
  margin: 0;
  color: #150f70 !important;
}

.headingg {
  padding: 0rem 0 1rem;
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

  padding: 1em 0 2em;

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
  letter-spacing: 0.135em;
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
