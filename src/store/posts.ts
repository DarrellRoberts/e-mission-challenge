import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { usePageNumberStore } from "./page";

export const usePostsStore = defineStore("posts", () => {
  const paginatedPosts: Ref<any | null> = ref(null);
  const loading: Ref<boolean> = ref(true);
  const error: Ref<unknown | null> = ref(null);
  const pageStore = usePageNumberStore();

  watchEffect(async () => {
    try {
      loading.value = true;
      const response = await fetch(
        `https://jsonfakery.com/blogs/paginated?page=${pageStore.page}`
      );
      paginatedPosts.value = await response.json();
      paginatedPosts.value = paginatedPosts.value?.data;
      loading.value = false;
    } catch (err) {
      loading.value = false;
      error.value = err;
      console.error(err);
    }
  });

  return { paginatedPosts, loading, error };
});
