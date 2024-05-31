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
