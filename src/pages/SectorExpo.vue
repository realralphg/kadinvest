<template>
  <div class="wrapperr">
    <div class="hold small_container">
      <!-- <div class="card_wrapper"></div> -->
      <h2 class="head">Sector Expo Program of Events</h2>

      <div class="q-py-lg q-mt-lg" style="max-width: 100%; width: 100%">
        <q-list bordered class="rounded-borders">
          <q-expansion-item>
            <template v-slot:header>
              <q-item-section> 3D Map </q-item-section>
            </template>

            <q-card>
              <img src="/images/3d.jpeg" alt="" />
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section>
                INFRASTRUCTURE SECTOR EXPO DRAFT POE
              </q-item-section>
            </template>

            <q-card>
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vSaWmwGe_KOSzXseAIaw9lCAMvTPup-LItd2v76LUYPrWTzpVBcx5alHQQEi93dQhEdauKS5P8BrHXL/pub?embedded=true"
                frameborder="0"
                width="100%"
                height="500"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>

              <div class="text-center">
                <a
                  href="/images/INFRASTRUCTURE SECTOR EXPO DRAFT POE.pdf"
                  download="INFRASTRUCTURE SECTOR EXPO DRAFT POE"
                  class="link text-white"
                >
                  <q-btn class="dwn q-py-lg q-mb-lg bg-primary text-white">
                    Download
                  </q-btn></a
                >
              </div>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section>
                AGRICULTURE SECTOR EXPO DRAFT POE
              </q-item-section>
            </template>

            <q-card>
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vSl_IgoYZZoQ2XGJb8cUUPk5-dowmPcaj-d-IfEFpmXk6Cf7ZX4sZSRXD7R6PCf8z60-S0bcR9daRKA/pub?embedded=true"
                frameborder="0"
                width="100%"
                height="500"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>

              <div class="text-center">
                <a
                  href="/images/AGRICULTURE SECTOR EXPO DRAFT POE.pdf"
                  download="AGRICULTURE SECTOR EXPO DRAFT POE"
                  class="link text-white"
                >
                  <q-btn class="dwn q-py-lg q-mb-lg bg-primary text-white">
                    Download
                  </q-btn></a
                >
              </div>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item>
            <template v-slot:header>
              <q-item-section> SOLID MINERALS & OTHERS POE </q-item-section>
            </template>

            <q-card>
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vS2EmrwHLLzCAnDZ4P7fQvhE4GL6DUb_eVHpPHIOrkFOZfA_lSVWUMVwOwQCVGA8VDVUJ6kolAdk3L9/pub?embedded=true"
                frameborder="0"
                width="100%"
                height="500"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>

              <div class="text-center">
                <a
                  href="/images/SOLID MINERALS & OTHERS POE.pdf"
                  download="SOLID MINERALS & OTHERS POE"
                  class="link text-white"
                >
                  <q-btn class="dwn q-py-lg q-mb-lg bg-primary text-white">
                    Download
                  </q-btn></a
                >
              </div>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item>
            <template v-slot:header>
              <q-item-section>
                TECHNOLOGY SECTOR EXPO DRAFT POE
              </q-item-section>
            </template>

            <q-card>
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vTPcJ_bf1br3PlGi4KVFiIzUWiC3O7BGTkDGJS5OUpdGRBfqagfvO4vyRtCO0W_eIZnehX5Gk5CV_XE/pub?embedded=true"
                frameborder="0"
                width="100%"
                height="500"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>

              <div class="text-center">
                <a
                  href="/images/TECHNOLOGY SECTOR EXPO DRAFT POE.pdf"
                  download="TECHNOLOGY SECTOR EXPO DRAFT POE"
                  class="link text-white"
                >
                  <q-btn class="dwn q-py-lg q-mb-lg bg-primary text-white">
                    Download
                  </q-btn></a
                >
              </div>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>

    <!-- <div class="become">
      <div class="werap small_container">
        <header class="heading">
          <div class="abt">
            <h2 class="about">Become</h2>
            <h2 class="about">A Sponsor</h2>
          </div>

          <div class="line"></div>
        </header>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,32L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div id="sponsorPackages" class="form_area">
      <h6>Select your prefered package</h6>

      <div class="form_style">
        <div class="form_img flex justify-center">
          <img src="/images/logo.png" alt="" />
        </div>
        <form @submit.prevent="submit" action="">
          <div class="q-my-md">
            <div class="input_wrap">
              <label for="name"> Name: </label>
              <input
                v-model="data.name"
                name="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div class="error" v-if="errors['data.name']">
              {{ errors["data.name"][0] }}
            </div>
          </div>
          <div class="q-my-md">
            <div class="input_wrap">
              <label for="company"> Company: </label>
              <input
                v-model="data.company"
                type="text"
                name="company"
                placeholder="John Doe and sons"
              />
            </div>
            <div class="error" v-if="errors['data.company']">
              {{ errors["data.company"][0] }}
            </div>
          </div>

          <div class="q-my-md">
            <div class="input_wrap">
              <label for="email"> Email: </label>
              <input
                v-model="data.email"
                type="text"
                name="email"
                placeholder="johndoe@yourmail.com"
              />
            </div>
            <div class="error" v-if="errors['data.email']">
              {{ errors["data.email"][0] }}
            </div>
          </div>

          <div class="q-my-md">
            <div class="input_wrap">
              <label for="phone"> Phone Number: </label>
              <input
                v-model="data.phone"
                name="phone"
                type="text"
                placeholder="00000000"
              />
            </div>
            <div class="error" v-if="errors['data.phone']">
              {{ errors["data.phone"][0] }}
            </div>
          </div>
          <div class="q-my-md">
            <div class="input_wrap">
              <textarea
                v-model="data.message"
                name="message"
                id=""
                placeholder="Type Your Message Here..."
              >
              </textarea>
            </div>
            <div class="error" v-if="errors['data.message']">
              {{ errors["data.message"][0] }}
            </div>
          </div>

          <div class="flex q-my-lg justify-end">
            <q-btn type="submit" class="btnn"> Send Message</q-btn>
          </div>
        </form>
      </div>
    </div> -->
    <q-dialog full-width v-model="dialog">
      <q-card
        style="height: fit-content; width: 80%"
        class="dialog_wid q-pa-md"
      >
        <div class="delp">
          <Table />
        </div>
      </q-card>
    </q-dialog>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Table from "../components/Table.vue";

