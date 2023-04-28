import { ref } from 'vue';

export default function usePost() {
  const posts = ref([]);
  const post = ref(null);
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  const fetchAll = async () => {
    const response = await fetch(baseUrl);
    posts.value = await response.json();
  };

  const fetchOne = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    post.value = await response.json();
  };

  return {
    posts,
    post,
    fetchAll,
    fetchOne,
  }
}
