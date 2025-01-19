import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { onMounted } from "vue";
import { type Post } from "~/types/Post";

export const usePostsStore = defineStore("allPosts", () => {
  const posts: Ref<Post[] | null> = ref([]);
  const singlePost: Ref<Post | null> = ref(null);
  const currentPage: Ref<number> = ref(1);
  const itemsPerPage: Ref<number> = ref(14);
  const searchQuery: Ref<string> = ref("");
  const loading: Ref<boolean> = ref(true);
  const error: Ref<Error | null | unknown> = ref(null);

  const paginatedPosts = computed<Post[] | null>(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return posts.value ? posts.value?.slice(startIndex, endIndex) : null;
  });

  const filteredPosts = computed<Post[] | null>(() => {
    return paginatedPosts.value
      ? paginatedPosts.value?.filter((post: any) =>
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      : null;
  });

  const handleSinglePost = (title: string | string[]) => {
    singlePost.value =
      posts.value?.find((post: any) => post.title === title) || null;
  };

  const totalPages = computed<number>(() => {
    if (posts.value?.length === 0) return 0;
    else {
      return posts.value
        ? Math.ceil(posts.value?.length / itemsPerPage.value)
        : 0;
    }
  });

  onMounted(async (): Promise<void> => {
    try {
      loading.value = true;
      const response = await fetch("https://jsonfakery.com/blogs/");
      const data = await response.json();
      posts.value = data;
      useRoute().params.title && handleSinglePost(useRoute().params.title);
      loading.value = false;
    } catch (err) {
      loading.value = false;
      error.value = err;
      console.error(err);
    }
  });

  return {
    posts,
    loading,
    error,
    searchQuery,
    currentPage,
    itemsPerPage,
    paginatedPosts,
    filteredPosts,
    singlePost,
    totalPages,
    handleSinglePost,
  };
});
