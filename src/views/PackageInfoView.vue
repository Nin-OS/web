<template>
  <div>
    <div class="d-flex flex-column">
      <h1 class="mb-2"># Package Info</h1>
      <div class="d-flex flex-column align-center" v-if="loading">
        <v-progress-circular :size="70" :width="7" indeterminate />
      </div>
      <v-card variant="outlined" v-else>
        <v-card-title>
          <v-icon start>mdi-package</v-icon>
          {{ pkg["Name"] }}
          <span class="font-weight-light">({{ pkg["Version"] }})</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="4" md="6">Repository:</v-col>
            <v-col cols="8" md="6">{{ pkg["Repository"] }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="6">Description:</v-col>
            <v-col cols="8" md="6">{{ pkg["Description"] }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="6">Upstream URL:</v-col>
            <v-col cols="8" md="6">{{ pkg["URL"] }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="6">License(s):</v-col>
            <v-col cols="8" md="6">
              <template v-for="it in pkg['Licenses'].split(' ')" :key="it">
                <a class="mr-1" v-if="it in licenses" :href="licenses[it]">
                  {{ it }}</a
                >
                <span class="mr-1" v-else>
                  {{ it }}
                </span>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="6">Package Size:</v-col>
            <v-col cols="8" md="6">{{ pkg["Download Size"] }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="6">Installed Size:</v-col>
            <v-col cols="8" md="6">{{ pkg["Installed Size"] }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="6">Build Date:</v-col>
            <v-col cols="8" md="6">{{ pkg["Build Date"] }}</v-col>
          </v-row>
        </v-card-text>
        <template
          v-if="
            pkg['Depends On'] !== 'None' ||
            pkg['Optional Deps'] !== 'None' ||
            pkg['Conflicts With'] !== 'None' ||
            pkg['Provides'] !== 'None' ||
            pkg['Replaces'] !== 'None'
          "
        >
          <v-divider />
          <v-card-text>
            <v-row v-if="pkg['Depends On'] !== 'None'">
              <v-col cols="4" md="6">Depends On:</v-col>
              <v-col cols="8" md="6">
                <template v-for="it in pkg['Depends On'].split(' ')" :key="it">
                  <a
                    class="mr-1"
                    v-if="resolve_pkg_name(it)"
                    :href="'/packagesearch/' + resolve_pkg_name(it)"
                  >
                    {{ it }}</a
                  >
                  <span class="mr-1" v-else>
                    {{ it }}
                  </span>
                </template>
              </v-col>
            </v-row>
            <v-row v-if="pkg['Optional Deps'] !== 'None'">
              <v-col cols="4" md="6">Optional Deps:</v-col>
              <v-col cols="8" md="6">{{ pkg["Optional Deps"] }}</v-col>
            </v-row>
            <v-row v-if="pkg['Conflicts With'] !== 'None'">
              <v-col cols="4" md="6">Conflicts With:</v-col>
              <v-col cols="8" md="6">{{ pkg["Conflicts With"] }}</v-col>
            </v-row>
            <v-row v-if="pkg['Provides'] !== 'None'">
              <v-col cols="4" md="6">Provides:</v-col>
              <v-col cols="8" md="6">{{ pkg["Provides"] }}</v-col>
            </v-row>
            <v-row v-if="pkg['Replaces'] !== 'None'">
              <v-col cols="4" md="6">Replaces:</v-col>
              <v-col cols="8" md="6">{{ pkg["Replaces"] }}</v-col>
            </v-row>
          </v-card-text>
        </template>
        <v-divider />
        <v-card-actions>
          <v-btn :href="'https://github.com/eweOS/packages/tree/' + pkg['Name']"
            ><v-icon start>mdi-github</v-icon>Source Code</v-btn
          >
          <v-btn
            :href="
              'https://os-build.ewe.moe/package/show/eweOS:Main/' + pkg['Name']
            "
            ><v-icon start>mdi-wrench</v-icon>OBS</v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import licenses from "@/data/licenses.json";
import axios from "axios";
export default {
  created() {
    axios.get("https://raw.githubusercontent.com/eweOS/workflow/pkginfo-amd64/pkgs.json").then((resp) => {
      if (!this.$route.params.repo) {
        this.pkg = resp.data.find(
          (pkg) => pkg["Name"] === this.$route.params.pkg
        );
      } else {
        this.pkg = resp.data.find(
          (pkg) =>
            pkg["Name"] === this.$route.params.pkg &&
            pkg["Repository"] === this.$route.params.repo
        );
      }
      if (!this.pkg) {
        this.$router.push("/404");
      } else if (!this.$route.params.repo) {
        this.$router.push(
          "/packageinfo/" + this.pkg["Repository"] + "/" + this.pkg["Name"]
        );
      } else {
        this.loading = false;
      }
    });
  },
  methods: {
    resolve_pkg_name(pkgstr) {
      let pkgname = pkgstr.split("=", 1)[0];
      pkgname = pkgname.replace(">", "");
      pkgname = pkgname.replace("<", "");
      if (!pkgname.endsWith(".so")) {
        return pkgname;
      }
      return false;
    },
  },
  data: () => ({
    licenses: licenses,
    loading: true,
    pkg: null,
  }),
};
</script>
<style scoped>
a {
  color: unset;
}
</style>
