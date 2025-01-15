<script setup lang="ts">
defineProps({
  heading: String,
});
</script>

<template>
  <div class="hero-container">
    <h1>{{ heading }}</h1>
  </div>
</template>
