<template>
  <div>
    <q-select
    v-model="study"
    :options="studies"
    option-label="reference"
    option-value="lesson"
    @on-change="updateStudy()"
    label="Study" />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useDbsStore } from 'stores/DbsStore'
import { useQuasar } from "quasar";
export default {
  name: 'StudySelect',
  setup() {
    const dbsStore = useDbsStore()

    return {
      dbsStore
    }
  },
  data() {
    return {
      study :'',
      studies : []
    };
  },
  created () {
    api
        .get("api/dbs/studies")
        .then((response) => {
          this.studies = response.data
        })
    },
    methods:{
      updateStudy(){
        alert ('updateStudy')
      }
    }
}
</script>
