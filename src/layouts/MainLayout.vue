<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-sm">
      <q-toolbar class="navBar no_pad justify-center">
        <div class="nav__links">
          <q-tabs indicator-color="accent" dense active-color="accent">
            <q-route-tab
              label="Home"
              class="text-dark nav_items"
              ripple
              no-caps
              exact
              @click="goHome"
            />

            <q-route-tab
              class="text-dark nav_items"
              label="About"
              ripple
              no-caps
              exact
              @click="gotoAbout"
            />

            <q-route-tab
              label="Objectives "
              class="text-dark nav_items"
              ripple
              no-caps
              @click="gotoGoals"
              exact
            />
            <q-route-tab
              class="text-dark nav_items"
              label="Features"
              ripple
              no-caps
              @click="gotoFeatures"
              exact
            />

            <q-route-tab
              class="text-dark nav_items"
              label="Speakers"
              ripple
              no-caps
              exact
              @click="gotoSpeakers"
            />
            <q-route-tab
              class="text-dark nav_items"
              label="Metaverse"
              ripple
              no-caps
              @click="gotoMetaverse"
              exact
            />
          </q-tabs>
        </div>
        <q-btn
          flat
          dense
          round
          color="black"
          icon="menu"
          aria-label="Menu"
          class="nav__toggler"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-tabs class="column" active-color="primary">
        <div
          style="width: 100%"
          class="column q-py-lg items-center side_bar justify-center"
        >
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/"
            exact
            label="Home"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/greyhobb"
            label="GreyHobb"
            exact
          />

          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/greytech"
            label="GreyTech"
            exact
          />
          <q-route-tab
            label="GreyCreate"
            ripple
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/greycreate"
            exact
          />
          <q-route-tab
            label="Metaverse"
            ripple
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/metaverse"
            exact
          />
        </div>
      </q-tabs>
    </q-drawer>

    <!-- <q-page-container>
      <router-view />
    </q-page-container> -->
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"> </component>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  mounted() {
    console.log(this.$store.animate.refs[3].features);
  },

  methods: {
    goHome() {
      this.$store.animate.refs[0].home.scrollIntoView({ behavior: "smooth" });
    },
    gotoAbout() {
      this.$store.animate.refs[1].about.scrollIntoView({ behavior: "smooth" });
    },
    gotoGoals() {
      this.$store.animate.refs[2].goals.scrollIntoView({ behavior: "smooth" });
    },
    gotoFeatures() {
      this.$store.animate.refs[3].features.scrollIntoView({
        behavior: "smooth",
      });
    },
    gotoSpeakers() {
      this.$store.animate.refs[3].speakers.scrollIntoView({
        behavior: "smooth",
      });
    },
    gotoMetaverse() {
      this.$store.animate.refs[4].metaverse.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
});
</script>
<style scoped>
.logo .q-item {
  padding: 0;
}
.logo img {
  width: 80%;
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

.addbor {
  border: 1px solid #f4f4f4;
  padding: 0.55rem;
  width: 100%;
  display: flex;
  justify-content: center;
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
@media (max-width: 850px) {
  .menu {
    display: block;
  }

  .pages {
    display: none;
  }
}
@media (max-width: 800px) {
  .nav__toggler {
    display: flex;
  }
  .nav__links {
    display: none;
  }
}
@media (max-width: 600px) {
  .logo > div {
    font-size: 25px;
  }
}
</style>
