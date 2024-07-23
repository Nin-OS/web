<template>
  <NeedScript />
  <ClientOnly>
    <v-tabs v-model="tab" grow>
      <v-tab value="version">
        <v-icon icon="mdi-list-box" start />
        Versions
        <v-chip
          class="ma-2"
          label
          size="small"
          density="comfortable"
          v-if="Object.values(loading.version).indexOf(true) == -1"
        >
          {{
            Object.values(pkgverlist).reduce(
              (a, b) => (a.length || 0) + (b.length || 0),
              0
            )
          }}
        </v-chip>
      </v-tab>
      <v-tab value="upgrade">
        <v-icon icon="mdi-alert-decagram" start />
        Upgrades
        <v-chip
          class="ma-2"
          label
          size="small"
          density="comfortable"
          v-if="!loading.update"
        >
          {{ pkgupdatelist.length }}
        </v-chip>
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="version">
        <PackageVersionInfo
          v-if="
            Object.values(loading.version).indexOf(false) > -1 &&
            tab == 'version'
          "
          :pkglist="pkgverlist"
        />
        <LoadingBar v-else />
      </v-tabs-window-item>
      <v-tabs-window-item value="upgrade">
        <PackageUpdateInfo
          v-if="!loading.update && tab == 'upgrade'"
          :pkglist="pkgupdatelist"
        />
        <LoadingBar v-else />
      </v-tabs-window-item>
    </v-tabs-window>
    <template #fallback>
      <LoadingBar />
    </template>
  </ClientOnly>
</template>

<script>
import axios from "axios";

export default {
  setup() {
    setPageMeta({
      title: "Packages",
      description:
        "Explore the software package list and detailed information of eweOS. Discover the latest updates, and find find everything needed in repository.",
    });
    definePageMeta({ title: "Packages" });
  },
  created() {
    this.fetch_update();
    Object.keys(this.loading.version).forEach((arch) => {
      this.fetch_arch(arch);
    });
  },
  methods: {
    fetch_update() {
      this.loading.update = true;
      axios.get(this.repourl + "/updatecheck/results.json").then((resp) => {
        this.pkgupdatelist = resp.data;
        this.loading.update = false;
        axios
          .get(this.repourl + "/updatecheck/unconfigured.json")
          .then((resp) => {
            resp.data.forEach((pkg) => {
              this.pkgupdatelist.push({
                name: pkg,
                status: "unconfigured",
              });
            });
          });
      });
    },
    fetch_arch(arch) {
      this.loading.version[arch] = true;
      axios
        .get(this.repourl + "/pkginfo-" + arch + "/_pkgs_brief.json")
        .then((resp) => {
          this.pkgverlist[arch] = resp.data;
          this.loading.version[arch] = false;
        })
        .catch(() => {
          this.pkgverlist[arch] = [];
          this.loading.version[arch] = false;
        });
    },
  },
  data: () => ({
    loading: {
      update: true,
      version: {
        x86_64: true,
        aarch64: true,
        riscv64: true,
      },
    },
    pkgupdatelist: [],
    pkgverlist: {},
    tab: "version",
    repourl: "https://raw.githubusercontent.com/eweOS/workflow",
  }),
};
</script>
