<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <Welcome /> -->
    <nav class="navbar">
      <div class="navbar-container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="linee menuline1"></span>
          <span class="linee menuline2"></span>
          <span class="linee menuline3"></span>
        </div>
        <ul class="menu-items">
          <li>
            <q-btn
              label="Home"
              class="text-dark nav_items"
              ripple
              no-caps
              exact
              @click="goHome"
            />
          </li>
          <li>
            <q-btn
              class="text-dark nav_items"
              label="About"
              ripple
              no-caps
              exact
              @click="gotoAbout"
            />
          </li>
          <li>
            <q-btn
              label="Objectives "
              class="text-dark nav_items"
              ripple
              no-caps
              @click="gotoGoals"
              exact
            />
          </li>
          <li>
            <q-btn
              class="text-dark nav_items"
              label="Features"
              ripple
              no-caps
              @click="gotoFeatures"
              exact
            />
          </li>
          <li>
            <q-btn
              class="text-dark nav_items"
              label="Speakers"
              ripple
              no-caps
              exact
              @click="gotoSpeakers"
            />
          </li>
          <li>
            <q-btn
              class="text-dark nav_items"
              label="Metaverse"
              ripple
              no-caps
              @click="gotoMetaverse"
              exact
            />
          </li>
          <li>
            <q-btn
              class="text-dark nav_items"
              label="Register"
              ripple
              no-caps
              to="/register"
              exact
            />
          </li>
          <li>
            <q-btn
              class="text-dark nav_items"
              label="Exhibition Booths"
              ripple
              no-caps
              to="/boot"
              exact
            />
          </li>
          <li>
            <q-btn
              class="text-dark nav_items"
              label="Sector Expo"
              ripple
              no-caps
              to="/sector-expo"
              exact
            />
          </li>
          <li>
            <q-btn
              class="text-dark sponsor nav_items"
              label="Become a sponsor"
              ripple
              no-caps
              to="/sponsor"
              exact
            />
          </li>
        </ul>
        <h1 class="logo">
          <img class="logoo" src="/images/logo.png" alt="" />
        </h1>
      </div>
    </nav>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" class="component-wrapper"> </component>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import Welcome from "../pages/Welcome.vue";
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    Welcome,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const beforeEnter = (el) => {
      console.log("before enter");
      el.style.transform = "translateY(-100vh)";
    };

    const enter = (el) => {
      console.log("enter");

      gsap.to(el, {
        duration: 1,
        opacity: 1,
        translateY: "0vh",
        ease: "power1.inOut",
      });
    };

    const beforeLeave = (el) => {
      // console.log("before leave");
      el.style.transform = "translateY(0vh)";
    };

    const leave = (el, done) => {
      // console.log("leave");

      gsap.to(el, {
        duration: 1,
        opacity: 1,
        translateY: "100vh",
        ease: "power1.inOut",
        onComplete: done,
      });
    };
    return {
      beforeEnter,
      enter,
      beforeLeave,
      leave,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  mounted() {
    // console.log(this.$store.animate.refs);
    // console.log(document.getElementById("goals"));
  },

  methods: {
    goHome() {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    },
    gotoAbout() {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
      // this.$store.animate.refs[1].about.scrollIntoView({ behavior: "smooth" });
    },
    gotoGoals() {
      document.getElementById("goals").scrollIntoView({ behavior: "smooth" });
    },
    gotoFeatures() {
      document.getElementById("features").scrollIntoView({
        behavior: "smooth",
      });
    },
    gotoSpeakers() {
      document.getElementById("meet").scrollIntoView({
        behavior: "smooth",
      });
    },
    gotoMetaverse() {
      document.getElementById("metaverse").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
});
</script>
<style scoped>
h1 {
  line-height: 0;
}
.logo .q-item {
  padding: 0;
}

.logo {
  display: none;
}
.nav__links ul,
.right {
  display: flex;
  gap: 0.65rem;
  align-items: center;
}
.nav__links ul {
  text-transform: capitalize;
}

.nav__toggler {
  display: none;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.sponsor {
  padding: 10px 8px;
  background: #1f1b5e;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  color: #ffffff !important;
}
.navbar {
  box-shadow: 0px 5px 10px 0px #aaa;
  position: fixed;
  width: 100%;
  background: #fff;
  color: #000;
  opacity: 0.85;
  z-index: 3000;
}

.navbar-container {
  display: flex;
  justify-content: center;
  height: 64px;
  align-items: center;
}

.menu-items {
  order: 2;
  display: flex;
  align-items: center;
}
.logo {
  order: 1;
  font-size: 2.3rem;
}

.menu-items li {
  list-style: none;
  /* margin-left: 1.5rem; */
  font-size: 1.3rem;
}

.navbar a {
  color: #444;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.navbar a:hover {
  color: #117964;
}

/* @media (max-width: 1024px) {
  .menu-items li {
    margin-left: 1rem;
  }
} */
@media (max-width: 950px) {
  .sponsor {
    padding: 10px 5px;
    font-weight: 500;
    font-size: 13px;
    line-height: unset;
  }
}
@media (max-width: 1075px) {
  .navbar {
    opacity: 0.95;
  }

  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar-container .hamburger-lines .linee {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #1f1b5e;
    /* background: #333; */
  }

  .navbar-container .hamburger-lines .menuline1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .menuline2 {
    transition: transform 0.2s ease-in-out;
    width: 70%;
  }

  .navbar-container .hamburger-lines .menuline3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
    width: 90%;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #fff;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
    box-shadow: 5px 0px 10px 0px #aaa;
    overflow: scroll;
  }

  .navbar .menu-items li {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2.5rem;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container
    input[type="checkbox"]:checked
    ~ .hamburger-lines
    .menuline1 {
    transform: rotate(45deg);
  }

  .navbar-container
    input[type="checkbox"]:checked
    ~ .hamburger-lines
    .menuline2 {
    transform: scaleY(0);
  }

  .navbar-container
    input[type="checkbox"]:checked
    ~ .hamburger-lines
    .menuline3 {
    transform: rotate(-45deg);
  }
}

@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }
}
@media (max-width: 1075px) {
  .menu {
    display: block;
  }

  .pages {
    display: none;
  }
}
@media (max-width: 1075px) {
  .nav__toggler {
    display: flex;
  }
  .logo img {
    width: 40px;
    height: 50px;
  }
  .nav__links {
    display: none;
  }
  .navBar {
    justify-content: space-between;
  }
  .logo {
    display: block;
  }
}
</style>
