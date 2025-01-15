<script lang="ts" setup>
import { usePostsStore } from "@/store/posts";

const store = usePostsStore();
</script>

<template>
  <h2 v-if="store.loading">Loading...</h2>
  <v-col v-else>
    <v-card
      :subtitle="store.posts[0].subtitle"
      :text="store.posts[0].summary"
      :title="store.posts[0].title"
      ><NuxtLink to="/posts/">Read More</NuxtLink></v-card
    >
  </v-col>
  <button @click="console.log(store.posts)">Click</button>
</template>
