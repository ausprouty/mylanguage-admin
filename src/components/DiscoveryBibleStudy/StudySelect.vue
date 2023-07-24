<template>
  <div>
    <q-select v-model="study" :options="studies" label="Study" />/div>
</template>

<script>
import { api } from "boot/axios";
import { useQuasar } from "quasar";
export default {
  name: 'StudySelect',
  data() {
    return {
      study :'',
      studies : []
    };
  },
  setup () {
    api
        .get("api/dbs/studies")
        .then((response) => {
          console.log (response.data)
          this.studies = response.data
        })
    }
}
</script>
