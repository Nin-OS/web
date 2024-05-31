<template>
  <NeedScript />
  <div>
    <div class="d-flex flex-column">
      <h1 class="mb-2"># Package Info</h1>
      <v-card variant="outlined">
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

<script setup>
import licenses from "~/assets/licenses.json";
const route = useRoute();

setPageMeta({
  title: "Package Info",
  description: `Package info for ${route.params.pkg} (${route.params.repo})`,
});
definePageMeta({ title: "Package Info" });

function resolve_pkg_name(pkgstr) {
  let pkgname = pkgstr.split("=", 1)[0];
  pkgname = pkgname.replace(">", "");
  pkgname = pkgname.replace("<", "");
  if (!pkgname.endsWith(".so")) {
    return pkgname;
  }
  return false;
}

const pkg = ref(null);

const pkgargs = [
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
];
const pkgargs_rel = [
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
];

await $fetch(
  "https://raw.githubusercontent.com/eweOS/workflow/pkginfo-" +
    (route.params.arch || "x86_64") +
    "/" +
    route.params.repo +
    "/" +
    route.params.pkg +
    ".json"
)
  .then((data) => {
    pkg.value = JSON.parse(data);
  })
  .catch((e) => {
    throw showError({
      statusCode: e.status,
      statusMessage: e.name,
      data: e.toString(),
    });
  });
</script>
<style scoped>
a {
  color: unset;
}
</style>
