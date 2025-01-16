import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { onMounted } from "vue";
import { useTitleStore } from "./title";

export const useSinglePostStore = defineStore("singlePost", () => {
  const singlePost: Ref<any | null> = ref(null);
  const loadingPost: Ref<boolean> = ref(true);
  const error: Ref<unknown | null> = ref(null);

  const titleStore = useTitleStore();

  const getData = async (): Promise<void> => {
    try {
      if (!titleStore.title) {
        titleStore.changeTitle();
      }
      const response = await fetch("https://jsonfakery.com/blogs");
      let data = await response.json();
      data = data.find((post: any) => post.title === titleStore.title);
      console.log(titleStore.title);
      singlePost.value = data;
      loadingPost.value = false;
    } catch (err) {
      error.value = err;
      loadingPost.value = false;
      console.error(err);
    }
  };

  onMounted(() => {
    getData();
    console.log(titleStore.title);
  });

  // watch(titleStore.title, () => {
  //   getData();
  // });

  return { singlePost, loadingPost, error };
});
