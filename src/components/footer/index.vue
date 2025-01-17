<script lang="ts" setup>
import { ref, type Ref } from "vue";

const icons: Ref<string[]> = ref([
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram",
]);
</script>

<template>
  <v-footer class="d-flex flex-column">
    <div class="bg-black d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        size="small"
        variant="plain"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Blog Website</strong>
    </div>
  </v-footer>
</template>

<style scoped>
@import "../../assets/stylesheets/components/footer.css";
</style>
