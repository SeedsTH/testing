<template>
  <div>
    <div class="container">
      <img :src="require(`../assets/images/image-1.jpg`)" />
      <label>Upload an image to Firebase:</label>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
    <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
        <button @click="onUpload">Upload</button>
    </div>
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
  </div>
</template>

<script>

import firebase from 'firebase/app';
import "firebase/storage"
export default {
  name: 'Upload',
  data(){
	return{
      imageData: null,
      picture: null,
	}
  },
  methods:{
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);

      
      storageRef.on('new', snapshot => {
          this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.picture = url;
      })
      }
      );
      
    },
    showImage() {
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`);
      
      
    }
  }
}
</script>

<style lang="scss" scoped>
    .container{
        margin-bottom: 10px;

        label {
            margin-right: 10px
        }
    }
    img {
            max-width: 500px;
    }
</style>