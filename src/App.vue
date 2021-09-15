<template>
  <div>
    <Posts />
    <MyTable :posts="posts" />
  </div>
</template>

<script>
import Posts from "./components/Posts.vue";
import MyTable from "./components/MyTable/MyTable.vue";
import axios from "axios";
export default {
  components: { MyTable, Posts },
  name: "App",
  data() {
    return {
      posts: [],
      user: null,
      users: null,
      headers: null,
      users: null,
    };
  },
  computed: {},
  methods: {
    async fetchUsers() {
      try {
        //this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = response.data;
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
