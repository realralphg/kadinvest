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

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div>
            <!-- {{ pagesNumber }} -->

            <q-btn
              round
              dense
              glossy
              color="info"
              size="sm"
              class="q-ml-sm"
              icon="edit"
              :loading="loaders.save[props.value]"
              @click="EditReservation(props.row)"
            >
              <q-tooltip>Edit {{ props.row.name }}</q-tooltip>
            </q-btn>
          </div>
        </q-td>
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
    <q-dialog v-model="editReserve">
      <q-card style="width: 800px; max-width: 85vw">
        <q-card-section>
          <div v-if="!editstate" class="text-h6">
            Add spaces
            <q-btn
              round
              flat
              dense
              icon="close"
              class="float-right"
              color="grey-8"
              v-close-popup
            ></q-btn>
          </div>
          <div v-else class="text-h6">
            Confirm reservation
            <q-btn
              round
              flat
              dense
              icon="close"
              class="float-right"
              color="grey-8"
              v-close-popup
            ></q-btn>
          </div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section class="q-pt-none">
          <q-form @submit.prevent="editedFunction" class="q-gutter-md">
            <div class="row q-gutter-sm">
              <div class="col">
                <q-item-label class="q-pb-xs">Name</q-item-label>
                <q-input
                  dense
                  outlined
                  name="name"
                  v-model="data.name"
                  label="Name"
                />
                <div class="error" v-if="errors.name">{{ errors.name[0] }}</div>
              </div>
              <div class="col">
                <q-item-label class="q-pb-xs">Company</q-item-label>
                <q-input
                  dense
                  outlined
                  name="company"
                  type="text"
                  v-model="data.company"
                  label="Company"
                />
                <div class="error" v-if="errors.company">
                  {{ errors.company[0] }}
                </div>
              </div>
            </div>
            <div class="row q-gutter-sm">
              <div class="col">
                <q-item-label class="q-pb-xs">Email</q-item-label>
                <q-input
                  dense
                  outlined
                  name="email"
                  v-model="data.email"
                  label="Email"
                />
                <div class="error" v-if="errors.email">
                  {{ errors.email[0] }}
                </div>
              </div>
            </div>

            <q-card-actions align="right" class="text-teal">
              <q-btn
                v-if="editstate"
                label="Paid"
                type="submit"
                color="primary"
                @click="editedFunction"
                v-close-popup="false"
                :loading="editLoad"
              />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
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

  {
    name: "actions",
    required: true,
    label: "Actions",
    align: "left",
    field: (row) => row.id,
    sortable: false,
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
      const url = `admin/spaces/reservations/pending`;
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
    EditReservation(reservation) {
      this.editReserve = true;
      this.editstate = true;
      console.log(reservation);
      let reserveid = reservation.id;
      let spaceid = reservation.space_id;
      this.reserveid = reserveid;
      this.spaceid = spaceid;
      this.data.company = reservation.company;
      this.data.email = reservation.email;
      this.data.name = reservation.name;
    },

    editedFunction(e) {
      e.preventDefault();
      let spaceid = this.spaceid;
      let reserveid = this.reserveid;
      this.editLoad = true;
      let status = { status: "paid" };
      this.$api
        .put(`admin/spaces/${spaceid}/reservations/${reserveid}/status`, status)
        .then(({ data }) => {
          console.log("edited", data);
          this.refreshPage();
          this.editLoad = false;
          this.editReserve = false;
          this.errors = [];
        })
        .catch(({ response }) => {
          this.editLoad = false;
          console.log(response);
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
