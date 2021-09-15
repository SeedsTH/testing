<template>
  <div class="posts">
      <form @submit.prevent>
          <h4>Post list</h4>
          <input :value="title" @input="title = $event.target.value" type="text" placeholder="title"/>
          <input :value="body" @input="body = $event.target.value" type="text" placeholder="description"/>
          <button @click="addNewPost">Create new post</button>
      </form>
      <div v-for="post in posts" :key="post.id">
          <div class="title">{{ post.title }}</div>
          <div class="post">{{ post.body }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'post',
    // props: {
    //     posts: {
    //         type: Array,
    //         required: true,
    //     }
    // },
    data() {
        return {
            title: '',
            body: '',
            posts:[
              {id: 1, title: 'Some text post 1', body: 'and Some text post 1'},
              {id: 2, title: 'Some text post 2', body: 'and Some text post 2'},
              {id: 3, title: 'Some text post 3', body: 'and Some text post 3'},
            ],
        }
    },
    methods: {
        addNewPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
            this.title = ''
            this.body = ''
        },
    }
}
</script>

<style lang="scss" scoped>
    form {
        margin: 30px;

        input {
            height:45px;
        }
    }
    .post {
        border: 2px solid rgb(36, 115, 201);
        width: 500px;
        margin-left: 30px;  
        margin-bottom: 10px;  
    }
    .title{
        margin-left: 30px;  
        margin-bottom: 10px;  

    }
</style>