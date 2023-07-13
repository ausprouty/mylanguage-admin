<template>
  <q-page padding>
    <q-btn color="blue" label="click me"></q-btn>
    <br /><br />
    <q-card style="width: 350px">
      <q-card-section class="bg-blue text-white"> My Card </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores
        qui voluptatem provident alias dicta nulla repellat saepe sunt suscipit
        tenetur dolorem, expedita asperiores dignissimos placeat pariatur
        veritatis! Officiis, quibusdam!
      </q-card-section>
    </q-card>
    <q-select
      label="Who will do this?"
      filled
      :options="['Bob', 'Chris', 'Ryan', 'Ruth']"
      v-model="selected"
    >
    </q-select>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      selected: null,
    };
  },
});
</script>
