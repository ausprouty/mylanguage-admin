<template>
  <div><q-checkbox v-model="isChecked" @click="this.updateWeight()" /></div>
</template>

<script>
import { api } from "boot/axios";
import { useQuasar } from "quasar";
export default {
  name: "UpdateDefaultBibleCheckbox",

  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const $q = useQuasar();
  },
  data() {
    return {
      isChecked: false,
      bid: null,
    };
  },
  methods: {
    // see https://serversideup.net/post-put-patch-requests-with-vuejs-and-axios/
    updateWeight() {
      let params = {};
      params.bid = this.book.bid;
      params.checked = this.isChecked;
      var contentForm = this.toFormData(params);
      api
        .post("api/secure/bibles/weight/change", contentForm)
        .then((response) => {
          console.log(response);
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
    toFormData(params) {
      var formData = new FormData();
      for (var key in params) {
        formData.append(key, params[key]);
      }
      // Display the key/value pairs
      //for (var pair of form_data.entries()) {
      //  //console.log(params, pair[0] + ', ' + pair[1])
      // }
      return formData;
    },
  },
  created() {
    if (this.book.weight == 9) {
      this.isChecked = true;
    }
  },
};
</script>
