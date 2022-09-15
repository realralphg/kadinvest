<template>
  <div class="">
    <h1 class="spon_det q-mt-xl">SPONSORSHIP DETAILS</h1>
    <q-table
      class="my-sticky-virtscroll-table scroll_table"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      row-key="index"
      :rows="rows"
      :columns="columns"
    >
      <template v-slot:header="props">
        <q-tr class="green" :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="bg-warning text-white"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <i
            v-if="props.row.name === 'TRUE'"
            class="ri-thumb-up-fill text-green"
          ></i>
          <div v-else>{{ props.row.name }}</div>
        </q-td>
      </template>
      <template v-slot:body-cell-Diamond="props">
        <q-td :props="props">
          <i
            v-if="props.row.name === 'TRUE'"
            class="ri-thumb-up-fill text-green"
          ></i>
          <div v-else>{{ props.row.Diamond }}</div>
        </q-td>
      </template>
      <template v-slot:body-cell-Platinum="props">
        <q-td :props="props">
          <i
            v-if="props.row.Platinum === 'TRUE'"
            class="ri-thumb-up-fill text-green"
          ></i>
          <div v-else>{{ props.row.Platinum }}</div>
        </q-td>
      </template>
      <template v-slot:body-cell-Gold="props">
        <q-td :props="props">
          <i
            v-if="props.row.Gold === 'TRUE'"
            class="ri-thumb-up-fill text-green"
          ></i>
          <div v-else>{{ props.row.Gold }}</div>
        </q-td>
      </template>
      <template v-slot:body-cell-Silver="props">
        <q-td :props="props">
          <i
            v-if="props.row.Silver === 'TRUE'"
            class="ri-thumb-up-fill text-green"
          ></i>
          <div v-else>{{ props.row.Silver }}</div>
        </q-td>
      </template>
      <template v-slot:body-cell-Bronze="props">
        <q-td :props="props">
          <i
            v-if="props.row.Bronze === 'TRUE'"
            class="ri-thumb-up-fill text-green"
          ></i>
          <div v-else>{{ props.row.Bronze }}</div>
        </q-td>
      </template>
      <template v-slot:body-cell-SubmitNetwork="props">
        <q-td :props="props">
          <i
            v-if="props.row.SubmitNetwork === 'TRUE'"
            class="ri-thumb-up-fill text-green"
          ></i>
          <div v-else>{{ props.row.SubmitNetwork }}</div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "event",
    label: "Item",
    field: "event",
    align: "left",
  },
  {
    name: "name",
    required: true,
    label: "Main Sponsor",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "Diamond",
    align: "center",
    label: "Diamond",
    field: "Diamond",
    sortable: true,
  },
  { name: "Platinum", label: "Platinum", field: "Platinum", sortable: true },
  { name: "Gold", label: "Gold", field: "Gold" },
  { name: "Silver", label: "Silver", field: "Silver" },
  { name: "Bronze", label: "Bronze", field: "Bronze" },
  { name: "SubmitNetwork", label: "Submit Network", field: "SubmitNetwork" },
];

