<script lang="ts" setup>
import { usePostsStore } from "~/store/posts";

const postsStore = usePostsStore();

console.log(postsStore.singlePost);
</script>

<template>
  <div v-if="postsStore.loading">Loading...</div>
  <div v-else>
    <v-avatar>
      <v-img
        :alt="postsStore?.singlePost?.user.username"
        :src="postsStore?.singlePost?.user.profile_pic"
      ></v-img>
    </v-avatar>
    <span>{{ postsStore?.singlePost?.user.username }}</span>
    <span>Published on: {{ postsStore?.singlePost?.created_at }}</span>
    <div v-html="postsStore?.singlePost?.main_content"></div>
    <v-img
      class="mx-auto"
      height="300"
      :lazy-src="postsStore?.singlePost?.featured_image"
      max-width="500"
      :src="postsStore?.singlePost?.featured_image"
    ></v-img>
  </div>
</template>
