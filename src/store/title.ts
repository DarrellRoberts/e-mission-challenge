import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

export const useTitleStore = defineStore("title", () => {
  const route = useRoute();
  const title: Ref<string> = ref("");

  const changeTitle = () => {
    title.value = route.params.title;
  };

  return { title, changeTitle };
});
