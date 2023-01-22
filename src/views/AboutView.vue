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
    <h2 class="my-2"># Butter no parsnips</h2>
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
    <h2 class="my-2"># Features</h2>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        v-for="feature in features"
        :key="feature"
      >
        <v-card variant="outlined">
          <v-card-text class="text-center text-h4 my-2">{{
            feature.pkg
          }}</v-card-text>
          <v-divider />
          <v-card-text
            class="text-center pa-1"
            v-html="feature.desc"
          ></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="my-2"># Contact</h2>
    <p>
      Join us on Matrix Space:
      <v-chip label size="small" href="https://matrix.to/#/%23os%3Aewe.moe">
        #os:ewe.moe
      </v-chip>
    </p>
    <p>
      Join us on Telegram Group:
      <v-chip label size="small" href="https://eweOS4Dev.t.me">
        @eweOS4Dev
      </v-chip>
    </p>
    <p>
      Subscribe / Join our maillist:
      <ul class="pl-12">
        <li> Developers: 
          <v-chip label size="small" href="https://www.freelists.org/list/eweos-dev">
            eweos-dev@freelists.org
          </v-chip>
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    features: [
      {
        pkg: "pacman",
        desc: "as package manager",
      },
      {
        pkg: "musl",
        desc: "as libc",
      },
      {
        pkg: "clang",
        desc: "as default C compiler",
      },
      {
        pkg: "busybox",
        desc: "as core utils",
      },
      {
        pkg: "dinit",
        desc: "as init system",
      },
      {
        pkg: "mold",
        desc: "as linker",
      },
      {
        pkg: "mimalloc",
        desc: "as allocator",
      },
      {
        pkg: "? ? ?",
        desc: "(Soon &trade;)",
      },
    ],
  }),
};
</script>

<style></style>
