<template>
  <div class="wrapper reg">
    <div class="hold">
      <div class="left">
        <h1>Sign up</h1>
        <!-- {{ business_expo }}
        {{ individual }} -->
        <!-- {{ fields }} -->
        <form
          action=""
          ref="appformm"
          enctype="multipart/form-data"
          id="appForm"
          @submit.prevent="submit"
        >
          <div class="choose">
            <div class="">
              <div class="input_wrap">
                <label class="q-pb-sm" for="name"
                  >Which events do you want to attend?</label
                >
                <br />
                <!-- <q-select multiple v-model="data.type.summit" name="" id="">
                  <option value="summit">Summit</option>
                  <option value="business_expo">Business Expo</option>
                </q-select> -->
                <!-- <q-select
                  filled
                  v-model="data.type"
                  :options="options"
                  label="Select"
                  multiple
                  emit-value
                  map-options
                  class="q-pt-sm"
                >
                  <template
                    v-slot:option="{ itemProps, opt, selected, toggleOption }"
                  >
                    <q-item v-bind="itemProps">
                      <q-item-section>
                        <q-item-label v-html="opt.label" />
                      </q-item-section>
                      <q-item-section side>
                        <q-toggle
                          :model-value="selected"
                          @update:model-value="toggleOption(opt)"
                        />
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select> -->
                <div class="q-gutter-sm">
                  <q-checkbox
                    v-model="data.type"
                    val="summit"
                    label="Summit"
                    color="teal"
                  />
                  <q-checkbox
                    v-model="data.type"
                    val="sector_expo"
                    label="Business Expo"
                    color="orange"
                  />
                </div>
                <div class="error" v-if="errors['data.type']">
                  {{ errors["data.type"][0] }}
                </div>
              </div>
              <!-- <div class="register_checkbox">
                <q-checkbox
                  name="type"
                  label="Summit"
                  v-model="data.type.summit"
                />
              </div>
              <div class="register_checkbox">
                <q-checkbox
                  name="type"
                  label="Business Expo"
                  v-model="data.type.business_expo"
                />
              </div> -->
            </div>
          </div>
          <!-- {{ errors }} -->

          <div class="personal">Please Fill In Your Personal info</div>

          <div class="input_wrap">
            <label for="name">Full Name</label> <br />
            <input
              v-model="data.fullname"
              type="text"
              name="fullname"
              placeholder="Firstname Lastname"
            />
            <div class="error" v-if="errors['data.fullname']">
              {{ errors["data.fullname"][0] }}
            </div>
          </div>
          <div class="input_wrap">
            <label for="email">Email</label> <br />
            <input
              type="email"
              v-model="data.email"
              name="email"
              placeholder="Enter email here..."
            />
            <div class="error" v-if="errors['data.email']">
              {{ errors["data.email"][0] }}
            </div>
          </div>
          <div class="input_wrap">
            <label for="phone">Phone Numer</label> <br />
            <input
              type="text"
              name="phone"
              v-model="data.phone"
              placeholder="Enter phone number here..."
            />
            <div class="error" v-if="errors['data.phone']">
              {{ errors["data.phone"][0] }}
            </div>
          </div>
          <div class="input_wrap">
            <label for="company">Company Name</label> <br />
            <input v-model="data.company" name="company" placeholder="" />
            <div class="error" v-if="errors['data.company']">
              {{ errors["data.company"][0] }}
            </div>
          </div>
          <div class="input_wrap">
            <label for="Designation">Designation</label> <br />
            <input
              type="text"
              v-model="data.designation"
              name="designation"
              placeholder=""
            />
            <div class="error" v-if="errors['data.designation']">
              {{ errors["data.designation"][0] }}
            </div>
          </div>

          <div class="who">
            <div class="attending_as">Who are you attending as?</div>
            <div class="q-py-md">
              <div class="q-gutter-sm">
                <q-radio
                  v-model="data.attending_as"
                  val="MSME"
                  name="MSME"
                  label="MSME"
                />
                <q-radio
                  v-model="data.attending_as"
                  val="Investor"
                  name="attending_as"
                  label="Investor"
                />
                <q-radio
                  v-model="data.attending_as"
                  val="Government Official"
                  name="attending_as"
                  label="Government Official"
                />
                <q-radio
                  name="attending_as"
                  v-model="data.attending_as"
                  val="Individual"
                  label="Individual"
                />
                <q-radio
                  v-model="data.attending_as"
                  val="Other"
                  label="Other"
                  name="attending_as"
                />
              </div>
              <div class="error" v-if="errors['data.attending_as']">
                {{ errors["data.attending_as"][0] }}
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
                  name="attending_as"
                  v-model="data.attending_via"
                  val="Virtual"
                  label="Virtual"
                />
                <q-radio
                  name="attending_as"
                  v-model="data.attending_via"
                  val="Physical"
                  label="Physical"
                />
                <q-radio
                  v-model="data.attending_via"
                  name="attending_as"
                  val="Metaverse"
                  label="In the Metaverse"
                />
              </div>
              <div class="error" v-if="errors['data.attending_via']">
                {{ errors["data.attending_via"][0] }}
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
                  v-model="data.prefered_sector"
                  name="prefered_sector"
                  val="Agriculture"
                  label="Agriculture"
                />
                <q-radio
                  v-model="data.prefered_sector"
                  name="prefered_sector"
                  val="Solid Minerals"
                  label="Solid Minerals"
                />
                <q-radio
                  v-model="data.prefered_sector"
                  val="Infrastructure"
                  name="prefered_sector"
                  label="Infrastructure"
                />

                <q-radio
                  name="prefered_sector"
                  v-model="data.prefered_sector"
                  val="Technology"
                  label="Technology"
                />
              </div>
              <div class="error" v-if="errors['data.prefered_sector']">
                {{ errors["data.prefered_sector"][0] }}
              </div>
            </div>
          </div>

          <q-btn :loading="false" type="submit" class="sign"> Sign up </q-btn>
        </form>
      </div>

      <div class="right">
        <img src="/images/register.png" alt="" />
      </div>

      <q-dialog v-model="responseModal" persistent>
        <div class="hold_dia">
          <div class="top">
            <!-- <div class="icon">
                    <i class="ri-check-double-fill"></i>
                  </div> -->
            <div class="icon">
              <img src="/images/logo.png" alt="" />
            </div>
            <!-- <p>Send us an email</p> -->
            <!-- <h4 class="text-weight-bold">Your entry was successful</h4> -->
            <p class="text-subtitle6 text-green">
              Dear {{ personData.name }} you have successfully registered for
              KADINVEST 7.0
            </p>
            <small class="q-mt-xs" style="font-style: italic">
              TAGGED: Building a resilient economy</small
            >

            <div class="qr">
              <img :src="personData.qr" alt="" />
            </div>
            <code class="q-mt-xs" style="font-style: italic">
              You would need this QR code to verify your entry during the
              event.</code
            >
          </div>

          <q-card-actions align="center">
            <q-btn
              style="border-radius: 8px"
              class="bg-accent q-px-lg q-pt-xl q-pb-md text-white"
              flat
              to="/"
              label="Go home"
              color="primary"
            />
          </q-card-actions>
        </div>
      </q-dialog>
    </div>
  </div>

  <!-- <Speakers /> -->
  <!-- <Ourstaff /> -->
