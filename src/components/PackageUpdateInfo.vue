<template>
  <v-chip-group
    class="my-2"
    v-model="filterkey"
    selected-class="text-primary"
    column
  >
    <v-chip> Update Available </v-chip>
    <v-chip> Update Disabled </v-chip>
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
            :prepend-icon="icon_update(item.raw.pkgdata)"
            :color="color_update(item.raw.pkgdata)"
          >
            <template v-if="item.raw.pkgdata.deprecated">Deprecated</template>
            <template v-else>
              {{
                item.raw.pkgdata.update_version
                  ? fmtstr(
                      item.raw.pkgdata.version,
                      item.raw.pkgdata.update_version
                    )
                  : item.raw.pkgdata.version || "Unavailable"
              }}
            </template>
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
  props: ["pkglist"],
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
      if (d.deprecated) return "mdi-minus-circle-outline";
      if (!d.update_version) return "mdi-help-circle-outline";
      if (d.update_version == d.version) return "mdi-check-circle-outline";
      if (!this.comparever(d.version, d.update_version))
        return "mdi-check-circle-outline";
      if (d.update_error) return "mdi-alert-outline";
      else return "mdi-update";
    },
    color_update(d) {
      if (d.deprecated) return "grey";
      if (!this.comparever(d.version, d.update_version)) return "grey";
      if (d.update_error) return "error";
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
        default:
          return true;
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
