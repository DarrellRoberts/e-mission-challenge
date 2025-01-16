import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  const search: Ref<string> = ref("");

  return { search };
});
