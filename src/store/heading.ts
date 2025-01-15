import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

export const useHeadingStore = defineStore("heading", () => {
  const heading: Ref<string> = ref("Home");

  const changeHeading = (newHeading: string) => {
    heading.value = newHeading;
  };

  return { heading, changeHeading };
});
