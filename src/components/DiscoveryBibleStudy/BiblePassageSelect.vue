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
import { watch, ref } from "vue";
import { api } from "boot/axios";
import { useDbsStore } from "stores/DbsStore";
export default {
  name: "BiblePassageSelect",
  setup() {
    const dbsStore = useDbsStore();
    const language1State = ref(dbsStore.getLanguage1);
    watch(
      () => dbsStore.getLanguage1,
      (newValue) => {
        language1State.value = newValue;
      }
    );
    const language2State = ref(dbsStore.getLanguage1);
    watch(
      () => dbsStore.getLanguage2,
      (newValue) => {
        language2State.value = newValue;
      }
    );
    return {
      language1State,
      language2State,
      dbsStore
    };
  },
  data() {
    return {
      study: this.$route.params.session,
      passages: [],
      supportedPassages: [],
      scope: null,
    };
  },
  watch: {
    language1State() {
      console.log ('language1State changed')
      this.showPassages()
    },
    language2State() {
      console.log ('language2State changed')
      this.showPassages()
    },
  },
  mounted() {
    api.get("api/dbs/studies").then((response) => {
      this.passages = response.data
      this.supportedPassages = this.passages
      this.showAllPassages()
    });
  },
  methods: {
    showPassages() {
      console.log ('show passages')
      console.log (this.language1State)
      if (this.language1State == null ||
        this.language2State == null
      ) {
        console.log ('language null')
        return;
      } else if (
        typeof this.language1State.collectionCode == "undefined" ||
        typeof this.language2State.collectionCode == "undefined"
      ) {
        console.log ('language Collection Codeundefined')
        return;
      } else if (
        this.language1State.collectionCode == "C" &&
        this.language2State.collectionCode == "C"
      ) {
        console.log ('Show ALL')
        this.showAllPassages()
        return;
      } else {
        console.log ('Show NT')
        this.showNTPassages();
      }
    },
    showAllPassages() {
      console.log ('show ALL passages')
      this.supportedPassages = this.passages;
      for (var i = 0; i < this.passages.length; i++) {
        var line = this.passages[i];
        if (line.lesson == this.$route.params.session) {
          this.study = line.title;
        }
      }
    },
    showNTPassages() {
      console.log ('show NT passages')
      this.supportedPassages = [];
      this.study = null;
      for (var i = 0; i < this.passages.length; i++) {
        var line = this.passages[i];
        if (line.testament == "NT") {
          this.supportedPassages.push(line);
          if (line.lesson == this.$route.params.session) {
            this.study = line.title;
          }
        }
      }
    },
    updatePassage() {
      console.log (this.study.lesson)
      this.dbsStore.updateLesson(this.study.lesson)
     // this.dbsStore.lesson = this.study.lesson;
    },
  },
};
</script>
