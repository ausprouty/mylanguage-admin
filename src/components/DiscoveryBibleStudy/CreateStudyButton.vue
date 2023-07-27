<template>
  <div>
    <q-btn push @click="createStudy" color="primary" label="Create Study" />
    </div>
</template>

<script>
import { api } from "boot/axios";
import { useDbsStore } from 'stores/DbsStore'
import { useQuasar } from "quasar";
export default {
  name: 'CreateStudyButton',
  setup() {
    const dbsStore = useDbsStore()
    return {
      dbsStore
    }
  },
  methods: {
    createStudy(){
      var url = 'api/dbs/' + this.dbsStore.lesson +  '/' + this.dbsStore.language1.languageCodeHL + '/' + this.dbsStore.language2.languageCodeHL
      api
        .get(url)
        .then((response) => {
          console.log ('I am emitting')
          this.$emit("displayDbsText", response.data)
        })
    }
  }

}
</script>
