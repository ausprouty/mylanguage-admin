<template>
  <div>
    <button @click="generatePDF">Generate PDF</button>
    <pdf ref="pdf" :src="pdfContent" />
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
  data() {
    return {
      pdfContent: "Your PDF content goes here",
    };
  },
  methods: {
    async generatePDF() {
      const pdfData = await this.$refs.pdf.getPDF();
      const blob = new Blob([pdfData], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "generated_pdf.pdf";
      link.click();

      URL.revokeObjectURL(url);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
