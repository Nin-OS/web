<template>
  <div>
    <div class="d-flex flex-column align-center">
      <ewe-logo />
      <h1 class="text-h1">
        <b>{{ $route.params.code }}</b>
      </h1>
      <p class="text-h5">Not Found</p>
      <v-btn class="mt-8" variant="outlined" to="/">Back to Home</v-btn>
    </div>
  </div>
</template>

<script>
import EweLogo from "@/components/EweLogo404.vue";

import { defineComponent } from "vue";
export default defineComponent({ name: "HomeView", components: { EweLogo } });
</script>

<style></style>
