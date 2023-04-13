<template>
  <v-app-bar :elevation="0" class="px-md-6">
    <v-app-bar-title class="hidden-sm-and-down">
      <v-avatar class="mr-1">
        <v-img :src="logo" />
      </v-avatar>
      <b>eweOS </b> | {{ $route.name }}
    </v-app-bar-title>
    <v-app-bar-title class="hidden-md-and-up">
      <v-avatar class="mr-1">
        <v-img :src="logo" />
      </v-avatar>
      <b class="hidden-xs">ewe</b>OS
    </v-app-bar-title>
    <v-spacer />
    <div v-for="link in navlinks" :key="link.title">
      <v-btn
        rounded="lg"
        size="small"
        class="hidden-sm-and-down"
        variant="text"
        :active="false"
        :to="link.type == 'internal' ? link.target : null"
        :href="link.type == 'external' ? link.target : null"
      >
        {{ link.title }}
      </v-btn>
      <v-btn
        size="small"
        class="hidden-md-and-up"
        icon
        :to="link.type == 'internal' ? link.target : null"
        :href="link.type == 'external' ? link.target : null"
      >
        <v-icon>mdi-{{ link.icon }}</v-icon>
      </v-btn>
    </div>
    <div class="mx-2" />
  </v-app-bar>
</template>

<script>
import logo from "@/assets/logo.svg";
import navlinks from "@/data/navlinks.json";

export default {
  components: {},
  data: () => ({
    logo: logo,
    navlinks: navlinks,
  }),
};
</script>

<style scoped>
.v-toolbar-title {
  flex: auto;
}
</style>
