<template>
  <div class="small_container">
    <h1>SPONSORSHIP DETAILS</h1>
    <q-table
      class="my-sticky-virtscroll-table"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      row-key="index"
      :rows="rows"
      :columns="columns"
    >
      <template v-slot:header="props">
        <q-tr class="bg-green" :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="bg-green text-white"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body-cell-calories="props">
        <q-td :props="props">
          <i class="ri-thumb-up-fill text-green"></i>
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
    name: "calories",
    align: "center",
    label: "Diamond",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Platinum", field: "fat", sortable: true },
  { name: "carbs", label: "Gold", field: "carbs" },
  { name: "protein", label: "Silver", field: "protein" },
  { name: "sodium", label: "Submit Network", field: "sodium" },
];

const seed = [
  {
    event: "Complimentary Registration Passes ",
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    event: "Complimentary Registration Passes ",
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    event: "Complimentary Registration Passes ",
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    event: "Complimentary Registration Passes ",
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    event: "Complimentary Registration Passes ",
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    event: "Complimentary Registration Passes ",
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    event: "Complimentary Registration Passes ",
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
];

// we generate lots of rows here
let rows = [];
for (let i = 0; i < 10; i++) {
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

<style lang="sass">
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


h1
    font-weight: 700
    font-size: 48px
    line-height: 117%
    text-align: center
    margin: 0 0 3rem
    color: #1F1B5E
</style>
