<template>
  <q-page padding>
    <div>
      <div><LanguageSelect /></div>
      <div><BiblePassageSelect /></div>
      <div><CreateStudyButton   @displayDbsText="handleDisplayDbsText"/></div>
      <hr />
      <div  v-html="this.text"></div>
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
