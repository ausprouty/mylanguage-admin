<template>
  <q-page padding>
    <div>
      <div><LanguageSelect /></div>
      <div><BiblePassageSelect /></div>
      <hr />
      <div v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import LanguageSelect from "components/DiscoveryBibleStudy/LanguageSelect.vue";
import BiblePassageSelect from "src/components/DiscoveryBibleStudy/BiblePassageSelect.vue";
export default {
  name: "DiscoveryBibleStudy",
  components: {
    LanguageSelect,
    BiblePassageSelect,
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>
