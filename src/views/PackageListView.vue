<template>
  <v-tabs v-model="tab" grow>
    <v-tab value="version"> <v-icon icon="mdi-list-box" start /> Versions </v-tab>
    <v-tab value="upgrade"> <v-icon icon="mdi-alert-decagram" start /> Upgrades </v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="version">
      <PackageVersionInfo
        v-if="Object.values(loading.version).indexOf(false) > -1"
        :pkglist="pkgverlist"
      />
      <LoadingBar v-else />
    </v-window-item>
    <v-window-item value="upgrade">
      <PackageUpdateInfo
        v-if="!loading.update"
        :pkglist="pkgupdatelist"
        :pkgerrlist="pkgupdateerrlist"
      />
      <LoadingBar v-else />
    </v-window-item>
  </v-window>
</template>

<script>
import axios from "axios";

import PackageUpdateInfo from "@/components/PackageUpdateInfo.vue";
import PackageVersionInfo from "@/components/PackageVersionInfo.vue";
import LoadingBar from "@/components/LoadingBar.vue";

import { VTabs } from "vuetify/lib/components/index.mjs";

export default {
  components: { PackageUpdateInfo, PackageVersionInfo, LoadingBar, VTabs },
  created() {
    this.fetch_update();
    this.fetch_noupdate();
    this.fetch_failed();
    this.fetch_deprecated();
    Object.keys(this.loading.version).forEach((arch) => {
      this.fetch_arch(arch);
    });
  },
  methods: {
    fetch_update() {
      this.loading.update = true;
      axios.get(this.repourl + "/updatecheck/result.json").then((resp) => {
        for (const pkg of Object.keys(resp.data.compare)) {
          this.pkgupdatelist.push({
            pkgname: pkg,
            pkgdata: {
              update_date: resp.data.compare[pkg],
              update_version: resp.data.upstream[pkg].version,
              update_timestamp: resp.data.upstream[pkg].epoch,
              version: resp.data.downstream[pkg].version,
              timestamp: resp.data.downstream[pkg].epoch,
            },
          });
        }
        this.loading.update = false;
      });
    },
    fetch_noupdate() {
      axios.get(this.repourl + "/updatecheck/nodata.json").then((resp) => {
        resp.data.forEach((pkg) => {
          this.pkgupdatelist.push({
            pkgname: pkg,
            pkgdata: null,
          });
        });
      });
    },
    fetch_failed() {
      axios.get(this.repourl + "/updatecheck/failed.json").then((resp) => {
        this.pkgupdateerrlist.failed = resp.data.concat();
      });
    },
    fetch_deprecated() {
      axios.get(this.repourl + "/updatecheck/deprecated.json").then((resp) => {
        this.pkgupdateerrlist.deprecated = resp.data.concat();
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
    pkgupdateerrlist: {
      failed: [],
      deprecated: [],
    },
    pkgverlist: {},
    tab: "version",
    repourl: "https://raw.githubusercontent.com/eweOS/workflow",
  }),
};
</script>
