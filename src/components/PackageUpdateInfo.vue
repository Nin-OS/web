<template>
  <v-chip-group
    class="my-2"
    v-model="filterkey"
    selected-class="text-primary"
    column
  >
    <v-chip> Check Available </v-chip>
    <v-chip> Check Not Configured </v-chip>
    <v-chip v-if="pkgerrlist.failed.length"> Check Failed </v-chip>
    <v-chip v-if="pkgerrlist.deprecated.length"> Deprecated </v-chip>
  </v-chip-group>
  <VDataTable
    :headers="headers"
    :items="pkglist"
    :search="filterkeystr"
    :custom-filter="filteritems"
    :items-per-page="100"
  >
    <template v-slot:[`item.pkgname`]="{ item }">
      <v-chip
        :href="'https://github.com/eweOS/packages/tree/' + item.raw.pkgname"
        class="mx-1 my-1"
        variant="text"
        size="large"
      >
        {{ item.raw.pkgname }}
      </v-chip>
    </template>
    <template v-slot:[`item.pkgdata`]="{ item }">
      <template v-if="!item.raw.pkgdata">
        <v-chip prepend-icon="mdi-minus-circle-outline" color="grey">
          No data
        </v-chip>
      </template>
      <v-tooltip
        v-else
        :disabled="!item.raw.pkgdata.update_date"
        location="bottom"
        :text="
          'Checked: ' +
          (item.raw.pkgdata.update_date
            ? moment.unix(item.raw.pkgdata.update_date).fromNow()
            : 'Unknown')
        "
      >
        <template v-slot:activator="{ props }">
          <v-chip
            v-bind="props"
            prepend-icon="mdi-minus-circle-outline"
            v-if="this.pkgerrlist.deprecated.includes(item.raw.pkgname)"
            color="default"
          >
            Deprecated
          </v-chip>
          <v-chip
            v-bind="props"
            prepend-icon="mdi-alert-outline"
            v-else-if="this.pkgerrlist.failed.includes(item.raw.pkgname)"
            color="error"
          >
            Failed
          </v-chip>
          <v-chip
            v-else
            v-bind="props"
            :prepend-icon="icon_update(item.raw.pkgdata)"
            :color="color_update(item.raw.pkgdata)"
          >
            {{
              item.raw.pkgdata.update_version ||
              !this.pkgerrlist.failed.includes(item.raw.pkgname)
                ? fmtstr(
                    item.raw.pkgdata.version,
                    item.raw.pkgdata.update_version
                  )
                : item.raw.pkgdata.version || "Unavailable"
            }}
          </v-chip>
        </template>
      </v-tooltip>
    </template>
  </VDataTable>
</template>

<script>
import moment from "moment";

import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  components: { VDataTable },
  props: ["pkglist", "pkgerrlist"],
  computed: {
    filterkeystr() {
      if (this.filterkey == null) return null;
      return this.filterkey.toString();
    },
  },
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
    filteritems(a, b, value) {
      switch (this.filterkey) {
        case 0: {
          if (!value.pkgdata) return false;
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
        case 1: {
          return !value.pkgdata;
        }
        case 2: {
          return this.pkgerrlist.failed.includes(value.pkgname);
        }
        case 3: {
          return this.pkgerrlist.deprecated.includes(value.pkgname);
        }
        default:
          return !this.pkgerrlist.deprecated.includes(value.pkgname);
      }
    },
  },
  data: () => ({
    moment: moment,
    headers: [
      {
        title: "Source Name",
        key: "pkgname",
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
