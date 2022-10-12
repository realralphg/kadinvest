<template>
  <div class="wrapperr">
    <div class="hold small_container">
      <!-- <div class="card_wrapper"></div> -->
      <h2 class="head">Onsite Registration For Summit</h2>

      <div id="sponsorPackages" class="form_area">
        <!-- <h6>Select your prefered package</h6> -->

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
                <label for="company"> Organization: </label>
                <input
                  v-model="data.organization"
                  type="text"
                  name="organization"
                  placeholder="John Doe and sons"
                />
              </div>
              <div class="error" v-if="errors['data.organization']">
                {{ errors["data.organization"][0] }}
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
              <q-btn type="submit" class="btnn"> Register</q-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
    <q-dialog v-model="responseModal" persistent>
      <q-card class="q-pa-md">
        <div class="hold_dia">
          <div class="top">
            <div class="icon">
              <i
                style="font-size: 4rem"
                class="fa-duotone text-green fa-check"
              ></i>
            </div>

            <p class="text-subtitle6 text-black">
              Dear {{ personData.name }} you have successfully <br />
              registered for KADINVEST 7.0 Summit.
            </p>
          </div>

          <q-card-actions align="center">
            <q-btn
              style="border-radius: 8px"
              class="bg-accent q-px-lg q-pt-xl q-pb-md text-white"
              flat
              v-close-popup
              label="Close"
              color="primary"
            />
          </q-card-actions>
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
      personData: [],
      responseModal: false,
    };
  },
  methods: {
    toggleDialog(plan) {
      this.dialog = true;
      this.plan = plan;
    },

    submit() {
      this.$q.loading.show();
      this.loading = true;

      this.$api
        .post("get/form-data/5", { data: this.data })
        .then((resp) => {
          this.$q.loading.hide();
          console.log(resp);
          this.personData = resp.data.data;
          this.$q.notify({
            message: "Submission Successful",
            color: "green",
            position: "top",
            timeout: 3000,
          });

          this.responseModal = true;

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

.error {
  color: red;
  font-size: 13px;
  text-align: right;
  margin: 0.5rem 0;
}

h2.head {
  font-weight: 700;
  font-size: 60px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #1f1b5e;
}

.become {
  margin-top: 4rem;
  /* padding-bottom: 10rem; */
  background: linear-gradient(180deg, #150f70 0%, #463cdf 100%);
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.form_area {
  width: 100%;
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
  border-radius: 4.74624px;
  margin: 2rem auto;
  width: 50%;
}
.form_style img {
  width: 80px;
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
  /* gap: 5.93px; */
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
  h2.head {
    font-size: 50px;
  }
  h2.amt {
    font-size: 45px;
  }
}
@media (max-width: 700px) {
  .wrapperr {
    padding: 8rem 0 0rem;
  }
  .form_style {
    width: 100%;
  }
}
</style>
