<template>
  <div
    class="q-pa-md q-gutter-sm flex justify-center"
    v-if="links.next || links.prev"
  >
    <q-btn
      v-if="
        $meta.last_page > 1 &&
        $links.first &&
        $h.getPageNumber($links.first) !== modelValue
      "
      :disable="$h.getPageNumber($links.first) === modelValue"
      class="tf-font-bold"
      color="red"
      text-color="red"
      icon="fas fa-angles-left"
      size="10px"
      flat
      :to="'?page=' + $h.getPageNumber($links.first)"
      round
      dense
      unelevated
      @click="navigate($links.first)"
    ></q-btn>
    <q-btn
      v-if="$meta.last_page > 1 && $links.prev"
      :disable="$h.getPageNumber($links.prev) === modelValue"
      class="tf-font-bold"
      color="primary"
      text-color="primary"
      icon="fas fa-angle-left"
      size="10px"
      flat
      :to="'?page=' + $h.getPageNumber($links.prev)"
      round
      dense
      unelevated
      @click="navigate($links.prev)"
    ></q-btn>
    <template v-for="(page, index) in $meta.links" :key="index">
      <q-btn
        v-if="is_numeric(page.label)"
        :disable="!page.url"
        class="tf-font-bold"
        color="primary"
        :text-color="page.active ? 'white' : 'primary'"
        :label="page.label"
        size="10px"
        :flat="!page.active"
        :to="'?page=' + $h.getPageNumber(page.url)"
        round
        dense
        unelevated
        @click="navigate(page.url)"
      ></q-btn>
    </template>
    <q-btn
      v-if="$meta.last_page > 1 && $links.next"
      :disable="$h.getPageNumber($links.next) === modelValue"
      class="tf-font-bold"
      color="primary"
      text-color="primary"
      icon="fas fa-angle-right"
      size="10px"
      flat
      :to="'?page=' + $h.getPageNumber($links.next)"
      round
      dense
      unelevated
      @click="navigate($links.next)"
    ></q-btn>
    <q-btn
      v-if="
        $meta.last_page > 1 &&
        $links.last &&
        $h.getPageNumber($links.last) !== modelValue
      "
      :disable="$h.getPageNumber($links.last) === modelValue"
      class="tf-font-bold"
      color="primary"
      text-color="primary"
      icon="fas fa-angles-right"
      size="10px"
      flat
      :to="'?page=' + $h.getPageNumber($links.last)"
      round
      dense
      unelevated
      @click="navigate($links.last)"
    ></q-btn>
  </div>
</template>

<script>
import { scroll } from "quasar";
const { getScrollTarget, setVerticalScrollPosition } = scroll; // takes an element
export default {
  name: "TPagination",
  emits: ["update:modelValue", "loading", "loaded"],
  props: {
    modelValue: {
      type: [Number, String],
      default: 1,
    },
    meta: {
      validator: (e) => e.links !== "undefined",
      type: Object,
      default: () => ({}),
    },
    links: {
      type: Object,
      default: () => ({}),
    },
    container: {
      type: [String, Element],
      default: null,
    },
  },
  watch: {
    meta(e) {
      this.$meta = e;
      this.canMeta = true;
    },
    canMeta(e) {
      this.jump(this.$route.query.page, e);
    },
    modelValue(page) {
      this.jump(page, true);
    },
    links(e) {
      this.$links = e;
    },
  },
  data() {
    return {
      canMeta: false,
      loading: false,
      data: {},
      $meta: this.meta,
      $links: this.links,
      current: this.modelValue || this.$route.query.page || 1,
    };
  },
  methods: {
    is_numeric(n) {
      return !isNaN(n);
    },
    navigate(url, initial) {
      this.loading = true;
      this.$emit("loading", true);
      this.$api
        .get(url)
        .then(({ data }) => {
          this.data = data.data;
          this.loading = false;
          this.$meta = data.meta;
          this.$links = data.links;
          this.$emit("update:modelValue", this.$h.getPageNumber(url));
          this.$emit("loaded", this.data);
          if (initial !== true && this.container) {
            this.scrollToElement(this.container);
          }
        })
        .catch((e) => {
          this.loading = false;
          console.log(e);
          // let error = this.$plugins.reader.error(e);
          // this.$h.notify(error.message || error, error.status || "error");
        });
    },
    jump(page2go, go = false) {
      if (this.meta.links && page2go && go === true) {
        const current =
          this.meta.links.filter((e) => e.active === true)[0] || {};
        const page = this.$h.getPageNumber(current.url);
        const new_url = current.url
          .replace("?page=" + page, "?page=" + page2go)
          .replace("&page=" + page, "&page=" + page2go);
        if (page !== page2go) {
          const query = { ...this.$route.query, page: page2go };
          this.navigate(new_url, true);
          this.$router.push({ name: this.$route.name, query });
        }
      }
    },
    scrollToElement(el) {
      el = typeof el === "string" ? document.querySelector(el) : el;
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = 100;
      setVerticalScrollPosition(target, offset, duration);
    },
  },
};
</script>
