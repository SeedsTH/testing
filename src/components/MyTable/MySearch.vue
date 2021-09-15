<template>
  <v-row>
    <v-col md="3">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style></style>
