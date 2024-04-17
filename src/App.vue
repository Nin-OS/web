<template>
  <v-app>
    <nav-bar />
    <v-main>
      <v-container class="main-content my-6">
        <router-view />
      </v-container>
    </v-main>
    <footer-bar />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "App",
  components: { NavBar, FooterBar },
  data: () => ({}),
};
</script>

<style>
html {
  overflow-y: auto !important;
}

.main-content {
  max-width: 900px;
}

a:not([class*=v])::before {
  font-family: "Material Design Icons";
  content: "\F0339 ";
}
</style>
