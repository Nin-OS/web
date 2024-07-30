<template>
  <div class="mt-12">
    <div class="d-flex flex-column align-center">
      <ewe-logo />
      <h1 class="text-h2 text-md-h1"><b>ewe</b>OS</h1>
      <p class="text-body-1">Too Young - Too Simple - Sometimes Naive</p>
      <div class="mt-6 mb-2">
        <v-btn rounded="lg" class="ma-1" variant="outlined" to="/about">
          <v-icon start>mdi-information-outline</v-icon>About
        </v-btn>
        <v-btn rounded="lg" class="ma-1" variant="outlined" to="/download">
          <v-icon start>mdi-cloud-download-outline</v-icon>
          Download
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
setPageMeta({
  title: "Home",
});
definePageMeta({ title: "Home" });
</script>
