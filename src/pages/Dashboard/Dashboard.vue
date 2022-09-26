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
        <q-btn
          @click="createSpace"
          color="primary"
          label="Upload more spaces"
          padding="sm"
          class="q-mr-xs"
        />

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
            <q-btn
              round
              dense
              color="negative"
              size="sm"
              icon="delete"
              :loading="loaders.deleteBtn[props.value]"
              @click="deleteFruitbays(props.value)"
            >
              <q-tooltip>Delete {{ props.row.name }}</q-tooltip>
            </q-btn>

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
              @click="EditFruitbay(props.row)"
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

      <template v-slot:bottom v-if="selected.length">
        <q-btn
          @click="deletemultiple"
          :loading="loaders.delete"
          color="negative"
          :label="`Delete ${selected.length} Selected Fruitbays`"
          padding="sm"
          class="q-mr-xs"
        />
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
  <q-dialog v-model="create_Page">
    <q-card style="width: 800px; max-width: 85vw">
      <q-card-section>
        <div class="text-h6">
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
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section class="q-pt-none">
        <q-form @submit.prevent="createPage" class="q-gutter-md">
          <div class="row q-gutter-sm">
            <div class="col">
              <q-item-label class="q-pb-xs">Image</q-item-label>

              <q-file
                dense
                color="teal"
                outlined
                name="file"
                accept=".jpg,.png,.svg,.jpeg"
                v-model="image"
                label="Image"
                @update:model-value="setFile"
              >
              </q-file>
            </div>
          </div>

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
              <q-item-label class="q-pb-xs">Max occupants</q-item-label>
              <q-input
                dense
                outlined
                name="max_uccupants"
                type="text"
                v-model="data.max_occupants"
                label="Max occupants"
              />
              <div class="error" v-if="errors.max_occupants">
                {{ errors.max_occupants[0] }}
              </div>
            </div>
          </div>
          <div class="row q-gutter-sm">
            <div class="col">
              <q-item-label class="q-pb-xs">Price</q-item-label>
              <q-input
                dense
                outlined
                name="price"
                v-model="data.price"
                label="price"
              />
              <div class="error" v-if="errors.price">
                {{ errors.price[0] }}
              </div>
            </div>
            <div class="col">
              <q-item-label class="q-pb-xs">Color</q-item-label>
              <q-input
                dense
                outlined
                name="color"
                v-model="data.custom_data[0].color"
                label="Color"
              />
              <div class="error" v-if="errors.custom_data">
                {{ errors.custom_data[0] }}
              </div>
            </div>
          </div>
          <div class="row q-gutter-sm">
            <div class="col">
              <q-item-label class="q-pb-xs">Info</q-item-label>
              <q-input
                dense
                outlined
                type="textarea"
                name="info"
                v-model="data.info"
                label="Info"
              />
              <div class="error" v-if="errors.info">
                {{ errors.info[0] }}
              </div>
            </div>
          </div>

          <q-card-actions align="right" class="text-teal">
            <q-btn
              v-if="!editstate"
              label="Save"
              type="submit"
              color="primary"
              @click="createPage"
              v-close-popup="false"
              :loading="loading"
            />
            <q-btn
              v-if="editstate"
              label="Edit"
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
    name: "size",
    required: true,
    label: "Size",
    align: "left",
    field: "size",
    sortable: true,
  },

  {
    name: "info",
    required: true,
    label: "Info",
    align: "left",
    field: "info",
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
      title: "Upload Pages",
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
      data: { custom_data: [{ color: "" }] },
      files: null,
      editstate: false,
      createstate: null,
      spaceId: "",
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
      loading: false,
      editLoad: false,
      create_Page: false,
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
    setFile(prop) {
      this.fruitbay.image = prop;
    },
    setCategoryId(option) {
      this.$refs._dh.toggleOption(option.opt);
      this.fruitbay.fruit_bay_category_id = this.category.id;
    },
    onRequest(props) {
      this.loading = true;
      const url = `admin/spaces`;
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

    createSpace() {
      this.editstate = false;
      this.create_Page = true;
      this.data = {};
    },
    createPage(e) {
      e.preventDefault();
      this.loading = true;
      this.$api
        .post(`admin/spaces`, this.data)
        .then(({ data }) => {
          console.log("added", data);
          this.refreshPage();
          this.loading = false;
          this.create_Page = false;
          this.errors = [];
          this.$q.notify({
            message: data.message,
            color: "green",
            position: "top",
          });
        })
        .catch((e) => {
          let error = this.$plugins.reader.error(e);
          this.errors = error.errors || {};
          this.loading = false;

          this.$helper.notify(error.message || error, error.status || "error");
          this.$q.notify({
            message: "Error",
            color: "red",
            position: "top",
          });
        });
    },
    EditFruitbay(manga) {
      this.editstate = true;
      this.create_Page = true;
      console.log(manga);
      let pageid = manga.id;
      this.spaceId = pageid;
      this.data.info = manga.info;
      this.data.name = manga.name;
      this.data.max_occupants = manga.max_occupants;
      this.data.price = manga.price;
    },

    editedFunction(e) {
      e.preventDefault();
      let spaceId = this.spaceId;
      this.editLoad = true;
      this.$api
        .put(`admin/spaces/${spaceId}`, this.data)
        .then(({ data }) => {
          console.log("edited", data);
          this.refreshPage();
          this.editLoad = false;
          this.create_Page = false;
          this.image = null;
          this.errors = [];
        })
        .catch((e) => {
          this.editLoad = false;

          this.errors = error.errors || {};
          this.$helper.notify(error.message || error, error.status || "error");
        });
    },
    deleteFruitbays(id) {
      console.log(id);
      const ids =
        (id && typeof id === "string") || typeof id === "number"
          ? [id]
          : this.selected.map((e) => e.id);
      this.$h
        .notify(
          "Are you sure you want to delete this space? This action may be irreversible!",
          "error",
          true,
          "Yes, Delete!"
        )
        .onOk(() => {
          if (id) this.loaders.deleteBtn[id] = true;
          this.loaders.delete = true;
          this.$api
            .delete(`admin/spaces/${id}`)
            .then((response) => {
              this.loaders.delete = false;
              if (id) this.loaders.deleteBtn[id] = false;

              this.selected = [];
              this.refreshPage();
            })
            .catch((response) => {
              console.log(response);
              this.loaders.delete = false;
              if (id) this.loaders.deleteBtn[id] = false;
            });
        });
    },

    deletemultiple(id) {
      const ids =
        (id && typeof id === "string") || typeof id === "number"
          ? [id]
          : this.selected.map((e) => e.id);

      console.log(ids);
      this.$api
        .delete("admin/spaces", { params: { items: ids } })
        .then((response) => {
          this.loaders.delete = false;
          if (id) this.loaders.deleteBtn[id] = false;
          this.selected = [];
          this.refreshPage();
        })
        .catch((response) => {
          console.log(response);
          this.loaders.delete = false;
          if (id) this.loaders.deleteBtn[id] = false;
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
