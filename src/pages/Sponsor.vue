<template>
  <div class="wrapperr">
    <div class="hold small_container">
      <div class="card_wrapper">
        <div class="main_card">
          <img src="/images/logo.png" alt="" />
          <h1 class="main_text">MAIN SPONSOR</h1>
          <p class="price q-mt-xl">Price</p>
          <h2 class="amt q-mb-xl">N25,000,000</h2>
          <p @click="toggleDialog" class="open">Open Package</p>
        </div>
        <p class="pack">There is a package for everyone</p>
        <h2 class="text-center head">
          Other Sponsorship <br />
          Packages
        </h2>
      </div>
    </div>
    <div class="other_cards small_container">
      <div v-for="(card, index) in cards" :key="index" class="Omain_card">
        <img src="/images/prize.png" alt="" />
        <h1 class="Omain_text">{{ card.main }}</h1>
        <p class="Oprice q-mt-lg">{{ card.price }}</p>
        <h2 class="Oamt q-mb-lg">{{ card.amt }}</h2>
        <p @click="toggleDialog" class="Open">Open Package</p>
      </div>
    </div>

    <div class="become">
      <div class="werap small_container">
        <header class="heading">
          <div class="abt">
            <h2 class="about">Become</h2>
            <h2 class="about">A Sponsors</h2>
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
    <div class="form_area">
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
              <label for="plan"> Select Plan: </label>
              <select v-model="data.plan" name="plan" placeholder="John Doe">
                <option>Select Your Sponsorship Package</option>
                <option value="Diamond">Diamond</option>
                <option value="Platinum">Platinum</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Bronze">Bronze</option>
                <option value="Submit Network">Submit Network</option>
              </select>
            </div>
            <div class="error" v-if="errors['data.plan']">
              {{ errors["data.plan"][0] }}
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
      cards: [
        {
          main: "DIAMOND",
          price: "PRICE",
          amt: "15,000,000",
        },
        {
          main: "PLATIUM",
          price: "PRICE",
          amt: "10,000,000",
        },
        {
          main: "GOLD",
          price: "PRICE",
          amt: "5,000,000",
        },
        {
          main: "SILVER",
          price: "PRICE",
          amt: "1,000,000",
        },
        {
          main: "BRONZE",
          price: "PRICE",
          amt: "2,000,000",
        },
        {
          main: "SUMMIT NETWORK",
          price: "PRICE",
          amt: "Service in kind",
        },
      ],
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
  padding: 15rem 0 0rem;
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
.main_text {
  font-weight: 900;
  font-size: 34.0381px;
  line-height: 117%;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
  padding-top: 7rem;
}
.Omain_text {
  font-weight: 900;
  font-size: 19.9953px;
  line-height: 117%;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
  padding-top: 4rem;
}
.Oprice {
  font-weight: 700;
  font-size: 11.2844px;
  line-height: 117%;
  text-align: center;
  letter-spacing: 0.8em;
  color: rgba(255, 255, 255, 0.43);
}
.Oamt {
  font-weight: 700;
  font-size: 32.0034px;
  line-height: 117%;
  text-align: center;
  color: #ffffff;
}

.Open {
  font-weight: 400;
  font-size: 15.3616px;
  line-height: 117%;
  text-align: center;
  text-decoration-line: underline;
  color: #ffffff;
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

.price {
  font-weight: 700;
  font-size: 19.2095px;
  line-height: 117%;
  text-align: center;
  letter-spacing: 0.8em;
  color: rgba(255, 255, 255, 0.43);
}

h2.amt {
  font-weight: 700;
  font-size: 54.4796px;
  line-height: 117%;
  text-align: center;
  color: #ffffff;
}

p.open {
  font-weight: 400;
  font-size: 26.1502px;
  line-height: 117%;
  text-align: center;
  text-decoration-line: underline;
  color: #ffffff;
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
.Omain_card:nth-child(1) {
  background: #0594fa;
  box-shadow: 0px 4px 54px 6px rgba(0, 0, 0, 0.25);
}
.Omain_card:nth-child(2) {
  background: #3e35cd;
  box-shadow: 0px 4px 54px 6px rgba(0, 0, 0, 0.25);
}
.Omain_card:nth-child(3) {
  background: #1f1b5e;
  box-shadow: 0px 4px 54px 6px rgba(0, 0, 0, 0.25);
}
.Omain_card:nth-child(4) {
  background: #0c0570;
  box-shadow: 0px 4px 54px 6px rgba(0, 0, 0, 0.25);
}
.Omain_card:nth-child(5) {
  background: #04013d;
  box-shadow: 0px 4px 54px 6px rgba(0, 0, 0, 0.25);
}
.Omain_card:nth-child(6) {
  background: #dc0a0a;
  box-shadow: 0px 4px 54px 6px rgba(0, 0, 0, 0.25);
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
