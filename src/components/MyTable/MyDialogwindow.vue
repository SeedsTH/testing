<template>
  <div v-if="show" @click.stop="hideDialog">
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-text-field v-model="newPost.title" label="Title input"
            >{{}}</v-text-field
          >
          <v-text-field
            v-model="newPost.body"
            label="Body input"
          ></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              Disagree
            </v-btn>

            <v-btn color="green darken-1" text @click="addNewPost">
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "myDialogwindow",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      newPost: {
        title: "",
        body: "",
      },

      dialog: true,
    };
  },
  methods: {
    addNewPost() {
      this.newPost.id = Date.now();
      this.$emit("create", this.newPost);
      //this.posts.push(newPost);
      //this.dialog = false;
      this.newPost = {
        title: "",
        body: "",
      };
    },
    showDialog() {
      this.$emit("showDialogWindow", (this.dialog = true));
    },
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style></style>
