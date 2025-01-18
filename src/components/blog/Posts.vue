<script lang="ts" setup>
import { usePostsStore } from "~/store/posts";
import SkeletonPosts from "./SkeletonPosts.vue";

const postsStore = usePostsStore();
</script>

<template>
  <div v-if="postsStore.loading">
    <SkeletonPosts :n="14" />
  </div>
  <div v-else>
    <v-text-field
      class="searchbar"
      placeholder="Search for blog post title"
      prepend-icon="mdi-magnify"
      v-model="postsStore.searchQuery"
    ></v-text-field>
    <div class="paginated-posts-container">
      <v-container v-for="post in postsStore.filteredPosts">
        <v-card
          class="pa-2 ma-2"
          :subtitle="post.subtitle"
          :text="post.summary"
          :title="post.title"
        >
          <NuxtLink :to="/posts/ + post.title"
            ><v-btn append-icon="mdi-magnify" color="black"
              >Read More</v-btn
            ></NuxtLink
          ></v-card
        >
      </v-container>
    </div>
    <v-pagination
      v-if="!postsStore.loading"
      :length="postsStore.totalPages"
      v-model="postsStore.currentPage"
      :total-visible="5"
    ></v-pagination>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/posts.css";
</style>
