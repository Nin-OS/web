<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    type?: string;
  }>(),
  {
    title: "title",
    type: "Blog",
  }
);
</script>

<template>
  <div
    class="h-full w-full flex flex-row items-center justify-start bg-white"
    style="
      font-family: Roboto;
      font-weight: 300;
      padding-bottom: 50px;
      padding-left: 100px;
      padding-right: 100px;
    "
  >
    <img
      src="https://github.com/eweOS/artwork/raw/master/logo/svg/news-logo.svg"
      style="height: 320px; width: 320px"
    />
    <div
      class="flex items-start justify-center h-full"
      style="margin-left: 40px"
    >
      <p class="text-50px">
        <b style="font-weight: 500">ewe</b>OS | {{ type }}
      </p>
      <h1 class="text-70px" style="max-width: 600px; text-wrap: wrap">
        {{ title }}
      </h1>
    </div>
  </div>
</template>
