<template>
  <v-card
    rounded="lg"
    variant="outlined"
    class="my-2 align-self-stretch"
    width="100%"
    :title="post.title"
    :subtitle="'By ' + post.author"
  >
    <v-card-text class="text-truncate">{{ post.description }}</v-card-text>
    <v-card-actions>
      <v-chip variant="text" prepend-icon="mdi-clock-outline">
        {{ new Date(post.date).toLocaleDateString() }}
      </v-chip>
      <v-spacer />
      <v-btn :to="'/blog' + post.path"> READ MORE </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  post: { type: JSON, required: true },
});
</script>

<style></style>
