<template>
  <div class="wrapper reg">
    <div class="hold">
      <div class="left">
        <h1>Sign up</h1>
        <!-- {{ business_expo }}
        {{ individual }} -->
        <form
          action=""
          ref="appformm"
          enctype="multipart/form-data"
          id="appForm"
          @submit.prevent="submit"
        >
          <div class="choose">
            <p>Which events do you want to attend?</p>

            <div class="register">
              <div class="register_checkbox">
                <q-checkbox name="summit" label="Summit" v-model="summit" />
              </div>
              <div class="register_checkbox">
                <q-checkbox
                  name="business_expo"
                  label="Business Expo"
                  v-model="business_expo"
                />
              </div>
            </div>
          </div>

          <div class="personal">Please Fill In Your Personal info</div>

          <div class="input_wrap">
            <label for="name">Full Name</label> <br />
            <input
              v-model="fullname"
              type="text"
              name="fullname"
              placeholder="Firstname Lastname"
            />
          </div>
          <div class="input_wrap">
            <label for="email">Email</label> <br />
            <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Enter email here..."
            />
          </div>
          <div class="input_wrap">
            <label for="PhoneNumer">Phone Numer</label> <br />
            <input
              type="text"
              name="phone_number"
              v-model="phone_number"
              placeholder="Enter phone number here..."
            />
          </div>
          <div class="input_wrap">
            <label for="CompanyName">Company Name</label> <br />
            <input v-model="company_name" placeholder="" />
          </div>
          <div class="input_wrap">
            <label for="Designation">Designation</label> <br />
            <input
              type="text"
              v-model="designation"
              name="designation"
              placeholder=""
            />
          </div>

          <div class="who">
            <div class="attending_as">Who are you attending as?</div>
            <div class="q-py-md">
              <div class="q-gutter-sm">
                <q-radio v-model="msme" val="msme" name="msme" label="MSME" />
                <q-radio
                  v-model="investor"
                  val="investor"
                  name="investor"
                  label="Investor"
                />
                <q-radio
                  v-model="government_official"
                  val="government_official"
                  name="government_official"
                  label="Government Official"
                />
                <q-radio
                  name="individual"
                  v-model="individual"
                  val="individual"
                  label="Individual"
                />
                <q-radio v-model="others" val="others" label="Others" />
              </div>
            </div>
          </div>
          <div class="who">
            <div class="attending_as">
              Choose how you want to attend the summit
            </div>
            <div class="q-py-md">
              <div class="q-gutter-sm">
                <q-radio
                  name="virtual"
                  v-model="virtual"
                  val="virtual"
                  label="Virtual"
                />
                <q-radio
                  name="physical"
                  v-model="physical"
                  val="physical"
                  label="Physical"
                />
                <q-radio
                  v-model="in_the_metaverse"
                  name="in_the_metaverse"
                  val="in_the_metaverse"
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
                <q-radio
                  v-model="agriculture"
                  name="agriculture"
                  val="agriculture"
                  label="Agriculture"
                />
                <q-radio
                  v-model="solid_minerals"
                  name="solid_minerals"
                  val="solid_minerals"
                  label="Solid Minerals"
                />
                <q-radio
                  v-model="infrastructure"
                  val="infrastructure"
                  name="infrastructure"
                  label="Infrastructure"
                />

                <q-radio
                  name="technology"
                  v-model="technology"
                  val="technology"
                  label="Technology"
                />
              </div>
            </div>
          </div>

          <q-btn :loading="false" type="submit" class="sign"> Sign up </q-btn>
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
// import Speakers from "../components/Speakers.vue";
export default {
  components: {
    Ourstaff,
  },
  data() {
    return {
      loading: false,
      fullname: "",
      business_expo: false,
      summit: false,
      msme: false,
      individual: false,
      investor: true,
      government_official: true,
      virtual: false,
      physical: false,
      in_the_metaverse: false,
      designation: "",
      technology: false,
      agriculture: false,
      solid_minerals: false,
      infrastructure: false,
      others: false,
      email: "",
      phone_number: "",
      company_name: "",
    };
  },

  methods: {
    submit() {
      let technology = this.technology;
      let fullname = this.fullname;
      let designation = this.designation;
      let solid_minerals = this.solid_minerals;
      let agriculture = this.agriculture;
      let email = this.email;
      let phone_number = this.phone_number;
      let company_name = this.company_name;
      let infrastructure = this.infrastructure;
      let virtual = this.virtual;
      let physical = this.physical;
      let individual = this.individual;
      let investor = this.investor;
      let government_official = this.government_official;
      let in_the_metaverse = this.in_the_metaverse;
      let business_expo = this.business_expo;
      let summit = this.summit;
      let msme = this.msme;
      let others = this.others;

      const formData = new FormData();
      formData.append("data[technology]", technology);
      formData.append("data[msme]", msme);
      formData.append("data[summit]", summit);
      formData.append("data[business_expo]", business_expo);
      formData.append("data[in_the_metaverse]", in_the_metaverse);
      formData.append("data[government_official]", government_official);
      formData.append("data[investor]", investor);
      formData.append("data[individual]", individual);
      formData.append("data[physical]", physical);
      formData.append("data[virtual]", virtual);
      formData.append("data[infrastructure]", infrastructure);
      formData.append("data[company_name]", company_name);
      formData.append("data[email]", email);
      formData.append("data[phone_number]", phone_number);
      formData.append("data[agriculture]", agriculture);
      formData.append("data[solid_minerals]", solid_minerals);
      formData.append("data[designation]", designation);
      formData.append("data[fullname]", fullname);
      formData.append("data[others]", others);

      this.$q.loading.show();
      this.loading = true;
      this.$api
        .post("get/form-data/1", formData)
        .then((resp) => {
          this.$q.loading.hide();

          console.log(resp);
          this.$q.notify({
            message: "Submission Successful",
            color: "green",
            position: "top",
            timeout: 3000,
          });
          this.responseModal = true;

          document.getElementById("appForm").reset();
        })
        .catch(({ response }) => {
          this.$q.loading.hide();
          this.errors = response.data.errors;
          // this.errorMsg = response.data.message;
          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          setTimeout(() => {
            this.errors = [];
          }, 12000);
          console.log(response);
        });
    },
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
