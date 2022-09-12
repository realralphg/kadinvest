import { boot } from "quasar/wrappers";
import axios from "axios";
import loadStore from "stores/loader";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
// const api = axios.create({ baseURL: process.env.baseURL })
axios.defaults.baseURL = process.env.baseURL;
axios.defaults.headers.common["Content-Type"] =
  "application/json; charset=utf-8";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const api = axios.create({
  // baseURL: process.env.baseURL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": "true",
  },
});

// Get the token from session storage
let token = localStorage.getItem("token");
axios.interceptors.response.use(function (response) {
  if (response.data && response.data.token) {
    token = response.data.token;
  }
  return response;
});

api.interceptors.request.use(function (config) {
  // Check valid token
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});
export default boot(({ app, router }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  app.config.globalProperties.$store = loadStore;

  
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  // router.beforeEach((to,from, next) => {
  //   const store = app.config.globalProperties.$store;
  //   if (store.auth.token) {
  //     api.defaults.headers.common[
  //       "Authorization"
  //     ] = `Bearer ${store.auth.token}`;
  //   }
  //   console.log(to.meta.requireGuest);
  //   console.log(!store.auth.token);
  //   console.log(store.auth.userDetails);
  //   if (to.name === 'logout' && store.auth.userDetails) {
  //     store.auth.logOut(store.auth.userDetails).then(() => {
  //       return router.replace({ name: 'login' })
  //     })
  //   }

  //   if (to.meta.requireAuth && !store.auth.token) {
  //     return next({ name: "login" });
  //   } else if (to.meta.requireGuest && store.auth.token) {
  //     return next({ name: "welcome" });
  //   }

  //   return next()
  // });

});

export { axios, api };
