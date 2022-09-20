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
      @request="onRequest"
      :pagination="initialPagination"
      id="contentContainer"
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
import { ref } from "vue";
import TPagination from "../components/TPagination.vue";
import { useMeta } from "quasar";
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
    field: "type",
    sortable: true,
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
    return {
      columns,
      rows: [],

      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 30,
      },
    };
  },

  components: {
    TPagination,
  },
  data() {
    return {
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
    };
  },

  mounted() {
    this.onRequest();
  },
  // mounted() {
  //   this.onRequest({
  //     filter: undefined,
  //   });
  // },

  methods: {
    onRequest(props) {
      this.loading = true;
      const url = `manage/form-data/1`;
      this.$api
        .get(url)
        .then((response) => {
          console.log(response);
          this.loading = false;
          this.rows = response.data.data;
          this.items = response.data.data;
          this.links = response.data.links;
          this.meta = response.data.meta;
        })
        .catch(({ response }) => {
          // console.log(response);
          this.message = response.data.message;
          this.loading = false;
          this.rows = [];
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
