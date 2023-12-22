<template>
  <div>
    <h1 class="mb-2"># Blog Posts</h1>
    <div class="d-flex flex-column align-center" v-if="!loading">
      <blog-item v-for="post in posts" :key="post.number" :post="post" />
    </div>
    <LoadingBar v-if="loading" />
  </div>
</template>

<script>
import BlogItem from "@/components/BlogItem.vue";
import LoadingBar from "@/components/LoadingBar.vue";
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "BlogView",
  components: { BlogItem, LoadingBar },
  data: () => ({
    posts: [],
    loading: true,
  }),
  mounted() {
    axios.get("https://api.github.com/repos/eweOS/web/issues").then((data) => {
      this.posts = data.data.filter(function (el) {
        return el.labels.some((l) => l.name === "blog-post");
      });
      this.loading = false;
    });
  },
});
</script>

<style></style>
