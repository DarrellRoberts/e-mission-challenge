<script setup lang="ts">
import { computed } from "vue";

const skeletonArray = computed<number[]>(() => {
  return new Array(10);
});
</script>

<template>
  <div class="paginated-posts-container">
    <v-container v-for="(_, i) in skeletonArray">
      <v-skeleton-loader
        :key="i"
        class="pa-2 ma-2"
        type="article"
      ></v-skeleton-loader>
    </v-container>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/posts.css";
</style>