</template>

<script>
import Ourstaff from "../components/Ourstaff.vue";
// import Speakers from "../components/Speakers.vue";
import { ref } from "vue";
export default {
  components: {
    Ourstaff,
  },
  data() {
    return {
      fields: [],
      data: { type: ["summit"] },
      loading: false,
      errors: [],
      model: ref([]),
      responseModal: false,
      personData: [],
      options: [
        {
          label: "Summit",
          value: "summit",
        },
        {
          label: "Business Expo",
          value: "business_expo",
        },
      ],
    };
  },

  created() {
    this.getfields();
  },

  methods: {
    getfields() {
      this.$api
        .get("get/form-fields")
        .then((resp) => {
          this.fields = resp.data.data;
        })
        .catch(({ response }) => {
          this.$q.loading.hide();
          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
        });
    },
    submit() {
      // this.fields.map((field) => {
      //   formData.append(`data[${this.field.name}]`, this.data[field.name]);
      // });

      // const formData = new FormData();
      this.$q.loading.show();
      this.loading = true;

      this.$api
        .post("get/form-data/1", { data: this.data })
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
          this.personData = resp.data.data;
          this.responseModal = true;
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
          }, 8000);
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
  margin-bottom: 1rem;
  text-align: left;
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

.qr {
  margin-top: 1.5rem;
}

.qr img {
  width: 150px;
}

.icon img {
  width: 80px;
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
  height: 100vh;
  overflow: scroll;
}

.left p {
  font-size: 14px;
  line-height: 23px;
  color: #333333;
}
.right {
  height: 100vh;
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
.error {
  color: red;
  font-size: 13px;
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
  margin-bottom: 2rem;
}

.input_wrap input,
select {
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
