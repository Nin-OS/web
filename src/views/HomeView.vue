<template>
  <div>
    <div class="d-flex flex-column align-center">
      <ewe-logo />
      <h1 class="text-h2 text-md-h1"><b>ewe</b>OS</h1>
      <p class="text-body-1">Too Young - Too Simple - Sometimes Naive</p>
      <div class="mt-6 mb-2">
        <v-btn class="ma-1" variant="outlined" to="/about">
          <v-icon start>mdi-information-outline</v-icon>About
        </v-btn>
        <v-btn class="ma-1" variant="outlined">
          <v-icon start>mdi-cloud-download-outline</v-icon>
          Download
        </v-btn>
      </div>
      <p class="text-caption  text-disabled">Latest Updated: Unknown</p>
    </div>
  </div>
</template>

<script>
import EweLogo from "@/components/EweLogo.vue";

import { defineComponent } from "vue";
export default defineComponent({ name: "HomeView", components: { EweLogo } });
</script>
