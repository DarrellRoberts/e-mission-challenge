<script lang="ts" setup>
import Hero from "@/components/misc/Hero.vue";
import Contact from "@/components/contact/index.vue";
</script>

<template>
  <Hero :heading="$t('contact')" />
  <Contact />
</template>
