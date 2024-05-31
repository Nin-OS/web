<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container class="main-content my-6">
        <div class="d-flex flex-column align-center">
          <EweLogoError />
          <h1 class="text-h1">
            <b>{{ error.statusCode }}</b>
          </h1>
          <p class="text-h5">{{ error.statusMessage }}</p>
          <v-code class="mt-2 text-caption" v-if="error.data">{{
            error.data
          }}</v-code>
          <v-btn class="mt-8" variant="outlined" to="/">Back to Home</v-btn>
        </div>
      </v-container>
    </v-main>
    <BackToTop />
    <FooterBar />
  </v-app>
</template>

<style>
html {
  overflow-y: auto !important;
}

.main-content {
  max-width: 900px;
}

a:not([class*="v"])::before {
  font-family: "Material Design Icons";
  content: "\F0339 ";
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: "Error",
});

import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>
