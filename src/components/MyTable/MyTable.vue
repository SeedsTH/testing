<template>
  <v-app>
    <v-main>
      <v-container>
        <h2>Vue DataTable</h2>
        <!-- <MySearch /> -->
        <v-row>
          <v-col>
            <v-data-table
              :headers="headers"
              :items="posts"
              :items-per-page="5"
              :search="search"
              class="elevation-1"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small @click="showDialog"
                  >mdi-checkbox-marked-circle</v-icon
                >
                <v-icon small @click="deleteItem(item.id)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
        <MyDialogwindow @create="addNewPost"  />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MySearch from "./MySearch.vue";
import MyDialogwindow from "./MyDialogwindow.vue";
export default {
  components: { MySearch, MyDialogwindow },
  props: { posts: "" },
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Title", value: "title" },
        { text: "Body", value: "body" },
        { text: "Actions", value: "actions", sortable: false },
      ],

      item: [],
      edit: {},
      dialogWindow: false,
      status: false,
      dialogVisible: false,
    };
  },
  methods: {
    deleteItem(id) {
      const index = this.posts.indexOf((x) => x.id === id);
      this.posts.splice(index, 1);
    },
    editItem(id) {
      this.dialog = true;
      this.editedIndex = this.posts.indexOf(id);
      this.editedItem = Object.assign({}, item);
      //this.dialog = true;
    },
    // editItem(item) {
    //   this.edit = item;
    //   this.dialogWindow = true;
    // },

    addNewPost(newPost) {
      this.posts.push(newPost);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style></style>
