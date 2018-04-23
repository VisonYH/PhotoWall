<template>
  <div class="timeline">
    <ns-header></ns-header>
    <photos :photos="timeline_photos" @eShowDetail="showDetailFun" v-show="!showDetail"></photos>
    <ns-footer></ns-footer>
    <add @click.native="showUploadPage"></add>
    <photo-detail :images="timeline_photos" v-if="showDetail" :slider-index="sliderIndex" @returnPhoto="showDetailFun"></photo-detail>
    <upload v-if="upload" @up-return="showUploadPage"></upload>
    <transition name="fade">
      <div class="list-mask" @click="showUploadPage" v-show="upload"></div>
    </transition>
  </div>
</template>
<script>
  import nsHeader from './header/header.vue';
  import nsFooter from './footer/footer.vue';
  import photos from './photos/photos.vue';
  import add from './add/add.vue';
  import photoDetail from './photo-detail/photoDetail.vue';
  import upload from './upload/upload.vue'
  export default {
    components: {
      nsHeader,
      nsFooter,
      photos,
      add,
      photoDetail,
      upload
    },
    data() {
      return {
        timeline_photos: [],
        showDetail: false,
        sliderIndex: 0,
        upload: false
      }
    },
    methods: {
      showDetailFun(index) {
        if(!this.showDetail) {
          this.sliderIndex = index;
        }
        this.showDetail = !this.showDetail;
      },
      showUploadPage() {
        this.upload = !this.upload;
        console.log(this.upload);
      }
    },
    created() {
      this.$http.get('/api/timeline').then(res => {
        res = res.body.albums;
        for(let album in res) {
          for(let photo in res[album]) {
            this.timeline_photos.push(res[album][photo]);
          }
        }
        this.timeline_photos.sort((a,b) => {
          return Number(a.time) - Number(b.time);
        });
        console.log(this.timeline_photos);
      });
    }
  }
</script>


<style scoped lang="less">
.timeline{
  position: relative;
  height: 100%;
  .list-mask{
      position:fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 14;
      
      opacity: 1;
      background: rgba(7,17,27,0.6);
  }
  
  .fade-enter-active, .fade-leave-active {
      transition: all 0.4s linear;
      
  }
  .fade-enter,.fade-leave-active{
      opacity: 0;
      background: rgba(7, 17, 27, 0);   
  }
       
}
</style>

