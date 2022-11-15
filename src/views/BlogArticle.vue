<template>
  <div>
    <div class="d-flex flex-column" v-if="!loading">
      <v-card-title class="text-h3 mb-4">
        {{ post.title }}
      </v-card-title>
      <v-card-actions class="mb-1">
        <v-chip
          variant="text"
          prepend-icon="mdi-account"
          :text="post.user.login"
        />
        <v-chip
          variant="text"
          prepend-icon="mdi-clock-outline"
          :text="new Date(post.created_at).toLocaleDateString()"
        />
      </v-card-actions>
      <v-divider />
      <v-card-text class="mt-6">
        <vue-markdown :source="post.body" :breaks="true" />
      </v-card-text>
    </div>
    <div class="d-flex flex-column align-center" v-if="loading">
      <v-progress-circular :size="70" :width="7" indeterminate />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import VueMarkdown from "vue3-markdown-it";

export default defineComponent({
  name: "HomeView",
  data: () => ({
    loading: true,
    post: null,
  }),
  components: { VueMarkdown },
  mounted() {
    axios
      .get(
        "https://api.github.com/repos/eweOS/web/issues/" +
          this.$route.params.article
      )
      .then((data) => {
        this.post = data.data;
        this.loading = false;
      });
  },
});
</script>

<style></style>
