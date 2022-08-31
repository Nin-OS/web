<template>
  <div>
    <div class="d-flex flex-column">
      <h1 class="mb-2"># Download and install eweOS</h1>
      <p>
        Since we follow the rolling release model, you can download a copy of
        eweOS bootable image weekly builds below, and burn it to a CD or write
        to a USB drive.
        <br />
        You can follow the installation guide from wiki(WIP) to install eweOS to
        your machine.
      </p>
      <v-alert class="my-2">
        <ol>
          <li>Current Release: WIP</li>
          <li>Included Kernel: WIP</li>
          <li>ISO Size: WIP</li>
          <li>Checksum (SHA512): <code>WIP</code></li>
          <li>Checksum (SHA1): <code>WIP</code></li>
          <li>Checksum (MD5): <code>WIP</code></li>
        </ol>
      </v-alert>
      <h2 class="mt-2">Available Mirrors</h2>
      <v-list two-lines>
        <v-divider />
        <template v-for="mirror in mirrors" :key="mirror.id">
          <v-list-item>
            <v-list-item-title>
              {{ mirror.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip
                v-for="tag in mirror.tags"
                :key="tag"
                outlined
                size="x-small"
                variant="outlined"
                label
                >{{ tag }}</v-chip
              >
            </v-list-item-subtitle>
            <template v-slot:append>
              <v-btn
                :href="mirror.url"
                variant="text"
                icon="mdi-download-box"
              ></v-btn>
            </template>
          </v-list-item>
          <v-divider />
        </template>
      </v-list>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import mirrors from "@/data/mirrors.json";

export default defineComponent({
  name: "DownloadView",
  components: {},
  data: () => ({
    mirrors: mirrors,
  }),
});
</script>
