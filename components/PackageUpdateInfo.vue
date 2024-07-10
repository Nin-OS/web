<template>
  <v-chip-group
    class="my-2"
    v-model="filterkey"
    selected-class="text-primary"
    column
  >
    <v-chip color="warning" value="available"> Update Available </v-chip>
    <v-chip value="none"> Check Not Configured </v-chip>
    <v-chip color="error" value="failed" v-if="pkgerrlist.failed.length">
      Check Failed
    </v-chip>
    <v-chip value="deprecated" v-if="pkgerrlist.deprecated.length">
      Deprecated
    </v-chip>
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
    <template v-slot:[`item.pkgname`]="{ item }">
      <v-chip
        :href="'https://github.com/eweOS/packages/tree/' + item.pkgname"
        class="mx-1 my-1"
        variant="text"
        size="large"
      >
        {{ item.pkgname }}
      </v-chip>
    </template>
    <template v-slot:[`item.pkgdata`]="{ item }">
      <template v-if="!item.pkgdata">
        <v-chip prepend-icon="mdi-minus-circle-outline" color="grey">
          No data
        </v-chip>
      </template>
      <v-tooltip
        v-else
        :disabled="!item.pkgdata.update_date"
        location="bottom"
        :text="
          'Checked: ' +
          (item.pkgdata.update_date
            ? moment.unix(item.pkgdata.update_date).fromNow()
            : 'Unknown')
        "
      >
        <template v-slot:activator="{ props }">
          <v-chip
            v-bind="props"
            prepend-icon="mdi-minus-circle-outline"
            v-if="this.pkgerrlist.deprecated.includes(item.pkgname)"
            color="default"
          >
            Deprecated
          </v-chip>
          <v-chip
            v-bind="props"
            prepend-icon="mdi-alert-outline"
            v-else-if="this.pkgerrlist.failed.includes(item.pkgname)"
            color="error"
          >
            Failed
          </v-chip>
          <v-chip
            v-else
            v-bind="props"
            :prepend-icon="icon_update(item.pkgdata)"
            :color="color_update(item.pkgdata)"
          >
            {{
              item.pkgdata.update_version ||
              !this.pkgerrlist.failed.includes(item.pkgname)
                ? fmtstr(item.pkgdata.version, item.pkgdata.update_version)
                : item.pkgdata.version || "Unavailable"
            }}
          </v-chip>
        </template>
      </v-tooltip>
    </template>
  </VDataTableVirtual>
</template>

<script>
import moment from "moment";

export default {
  props: ["pkglist", "pkgerrlist"],
  methods: {
    fmtstr(a, b) {
      if (this.comparever(a, b)) {
        return a + " -> " + b;
      } else {
        return a;
      }
    },
    comparever(a, b) {
      if (a === b) return 0;
      return a < b;
    },
    icon_update(d) {
      if (!d.update_version) return "mdi-help-circle-outline";
      if (d.update_version == d.version) return "mdi-check-circle-outline";
      if (!this.comparever(d.version, d.update_version))
        return "mdi-check-circle-outline";
      else return "mdi-update";
    },
    color_update(d) {
      if (!this.comparever(d.version, d.update_version)) return "grey";
      else return "warning";
    },
    filteritems(_, query, rawvalue) {
      const value = rawvalue.columns;
      switch (query) {
        case "available": {
          if (!value.pkgdata) return false;
          if (this.pkgerrlist.failed.includes(value.pkgname)) return false;
          if (this.pkgerrlist.deprecated.includes(value.pkgname)) return false;
          if (!value.pkgdata.update_version || !value.pkgdata.version)
            return false;
          if (
            !this.comparever(
              value.pkgdata.version,
              value.pkgdata.update_version
            )
          )
            return false;
          return true;
        }
        case "none": {
          return !value.pkgdata;
        }
        case "failed": {
          return this.pkgerrlist.failed.includes(value.pkgname);
        }
        case "deprecated": {
          return this.pkgerrlist.deprecated.includes(value.pkgname);
        }
        default:
          return !this.pkgerrlist.deprecated.includes(value.pkgname);
      }
    },
  },
  data: () => ({
    moment: moment,
    height: window.innerHeight,
    headers: [
      {
        title: "Source Name",
        key: "pkgname",
        filterable: false,
      },
      {
        title: "Update Status",
        key: "pkgdata",
        sortable: false,
      },
    ],
    filterkey: null,
  }),
};
</script>
