<template>
  <div>
    <h1 class="mb-2"># Blog Posts</h1>
    <div class="d-flex flex-column align-center" v-if="!loading">
      <blog-item v-for="post in posts" :key="post.number" :post="post" />
    </div>
    <div class="d-flex flex-column align-center" v-if="loading">
      <v-progress-circular :size="70" :width="7" indeterminate />
    </div>
  </div>
</template>

<script>
import BlogItem from "@/components/BlogItem.vue";
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "BlogView",
  components: { BlogItem },
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
