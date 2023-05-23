<template>
  <div v-if="!loading">
    <v-row class="py-2">
      <v-col
        class="py-0"
        cols="12"
        md="6"
        lg="4"
        v-for="arch in ['x86_64', 'aarch64', 'riscv64']"
        :key="arch"
      >
        <v-chip class="mx-1 my-1" variant="outlined"> {{ arch }} </v-chip>
        <v-chip class="mx-1 my-1" color="success">
          {{
            pkglist.filter((i) => {
              if (arch in (i.pkgdata.build || {}))
                return (
                  i.pkgdata.build[arch].build_version &&
                  i.pkgdata.build[arch]?.build_status == "0"
                );
            }).length
          }}</v-chip
        >
        <v-chip class="mx-1 my-1" color="error">
          {{
            pkglist.filter((i) => {
              if (arch in (i.pkgdata.build || {}))
                return (
                  i.pkgdata.build[arch].build_version &&
                  i.pkgdata.build[arch]?.build_status != "0"
                );
            }).length
          }}</v-chip
        >
        <v-chip class="mx-1 my-1" color="warning">
          {{
            pkglist.filter((i) => !(arch in (i.pkgdata.build || {}))).length
          }}</v-chip
        >
        <v-divider class="mx-2" vertical />
      </v-col>
    </v-row>
    <v-chip-group v-model="filterkey" selected-class="text-primary" column>
      <v-chip> Build Failed </v-chip>
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
      item-value="pkgdata"
    >
      <template v-slot:[`item.pkgdata`]="{ item }">
        <v-chip
          :href="'https://github.com/eweOS/packages/tree/' + item.raw.pkgname"
          class="mx-1 my-1"
          variant="text"
          size="large"
        >
          {{ item.raw.pkgname }}
        </v-chip>
      </template>
      <template v-slot:[`item.update`]="{ item }">
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
      <template v-slot:[`item.build`]="{ item }">
        <template v-if="!item.raw.pkgdata.build">
          <v-chip prepend-icon="mdi-minus-circle-outline" color="grey"
            >No Package</v-chip
          >
        </template>
        <template
          v-for="arch in Object.keys(item.raw.pkgdata.build || {})"
          :key="arch"
        >
          <v-tooltip
            location="bottom"
            :text="
              (item.raw.pkgdata.build[arch].build_time
                ? moment.unix(item.raw.pkgdata.build[arch].build_date).fromNow()
                : 'Unknown') +
              (item.raw.pkgdata.build[arch].build_stop
                ? ` (${item.raw.pkgdata.build[arch].build_stop} error)`
                : '')
            "
          >
            <template v-slot:activator="{ props }">
              <v-chip
                :href="`https://os-repo-new.ewe.moe/.buildlog/main/${item.raw.pkgname}/build-${arch}.log`"
                v-bind="props"
                :prepend-icon="icon_build(item.raw.pkgdata.build[arch])"
                :color="color_build(item.raw.pkgdata.build[arch])"
              >
                {{ arch }}:
                {{
                  item.raw.pkgdata.build[arch].build_version || "Unavailable"
                }}
              </v-chip>
            </template>
          </v-tooltip>
        </template>
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
    axios.get("https://ewe-build-status.nia.workers.dev/list").then((resp) => {
      for (const pkg of Object.keys(resp.data)) {
        this.pkglist.push({
          pkgname: pkg,
          pkgdata: resp.data[pkg],
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
    filteritems(value) {
      switch (this.filterkey) {
        case 0: {
          for (const arch of Object.keys(value.build || {})) {
            if (
              !!value.build[arch].build_status &&
              value.build[arch].build_status !== "0"
            )
              return true;
          }
          return false;
        }
        case 1: {
          if (!value.update_version || !value.version) return false;
          return value.update_version !== value.version;
        }
        case 2: {
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
        title: "Package(Group) Name",
        key: "pkgdata",
      },
      {
        title: "Update Status",
        key: "update",
        sortable: false,
      },
      {
        title: "Build Status",
        key: "build",
        sortable: false,
      },
    ],
    loading: true,
    pkglist: [],
    filterkey: null,
  }),
};
</script>
