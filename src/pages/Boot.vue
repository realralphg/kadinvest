<template>
  <div class="wrapper">
    <div class="hold small_container">
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
      <!-- {{ selected }}{{ selection }} -->
      <!-- {{ columns }} -->
      <!-- {{ selection }} -->
      <!-- {{ selected }} -->
      <div id="contentContainer" class="q-mt-xl boot">
        <div v-if="load" class="q-gutter-md q-my-lg row items-start">
          <q-card
            flat
            bordered
            v-for="type in skeletonTypes"
            :key="type"
            style="width: 250px"
          >
            <q-card-section>
              <q-skeleton :type="type" />
            </q-card-section>
          </q-card>
        </div>
        <q-table
          title="Boots"
          :rows="items"
          :columns="columns"
          row-key="name"
          selection="multiple"
          v-model:selected="selected"
          :filter="filter"
          :loading="loading"
          @request="getSpace"
          :pagination="initialPagination"
          id="contentContainer"
          grid
          hide-header
        >
          <template v-slot:item="props">
            <div
              class="q-pa-xs chips_each grid-style-transition"
              :style="props.selected ? 'transform: scale(0.95);' : ''"
            >
              <!-- {{ props.row.custom_data.color }} -->
              <q-card
                :class="
                  props.selected || !props.row.is_available
                    ? 'boot_card bg-grey-2'
                    : 'boot_card'
                "
                :style="`background-color:${props.row.custom_data.color}`"
              >
                <!-- {{ props.row.is_available }} -->
                <q-card-section>
                  <!-- <small v-if="!props.row.is_available"> Already Picked </small> -->
                  <q-checkbox
                    dense
                    v-model="props.selected"
                    :label="props.row.name"
                    :disable="!props.row.is_available"
                  />

                  <!-- <p @click="toggleDialog" class="open">Open Package</p> -->
                </q-card-section>
                <!-- <q-separator />
                <q-list dense>
                  {{ props }}
                  <q-item
                    v-for="col in props.cols.filter(
                      (col) => col.name !== 'desc'
                    )"
                    :key="col.name"
                  >
                    <q-item-section>
                      <q-item-label>{{ col.label }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label caption>{{ col.value }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list> -->
              </q-card>
            </div>
          </template>
        </q-table>
        <q-card-actions align="center">
          <t-pagination
            :links="links"
            :meta="meta"
            container="#contentContainer"
            v-model="currentPage"
            @loading="loadingMore = true"
            @loaded="(items = $event), (loadingMore = false)"
          />
        </q-card-actions>

        <p class="q-mt-lg">
          You have Selected spaces: {{ selection.toString() }}
        </p>

        <q-btn color="accent" class="q-mt-lg" @click="toggleDialog">
          Book your space
        </q-btn>
        <!-- <div class="chips">
        <div
          @click="select(space)"
          v-for="space in spaces"
          :key="space.id"
          class="chips_each"
        >
          <i v-if="selectedOne" class="fa-duotone fa-check"></i>
          <q-chip

            :color="space.custom_data.color"
            text-color="white"
            style="height: 100px; width: 98px"
            square
          >
            <h6 class="title">{{ space.name }}</h6>
            <p @click="toggleDialog" class="open">Open Package</p>
          </q-chip>
        </div> -->

        <!-- <div class="q-mt-sm">Your pick: {{ selection }}</div> -->
      </div>
    </div>
    <Footer />

    <q-dialog full-width v-model="dialog" class="boot_dialog">
      <q-card style="height: fit-content; width: 80%" class="dialog_wid">
        <div id="sponsorPackages" class="form_area">
          <!-- <h6>Select your prefered package</h6> -->

          <div class="form_style">
            <div class="form_img flex justify-center">
              <img src="/images/logo.png" alt="" />
            </div>
            <form @submit.prevent="submit" action="">
              <p v-if="selection.length" class="q-my-md">
                Selected spaces: {{ selection.toString() }}
              </p>
              <p v-else class="q-my-md">You have not made any selection</p>
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
</template>
<script>
import { reactive, computed, ref } from "vue";
import Footer from "../components/Footer.vue";
import TPagination from "../components/TPagination.vue";
export default {
  components: {
    Footer,
    TPagination,
  },
  setup() {
    return {
      filter: ref(""),
      skeletonTypes: ["QBtn", "QBtn", "QBtn", "QBtn", "QBtn"],
      //   selected: ref([]),
    };
  },
  data() {
    return {
      responseModal: false,
      dialog: false,
      plan: [],
      data: { space_ids: [] },
      errors: [],
      load: true,
      loading: false,
      curl: "",
      spaces: [],
      selected: [],
      selected_ones: [],
      selectedOne: false,
      rows: [],
      columns: [],
      currentPage: 1,
      items: [],
      meta: {},
      links: {},
      initialPagination: {
        rowsPerPage: 30,
        pagesNumber: 1,
      },
    };
  },

  computed: {
    selection() {
      let ids = this.selected.map((boot) => {
        let bootIds = Object.entries(boot);
        console.log(bootIds[1][1]);
        this.selected_ones.push[bootIds[1][1]];
        return bootIds[1][1];
      });

      return ids;
    },
    selectionIds() {
      let ids = this.selected.map((boot) => {
        let bootIds = Object.entries(boot);
        return bootIds[0][1];
      });

      return ids;
    },
  },

  created() {
    this.getSpace();
  },

  methods: {
    toggleDialog() {
      this.dialog = true;
    },

    select(space) {
      const id = space.id;
      console.log(space);
      const name = space.name;
      this.selected.push(name);
      this.selected_ones.push(space);
    },

    getSpace() {
      this.loading = true;
      const url = `spaces`;
      this.curl = url;
      this.$api
        .get(url)
        .then((resp) => {
          this.$q.loading.hide();
          console.log(resp);
          this.columns = resp.data.data;
          this.rows = resp.data.data;
          this.items = resp.data.data;
          this.links = resp.data.links;
          this.meta = resp.data.meta;
          this.loading = false;
          this.load = false;
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
    refreshPage() {
      if (this.curl !== "") {
        this.loading = true;
        this.$api
          .get(this.curl)
          .then(({ data }) => {
            this.loading = false;
            this.items = data.data;
            console.log(data);
          })
          .catch(({ response }) => {
            console.log(response);
            this.loading = false;
            this.rows = [];
          });
      }
    },

    submit() {
      this.$q.loading.show();
      this.loading = true;
      this.data.space_ids = this.selectionIds;
      console.log(this.data);

      this.$api
        .post(`spaces/9/reserve/guest`, this.data)
        .then((resp) => {
          this.$q.loading.hide();
          console.log(resp);
          this.$q.notify({
            message: resp.data.message,
            color: "green",
            position: "top",
            timeout: 3000,
          });

          this.data = {};
          this.dialog = false;
          this.selected = [];
          this.refreshPage();
          //   window.location.reload();
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
.grid-style-transition {
  transition: transform 0.28s, background-color 0.28s;
}
p {
  margin-bottom: 0;
}
.icon img {
  width: 80px;
}

.dialog_wid {
  background: transparent;
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

.boot_card {
  /* width: 100px;
  height: 100px; */
  padding: 0.5rem;
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
  margin: 1rem 0;
}

.chips {
  /* display: flex; */
  justify-content: center;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  /* grid-template-rows: repeat(3, 1fr); */
  gap: 3rem;
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

.wra p {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #080808;
  margin-top: 0.7rem;
}
p.open {
  font-weight: 400;
  font-size: 10.56395px !important;
  line-height: 117%;
  text-align: center;
  text-decoration-line: underline;
  margin: 0.5rem 0;
  /* color: #ffffff; */
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
  width: 70%;
  max-width: 70%;
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
@media (max-width: 800px) {
  .form_style {
    width: 90%;
    padding: 1rem;
    max-width: 90%;
  }
}
@media (max-width: 500px) {
  .form_style {
    width: 100%;
    padding: 1rem;
    max-width: 100%;
  }
  .form_style {
    margin: 0;
  }

  .form_area {
    padding: 0;
  }
}
</style>
