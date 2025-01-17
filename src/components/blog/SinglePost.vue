<script lang="ts" setup>
import { usePostsStore } from "~/store/posts";
import { useHeadingStore } from "~/store/heading";

const postsStore = usePostsStore();
const headingStore = useHeadingStore();
const route = useRoute();

headingStore.changeHeading(`${route.params.title}`);
</script>

<template>
  <div v-if="postsStore.loading">Loading...</div>
  <div v-else>
    <v-container class="d-flex justify-space-between align-center w-100">
      <div class="avatar-container">
        <v-avatar>
          <v-img
            :alt="postsStore?.singlePost?.user.username"
            :src="postsStore?.singlePost?.user.profile_pic"
          ></v-img>
        </v-avatar>
        <span>{{ postsStore?.singlePost?.user.username }}</span>
        <span>Published on: {{ postsStore?.singlePost?.created_at }}</span>
      </div>
      <v-img
        class="single-post-image"
        max-height="300"
        cover
        :lazy-src="postsStore?.singlePost?.featured_image"
        :src="postsStore?.singlePost?.featured_image"
      ></v-img>
    </v-container>
    <div
      v-html="postsStore?.singlePost?.main_content"
      class="single-post-main-content-container"
    ></div>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/single-post.css";
</style>
