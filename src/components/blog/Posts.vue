<script lang="ts" setup>
import { usePostsStore } from "~/store/posts";

const postsStore = usePostsStore();
</script>

<template>
  <h2 v-if="postsStore.loading">Loading...</h2>
  <div v-else>
    <v-text-field
      prepend-icon="mdi-magnify"
      v-model="postsStore.searchQuery"
    ></v-text-field>
    <v-col v-for="post in postsStore.filteredPosts">
      <v-card
        :subtitle="post.subtitle"
        :text="post.summary"
        :title="post.title"
      >
        <v-img
          class="mx-auto"
          height="200"
          :lazy-src="post.featured_image"
          max-width="200"
          :src="post.featured_image"
        ></v-img>
        <NuxtLink :to="/posts/ + post.title">Read More</NuxtLink></v-card
      >
    </v-col>
    <v-pagination
      v-if="!postsStore.loading"
      :length="postsStore.totalPages"
      v-model="postsStore.currentPage"
    ></v-pagination>
  </div>
</template>
