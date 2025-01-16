import { ref, type Ref, onMounted } from "vue";

export const usePostsFetch = <T>(url: string) => {
  const fetchedData: Ref<T | null> = ref(null);
  const loading: Ref<boolean> = ref(true);
  const error: Ref<Error | null | unknown> = ref(null);

  const getData = async (): Promise<void> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      fetchedData.value = data;
      loading.value = false;
    } catch (err) {
      error.value = err;
      loading.value = false;
      console.error(err);
    }
  };

  onMounted(() => getData());

  return { fetchedData, loading, error };
};
