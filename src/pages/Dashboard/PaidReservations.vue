<template>
  <div class="q-pt-xl">
    <q-table
      title="Spaces"
      class="q-pt-xl"
      :rows="items"
      :hide-header="mode === 'grid'"
      :columns="columns"
      row-key="id"
      :grid="mode == 'grid'"
      :filter="filter"
      :loading="loading"
      selection="multiple"
      v-model:selected="selected"
      :pagination="initialPagination"
      @request="onRequest"
    >
      <template v-slot:top-right="props">
        <q-input
          outlined
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
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

        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          padding="xs"
          v-if="rows.length"
          @click="exportTable"
        />
      </template>

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
import { ref, computed } from "vue";
import { exportFile, useMeta } from "quasar";
import TPagination from "../../components/TPagination.vue";
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
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "company",
    required: true,
    label: "Company",
    align: "left",
    field: "company",
    sortable: true,
  },

  {
    name: "email",
    required: true,
    label: "Email",
    align: "left",
    field: "email",
    // field: (row) => row.meta.substr(0, 50),
    sortable: true,
  },
  {
    name: "paid",
    required: true,
    label: "Paid",
    align: "left",
    field: "paid",
    // field: (row) => row.meta.substr(0, 50),
    sortable: true,
  },
  {
    name: "date",
    required: true,
    label: "Date",
    align: "left",
    field: "date",
    // field: (row) => row.meta.substr(0, 50),
    sortable: true,
  },
  {
    name: "selected_space",
    required: true,
    label: "Selected space",
    align: "left",
    field: "selected_space",
    // field: (row) => row.meta.substr(0, 50),
    sortable: true,
  },
];
function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
export default {
  setup() {
    useMeta({
      title: "Reservations",
    });
  },
  components: {
    TPagination,
  },
  data() {
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 8,
    });
    return {
      columns,
      selected: [],
      category: null,
      categories: [],
      rows: [],
      errors: [],
      image: null,
      data: {},
      pagination,
      filter: "",
      curl: "",
      separator: "",
      mode: "list",
      role: "fruitbay",
      items: [],
      meta: {},
      links: {},
      currentPage: 1,
      data: {},
      loading: false,
      editstate: false,
      editReserve: false,
      editLoad: false,
      reserveid: "",
      spaceid: "",
      initialPagination: {
        rowsPerPage: 30,
        pagesNumber: 1,
      },
      loaders: {
        delete: false,
        category: false,
        deleteBtn: [],
        save: [],
      },
    };
  },

  computed: {
    pagesNumber() {
      return Math.ceil(this.rows.length / this.pagination.rowsPerPage);
    },
  },

  mounted() {
    this.onRequest({
      pagination: this.pagination,
      filter: undefined,
    });
  },

  methods: {
    onRequest(props) {
      this.loading = true;
      const url = `admin/spaces/reservations/paid`;
      this.curl = url;
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
          console.log(response);
          this.loading = false;
          this.rows = [];
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

    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          this.rows.map((row) =>
            this.columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");
      const status = exportFile("fruitbay-management.csv", content, "text/csv");
      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
        });
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
