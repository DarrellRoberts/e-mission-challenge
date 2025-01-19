<script lang="ts" setup>
import { usePostsStore } from "~/store/posts";
import { useHeadingStore } from "~/store/heading";
import { onMounted } from "vue";

const postsStore = usePostsStore();
const headingStore = useHeadingStore();
const route = useRoute();

headingStore.changeHeading(`${route.params.title}`);

onMounted(() => {
  if (postsStore.posts) {
    postsStore.handleSinglePost(`${route.params.title}`);
  }
});
</script>

<template>
  <div v-if="!postsStore.singlePost" class="single-post-skeleton-container">
    <h1>
      Loading: <i>{{ headingStore.heading }}</i>
    </h1>
    <v-progress-linear
      color="var(--secondary-font-color)"
      indeterminate
    ></v-progress-linear>
  </div>
  <div v-else>
    <v-container class="d-flex align-center w-100">
      <div class="avatar-container">
        <v-avatar>
          <v-img
            :alt="postsStore?.singlePost?.user.username"
            :src="postsStore?.singlePost?.user.profile_pic"
          ></v-img>
        </v-avatar>
        <span>{{ postsStore?.singlePost?.user.username }}</span>
        <span>Published on: {{ postsStore?.singlePost?.created_at }}</span>
        <i>{{ postsStore.singlePost?.title }}</i>
      </div>
      <v-parallax
        class="single-post-image"
        :src="postsStore?.singlePost?.featured_image"
        :lazy-src="postsStore?.singlePost?.featured_image"
        cover
        max-height="300"
        min-width="200"
      ></v-parallax>
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
