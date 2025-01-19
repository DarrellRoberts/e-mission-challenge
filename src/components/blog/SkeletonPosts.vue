<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  n: number;
}>();

const skeletonArray = computed<number[]>(() => {
  return new Array(props.n);
});
</script>

<template>
  <h2 class="pa-2 ma-2">{{ $t("loading") }}</h2>
  <v-progress-linear
    color="var(--secondary-font-color)"
    indeterminate
  ></v-progress-linear>
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
