import { useAnimateStore } from "stores/animate";
import { useAuthStore } from "stores/auth";

export default {
  animate: useAnimateStore(),
  auth: useAuthStore(),
}
