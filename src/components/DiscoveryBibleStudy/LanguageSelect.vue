<template>
  <div>
    <q-select
      v-model="language1"
      :options="languages"
      option-label="name"
      option-value="languageCodeHL"
      @on-change="updateLanguage1()"
      label="First Language"
    /><br>
    <q-select
      v-model="language2"
      option-label="name"
      option-value="languageCodeHL"
      @on-change="updateLanguage2()"
      :options="languages"
      label="Second Language" /><br>
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useDbsStore } from 'stores/DbsStore'
import { useQuasar } from "quasar";
export default {
  name: 'LanguageSelect',
  setup() {
    const dbsStore = useDbsStore()

    return {
      dbsStore
    }
  },
  data() {
    return {
      language1 :'',
      language2 : '',
      languages : []
    };
  },
  created () {
    api
        .get("api/dbs/languages")
        .then((response) => {
          console.log (response.data)
          this.languages = response.data
        })
    },
    methods:{
      updateLesson1(){
        alert ('update 1')
      },
      updateLesson2(){
        alert ('update 2')
      }
    }
}
</script>
