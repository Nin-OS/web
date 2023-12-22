<template>
  <v-tabs v-model="tab" grow>
    <v-tab value="upgrade">Upgrades</v-tab>
    <v-tab value="version">Versions</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="upgrade">
      <PackageUpdateInfo v-if="!loading.update" :pkglist="pkgupdatelist" />
      <LoadingBar v-else />
    </v-window-item>

    <v-window-item value="version">
      <PackageVersionInfo
        v-if="Object.values(loading.version).indexOf(false) > -1"
        :pkglist="pkgverlist"
      />
      <LoadingBar v-else />
    </v-window-item>
  </v-window>
</template>

<script>
import moment from "moment";
import axios from "axios";

import PackageUpdateInfo from "@/components/PackageUpdateInfo.vue";
import PackageVersionInfo from "@/components/PackageVersionInfo.vue";
import LoadingBar from "@/components/LoadingBar.vue";

import { VTabs } from "vuetify/lib/components/index.mjs";

export default {
  components: { PackageUpdateInfo, PackageVersionInfo, LoadingBar, VTabs },
  created() {
    this.fetch_update();
    Object.keys(this.loading.version).forEach((arch) => {
      this.fetch_arch(arch);
    });
  },
  computed: {
    filterkeystr() {
      if (this.filterkey == null) return null;
      return this.filterkey.toString();
    },
  },
  methods: {
    fetch_update() {
      this.loading.update = true;
      axios
        .get(
          "https://raw.githubusercontent.com/eweOS/workflow/updatecheck/result.json"
        )
        .then((resp) => {
          for (const pkg of Object.keys(resp.data.compare)) {
            this.pkgupdatelist.push({
              pkgname: pkg,
              pkgdata: {
                update_date: resp.data.compare[pkg],
                update_version: resp.data.upstream[pkg].version,
                version: resp.data.downstream[pkg].version,
              },
            });
          }
          this.loading.update = false;
        });
    },
    fetch_arch(arch) {
      this.loading.version[arch] = true;
      axios
        .get(
          "https://raw.githubusercontent.com/eweOS/workflow/pkginfo-" +
            this.archmap[arch] +
            "/pkgs.json"
        )
        .then((resp) => {
          this.pkgverlist[arch] = resp.data;
          this.loading.version[arch] = false;
        })
        .catch(() => {
          this.pkgverlist[arch] = [];
          this.loading.version[arch] = false;
        });
    },
    icon_build(d) {
      if (!d.build_version) return "mdi-help-circle-outline";
      if (d.build_status == 0) return "mdi-check-circle-outline";
      else return "mdi-alert-outline";
    },
    color_build(d) {
      if (!d.build_version) return "grey";
      if (d.build_status == 0) return "success";
      else return "error";
    },
    icon_update(d) {
      if (d.deprecated) return "mdi-minus-circle-outline";
      if (!d.update_version) return "mdi-help-circle-outline";
      if (d.update_version == d.version) return "mdi-check-circle-outline";
      if (d.update_error) return "mdi-alert-outline";
      else return "mdi-update";
    },
    color_update(d) {
      if (d.deprecated) return "grey";
      if (d.update_version == d.version) return "grey";
      if (d.update_error) return "error";
      else return "warning";
    },
    filteritems(a, b, value) {
      switch (this.filterkey) {
        case 0: {
          if (!value.pkgdata.update_version || !value.pkgdata.version)
            return false;
          return value.pkgdata.update_version !== value.pkgdata.version;
        }
        case 1: {
          if (value.pkgdata) return !value.pkgdata.update_version;
          return false;
        }
        default:
          return true;
      }
    },
  },
  data: () => ({
    moment: moment,
    loading: {
      update: true,
      version: {
        x86_64: true,
        aarch64: true,
        riscv64: true,
      },
    },
    archmap: {
      x86_64: "amd64",
      aarch64: "arm64",
      riscv64: "riscv64",
    },
    pkgupdatelist: [],
    pkgverlist: {},
    tab: "upgrade",
  }),
};
</script>
