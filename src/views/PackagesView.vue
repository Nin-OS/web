<template>
  <div>
    <div class="d-flex flex-column">
      <h1 class="mb-2"># Packages</h1>
    </div>
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg" width="100%" variant="outlined">
          <v-card-title
            ><v-icon start icon="mdi-package" />Repository</v-card-title
          >
          <v-card-text>
            There is a list of packages in eweOS which can be downloaded and
            browsed.
          </v-card-text>
          <v-card-actions>
            <v-btn href="https://os-repo.ewe.moe"> Repo >> </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card rounded="lg" width="100%" variant="outlined">
          <v-card-title
            ><v-icon start icon="mdi-wrench" />Build System</v-card-title
          >
          <v-card-text>
            We use Open Build Service(OBS) as our build system. And currently we are testing our new build system.
          </v-card-text>
          <v-card-actions>
            <v-btn href="https://os-build.ewe.moe"> OBS >> </v-btn>
            <v-btn to="/pkginfo"> Package Info >> </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card rounded="lg" width="100%" variant="outlined">
          <v-card-title
            ><v-icon start icon="mdi-github" />Source Code</v-card-title
          >
          <v-card-text>
            We use GitHub as our source code repository and continuous integration (CI) platform.
          </v-card-text>
          <v-card-actions>
            <v-btn href="https://github.com/eweOS/packages">
              Packages >>
            </v-btn>
            <v-btn href="https://github.com/eweOS/images"> Images >> </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card rounded="lg" width="100%" variant="outlined">
          <v-card-title
            ><v-icon start icon="mdi-server-network" />Test Server</v-card-title
          >
          <v-card-text>
            We have a VM with eweOS installed (really unstable!) and run some
            useful web programs for packagers.
          </v-card-text>
          <v-card-actions>
            <v-btn href="https://os-test.ewe.moe"> Test Server >> </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card rounded="lg" width="100%" variant="outlined">
          <v-card-title
            ><v-icon start icon="mdi-source-repository" />User Repository
            (Soon&trade;)</v-card-title
          >
          <v-card-text>
            We'll have eweOS User Repository (EUR), a community-driven
            repository.
          </v-card-text>
          <v-card-actions>
            <v-btn disabled href="https://os-eur.ewe.moe">
              Soon&trade; >>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({ name: "BlogView" });
</script>

<style></style>
