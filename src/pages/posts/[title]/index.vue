<script lang="ts" setup>
import Hero from "@/components/misc/Hero.vue";
import { useHeadingStore } from "@/store/heading";
import { useSinglePostStore } from "@/store/singlePost";
import { useTitleStore } from "~/store/title";

const store = useHeadingStore();
const titleStore = useTitleStore();
const route = useRoute();

store.changeHeading(`${route.params.title}`);
titleStore.changeTitle();

const singlePoststore = useSinglePostStore();

console.log(singlePoststore.singlePost);
// console.log(titleStore.title);
</script>

<template>
  <Hero :heading="store.heading" />
  <div v-if="singlePoststore.loadingPost">Loading...</div>
  <div v-else v-html="singlePoststore?.singlePost?.main_content"></div>
</template>
