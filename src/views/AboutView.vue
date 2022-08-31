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
    <h2 class="mb-2"># Butter no parsnips</h2>
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
    <h2 class="mb-2"># Features</h2>
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card variant="outlined">
          <v-card-text class="text-center text-h4 my-2"> musl </v-card-text>
          <v-divider />
          <v-card-text class="text-center pa-1"> as our libc </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card variant="outlined">
          <v-card-text class="text-center text-h4 my-2"> clang </v-card-text>
          <v-divider />
          <v-card-text class="text-center pa-1">
            as our default C compiler
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card variant="outlined">
          <v-card-text class="text-center text-h4 my-2"> busybox </v-card-text>
          <v-divider />
          <v-card-text class="text-center pa-1">
            as our core utils
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card variant="outlined">
          <v-card-text class="text-center text-h4 my-2"> S6 </v-card-text>
          <v-divider />
          <v-card-text class="text-center pa-1">
            as our init system
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
