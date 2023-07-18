<template>
  <q-page padding>
    <q-toolbar class="bg-secondary col-xs-9 text-white">Select Default Bible for DBS </q-toolbar>
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
      books:[]
    };
  },
  setup() {
    const $q = useQuasar();
  },
  mounted() {
    console.log (this.$route.params.languageCodeIso);
    this.loadData(this.$route.params.languageCodeIso);
  },
  methods: {
    loadData(languageCodeIso) {
      let url = "api/bibles/text/" +  languageCodeIso
      console.log("I am loading data from " +  url);
      api
        .get( url)
        .then((response) => {
          console.log(response.data);
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
  },
});
</script>
