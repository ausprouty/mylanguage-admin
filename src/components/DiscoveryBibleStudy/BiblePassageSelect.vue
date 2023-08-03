<template>
  <div>
    <q-select
      filled
      v-model="study"
      :options="supportedPassages"
      option-label="title"
      option-value="lesson"
      @update:model-value="updatePassage"
      label="Bible Passage"
    />
  </div>
  {{ this.scope }}
</template>

<script>
import { watch } from 'vue';
import { api } from "boot/axios";
import { useDbsStore } from 'stores/DbsStore'
export default {
  name: 'BiblePassageSelect',
  setup() {
    const dbsStore = useDbsStore()

    const language1FromStore = dbsStore.getLanguage1
    // Method triggered when the value in the store changes
    const handleLanguage1Change = (newValue, oldValue) => {
      console.log('Language1 changed from', oldValue, 'to', newValue);
    };
    // Watch for changes to the reactive property 'valueFromStore'
    watch(language1FromStore, (newValue, oldValue) => {
      handleLanguage1Change(newValue, oldValue);
    });

    const language2FromStore = dbsStore.getLanguage1
    // Method triggered when the value in the store changes
    const handleLanguage2Change = (newValue, oldValue) => {
      console.log('Language2 changed from', oldValue, 'to', newValue);
    };
    // Watch for changes to the reactive property 'valueFromStore'
    watch(language2FromStore, (newValue, oldValue) => {
      handleLanguage2Change(newValue, oldValue);
    });


    return {
      language1FromStore,
      language2FromStore,
      dbsStore
    }
  },
  data() {
    return {
      study : this.$route.params.session,
      passages : [],
      supportedPassages: [],
      scope: null,
    };
  },
  mounted() {
    api
        .get("api/dbs/studies")
        .then((response) => {
          this.passages = response.data
          this.supportedPassages = this.passages
          this.showPassages()
        })

  },
  methods:{

    showPassages(){
      console.log ('showPassages')
      this.showAllPassages()
      if (typeof this.dbsStore.language1 == 'undefined' ||
          typeof this.dbsStore.language2 == 'undefined' ){
          return
      }
      else if (
        typeof this.dbsStore.language1.collectionCode == 'undefined' ||
        typeof this.dbsStore.language2.collectionCode == 'undefined'){
          return
      }
      else if (this.dbsStore.language1.collectionCode == 'C' &&
          this.dbsStore.language2.collectionCode == 'C'){
          return
      }
      else{
        this.showNTPassages()
      }
    },
    showAllPassages(){
        this.supportedPassages = this.passages
        for (var i = 0; i < this.passages.length; i++) {
          var line = this.passages[i];
          if (line.lesson == this.$route.params.session) {
            this.study  = line.title;
          }
        }
    },
    showNTPassages(){

      this.supportedPassages = [];
      this.study = null;
      for (var i = 0; i < this.passages.length; i++) {
        var line = this.passages[i];
        if (line.testament == 'NT'){
          this.supportedPassages.push(line);
          if (line.lesson == this.$route.params.session) {
            this.study  = line.title;
          }
        }
      }
    },
    updatePassage(){
      this.dbsStore.lesson = this.study.lesson
    }
  }
}
</script>
