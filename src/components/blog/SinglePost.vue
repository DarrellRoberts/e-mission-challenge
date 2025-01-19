<script lang="ts" setup>
import { usePostsStore } from "@/store/posts";
import { onMounted } from "vue";

const postsStore = usePostsStore();
const route = useRoute();

onMounted(() => {
  if (postsStore.posts) {
    postsStore.handleSinglePost(`${route.params.title}`);
  }
});
</script>

<template>
  <div v-if="!postsStore.singlePost" class="single-post-skeleton-container">
    <h1>
      {{ $t("loading") }} <i>{{ route.params.title }}</i>
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
        <span>{{ $t("published") }}</span
        ><span>{{ postsStore?.singlePost?.created_at }}</span>
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
