<template>
  <div>
    <q-btn push color="primary" label="Create Study" />
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
      var url = 'api/study/'+ language1 + '/' + language2 + '/' + study
      api
        .get(url)
        .then((response) => {
          console.log (response.data)
          this.languages = response.data
        })
    }
  }

}
</script>
