<template>
  <div><q-checkbox v-model="isChecked" @click="this.updateWeight()" /></div>
</template>

<script>
import { api } from "boot/axios";
import { ref } from 'vue'
import { useQuasar } from "quasar";
export default {
  name: "UpdateDefaultBibleCheckbox",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  setup () {
    const $q = useQuasar()
    function updateWeight() {
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
          color: 'negative',
          position: 'top',
          message: 'Changing Weight Failed',
          icon: 'report_problem'
        })
      })
    }
    return {updateWeight }
  },
  data() {
    return {
      isChecked: false,
      bid: null,
    };
  },
  methods: {
    // see https://serversideup.net/post-put-patch-requests-with-vuejs-and-axios/
    toFormData(params) {
      var formData = new FormData();
      for (var key in params) {
        formData.append(key, params[key]);
      }
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
