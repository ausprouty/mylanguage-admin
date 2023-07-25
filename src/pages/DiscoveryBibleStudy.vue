<template>
  <q-page padding>
    <div>
      <div><LanguageSelect /></div>
      <div><StudySelect /></div>
      <hr />
      <div v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import LanguageSelect from "components/DiscoveryBibleStudy/LanguageSelect.vue";
import StudySelect from "components/DiscoveryBibleStudy/StudySelect.vue";
export default {
  name: "DiscoveryBibleStudy",
  components: {
    LanguageSelect,
    StudySelect,
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>
