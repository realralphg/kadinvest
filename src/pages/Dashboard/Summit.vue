<template>
  <div class="q-pa-md sub">
    <!-- {{ items }} -->
    <!-- {{ items }} -->
    <!-- {{ getSt }} -->
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
      <template v-slot:top-right="props">
        <div class="entries">
          <div class="data row justify-between">
            <span>Total Entries:</span>
            <span class="text-weight-bold">{{ total }}</span>
          </div>

          <!-- <p class="hidden q-pa-md bg-black text-white">st: {{ getSt }}</p> -->
        </div>
        <q-input
          outlined
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          v-if="mode === 'list'"
        >
          <q-tooltip :disable="$q.platform.is.mobile">
            {{ props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen" }}
          </q-tooltip>
        </q-btn>

        <q-btn
          flat
          round
          dense
          :icon="mode === 'grid' ? 'list' : 'grid_on'"
          @click="
            mode = mode === 'grid' ? 'list' : 'grid';
            separator = mode === 'grid' ? 'none' : 'horizontal';
          "
          v-if="!props.inFullscreen"
        >
          <q-tooltip :disable="$q.platform.is.mobile">{{
            mode === "grid" ? "List" : "Grid"
          }}</q-tooltip>
        </q-btn>

        <!-- <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          padding="xs"
          v-if="items.length"
          @click="exportTable"
        /> -->
      </template>
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
import TPagination from "../../components/TPagination.vue";
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
    name: "name",
    required: true,
    label: "name",
    align: "left",
    field: "name",
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
    name: "organization",
    required: true,
    label: "Organization",
    align: "left",
    field: "organization",
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
      total: "",
      sector_expo_stats: "",
      summit_stats: "",
      both_stats: "",
      virtual_stats: "",
      physical_stats: "",
      metaverse_stats: "",
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
    this.getStats();
  },
  methods: {
    onRequest(props) {
      this.loading = true;
      const url = `manage/form-data/5`;
      this.$api
        .get(url)
        .then((response) => {
          //   console.log(response);
          this.loading = false;
          this.items = response.data.data;
          this.links = response.data.links;
          this.meta = response.data.meta;
          // console.log(this.items);
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

    getStats() {
      this.$api
        .get(
          "manage/form-data/stats/5?data=type:summit,type:sector_expo,type:summit.sector_expo,attending_via:Metaverse,attending_via:Physical,attending_via:Virtual"
        )
        .then((response) => {
          this.total = response.data.data.total;

          //   console.log(response);
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
