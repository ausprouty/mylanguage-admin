<template>
  <q-page padding>
    <div>
      <div><LanguageSelect /></div>
      <div><BiblePassageSelect /></div>
      <div><CreateStudyButton/></div>
      <hr />
      <div v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import LanguageSelect from "components/DiscoveryBibleStudy/LanguageSelect.vue";
import BiblePassageSelect from "src/components/DiscoveryBibleStudy/BiblePassageSelect.vue";
import CreateStudyButton from "src/components/DiscoveryBibleStudy/CreateStudyButton.vue";
export default {
  name: "DiscoveryBibleStudy",
  components: {
    LanguageSelect,
    BiblePassageSelect,
    CreateStudyButton
  },
  data() {
    return {
      text: "hi there",
    };
  },
  methods:{
    displayDbsText(response){
      alert ('I am to display')
      this.text = response
    }
  }
};
</script>
