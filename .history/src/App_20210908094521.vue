<template>
<div>
    <Uploader />
    <div>
        <button @click="fetchPosts">Get 10 posts</button>
    </div>
</div>
    
</template>

<script>
import Uploader from './components/Upload.vue'
import axios from 'axios'
export default {
    components: {
        Uploader,
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          console.log(response)
        }
        catch (e) {
          alert("Error")
        }
      },

    }
};
</script>

<style lang="scss">
.upload-file {
    flex: 1;
    margin-left: 16px;
    position: relative;
    display: flex;
    input {
        display: none;
    }
    .preview {
        margin-left: 16px;
        text-transform: initial;
    }
    span {
        font-size: 12px;
        margin-left: 16px;
        align-self: center;
    }
}
button,
.router-button {
    transition: 500ms ease all;
    cursor: pointer;
    margin-top: 24px;
    padding: 12px 24px;
    background-color: #303030;
    color: #fff;
    border-radius: 20px;
    border: none;
    text-transform: uppercase;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: rgba (48, 48, 48, 0.7);
    }
}
</style>