<template>
  <q-page padding>
    <q-toolbar class="bg-secondary col-xs-9 text-white">Select Default Bible for {{this.language.name}} DBS </q-toolbar>
      <BibleToWeigh
          v-for="book in this.books"
          :key="book.bid"
          :book="book"
        />

  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import BibleToWeigh from 'components/BiblesToWeigh/BibleToWeigh.vue'

export default defineComponent({
  name: "BiblesToWeigh",
  components: {
    BibleToWeigh
  },
  data() {
    return {
      books:[],
      language:[]
    };
  },
  setup() {
    const $q = useQuasar();
  },
  mounted() {
    console.log (this.$route.params.languageCodeHL);
    this.getBibles(this.$route.params.languageCodeHL);
    this.getLanguage(this.$route.params.languageCodeHL);
  },
  methods: {
    getBibles(languageCodeHL) {
      let url = "api/bibles/text/" +  languageCodeHL
      api
        .get( url)
        .then((response) => {
          this.books = response.data;
        })
        .catch(() => {
          $q.notify({
            color: "negative",
            position: "top",
            message: "Loading failed",
            icon: "report_problem",
          });
        });
    },
    getLanguage(languageCodeHL) {
      let url = "api/language/" +  languageCodeHL
      api
        .get( url)
        .then((response) => {
          console.log (response.data)
          this.language = response.data;
        })
        .catch(() => {
          $q.notify({
            color: "negative",
            position: "top",
            message: "Loading failed",
            icon: "report_problem",
          });
        });
    },
  },
});
</script>
