<template>
  <div>
    <div class="d-flex flex-column">
      <h1 class="mb-2"># Searching Package</h1>
      <div class="d-flex flex-column align-center">
        <v-progress-circular :size="70" :width="7" indeterminate />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.get("https://os-repo.ewe.moe/eweos/pkgs.json").then((resp) => {
      this.pkg = resp.data.find(
        (pkg) => pkg["Name"] === this.$route.params.pkg
      );
      if (!this.pkg) {
        this.$router.push("/404");
      } else {
        this.$router.push(
          "/packageinfo/" + this.pkg["Repository"] + "/" + this.pkg["Name"]
        );
      }
    });
  },

  data: () => ({
    pkg: null,
  }),
};
</script>

<style></style>
