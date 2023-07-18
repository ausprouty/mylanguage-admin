<template>
  <div class="q-pa-sm">
    <q-card class="bg-blue-1">
    <q-item>
      <q-item-section class="col-xs-1">
        <UpdateDefaultBibleCheckbox v-bind:book="book"/>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-weight-bold"  @click="this.showText(book.bid)">
          {{book.volumeName}}
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <q-item-label>
         {{book.collectionCode}}
        </q-item-label>
      </q-item-section>
      <q-item-section class="col-xs-4">
        <q-item-label>
          {{book.source}}
        </q-item-label>
      </q-item-section>
      <q-item-section class="col-xs-1">
        <q-item-label>
          {{book.bid}}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
  </div>
</template>


<script>
import UpdateDefaultBibleCheckbox from './UpdateDefaultBibleCheckbox.vue'
import { api } from "boot/axios";
import { useQuasar } from "quasar";
export default {
  props: {
    book: Object,
  },
  components:{
    UpdateDefaultBibleCheckbox
  },
  setup () {
    const $q = useQuasar()
    function showText(bid) {
      let params = {};
      params.bid = bid;
      params.entry = 'Acts 1:3-11';
      var contentForm = this.toFormData(params);
      api
        .post("api/passage/text", contentForm)
        .then((response) => {
          console.log(response);
        })
      .catch(() => {
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Unble to get Bible text',
          icon: 'report_problem'
        })
      })
    }
    return {showText }
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




}
</script>
