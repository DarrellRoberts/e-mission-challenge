<script lang="ts" setup>
import { usePostsStore } from "@/store/posts";
import { usePageNumberStore } from "~/store/page";
import { useSearchStore } from "~/store/search";
import { computed } from "vue";

const postStore = usePostsStore();
const pageStore = usePageNumberStore();
const searchStore = useSearchStore();

const filteredPosts = computed<unknown>(() => {
  return postStore.paginatedPosts?.filter((post: any) =>
    post.title.toLowerCase().includes(searchStore.search.toLowerCase())
  );
});
</script>

<template>
  <h2 v-if="postStore.loading">Loading...</h2>
  <div v-else>
    <v-text-field
      prepend-icon="mdi-magnify"
      v-model="searchStore.search"
    ></v-text-field>
    <v-col v-for="post in filteredPosts">
      <v-card :subtitle="post.subtitle" :text="post.summary" :title="post.title"
        ><NuxtLink :to="/posts/ + post.title">Read More</NuxtLink></v-card
      >
    </v-col>
    <v-pagination
      v-if="!postStore.loading"
      :length="10"
      v-model="pageStore.page"
    ></v-pagination>
  </div>
</template>
