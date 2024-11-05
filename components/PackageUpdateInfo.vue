<template>
  <v-row class="mt-2">
    <v-col cols="12" md="6">
      <v-card-text class="text-center">
        <v-btn-toggle
          v-model="filterkey"
          group
          variant="tonal"
          density="compact"
        >
          <v-btn color="warning" value="group:available" size="small">
            Update Available <br />
            ({{ pkglist.filter((e) => e.status === "outofdate").length }})
          </v-btn>
          <v-btn color="error" value="group:failed" size="small">
            Check Failed <br />
            ({{ pkglist.filter((e) => e.status === "failed").length }})
          </v-btn>
          <v-btn color="primary" value="group:unconfigured" size="small">
            Unconfigured <br />
            ({{ pkglist.filter((e) => e.status === "unconfigured").length }})
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
        class="mx-1 my-1 font-weight-medium"
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
        @click="
          item.status === 'outofdate'
            ? copycmd(item.name, item.upstream.join('.'))
            : () => {}
        "
      >
        {{ item.status == "outofdate" ? fmtver_cmp(item) : fmtver(item) }}
      </v-chip>
    </template>
  </VDataTableVirtual>
  <v-snackbar v-model="snackbar">
    Command copied!
    <template v-slot:actions>
      <v-btn variant="text" @click="snackbar = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import moment from "moment";

export default {
  props: ["pkglist"],
  methods: {
    async copycmd(pkg, ver) {
      await navigator.clipboard.writeText(`/bumpver@eweos_bot ${pkg} ${ver}`);
      this.snackbar = true;
    },
    fmtver(pkg, ver = "downstream") {
      if (pkg.status) if (pkg.reason) return "Failed: " + pkg.reason;
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
  computed: {
    height() {
      if (window.innerHeight > 800) return window.innerHeight - 320;
      else return window.innerHeight;
    },
  },
  data: () => ({
    moment: moment,
    snackbar: false,
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

<style scoped>
.v-chip {
  user-select: text;
}
</style>
