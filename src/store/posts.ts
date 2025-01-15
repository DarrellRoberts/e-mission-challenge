import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { useFetch } from "../composables/useFetch";

export const usePostsStore = defineStore("posts", () => {
  const posts: Ref<any | null> = ref(null);

  const { fetchedData, loading } = useFetch("https://jsonfakery.com/blogs");

  watch(fetchedData, () => {
    posts.value = fetchedData.value;
  });

  return { posts, loading };
});
