import { boot } from 'quasar/wrappers'
import loadStore from "stores/loader";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router, store }) => {
  app.config.globalProperties = {
    ...app.config.globalProperties,
    $store: loadStore,
  }
})
