<style lang="less" scoped>
.upload{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 300px;
  background: #fff;
  z-index: 50;
  .head{
    width: 100%;
    height: 40px;
    background: #88aec9;
    text-align: left;
    .return{
      .icon{
        font-size: 30px;
      }
    }
    .upText {
      display: inline-block;
      text-align: left;
      padding: 2px 10px;
      height: 20px;
      line-height: 20px;
      position: relative;
      cursor: pointer;
      color: white;
      background: rgba(0, 183, 238, 0.1);
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
      margin: 8px 40px 8px 5px;
   }
    .upText:hover {
        color: white;
        background: #00b7ee;
        border-color: #ccc;
        text-decoration: none
    }
    .input-images{
        height: 0;
        width: 0;
        font-size: 0;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer
    }
  }
  .images-list{
    .image-item{
      width: 100%;
      margin: 8px 0;
      font-size: 0;
      padding: 0 10px;
      text-align: left;
      .img{
        width: 60px;
        height: 40px;
        border-radius: 5px;
        vertical-align: middle;
      }
      .up-item{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        margin-left: 8px;
      }
      .name{
        min-width: 100px;
        vertical-align: middle;
      }
      .size{
        width: 50px;
        vertical-align: middle;
      }
      .loading{
        width: 100px;
        height: 10px;
        background: #ccc;
        vertical-align: middle;
      }
    }
  }
}
</style>

<template>
  <div class="upload">
    <div class="head">
      <div class="rertun upText" @click="upReturn">
        <i class="icon iconfont icon-xitongfanhui"></i>
      </div>
      <label class="upText" for="images">选择图片</label>
      <input type="file" class="input-images" name="file" id="images" multiple="multiple" @change="setImagePreviews" accept="image/*" />
      <span  class="upText" id="submit" @click="submit">上传</span>
    </div>
   
    <ul class="images-list">
      <li class="image-item" v-for="(image,index) in selectedImg" :key="index">
        <img :src="image.url" alt="" class="img">
        <span class="up-item name ">{{image.name}}</span>
        <span class="up-item size">{{(image.size / 1024 /1024).toFixed(2)}}M</span>
        <span id="loading" class="up-item loading" ></span>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImg: []
    }
  },
  methods: {
    upReturn() {
      this.$emit('up-return');
    },
    setImagePreviews(avalue) {
      this.selectedImg = Array.from(document.getElementById("images").files);
      this.selectedImg.forEach((item, index) => {
        this.$set(item,'url', window.URL.createObjectURL(item));
      });
    },
    submit() {
      this.selectedImg.forEach((item, index) => {
        var fd=new FormData();  
        fd.append('picture'+ index, item);   
        var xmlhttp = window.XMLHttpRequest || window.ActiveXObject;    
        var xhr = new xmlhttp();  
        if (xhr.upload) { 
            xhr.upload.addEventListener("progress", (e) => {   
              Array.from(document.getElementsByClassName('loading')).forEach((progress) => {
                let per = (e.loaded/e.total*100).toFixed(2) + '%';
                progress.style.background = 'linear-gradient(to right, #00b7ee ' + per + ', #ccc ' + per;
              })
            }, false);
        }       
        xhr.open('POST', "http://localhost:8080/api/upload/post" , true);  
        xhr.send(fd);
      })
    }   
  }
}
</script>