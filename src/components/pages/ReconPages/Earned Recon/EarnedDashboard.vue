<template>
  <div class="recon-sec-content">
    <template v-for="item in dataFromApi" :key="item.id">
      <h6>Name :{{ item.name }}</h6>
      <h6>Email :{{ item.email }}</h6>
      <h6 class="mb-4 text-danger">Content :{{ item.body }}</h6>
    </template>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const dataFromApi = ref([]);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        dataFromApi.value = res.data;
      })
      .catch((error) => {
        throw new Error("Error Occured while hitting the api", error);
      });
    return {
      dataFromApi,
    };
  },
};
</script>

<style></style>
