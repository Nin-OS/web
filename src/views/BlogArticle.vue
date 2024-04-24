<template>
  <div>
    <div class="d-flex flex-column" v-if="!loading">
      <div class="text-h3 mb-4">
        {{ post.title }}
      </div>
      <v-card-actions class="mb-1">
        <v-chip
          variant="text"
          prepend-icon="mdi-account"
          :text="post.user.login"
        />
        <v-chip
          variant="text"
          prepend-icon="mdi-clock-outline"
          :text="new Date(post.updated_at).toLocaleDateString()"
        />
      </v-card-actions>
      <v-divider />
      <v-card-text class="mt-2">
        <vue-markdown
          class="mdshow"
          :source="post.body"
          breaks="true"
          typographer="true"
        />
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
      })
      .catch(() => {
        this.$router.push("/404");
      });
  },
});
</script>

<style>
.mdshow * {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding: revert;
}
</style>
