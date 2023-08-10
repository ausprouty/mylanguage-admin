<template>
  <q-page padding>
    <div>
      <div><LanguageSelect /></div>
      <div><BiblePassageSelect /></div>
      <div><CreateStudyButton   @displayDbsText="handleDisplayDbsText"/></div>
      <div><PdfButton/></div>
      <hr />
      <div  v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import LanguageSelect from "components/DiscoveryBibleStudy/LanguageSelect.vue";
import BiblePassageSelect from "components/DiscoveryBibleStudy/BiblePassageSelect.vue";
import CreateStudyButton from "components/DiscoveryBibleStudy/CreateStudyButton.vue";
import PdfButton from "components/PdfButton3.vue";
export default {
  name: "DiscoveryBibleStudy",
  components: {
    LanguageSelect,
    BiblePassageSelect,
    CreateStudyButton,
    PdfButton
  },
  data() {
    return {
      text: "",
    };
  },
  methods:{
    handleDisplayDbsText(response){
      this.text = response
    }
  }
};
</script>
