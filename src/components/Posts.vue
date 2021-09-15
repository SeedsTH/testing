<template>
  <div class="posts">
    <form @submit.prevent>
      <h4>Post list</h4>
      <input
        :value="title"
        @input="title = $event.target.value"
        type="text"
        placeholder="title"
      />
      <input
        :value="body"
        @input="body = $event.target.value"
        type="text"
        placeholder="description"
      />
      <button @click="addNewPost">Create new post</button>
    </form>
    <div v-for="post in posts" :key="post.id">
      <div class="post">{{ post.title }}</div>
      <div class="post">{{ post.body }}</div>
      <button @click="deleteEvent(post.id)">Delete</button>
    </div>
    <div>
      <VueButton
        text="This is my first module"
        link="https://www.apple.com/iphone/"
        color="success"
        size="default"
      />
    </div>
    <div>
      <NewDialog v-model:show="dialogVisible"><h2>Some text!</h2></NewDialog>
    </div>
  </div>
</template>

<script>
import VueButton from "vue-button-pubtesting";
import NewDialog from "../components/MyTable/NewDialog.vue";
export default {
  components: {
    VueButton,
    NewDialog,
  },
  name: "Post",
  // props: {
  //     posts: {
  //         type: Array,
  //         required: true,
  //     }
  // },
  data() {
    return {
      dialogVisible: false,
      title: "",
      body: "",
      posts: [
        { id: 1, title: "Some text post 1", body: "Some text post 1" },
        { id: 2, title: "Some text post 2", body: "Some text post 2" },
        { id: 3, title: "Some text post 3", body: "Some text post 3" },
      ],
    };
  },
  methods: {
    addNewPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = "";
      this.body = "";
    },
    //     async fetchPosts() {
    //     try {
    //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    //       this.posts = response.data
    //       console.log(response)
    //     }
    //     catch (e) {
    //       alert("Error")
    //     }
    //   },
    deletePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    deleteEvent(id) {
      this.posts = this.posts.filter((e) => e.id !== id);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },

  mounted() {
    //this.fetchPosts();
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 30px;

  input {
    height: 45px;
  }
}
.post {
  border: 2px solid rgb(36, 115, 201);
  width: 500px;
  margin-left: 30px;
  margin-bottom: 10px;
}
</style>
