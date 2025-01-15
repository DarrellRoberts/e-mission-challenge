<script lang="ts" setup>
import { usePostsStore } from "@/store/posts";

const store = usePostsStore();
const loading = ref(store.loading);
</script>

<template>
  <h2 v-if="store.loading">Loading...</h2>
  <v-col v-else>
    <v-card
      subtitle="here is the sub blog title"
      text="here are the blog text"
      title="here is the blog title"
      ><NuxtLink to="/posts/">Read More</NuxtLink></v-card
    >
  </v-col>
</template>
