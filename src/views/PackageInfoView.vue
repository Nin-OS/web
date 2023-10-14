<template>
  <div v-if="!loading">
    <v-chip-group v-model="filterkey" selected-class="text-primary" column>
      <v-chip> Update Available </v-chip>
      <v-chip> Update Disabled </v-chip>
    </v-chip-group>
    <VDataTable
      :loading="loading"
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
        <v-tooltip
          :disabled="!item.raw.pkgdata.update_date"
          location="bottom"
          :text="
            item.raw.pkgdata.update_date
              ? moment.unix(item.raw.pkgdata.update_date).fromNow()
              : 'Unknown'
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
                  item.raw.pkgdata.update_version &&
                  item.raw.pkgdata.update_version !== item.raw.pkgdata.version
                    ? item.raw.pkgdata.version +
                      " -> " +
                      item.raw.pkgdata.update_version
                    : item.raw.pkgdata.update_version ||
                      item.raw.pkgdata.version ||
                      "Unavailable"
                }}
              </template>
            </v-chip>
          </template>
        </v-tooltip>
      </template>
    </VDataTable>
  </div>
  <v-row v-else class="fill-height" align-content="center" justify="center">
    <v-col class="text-subtitle-1 text-center" cols="12">
      Fetching data...
    </v-col>
    <v-col cols="6">
      <v-progress-linear indeterminate rounded height="6"></v-progress-linear>
    </v-col>
  </v-row>
</template>

<script>
import moment from "moment";
import axios from "axios";
import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  components: { VDataTable },
  created() {
    axios
      .get(
        "https://raw.githubusercontent.com/eweOS/workflow/updatecheck/result.json"
      )
      .then((resp) => {
        for (const pkg of Object.keys(resp.data.compare)) {
          this.pkglist.push({
            pkgname: pkg,
            pkgdata: {
              update_date: resp.data.compare[pkg],
              update_version: resp.data.upstream[pkg].version,
              version: resp.data.downstream[pkg].version,
            },
          });
        }
        this.loading = false;
      });
  },
  computed: {
    filterkeystr() {
      if (this.filterkey == null) return null;
      return this.filterkey.toString();
    },
  },
  methods: {
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
          return (
            value.pkgdata.update_version !== value.pkgdata.version
          );
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
    loading: true,
    pkglist: [],
    filterkey: null,
  }),
};
</script>
