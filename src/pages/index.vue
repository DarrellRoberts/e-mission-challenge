<script lang="ts" setup>
import Hero from "@/components/misc/Hero.vue";
import Posts from "@/components/blog/Posts.vue";
import { useHeadingStore } from "../store/heading";

const store = useHeadingStore();

store.changeHeading("Home");
</script>

<template>
  <Hero :heading="store.heading" />
  <Posts />
</template>
