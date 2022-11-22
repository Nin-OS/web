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
        <v-table>
          <thead>
            <tr>
              <th v-for="header in headers" :key="header.key">
                {{ header.title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="pkg in filtered_pkglist"
              :key="pkg['Repository'] + '-' + pkg['Name']"
              @click="
                $router.push(
                  '/packageinfo/' + pkg['Repository'] + '/' + pkg['Name']
                )
              "
            >
              <template v-for="header in headers" :key="header.key">
                <td v-if="header.key == 'Name'">
                  <b>{{ pkg[header.key] }}</b>
                </td>
                <td v-else>
                  {{ pkg[header.key] }}
                </td>
              </template>
            </tr>
          </tbody>
        </v-table>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
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
