<template>
  <div v-if = this.ready>
  <q-btn push @click="createStudy" color="primary" label="Create Study" />
    </div>
</template>

<script>
import { api } from "boot/axios";
import { watch, ref } from "vue";
import { useDbsStore } from 'stores/DbsStore'
export default {
  name: 'CreateStudyButton',
  props: ['session'],
  setup() {
    const dbsStore = useDbsStore();
    const language1State = ref(dbsStore.getLanguage1);
    watch(
      () => dbsStore.getLanguage1,
      (newValue) => {
        language1State.value = newValue.languageCodeHL;
      }
    );
    const language2State = ref(dbsStore.getLanguage1);
    watch(
      () => dbsStore.getLanguage2,
      (newValue) => {
        language2State.value = newValue.languageCodeHL;
      }
    );
    const lessonState = ref(dbsStore.getLesson);
    watch(
      () => dbsStore.getLesson,
      (newValue) => {
        lessonState.value = newValue;
      }
    );
    return {
      language1State,
      language2State,
      lessonState,
      dbsStore
    };
  },
  data() {
    return {
      language1:null,
      language2: null,
      lesson: this.$route.params.session,
      ready:false,
    };
  },
  watch: {
    language1State() {
      this.checkComplete()
    },
    language2State() {
      this.checkComplete()
    },
    lessonState() {
      this.checkComplete()
    },
  },
  methods: {
    checkComplete(){
      if (typeof this.language1State != 'undefined' &&
        typeof this.language1State != 'undefined' &&
        this.lessonState != null ){
          this.ready= true
        }
        else{
          this.ready = false
        }
    },
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
