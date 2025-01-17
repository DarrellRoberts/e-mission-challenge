<script lang="ts" setup>
import Hero from "@/components/misc/Hero.vue";
import Contact from "@/components/contact/index.vue";
import { useHeadingStore } from "@/store/heading";

const store = useHeadingStore();

store.changeHeading("Contact");
</script>

<template>
  <Hero :heading="store.heading" />
  <Contact />
</template>
