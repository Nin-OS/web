<template>
  <div>
    <h1 class="mb-2"># About Project</h1>
    <p>
      <b>eweOS</b> is an musl-based, lightweight, general-purpose Linux
      distribution, which adopts musl libc and busybox to the latest versions of
      software with a rolling-release model.
    </p>
  </div>
  <div class="mt-4">
    <h2 class="my-4"># Butter no parsnips</h2>
    <p>
      We will use experimental new technologies to implement revolutionary
      software optimizations on eweOS, while considering adaptation to almost
      all mainstream architectures. <sup class="text-disabled">1</sup>
      <br />
      We will deliver multiple releases to cover server, PC, portable and
      embedded devices, while guaranteeing a rolling release.
      <sup class="text-disabled">2</sup>
    </p>
    <p class="text-caption text-disabled font-weight-light">
      1. Soon &trade; 2. Soon &trade;
    </p>
    <h2 class="my-4"># Features</h2>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="feature in features"
        :key="feature.pkg"
      >
        <v-card rounded="lg" variant="outlined" :href="feature.link || '#;'">
          <v-card-text class="text-center text-h4">{{
            feature.pkg
          }}</v-card-text>
          <v-divider />
          <v-card-text class="text-center pa-1">
            {{ feature.desc }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card rounded="lg" variant="outlined" color="grey">
          <v-card-text class="text-center pa-1">
            Get a full list
            <a
              style="color: unset"
              href="https://os-wiki.ewe.moe/dev/replacements"
              >here</a
            >. / Want more? Please tell us!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="my-4"># Community</h2>
    <div>
      Join us on Matrix:
      <ul class="pl-12">
        <li>
          Space:
          <v-chip label size="small" href="https://matrix.to/#/%23os%3Aewe.moe">
            #os:ewe.moe
          </v-chip>
        </li>
      </ul>
    </div>
    <div>
      Join us on Telegram Channel/Group:
      <ul class="pl-12">
        <li>
          Channel:
          <v-chip label size="small" href="https://eweos.t.me"> @eweOS </v-chip>
        </li>
        <li>
          Developers Group:
          <v-chip label size="small" href="https://eweos4dev.t.me">
            @eweOS4Dev
          </v-chip>
        </li>
        <li>
          Package News:
          <v-chip label size="small" href="https://eweospkg.t.me">
            @eweOSPkg
          </v-chip>
        </li>
      </ul>
    </div>
    <div>
      Subscribe / Join our maillist:
      <ul class="pl-12">
        <li>
          Developers:
          <v-chip
            label
            size="small"
            href="https://www.freelists.org/list/eweos-dev"
          >
            eweos-dev@freelists.org
          </v-chip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import features from "~/assets/features.json";

setPageMeta({
  title: "About",
  description:
    "Learn more about eweOS. Discover key features, community resources, and how eweOS leverages musl libc and busybox for a streamlined Linux experience.",
});
definePageMeta({ title: "About" });
</script>
