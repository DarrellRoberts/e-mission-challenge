<script lang="ts" setup>
import Hero from "@/components/misc/Hero.vue";
import Dashboard from "@/components/misc/Dashboard.vue";
</script>

<template>
  <Hero :heading="$t('dashboard.title')" />
  <Dashboard />
</template>
