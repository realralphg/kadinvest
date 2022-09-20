<template>
  <div class="q-pa-md sub">
    <!-- {{ items }} -->
    <q-table
      title="Submissions"
      :columns="columns"
      :rows="items"
      row-key="id"
      :filter="filter"
      :loading="loading"
      :pagination="initialPagination"
      id="contentContainer"
      hide-bottom
      hide-pagination
    >
      <!-- <template v-slot:body-cell-prefered_sector="props">
        <q-td :props="props">
          <p v-if="props.row.prefered_sector === '[]'">None</p>
          <p v-else>{{ props.row.prefered_sector }}</p>
        </q-td>
      </template> -->

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-negative q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> Well this is sad... {{ message }} </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
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
  </div>
</template>

<script>
import TPagination from "../components/TPagination.vue";
import { useMeta } from "quasar";

const typekeys = {
  summit: "Summit",
  sector_expo: "Sector Expo",
};
const columns = [
  {
    name: "id",
    required: true,
    label: "ID",
    align: "left",
    field: "id",
    sortable: true,
  },
  {
    name: "email",
    required: true,
    label: "Email",
    align: "left",
    field: "email",
    sortable: true,
  },
  {
    name: "fullname",
    required: true,
    label: "Fullname",
    align: "left",
    field: "fullname",
    sortable: true,
  },
  {
    name: "phone",
    required: true,
    label: "Phone",
    align: "left",
    field: "phone",
    sortable: true,
  },

  {
    name: "designation",
    required: true,
    label: "Designation",
    align: "left",
    field: "designation",
    sortable: true,
  },
  {
    name: "type",
    required: true,
    label: "Type",
    align: "left",
    field: (e) =>
      typekeys[typeof e.type === "object" ? e.type.join(", ") : e] ||
      "Sector Expo",
    sortable: false,
  },
  {
    name: "attending_as",
    required: true,
    label: "Attending as",
    align: "left",
    field: "attending_as",
    sortable: true,
  },
  {
    name: "attending_via",
    required: true,
    label: "Attending via",
    align: "left",
    field: "attending_via",
    sortable: true,
  },

  {
    name: "prefered_sector",
    required: true,
    label: "Prefered Sector",
    align: "left",
    field: "prefered_sector",
    sortable: true,
  },
];

export default {
  setup() {
    useMeta({
      title: "Admin Dashboard",
    });
    return {};
  },

  components: {
    TPagination,
  },
  data() {
    return {
      columns,
      errors: [],
      filter: "",
      separator: "",
      mode: "list",
      loadingMore: false,
      currentPage: 1,
      items: [],
      meta: {},
      links: {},
      loading: false,
      initialPagination: {
        rowsPerPage: 30,
        pagesNumber: 1,
      },
    };
  },
  created() {
    this.onRequest();
  },
  methods: {
    onRequest(props) {
      this.loading = true;
      const url = `manage/form-data/1`;
      this.$api
        .get(url)
        .then((response) => {
          this.loading = false;
          this.items = response.data.data;
          this.links = response.data.links;
          this.meta = response.data.meta;
          console.log(this.items);
          this.initialPagination = {
            rowsPerPage: 30,
            rowsNumber: this.meta.to - this.meta.from + 1,
          };
        })
        .catch(({ response }) => {
          // console.log(response);
          this.message = response.data.message;
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.entries {
  /* width: 60%; */
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.data {
  background: green;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
}

@media (max-width: 1100px) {
  .data {
    padding: 1rem;
    font-size: 1rem;
    gap: 1rem;
  }
}
@media (max-width: 800px) {
  .data {
    font-size: 1.5rem;
    margin-top: 3rem;
  }
}
</style>
