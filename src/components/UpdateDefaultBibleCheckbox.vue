<template>
  <div><q-checkbox
        v-model="isChecked"
        @change="this.updateWeight()" /></div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
  },
  data() {
    return {
      isChecked: false,
    }
  },
  created(){
    if (this.book.weight == 9){
      this.isChecked = true
    }
  }
}
</script>