export default {
  components: {
    Footer,
    Table,
  },
  data() {
    return {
      dialog: false,
      plan: [],
      data: {},
      errors: [],
    };
  },
  methods: {
    toggleDialog(plan) {
      this.dialog = true;
      this.plan = plan;
    },
    getPackage() {
      document
        .getElementById("sponsorPackages")
        .scrollIntoView({ behavior: "smooth" });
    },

    submit() {
      this.$q.loading.show();
      this.loading = true;

      this.$api
        .post("get/form-data/2", { data: this.data })
        .then((resp) => {
          this.$q.loading.hide();
          console.log(resp);
          this.$q.notify({
            message: "Submission Successful",
            color: "green",
            position: "top",
            timeout: 3000,
          });

          this.data = {};

          document.getElementById("appForm").reset();
        })
        .catch(({ response }) => {
          this.$q.loading.hide();
          this.errors = response.data.errors;
          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          setTimeout(() => {
            this.errors = [];
          }, 5000);
        });
    },
  },
};
</script>

<style scoped>
.wrapperr {
  padding: 10rem 0 0rem;
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
  padding: 4rem 0 50% !important;
  /* padding-bottom: 20%; */
}
.hold {
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error {
  color: red;
  font-size: 13px;
  text-align: right;
  margin: 0.5rem 0;
}

.pack {
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  text-align: center;
  color: #3a1f12;

  margin-top: 2rem;
}
h2.head {
  font-weight: 700;
  font-size: 60px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #1f1b5e;
}

.main_card {
  background: #00a250;
  box-shadow: 0px 4px 54px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10.8959px;
  position: relative;
  min-height: 450px;
  width: 100%;
  margin-bottom: 2rem;
}

/* small cards */
.Omain_card {
  border-radius: 6.40068px;
  position: relative;
  min-height: 250px;
  width: 100%;
  margin-bottom: 2rem;
}

.Omain_card img {
  position: absolute;
  width: 70px;
  top: -15%;
  left: 50%;
  padding: 1rem;
  transform: translateX(-50%);
  background: #ffffff;
  box-shadow: 0px 20.7647px 71.878px 20.7647px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  height: 70px;
}

.main_card img {
  position: absolute;
  width: 130px;
  top: -15%;
  left: 50%;
  padding: 1rem;
  transform: translateX(-50%);
  background: #ffffff;
  box-shadow: 0px 20.7647px 71.878px 20.7647px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  height: 130px;
}

.other_cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  gap: 3rem;
  padding-top: 8rem;
}
.become {
  margin-top: 4rem;
  /* padding-bottom: 10rem; */
  background: linear-gradient(180deg, #150f70 0%, #463cdf 100%);
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
}

.form_area {
  margin-top: -50%;
  padding-bottom: 3%;
}

.form_area h6 {
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  text-align: center;
  color: #ffffff;
  padding: 0 2rem;
}

.form_style {
  background: #ffffff;
  box-shadow: 0px 4px 54px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4.74624px;
  width: 50%;
  max-width: 50%;
  margin: 2rem auto;
  padding: 2.6rem;
}
.form_style img {
  width: 80px;
}

.input_wrap {
  /* margin: 2rem 0; */
  display: flex;
  align-items: center;
  gap: 3rem;
}
.input_wrap input,
select,
textarea {
  background: #eeeeee;
  border: 0.59328px solid #979797;
  border-radius: 4.74624px;
  padding: 0.5rem;
  flex: 3;
  width: 100%;
}
textarea {
  height: 100%;
}
select {
  font-weight: 500;
  font-size: 11.8656px;
  line-height: 117%;
  color: rgba(31, 27, 94, 0.2);
}

label {
  font-weight: 500;
  font-size: 11.8656px;
  line-height: 117%;
  /* text-align: center; */
  color: #1f1b5e;
  flex: 1;
}
::placeholder {
  font-weight: 500;
  font-size: 11.8656px;
  line-height: 117%;
  color: rgba(31, 27, 94, 0.2);
}

.btnn {
  padding: 9.49248px 14.832px;
  gap: 5.93px;
  background: #00a250;
  border-radius: 2.37312px;
  font-weight: 500;
  font-size: 11.8656px;
  line-height: 117%;
  text-align: center;
  color: #ffffff;
}
@media (min-width: 1300px) {
  .other_cards {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}
@media (max-width: 800px) {
  .form_style {
    width: 80%;
  }
  .input_wrap {
    gap: 1rem;
  }
  h2.head {
    font-size: 50px;
  }
  h2.amt {
    font-size: 45px;
  }
}
@media (max-width: 700px) {
  .form_style {
    width: 90%;
    padding: 1rem;
    max-width: 90%;
  }
  .wrapperr {
    padding: 12rem 0 0rem;
  }
}
</style>
