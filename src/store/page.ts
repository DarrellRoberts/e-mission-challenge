import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

export const usePageNumberStore = defineStore("page", () => {
  const page: Ref<number> = ref(1);

  return { page };
});
