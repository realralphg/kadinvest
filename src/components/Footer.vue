<template>
  <div class="wrapper">
    <div class="hold small_container">
      <div class="wrapp row justify-between items-center">
        <div class="left col-md-6 col-sm-12 col-xs-12">
          <img class="logo" src="/images/logo.png" alt="" />
          <p class="topic">KADINVEST 7.0</p>
          <p style="gap: 1rem" class="row socials items-center no-wrap">
            <i class="ri-twitter-line"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-facebook-circle-line"></i>
            <i class="ri-youtube-line"></i>
            <span>@investkaduna</span>
          </p>
          <p class="gmail">kadinvest@kdsg.gov.ng</p>
        </div>

        <div class="right col-md-6 col-sm-12 col-xs-12">
          <p class="subscribe">Subscribe To Our Newsletter</p>

          <div class="q-mt-lg">
            <div class="input_wrap">
              <form @submit.prevent="submit">
                <input
                  v-model="data.email"
                  type="text"
                  name="email"
                  placeholder="Enter your Email Here"
                />
                <q-btn type="submit" class="sub"> Subscribe </q-btn>
              </form>
              <div class="error" v-if="errors['data.email']">
                {{ errors["data.email"][0] }}
              </div>
            </div>
          </div>
          <div class="q-pt-xl">
            <p class="location">
              <i class="ri-map-pin-3-line q-mr-sm"></i> KADUNA STATE
            </p>
          </div>
        </div>
      </div>
      <div class="text-center q-mt-md">
        <a
          href="https://greysoft.ng/#/"
          target="_blank"
          class="text-center grey text-white"
          >Powered by GreySoft Technologies</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      loading: false,
      errors: [],
    };
  },

  methods: {
    submit() {
      this.$q.loading.show();
      this.loading = true;

      this.$api
        .post("get/form-data/3", { data: this.data })
        .then((resp) => {
          this.$q.loading.hide();

          console.log(resp);
          this.$q.notify({
            message: "Subscription Successful",
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
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  background: linear-gradient(274.66deg, #2d25a6 33.66%, #463cdf 80.38%);
  padding: 3rem 0;
  margin-top: 4rem;
}
.topic {
  font-style: normal;
  font-weight: 700;
  font-size: 27.4131px;
  line-height: 108.5%;
  /* text-align: center; */
  text-transform: none;
  color: #fefefe;
}
.logo {
  width: 200px;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
.gmail {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 190%;
  /* text-align: center; */
  text-transform: lowercase;
  color: #ffffff;
}

.socials {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 190%;
  text-align: center;
  text-transform: lowercase;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.subscribe {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 190%;
  color: #ffffff;
}
.error {
  color: red;
  font-size: 13px;
  margin: 0.5rem 0;
}
input {
  width: 100%;
  padding: 0.7rem;
  border: none;
}
input:focus {
  outline: none;
}

::placeholder {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 190%;
  text-align: left;
  color: #8f8f8f;
}

form {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  padding: 0.4rem;
}

.sub {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 190%;
  text-align: center;
  color: #ffffff;
  padding: 0.7rem;
  background: #2d25a6;
}

.location {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 190%;
  text-align: center;
  letter-spacing: 0.34em;
  color: #ffffff;
}

.grey {
  text-decoration: underline;
}

@media (max-width: 400px) {
  ::placeholder {
    font-size: 14px;
  }
  .sub {
    font-size: 15px;
  }
}
</style>
