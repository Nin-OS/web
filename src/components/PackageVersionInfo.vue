<template>
  <VDataTable :headers="headers" :items="merged_pkglist" :items-per-page="100">
    <template v-slot:[`item.pkgname`]="{ item }">
      <v-chip
        variant="text"
        :to="
          '/pkginfo/' +
          (item.raw.includes('/') ? item.raw.split('/')[0] : 'main') +
          '/' +
          (item.raw.includes('/') ? item.raw.split('/')[1] : item.raw)
        "
      >
        <b v-if="!item.raw.includes('/')">
          {{ item.raw }}
        </b>
        <template v-else>
          {{ item.raw.split("/")[0] }}&nbsp; / &nbsp;
          <b> {{ item.raw.split("/")[1] }}</b>
        </template>
      </v-chip>
    </template>
    <template
      v-for="arch in Object.keys(pkglist).sort((a, b) => {
        archorder[a] > archorder[b];
      })"
      :key="arch"
      v-slot:[`item.pkgdata-`+arch]="{ item }"
    >
      <v-chip
        :prepend-icon="icon_version(find_package(item.raw, arch))"
        class="mx-1 my-1"
        :color="color_package(item.raw, arch)"
        v-if="!item.raw.includes('/')"
      >
        {{
          find_package(item.raw, arch)
            ? find_package(item.raw, arch).Version
            : "NULL"
        }}
      </v-chip>
      <v-chip
        v-else
        :prepend-icon="
          icon_version(
            find_package(item.raw.split('/')[1], arch, item.raw.split('/')[0])
          )
        "
        class="mx-1 my-1"
        :color="
          color_package(item.raw.split('/')[1], arch, item.raw.split('/')[0])
        "
      >
        {{
          find_package(item.raw.split("/")[1], arch, item.raw.split("/")[0])
            ? find_package(item.raw.split("/")[1], arch, item.raw.split("/")[0])
                .Version
            : "NULL"
        }}
      </v-chip>
    </template>
  </VDataTable>
</template>

<script>
import moment from "moment";

import { VDataTable } from "vuetify/labs/VDataTable";

export default {
  components: { VDataTable },
  props: ["pkglist"],
  methods: {
    maxstr(arr) {
      return arr.reduce(
        (a, v) => {
          a.min = a.min === null ? v : v.localeCompare(a.min) < 0 ? v : a.min;
          a.max = a.max === null ? v : v.localeCompare(a.max) > 0 ? v : a.max;
          return a;
        },
        { min: null, max: null }
      );
    },
    find_package(pkgname, arch, repo = "main") {
      return this.pkglist[arch].find(
        (e) => e.Name === pkgname && e.Repository === repo
      );
    },
    icon_version(d) {
      if (!d) return "mdi-null";
      return "mdi-package";
    },
    color_package(pkgname, arch, repo = "main") {
      if (!pkgname) return "grey";
      let allver = [];
      Object.keys(this.pkglist).forEach((farch) => {
        let pkg = this.find_package(pkgname, farch, repo);
        if (pkg) allver.push(pkg.Version);
      });
      let thispkg = this.find_package(pkgname, arch, repo);
      if (!thispkg) return "grey";
      if (thispkg.Version === this.maxstr(allver).max) return "success";
      return "warning";
    },
  },
  computed: {
    merged_pkglist() {
      let ret = [];
      Object.keys(this.pkglist).forEach((arch) => {
        this.pkglist[arch].forEach((pkg) => {
          if (pkg["Repository"] != "main")
            ret.push(pkg["Repository"] + "/" + pkg["Name"]);
          else ret.push(pkg["Name"]);
        });
      });
      return [...new Set(ret)];
    },
    headers() {
      let ret = [
        {
          title: "Source Name",
          key: "pkgname",
          sortable: false,
        },
      ];
      Object.keys(this.pkglist).forEach((arch) => {
        ret.push({
          title: arch + " Status",
          key: "pkgdata-" + arch,
          sortable: false,
        });
      });
      return ret;
    },
  },
  data: () => ({
    moment: moment,
    archorder: {
      x86_64: 1,
      aarch64: 2,
      riscv64: 3,
    },
  }),
};
</script>

<style scoped>
.v-chip {
  max-width: 150px;
}
</style>
