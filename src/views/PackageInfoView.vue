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
          <template v-for="row in pkgargs" :key="row.arg">
            <v-row>
              <v-col cols="4" lg="6"
                >{{ row.desc ? row.desc : row.arg }}:</v-col
              >
              <v-col cols="8" lg="6">{{
                row.arg == "Packager"
                  ? pkg[row.arg].split(" ")[0]
                  : pkg[row.arg]
              }}</v-col>
            </v-row>
          </template>
          <v-row>
            <v-col cols="4" lg="6">License(s):</v-col>
            <v-col cols="8" lg="6">
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
            <template v-for="row in pkgargs_rel" :key="row.arg">
              <v-row v-if="pkg[row.arg] !== 'None'">
                <v-col cols="4" lg="6"
                  >{{ row.desc ? row.desc : row.arg }}:</v-col
                >
                <v-col cols="8" lg="6">{{ pkg[row.arg] }}</v-col>
              </v-row>
            </template>
          </v-card-text>
        </template>
      </v-card>
    </div>
  </div>
</template>

<script>
import licenses from "@/data/licenses.json";
import axios from "axios";
export default {
  created() {
    axios
      .get(
        "https://raw.githubusercontent.com/eweOS/workflow/pkginfo-" +
          (this.$route.params.arch || "x86_64") +
          "/" +
          this.$route.params.repo +
          "/" +
          this.$route.params.pkg +
          ".json"
      )
      .then((resp) => {
        this.pkg = resp.data;
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
    pkgargs: [
      {
        arg: "Repository",
      },
      {
        arg: "Description",
      },
      {
        arg: "URL",
        desc: "Upstream URL",
      },
      {
        arg: "Download Size",
        desc: "Package Size",
      },
      {
        arg: "Installed Size",
      },
      {
        arg: "Build Date",
      },
      {
        arg: "Packager",
      },
    ],
    pkgargs_rel: [
      {
        arg: "Depends On",
      },
      {
        arg: "Optional Deps",
      },
      {
        arg: "Conflicts With",
      },
      {
        arg: "Provides",
      },
      {
        arg: "Replaces",
      },
    ],
  }),
};
</script>
<style scoped>
a {
  color: unset;
}
</style>
