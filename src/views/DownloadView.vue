<template>
  <div>
    <div class="d-flex flex-column">
      <h1 class="mb-2"># Download and Install</h1>
      <p>
        Since we follow the rolling release model, you can download a copy of
        eweOS bootable image daily builds below, and burn it to a CD or write to
        a USB drive.
        <br />
        You can follow the installation guide from
        <a href="https://os-wiki.ewe.moe">wiki</a> to install eweOS to your
        machine.
      </p>

      <h2 class="mt-2">Supported Platforms</h2>
      <v-alert class="my-2" rounded="lg">
        <p>
          <b>Tier-0 Platforms:</b><br />
          x86_64
        </p>
        <p>
          <b>Tier-1 Platforms:</b><br />
          aarch64, riscv64 (WIP)
        </p>
      </v-alert>
      <h2 class="mt-2">Weekly Builds - From Available Mirrors</h2>
      <v-list two-lines>
        <v-divider />
        <template v-for="mirror in mirrors" :key="mirror.id">
          <v-list-item>
            <v-list-item-title>
              {{ mirror.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip
                class="mr-2"
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
                :disabled="mirror.tags.includes('Repo Only')"
                :href="mirror.url + '/eweos-images/'"
                variant="text"
                icon="mdi-download-circle"
              ></v-btn>
              <v-btn
                :disabled="mirror.tags.includes('Images Only')"
                :href="mirror.url + '/eweos/'"
                variant="text"
                icon="mdi-package-down"
              ></v-btn>
            </template>
          </v-list-item>
          <v-divider />
        </template>
        <v-list-item disabled>
          <v-list-item-title> More mirrors soon&trade;... </v-list-item-title>
          <v-list-item-subtitle>
            Contact us if you want to add your mirror to our list.
          </v-list-item-subtitle>
        </v-list-item>
        <v-divider />
      </v-list>
      <h2 class="mt-2">Daily Builds - From GitHub Actions</h2>
      <v-list two-lines>
        <v-divider />
        <v-list-item>
          <v-list-item-title> Github Actions </v-list-item-title>
          <v-list-item-subtitle>
            <v-chip
              class="mr-2"
              outlined
              size="x-small"
              variant="outlined"
              label
              >Official</v-chip
            >
            <v-chip
              class="mr-2"
              outlined
              size="x-small"
              variant="outlined"
              label
              >Daily</v-chip
            >
          </v-list-item-subtitle>
          <template v-slot:append>
            <img
              height="24"
              src="https://img.shields.io/github/actions/workflow/status/eweOS/iso/publish_iso.yml?style=for-the-badge&logo=github&label=ISO"
            />
            <v-btn
              href="https://github.com/eweOS/iso/actions/workflows/publish_iso.yml"
              variant="text"
              icon="mdi-download-box"
            ></v-btn>
          </template>
        </v-list-item>
        <v-divider />
      </v-list>

      <h2 class="mt-2">Docker Images</h2>
      <v-list two-lines>
        <v-divider />
        <v-list-item>
          <v-list-item-title>
            <code>ghcr.io/eweos/docker:master</code>
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-chip
              class="mr-2"
              outlined
              size="x-small"
              variant="outlined"
              label
              >Official</v-chip
            >
            <v-chip
              class="mr-2"
              outlined
              size="x-small"
              variant="outlined"
              label
              >Daily</v-chip
            >
          </v-list-item-subtitle>
          <template v-slot:append>
            <img
              height="24"
              src="https://img.shields.io/github/actions/workflow/status/eweOS/docker/docker-publish.yml?style=for-the-badge&logo=github&label=Docker"
            />
            <v-btn
              href="https://github.com/eweOS/docker/actions/workflows/docker-publish.yml"
              variant="text"
              icon="mdi-docker"
            ></v-btn>
          </template>
        </v-list-item>
        <v-divider />
      </v-list>

      <h2 class="mt-2">Build Your Own Image</h2>
      <p>
        Want to build your own image and get fully customized experience? Please
        checkout at <a href="http://os-wiki.ewe.moe">our wiki</a> and
        <a href="https://github.com/eweOS/iso">scripts</a>.
      </p>
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
