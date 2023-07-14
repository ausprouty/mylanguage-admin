<template>
  <div class="q-pa-sm">
    <q-card class="bg-blue-1">
    <q-item>
      <q-item-section class="col-xs-1">
        <UpdateDefaultBibleCheckbox></UpdateDefaultBibleCheckbox>
      </q-item-section>
      <q-item-section>
        <q-item-label>
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
import UpdateDefaultBibleCheckbox from 'components/UpdateDefaultBibleCheckbox.vue'
export default {
  props: {
    book: Object,
  },
  components:{
    UpdateDefaultBibleCheckbox
  },

  methods:{
    updateWeight(){
      console.log ('I am changing weight')
      alert(this.book.bid)
    }
  },
  
}
</script>
