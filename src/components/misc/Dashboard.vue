<template>
  <div class="posts-dashboard-container">
    <h2>
      <NuxtLink to="/">{{ $t("dashboard.clickPrompt") }}</NuxtLink
      >{{ $t("dashboard.body") }}
    </h2>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/posts-dashboard.css";
</style>
