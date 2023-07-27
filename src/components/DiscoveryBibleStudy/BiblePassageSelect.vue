<template>
  <div>
    <q-select
      filled
      v-model="study"
      :options="passages"
      option-label="title"
      option-value="lesson"
      @update:model-value="updatePassage"
      label="Bible Passage"
    />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useDbsStore } from 'stores/DbsStore'
import { useQuasar } from "quasar";
export default {
  name: 'BiblePassageSelect',
  setup() {
    const dbsStore = useDbsStore()
    return {
      dbsStore
    }
  },
  data() {
    return {
      study :this.$route.params.session,
      passages : []
    };
  },
  created () {
    api
        .get("api/dbs/studies")
        .then((response) => {
          this.passages = response.data
          this.insertPassage()
        })

    },
  methods:{
    insertPassage() {
      for (var i = 0; i < this.passages.length; i++) {
        var line = this.passages[i];
        if (line.lesson == this.$route.params.session) {
          this.study  = line.title;
        }
      }
    updatePassage(){
      this.dbsStore.lesson = this.study
    }
  }
}
</script>
