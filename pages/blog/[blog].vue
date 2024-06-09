<script lang="ts" setup>
definePageMeta({ title: "Blog Post" });

const { params } = useRoute();

const { data: articles, error } = await useAsyncData(
  `blog-post-${params.blog}`,
  () => queryContent(params.blog).findOne()
);

if (error.value)
  throw showError({
    statusCode: error.value.status,
    statusMessage: error.value.name,
    data: error.value.toString(),
  });

const data = parseArticle(articles.value);

setPageMeta({
  title: data.title || "Blog Post",
  description: data.description || "blog post for eweOS",
  ogType: "article",
});

useSchemaOrg([
  {
    "@type": "BlogPosting",
    headline: data.title || "Blog Post",
    description: data.description || "blog post for eweOS",
    dateModified: data.date,
    datePublished: data.date_created,
    author: [{ name: data.author }],
  },
]);
</script>

<template>
  <div>
    <div class="d-flex flex-column">
      <div class="text-h4 mb-2">
        {{ data.title }}
      </div>
      <v-card-actions class="mb-1">
        <v-chip variant="text" prepend-icon="mdi-account" :text="data.author" />
        <v-chip
          variant="text"
          prepend-icon="mdi-clock-outline"
          :text="new Date(data.date).toLocaleDateString()"
        />
      </v-card-actions>
      <v-divider />
      <v-card-text class="mt-2">
        <ContentRendererMarkdown
          class="mdshow"
          :value="articles"
          v-if="articles"
        />
      </v-card-text>
    </div>
  </div>
</template>

<style>
.mdshow * {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding: revert;
}

.mdshow {
  h1,
  h2,
  h3,
  h4,
  h5 {
    a,
    a::before {
      all: unset !important;
    }
  }
}
</style>
