import { ref } from 'vue';
import usePageRequests from './usePageRequests';

export default function useResource(resource) {
  const { makeRequest } = usePageRequests();
  const items = ref([]);
  const item = ref(null);
  const baseUrl = `https://jsonplaceholder.typicode.com/${resource}`;

  const fetchAll = async () => items.value = await makeRequest(baseUrl);
  const fetchOne = async (id) => item.value = await makeRequest(`${baseUrl}/${id}`);

  return {
    items,
    item,
    fetchAll,
    fetchOne,
  }
}
