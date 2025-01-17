<script setup lang="ts">
import { type NavLink } from "~/types/NavLink";

const navLinks: Ref<NavLink[]> = ref([
  { text: "Home", to: "/", icon: "mdi-home" },
  { text: "Contact", to: "/contact", icon: "mdi-email" },
  { text: "About", to: "/about", icon: "mdi-information" },
]);
const drawer: Ref<boolean> = ref(false);
</script>

<template>
  <header>
    <v-layout>
      <v-app-bar color="black" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>Blog Website</v-toolbar-title>

        <v-spacer></v-spacer>

        <NuxtLink to="/"
          ><v-btn icon="mdi-home" variant="text"></v-btn
        ></NuxtLink>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list v-for="(link, i) in navLinks">
          <v-list-item :key="i" :to="link.to">
            <template v-slot:prepend>
              <v-icon>{{ link.icon }}</v-icon>
            </template>
            <v-list-item-title v-text="link.text" />
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </header>
</template>

<style scoped>
@import "../../assets/stylesheets/components/header.css";
</style>