const seed = [
  {
    event: "Complimentary Registration Passes ",
    name: 10,
    Diamond: 6,
    Gold: 2,
    Platinum: 3,
    Silver: 1,
    Bronze: 1,
    SubmitNetwork: 1,
  },
  {
    event: "Gala ticket",
    name: "Table",
    Diamond: 5,
    Gold: 1,
    Platinum: 1,
    Silver: 1,
    SubmitNetwork: 1,
    Bronze: 1,
  },
  {
    event: "Lunch with his Excellency",
    name: "TRUE",
    Diamond: 262,
    Gold: "-",
    Platinum: "-",
    SubmitNetwork: "-",
    Silver: "-",
    Bronze: "-",
  },
  {
    event: "Exhibition Space",
    name: "Self select(3)",
    Diamond: "Self select(2)",
    SubmitNetwork: "-",
    Platinum: "Self select(1)",
    Gold: "Random (1)",
    Silver: "Random (1)",
    Bronze: "-",
  },
  {
    event: "Exhibition Staff Registration Passes",
    name: 6,
    Diamond: 4,
    SubmitNetwork: "-",
    Gold: 2,
    Silver: "-",
    Platinum: 3,
    Bronze: "-",
  },
  {
    event: "Participation Passport",
    name: "TRUE",
    Diamond: "-",
    SubmitNetwork: "-",
    Gold: "TRUE",
    Silver: "-",
    Platinum: "TRUE",
    Bronze: "-",
  },
  {
    event: "Conference bag provided",
    name: "TRUE",
    Diamond: "TRUE",
    SubmitNetwork: "TRUE",
    Gold: "TRUE",
    Silver: "TRUE",
    Bronze: "TRUE",
    Platinum: "TRUE",
  },
  {
    event: "Email and Newsletter Announcement",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "TRUE",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Logo on official display",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "TRUE",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Red carpet feature",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "TRUE",
    Silver: "TRUE",
    Bronze: "",
    SubmitNetwork: "",
  },
  {
    event: "Placing a roll up banner",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "TRUE",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Logo feature on gala night backdrop",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "TRUE",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Logo feature on sector expo",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "TRUE",
    Silver: "TRUE",
    Bronze: "TRUE",
    SubmitNetwork: "TRUE",
  },
  {
    event: "Advert on KDSG Magazine",
    name: "Full Page",
    Diamond: "Half Page",
    Platinum: "Quarter Page",
    Gold: "TRUE",
    Silver: "TRUE",
    Bronze: "TRUE",
    SubmitNetwork: "TRUE",
  },
  {
    event: "Logo on back cover",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "-",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Virtual Exhibit space",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "-",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Company logo on event bags, lanyards etc",
    name: "TRUE",
    Diamond: "-",
    Platinum: "-",
    Gold: "-",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Company description on sponsor webpage",
    name: "500 Words",
    Diamond: "250 Words",
    Platinum: "100 Words",
    Gold: "50 Words",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Press release mention",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "TRUE",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Social media promotion",
    name: "10x",
    Diamond: "8x",
    Platinum: "4x",
    Gold: "1x",
    Silver: "1x",
    Bronze: "1x",
    SubmitNetwork: "1x",
  },
  {
    event: "Participation in on-site press conference",
    name: "TRUE",
    Diamond: "-",
    Platinum: "-",
    Gold: "-",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Advert slot during broadcast",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "-",
    Gold: "-",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Live broacast advert",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "-",
    Gold: "-",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Split screen advert",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "TRUE",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Mention as sponsor",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Silver: "TRUE",
    Gold: "TRUE",
    SubmitNetwork: "TRUE",
    Bronze: "TRUE",
  },
  {
    event: "5 minute during opening",
    name: "TRUE",
    Diamond: "-",
    Platinum: "-",
    Gold: "-",
    Silver: "TRUE",
    Bronze: "-",
    SubmitNetwork: "-",
  },
  {
    event: "Acknowlegdement during gala night",
    name: "TRUE",
    Diamond: "TRUE",
    Platinum: "TRUE",
    Gold: "TRUE",
    Silver: "TRUE",
    Bronze: "TRUE",
    SubmitNetwork: "TRUE",
  },
  {
    event: "Banner/Screen advert at main summit",
    name: "Main Summit",
    Diamond: "Gala Night",
    Platinum: "Exhibition",
    Gold: "Sector Expo",
    Silver: "-",
    Bronze: "-",
    SubmitNetwork: "-",
  },
];

// we generate lots of rows here
let rows = [];
for (let i = 0; i < 1.5; i++) {
  rows = rows.concat(seed.slice(0).map((r) => ({ ...r })));
}
rows.forEach((row, index) => {
  row.index = index;
});

export default {
  setup() {
    return {
      columns,
      rows,

      pagination: ref({
        rowsPerPage: 0,
      }),
    };
  },
};
</script>

<style lang="sass" scoped>
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

tbody
    text-align:center
    font-size:20px
th
  border-right:4px solid #fff !important

h1
    font-weight: 700
    font-size: 48px
    line-height: 117%
    text-align: center
    margin: 0 0 3rem
    color: #1F1B5E

td
    border-right:4px solid #00A250 !important


.green
      background:#00A250
</style>
