<template>
  <div class="wrapper reg">
    <div class="hold">
      <div class="left">
        <h1>Sign up</h1>
        <form action="">
          <div class="choose">
            <p>Which events do you want to attend?</p>

            <div class="register">
              <div class="register_checkbox">
                <q-checkbox label="Summit" v-model="val" />
              </div>
              <div class="register_checkbox">
                <q-checkbox label="Business Expo" v-model="val" />
              </div>
            </div>
          </div>

          <div class="personal">Please Fill In Your Personal info</div>

          <div class="input_wrap">
            <label for="name">Full Name</label> <br />
            <input type="text" placeholder="Firstname Lastname" />
          </div>
          <div class="input_wrap">
            <label for="email">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Enter email here..."
            />
          </div>
          <div class="input_wrap">
            <label for="PhoneNumer">Phone Numer</label> <br />
            <input
              type="text"
              name="PhoneNumer"
              placeholder="Enter phone number here..."
            />
          </div>
          <div class="input_wrap">
            <label for="CompanyName">Company Name</label> <br />
            <input type="text" name="CompanyName" placeholder="" />
          </div>
          <div class="input_wrap">
            <label for="Designation">Designation</label> <br />
            <input type="text" name="Designation" placeholder="" />
          </div>

          <div class="who">
            <div class="attending_as">Who are you attending as?</div>
            <div class="q-py-md">
              <div class="q-gutter-sm">
                <q-radio v-model="shape" val="MSME" label="MSME" />
                <q-radio v-model="shape" val="Investor" label="Investor" />
                <q-radio
                  v-model="shape"
                  val="ellipse"
                  label="Government Official"
                />
                <q-radio v-model="shape" val="polygon" label="Individual" />
                <q-radio v-model="shape" val="polygon" label="Others" />
              </div>
            </div>
          </div>
          <div class="who">
            <div class="attending_as">
              Choose how you want to attend the summit
            </div>
            <div class="q-py-md">
              <div class="q-gutter-sm">
                <q-radio v-model="shape" val="line" label="Virtual" />
                <q-radio v-model="shape" val="rectangle" label="Physical" />
                <q-radio
                  v-model="shape"
                  val="ellipse"
                  label="In the Metaverse"
                />
              </div>
            </div>
          </div>
          <div class="who">
            <div class="attending_as">
              Choose the Sectors you are interested in
            </div>
            <div class="q-py-md">
              <div class="q-gutter-sm">
                <q-radio v-model="shape" val="line" label="Agriculture" />
                <q-radio v-model="shape" val="ellipse" label="Solid Minerals" />
                <q-radio
                  v-model="shape"
                  val="rectangle"
                  label="Infrastructure"
                />

                <q-radio v-model="shape" val="polygon" label="Technology" />
              </div>
            </div>
          </div>

          <q-btn class="sign"> Sign up </q-btn>
        </form>
      </div>

      <div class="right">
        <img src="/images/register.png" alt="" />
      </div>
    </div>
  </div>

  <!-- <Speakers /> -->
  <!-- <Ourstaff /> -->
</template>

<script>
import Ourstaff from "../components/Ourstaff.vue";
import Speakers from "../components/Speakers.vue";
export default {
  components: {
    Ourstaff,
    Speakers,
  },
  data() {
    return {
      shape: false,
      val: false,
    };
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
h1 {
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #333333;
  padding: 0.5rem 0;
  margin-bottom: 3rem;
  padding-top: 2rem;
}
/* .wrapper {
  height: 100vh;
} */
label {
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: #333333;
}
img {
  height: 100%;
  object-fit: cover;
}

.hold {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.left {
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #333333;
  padding: 0 1rem;
}

.left p {
  font-size: 14px;
  line-height: 23px;
  color: #333333;
}

.register {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.register_checkbox {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.personal {
  font-size: 14px;
  line-height: 23px;
  color: #333333;
}

.choose {
  margin-bottom: 2rem;
}
.attending_as {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #333333;
}
.sign {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  border: 2px solid #1f1b5e;
  border-radius: 8px;
  color: #1f1b5e;
  width: 100%;
  padding: 1rem;
}

.input_wrap input {
  background: #eeeeee;
  border: 1px solid #979797;
  border-radius: 8px;
  padding: 0.5rem;
  height: 50px;
  font: icon;
  width: 100%;
}
::placeholder {
  font-weight: 500;
  font-size: 14px;
  /* line-height: 26px; */
  color: #979797;
}

.who {
  margin: 2rem 0;
}

@media (max-width: 900px) {
  .hold {
    grid-template-columns: 1fr;
    padding: 2rem 0;
  }
  .right {
    display: none;
  }
}
</style>
