<script lang="ts" setup>
import Hero from "@/components/misc/Hero.vue";
import { useHeadingStore } from "@/store/heading";

const store = useHeadingStore();

store.changeHeading("About");
</script>

<template>
  <Hero :heading="store.heading" />
</template>
