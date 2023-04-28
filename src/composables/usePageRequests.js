import {computed, reactive} from 'vue';

export default function usePageRequests() {
  const activeRequests = reactive([]);
  const isLoading = computed(() => !!activeRequests.length);

  const makeRequest = async (url) => {
    // push the url to the activeRequests
    const response = await fetch(url);
    const data = await response.json();
    // remove the url from activeRequests
    // if failed remove the url from activeRequests and alert error
  }

  return { isLoading, makeRequest }
}
