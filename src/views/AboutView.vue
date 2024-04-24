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
        md="4"
        lg="3"
        v-for="feature in features"
        :key="feature"
      >
        <v-card rounded="lg" variant="outlined" :href="feature.link || null">
          <v-card-text class="text-center text-h4 my-2">{{
            feature.pkg
          }}</v-card-text>
          <v-divider />
          <v-card-text
            class="text-center pa-1"
          >
          {{feature.desc}}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card rounded="lg" variant="outlined" color="grey">
          <v-card-text
            class="text-center pa-1"
          >
          Get a full list <a style="color: unset" href="https://os-wiki.ewe.moe/dev/replacements">here</a>. / Want more? Please tell us!
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="my-2"># Community</h2>
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
        link: "https://gitlab.archlinux.org/pacman/pacman"
      },
      {
        pkg: "musl",
        desc: "as C library",
        link: "https://musl.libc.org/"
      },
      {
        pkg: "libc++",
        desc: "as C++ library",
        link: "https://libcxx.llvm.org/"
      },
      {
        pkg: "clang",
        desc: "as C compiler",
        link: "https://clang.llvm.org/"
      },
      {
        pkg: "busybox",
        desc: "as core utils",
        link: "https://busybox.net/"
      },
      {
        pkg: "dinit",
        desc: "as init system",
        link: "https://github.com/davmac314/dinit"
      },
      {
        pkg: "mold",
        desc: "as default linker",
        link: "https://github.com/rui314/mold"
      },
      {
        pkg: "mimalloc",
        desc: "as allocator",
        link: "https://microsoft.github.io/mimalloc/"
      },
      {
        pkg: "wayland",
        desc: "as display protocol",
        link: "https://wayland.freedesktop.org/"
      },
      {
        pkg: "tinyramfs",
        desc: "as initramfs generator",
        link: "https://github.com/illiliti/tinyramfs"
      },
      {
        pkg: "LTO",
        desc: "enabled by default",
        link: null
      },
      {
        pkg: "limine",
        desc: "as default bootloader",
        link: "https://limine-bootloader.org/"
      },
    ],
  }),
};
</script>

<style></style>
