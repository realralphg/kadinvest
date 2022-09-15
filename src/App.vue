<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  mounted() {
    let script = document.createElement("script");
    script.src = "/icons.js";
    document.head.append(script);
  },
});
</script>
