<template>
  <div >
    <q-btn  @click="this.getNextDbsLanguage()"  color="amber" icon-right="send" label="Next Language"></q-btn>
  </div>
</template>
<script>

import { api } from "boot/axios";
export default {
  name: "NextDbsBible",


  methods: {
    getNextDbsLanguage() {
      api
        .get("api/bibles/dbs/next/" + this.$route.params.languageCodeHL)
        .then((response) => {
          console.log (response.data)
          this.$emit("nextLanguage", response.data);
        })
    }

  },

};
</script>
