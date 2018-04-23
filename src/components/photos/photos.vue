<template>
  <div class="photos">
    <ul class="photo-list clearfix">
      <li class="photo" v-for="(photo, index) in photos" :key="photo.time" @click="eToShowDetail(index)">
        <img :src="photo.url" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline_photos: []
    }
  },
  props: {
    photos: {
      default: [],
      type: Array
    }
  },
  methods: {
    eToShowDetail(index) {
      
      this.$emit('eShowDetail', index);
    }
  }
}
</script>

<style lang="less" scoped>
.photos{
  width: 100%;
  
  .photo-list{
    padding: 10px;
    width: calc(100% - 20px);
    .photo{
      float: left;
      width: 32%;
      margin-right: 2%;
      margin-bottom: 1%;
      img{
        width: 100%;
      }
    }
    .photo:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>
