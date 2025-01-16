<script setup lang="ts">
const navLinks: Ref<string[]> = ref(["Home", "Contact", "About"]);
const drawer: Ref<boolean> = ref(false);
</script>

<template>
  <header>
    <v-card>
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
          theme="dark"
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
        >
          <v-list :items="navLinks" color="white"> </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </header>
</template>
