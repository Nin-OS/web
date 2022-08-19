<template>
  <v-app-bar :elevation="0" class="px-md-6">
    <v-app-bar-title class="hidden-sm-and-down">
      <v-avatar class="mr-1">
        <v-img :src="logo" />
      </v-avatar>
      <b>eweOS </b> | {{ $route.name }}
    </v-app-bar-title>
    <v-app-bar-title class="hidden-md-and-up">
      <b>ewe</b>OS
    </v-app-bar-title>
    <v-spacer />
    <v-btn
      class="hidden-sm-and-down"
      v-for="link in navlinks"
      :key="link.title"
      variant="text"
      :to="link.target"
    >
      {{ link.title }}
    </v-btn>
    <v-btn
      size="small"
      class="hidden-md-and-up"
      v-for="link in navlinks"
      :key="link.title"
      icon
      :to="link.target"
    >
      <v-icon>mdi-{{ link.icon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import logo from "@/assets/logo.svg";
import navlinks from "@/data/navlinks.json";

export default {
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
