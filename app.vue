<template>
  <v-app>
    <NuxtLoadingIndicator color="#000000" />
    <NavBar />
    <v-main>
      <v-container class="main-content my-6">
        <NuxtPage />
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
const descr =
  "eweOS is an musl-based, lightweight, general-purpose Linux distribution, which adopts musl libc and busybox to the latest versions of software with a rolling-release model.";

useSeoMeta({
  twitterCard: "summary_large_image",
  description: descr,
  ogDescription: descr,
  ogType: "website",
  ogSiteName: "eweOS",
});
defineOgImageComponent("Global");
</script>
