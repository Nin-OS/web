<template>
  <div>
    <div class="d-flex flex-column">
      <h1 class="mb-2"># Package List</h1>
      <div class="d-flex flex-column align-center" v-if="loading">
        <v-progress-circular :size="70" :width="7" indeterminate />
      </div>
      <template v-else>
        <v-text-field
          density="compact"
          hide-details
          clearable
          label="Search..."
          variant="outlined"
          v-model="search"
        ></v-text-field>
        <v-data-table
          :headers="headers"
          :items="pkglist"
          items-per-page="20"
          item-value="name"
          @click:row="clickrow"
        >
          <template #[`item.Name`]="{ item }">
            <b>
              {{ item.raw.Name }}
            </b>
          </template>
        </v-data-table>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  components: { VDataTable },
  created() {
    axios.get("https://os-repo.ewe.moe/eweos/pkgs.json").then((resp) => {
      this.loading = false;
      this.pkglist = resp.data;
    });
  },
  computed: {
    filtered_pkglist() {
      if (this.search) {
        return this.pkglist.filter((pkg) => pkg["Name"].includes(this.search));
      } else return this.pkglist;
    },
  },
  methods: {
    clickrow(_,pkg) {
      this.$router.push(
        "/packageinfo/" + pkg.item.value["Repository"] + "/" + pkg.item.value["Name"]
      );
    },
  },
  data: () => ({
    loading: true,
    pkglist: [],
    search: null,
    headers: [
      {
        title: "Name",
        key: "Name",
      },
      {
        title: "Version",
        key: "Version",
      },
      {
        title: "Repository",
        key: "Repository",
      },
      {
        title: "Updated",
        key: "Build Date",
      },
    ],
  }),
};
</script>

<style></style>
