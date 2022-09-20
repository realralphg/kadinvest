<template>
  <div class="wrapper small_container">
    <div class="hold">
      <h1 class="main_text">Kadinvest 7.0 Exhibition Booth</h1>
      <p class="des">
        Kindly follow the steps to select your preferred exhibition booth
      </p>

      <div class="step_hold">
        <div class="wra">
          <div class="step step1">Step 1</div>
          <p>Click your preferred exhibition booth position</p>
        </div>
        <div class="wra">
          <div class="step step2">Step 2</div>
          <p>Fill the form below indicating the position you chose</p>
        </div>
        <div class="wra">
          <div class="step step3">Step 3</div>
          <p>Wait for a feedback from our team</p>
        </div>
      </div>

      <div class="chips">
        <div class="">
          <q-chip
            v-model:selected="desert.Icecream"
            color="primary"
            text-color="white"
            style="height: 100px; width: 98px"
            square
          >
            <h6 class="title">A1</h6>
            <p @click="toggleDialog" class="open">Open Package</p>
          </q-chip>
          <q-chip
            v-model:selected="desert.Eclair"
            color="teal"
            text-color="white"
            square
            style="height: 100px; width: 98px"
          >
            <h6 class="title">A1</h6>
            <p @click="toggleDialog" class="open">Open Package</p>
          </q-chip>
          <q-chip
            v-model:selected="desert.Cupcake"
            color="orange"
            text-color="white"
            square
            style="height: 100px; width: 98px"
          >
            <h6 class="title">A1</h6>
            <p @click="toggleDialog" class="open">Open Package</p>
          </q-chip>
          <q-chip
            v-model:selected="desert.Gingerbread"
            color="red"
            text-color="white"
            square
            style="height: 100px; width: 98px"
          >
            <h6 class="title">A1</h6>
            <p @click="toggleDialog" class="open">Open Package</p>
          </q-chip>
        </div>

        <!-- <div class="q-mt-sm">Your pick: {{ selection }}</div> -->
      </div>

      <q-dialog full-width v-model="dialog">
        <q-card
          style="height: fit-content; width: 80%"
          class="dialog_wid q-pa-md"
        >
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
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="responseModal" persistent>
        <div class="hold_dia">
          <div class="top">
            <div class="icon">
              <img src="/images/logo.png" alt="" />
            </div>

            <p class="text-subtitle6 text-accent">
              Your Exhibition Booth Has Been Successfully Booked
            </p>
            <small class="q-mt-xs" style="font-style: italic">
              Kindly, await a confirmation message from our team</small
            >
          </div>

          <q-card-actions align="center">
            <q-btn
              style="border-radius: 8px"
              class="bg-accent q-px-lg q-pt-xl q-pb-md text-white"
              flat
              to="/home"
              label="Go home"
              color="primary"
            />
          </q-card-actions>
        </div>
      </q-dialog>
    </div>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    const desert = reactive({
      Icecream: false,
      Eclair: true,
      Cupcake: false,
      Gingerbread: false,
    });

    return {
      desert,
      selection: computed(() => {
        return Object.keys(desert)
          .filter((type) => desert[type] === true)
          .join(", ");
      }),
    };
  },
  data() {
    return {
      responseModal: false,
      dialog: false,
      plan: [],
      data: {},
      errors: [],
    };
  },

  methods: {
    toggleDialog() {
      this.dialog = true;
    },

    submit() {
      this.$q.loading.show();
      this.loading = true;

      this.$api
        .post("get/form-data/4", { data: this.data })
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
p {
  margin-bottom: 0;
}
.icon img {
  width: 80px;
}

.hold_dia {
  background: white;
  padding: 1rem;
}
.hold_dia i {
  font-size: 3rem;
  color: #4bb543;
}

.hold_dia h4 {
  font-size: 1rem;
  line-height: 1.1;
  color: #4bb543;
}

.hold_dia .top {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.hold {
  padding-top: 10rem;
}
.main_text {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #2d25a6;
}

h6.title {
  font-weight: 700;
  font-size: 34.9833px;
  line-height: 117%;
  text-align: center;
  color: #ffffff;
}
.des {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 190%;
  text-align: center;
  text-transform: capitalize;
  color: #3a1f12;
}

.chips {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.step_hold {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
}
.step {
  font-style: normal;
  font-weight: 700;
  font-size: 41.1429px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wra {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.step1 {
  background: #0594fa;
  border-radius: 328.714px;
}
.step2 {
  background: #00a250;
  border-radius: 328.714px;
}
.step3 {
  background: #1f1b5e;
  border-radius: 486.02px;
}

.wrap p {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #080808;
}
p.open {
  font-weight: 400;
  font-size: 7.56395px;
  line-height: 117%;
  text-align: center;
  text-decoration-line: underline;

  color: #ffffff;
}

.error {
  color: red;
  font-size: 13px;
  text-align: right;
  margin: 0.5rem 0;
}

.form_area {
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
