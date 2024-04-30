<template>
  <v-card
    rounded="lg"
    variant="outlined"
    class="my-2 align-self-stretch"
    width="100%"
    :title="post.title"
    :subtitle="'By ' + post.user.login"
  >
    <v-card-text class="text-truncate">{{ post.body }}</v-card-text>
    <v-card-actions>
      <v-chip variant="text" prepend-icon="mdi-clock-outline">
        {{ new Date(post.updated_at).toLocaleDateString() }}
      </v-chip>
      <v-spacer />
      <v-btn :to="'/blog/' + post.number"> READ MORE </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style></style>
