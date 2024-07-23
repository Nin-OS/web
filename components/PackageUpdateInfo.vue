<template>
  <v-chip-group
    class="my-2"
    v-model="filterkey"
    selected-class="text-primary"
    column
  >
    <v-chip color="warning" value="available"> Update Available </v-chip>
    <v-chip color="error" value="failed"> Check Failed </v-chip>
    <v-chip color="primary" value="unconfigured"> Unconfigured </v-chip>
  </v-chip-group>
  <VDataTableVirtual
    sticky
    :headers="headers"
    :items="pkglist"
    :search="filterkey"
    :custom-filter="filteritems"
    :height="height"
    fixed-header
  >
    <template v-slot:[`item.name`]="{ item }">
      <v-chip
        class="mx-1 my-1"
        variant="text"
        size="large"
        :to="'/pkginfo/main/' + item.name"
      >
        {{ item.name }}
      </v-chip>
    </template>
    <template v-slot:[`item.status`]="{ item }">
      <v-chip
        :prepend-icon="(resultmap[item.status] || resultmap['unknown']).icon"
        :color="(resultmap[item.status] || resultmap['unknown']).color"
      >
        {{ item.status == "outofdate" ? fmtver_cmp(item) : fmtver(item) }}
      </v-chip>
    </template>
  </VDataTableVirtual>
</template>

<script>
import moment from "moment";

export default {
  props: ["pkglist"],
  methods: {
    fmtver(pkg, ver = "downstream") {
      if (!pkg[ver]) return "Unknown";
      return pkg[ver].join(".");
    },
    fmtver_cmp(pkg) {
      return `${this.fmtver(pkg, "downstream")} --> ${this.fmtver(
        pkg,
        "upstream"
      )}`;
    },
    filteritems(_, query, rawvalue) {
      const value = rawvalue.columns;
      switch (query) {
        case "available": {
          return value.status == "outofdate";
        }
        case "failed": {
          return value.status == "failed";
        }
        case "unconfigured": {
          return value.status == "unconfigured";
        }
        default:
          return true;
      }
    },
  },
  data: () => ({
    moment: moment,
    height: window.innerHeight,
    resultmap: {
      ok: {
        color: "grey",
        icon: "mdi-check-circle-outline",
      },
      outofdate: { color: "warning", icon: "mdi-update" },
      failed: { color: "error", icon: "mdi-alert-outline" },
      unconfigured: {
        color: "grey",
        icon: "mdi-minus-circle-outline",
      },
      unknown: {
        color: "default",
        icon: "mdi-help-circle-outline",
      },
    },
    headers: [
      {
        title: "Source Name",
        key: "name",
      },
      {
        title: "Update Status",
        key: "status",
      },
    ],
    filterkey: null,
  }),
};
</script>
