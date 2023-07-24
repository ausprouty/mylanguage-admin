<template>
  <div>
    <q-select v-model="language1" :options="languages" label="First Language" /><br>
    <q-select v-model="language2" :options="languages" label="Second Language" /><br>
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useQuasar } from "quasar";
export default {
  name: 'LanguageSelect',
  data() {
    return {
      language1 :'',
      language2 : '',
      languages : []
    };
  },
  setup () {
    api
        .get("api/dbs/languages")
        .then((response) => {
          console.log (response.data)
          this.languages = response.data
        })
    }
}
</script>
