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
      <p class="text-caption text-disabled">
        Latest Updated:
        {{ updated_date }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

setPageMeta({
  title: "Home",
});
definePageMeta({ title: "Home" });

const updated_data = ref(null);

async function init_update_data() {
  updated_data.value = await $fetch(
    "https://ewe-obs-trigger.nia.workers.dev/update"
  );
}

onMounted(init_update_data);

const updated_date = computed(() =>
  updated_data.value
    ? new Date(parseInt(updated_data.value.updated_date)).toLocaleDateString()
    : "Unknown"
);
</script>
