<script setup>
const props = defineProps({
  mirror: { type: JSON, required: true },
});
</script>

<template>
  <v-list-item>
    <v-list-item-title>
      {{ mirror.name }}
    </v-list-item-title>
    <v-list-item-subtitle>
      <v-chip
        class="mr-2"
        v-for="tag in mirror.tags"
        :key="tag"
        outlined
        size="x-small"
        variant="outlined"
        label
        >{{ tag }}</v-chip
      >
    </v-list-item-subtitle>
    <template v-slot:append>
      <template v-if="mirror.traffic_stats">
        <mirror-traffic-stats-vnstati-dialog
          v-if="mirror.traffic_stats.type === 'vnstati'"
          :mirror="mirror"
        />
      </template>
      <v-tooltip text="Browse Images" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            :disabled="mirror.tags.includes('Repo Only')"
            :href="
              mirror.nolistdir ? mirror.url : mirror.url + '/eweos-images/'
            "
            variant="text"
            icon="mdi-minidisc"
            v-bind="props"
            class="hidden-sm-and-down"
          ></v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="Browse Repository" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            :disabled="mirror.tags.includes('Images Only')"
            :href="mirror.nolistdir ? mirror.url : mirror.url + '/eweos/'"
            variant="text"
            class="hidden-xs"
            icon="mdi-package"
            v-bind="props"
          ></v-btn>
        </template>
      </v-tooltip>
    </template>
  </v-list-item>
</template>
