<script lang="ts" setup>
import Hero from "@/components/misc/Hero.vue";
import Posts from "@/components/blog/Posts.vue";
</script>

<template>
  <Hero :heading="$t('greeting')" />
  <Posts />
</template>
