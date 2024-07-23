<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card-text>
        <v-btn-toggle
          v-model="filterkey"
          group
          variant="tonal"
          density="compact"
        >
          <v-btn color="warning" value="group:available" size="small">
            Update Available
          </v-btn>
          <v-btn color="error" value="group:failed" size="small">
            Check Failed
          </v-btn>
          <v-btn color="primary" value="group:unconfigured" size="small">
            Unconfigured
          </v-btn>
        </v-btn-toggle>
      </v-card-text>
    </v-col>
    <v-col cols="12" md="6">
      <v-card-text>
        <v-text-field
          v-model="filterkey"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          hide-details
          single-line
        ></v-text-field>
      </v-card-text>
    </v-col>
  </v-row>

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
        case "group:available": {
          return value.status == "outofdate";
        }
        case "group:failed": {
          return value.status == "failed";
        }
        case "group:unconfigured": {
          return value.status == "unconfigured";
        }
        default:
          return value.name.toLowerCase().search(query.toLowerCase());
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
        title: "Package Name",
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
