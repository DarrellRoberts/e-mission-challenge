import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { usePostsStore } from "./posts";

export const usePageNumberStore = defineStore("page", () => {
  const page: Ref<number> = ref(1);

  return { page };
});
