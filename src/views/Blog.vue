<template>
  <div>
    <div class="d-flex flex-column align-center">
      <blog-item />
      <blog-item />
      <blog-item />
      <blog-item />
      <blog-item />
    </div>
  </div>
</template>

<script>
import BlogItem from "@/components/BlogItem.vue";

import {  defineComponent } from "vue";
export default defineComponent({ name: "BlogView", components: { BlogItem } });
</script>

<style></style>
