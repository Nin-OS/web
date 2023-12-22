<template>
  <v-row class="fill-height my-4" align-content="center" justify="center">
    <v-col class="text-subtitle-1 text-center" cols="12">
      Fetching data...
    </v-col>
    <v-col cols="6">
      <div class="d-flex flex-column align-center">
        <v-progress-circular :size="70" :width="7" indeterminate />
      </div>
    </v-col>
  </v-row>
</template>
