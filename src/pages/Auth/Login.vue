<template>
  <q-page class="bg-white">
    <div class="wrapper containerrr">
      <div class="center_it">
        <div class="hold">
          <div class="opening_text">
            <img class="logo" src="/images/logo.png" alt="" /> <br />
            <div class="text-green bold">KADIPA</div>
          </div>

          <div class="opening_text">
            <span class="text-green"> Hey!</span> Welcome back
          </div>

          <div class="form_data">
            <form @submit.prevent="login">
              <div class="input_wrap">
                <label class="text-green text-weight-bold" for="email"
                  >Email</label
                >
                <div class="input">
                  <i class="ri-mail-line q-mr-md text-green"></i>
                  <input
                    v-model="form.email"
                    name="email"
                    placeholder="Enter your email..."
                    type="text"
                  />
                </div>
                <div class="error" v-if="errors.email">
                  {{ errors.email[0] }}
                </div>
              </div>
              <div class="input_wrap">
                <label class="text-green text-weight-bold" for="password"
                  >Password</label
                >
                <div class="input">
                  <i class="ri-lock-line q-mr-md text-green"></i>
                  <input
                    v-model="form.password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                  />

                  <i class="fa-solid fa-eye-slash"></i>
                </div>
                <div class="error" v-if="errors.password">
                  {{ errors.password[0] }}
                </div>

                <div class="forgot flex justify-end">
                  <q-btn class="forgot text-green">Forgot password</q-btn>
                </div>
              </div>

              <div class="login_btn">
                <q-btn type="submit" class="login flex justify-center bg-green"
                  >Login</q-btn
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      val: ref(true),
    };
  },
  data() {
    return {
      errors: [],
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$q.loading.show();
      this.$api
        .post("/login", this.form)
        .then((response) => {
          this.$q.loading.hide();

          console.log(response);
          this.$q.notify({
            message: response.data.message,
            color: "green",
            position: "top",
          });
          this.$store.auth.setUserDetails(response.data);
          this.$router.replace({ name: "dashboard" });
          this.loading = false;
        })
        .catch(({ response }) => {
          console.log(response);
          this.$q.loading.hide();

          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
          setTimeout(() => {
            this.errors = [];
          }, 7000);
          console.log(response);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
label {
  color: #1abc9c;
}

p {
  margin-bottom: 0;
}
.logo {
  width: 100px;
}
.wrapper {
  height: 100vh;
  position: relative;
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.forgot ::before {
  box-shadow: none;
}
.center_it {
  width: 60%;
}

.back_btn {
  transition: all 5s ease-in-out;
}

.bold {
  font-weight: 800;
}

.back_btn:hover .btn_hold span {
  color: white;
}

.opening_text {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 127.5%;
  max-width: 350px;
  margin-bottom: 3rem;
}

.input_wrap label {
  margin-top: 0.75rem;
}

.input_wrap .input {
  background: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0.55rem 0;
  width: 100%;
}

.input_wrap input {
  background: transparent;
  border: none;
  width: 100%;
  padding: 0.5rem;
}
.input_wrap input:focus {
  outline: none;
}

.fa-eye-slash {
  display: flex;
  justify-content: flex-end;
  float: right;
  width: 100%;
}

.remember {
  margin-top: 1rem;
}
.remember p {
  font-size: 12px;
}

.login {
  width: 100%;
  color: white;
  text-align: center;
  margin-top: 3rem;
  background: #1abc9c;
  border-radius: 100px;
  padding: 0.75rem;
}

.error {
  color: red;
}

@media (max-width: 700px) {
  ::placeholder {
    font-size: 13px;
  }

  .forgot p {
    font-size: 13px;
  }
  .center_it {
    width: 90%;
  }
}
</style>
