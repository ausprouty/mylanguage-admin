<template>
  <div>
    <button @click="generatePDF">Generate PDF</button>
  </div>
</template>

<script>
import html2pdf from "vue-html2pdf";

export default {

  methods: {
    async generatePDF() {
      //const content = document.getElementById("pdf-content");
      const content = '<p>This is my content</p>'
      const options = {
        margin: 10,
        filename: "generated_pdf.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      //const pdfData = await this.$refs.pdf.createPdf(content, options);
      const pdfData = await html2pdf.pdf.createPdf(content, options);html2pdf.
      pdfData.download();
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
