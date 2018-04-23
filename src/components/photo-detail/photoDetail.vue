<style lang="less" scoped>
.detail{
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 10;
  width: 100%;
  overflow: hidden;
  background: #fff;
  .return{
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;
    background: rgba(136, 174, 201, 0.5);
    z-index: 40; 
    cursor: pointer;
    .icon{
      font-size: 40px;
      color: #fff;
    }
  }
  .swiper-container{
    width: 100%;
  }
  .btns{
    position: relative;
    width: 100%;
    margin: 5px 0;
    font-size: 14px;
    .title{
      float: left;
      font-weight: 200;
      padding: 5px;
    }
    .btn-list{
      position: absolute;
      right: 5px;
      font-size: 12px;
      .btn{
        float: left;
        padding: 5px 5px;
        border: 1px solid #88aec9;
        border-radius: 2px;
        margin-left: 2px;
        .icon{
          font-size: 12px;
          color: rgb(7, 17, 27);
          margin-right: 3px;
        } 
      }
      .download{
        .link{
          text-decoration: none;
          color: #07111b;
        }
      }
      .like{
          color: #88aec9;
          .icon{
            color: #88aec9;
          } 
      }
    }
  }
  .comment-wrapper{
    width: 100%;
   
    text-align: left;
    .head{
      display: flex;
      padding: 5px;
      .title{
        flex: 0 0 40px;
        font-size: 14px;
        line-height: 18px;
      }
      .line{
        flex: 1;
        background: rgba(7, 17, 27, 0.2);
        transform: scaleY(0.5);
        position: relative;
        top: 9px;
        height: 1px;
      }
    }
    .comment-list{
      margin-top: 10px;
      .comment-item{
        display: flex;
        width: 100%;
        padding: 8px 5px;
        .avatar{
          flex: 0 0 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 50%;
          font-size: 40px;
          background: #b2cad8;
          color: #fff;
        }
        .comment-right{
          flex: 1;
          line-height: 20px;
          .title{
            font-size: 14px; 
          }
          .content{
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="detail clearfix">
    <div class="return" @click="_return">
      <i class="icon iconfont icon-xitongfanhui"></i>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="image in images" :key="image.time">
            <img :src="image.url" alt="" width="100%" class="swiper-lazy">
          </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    <div class="btns clearfix">
      <h1 class="title">{{activeImage.name}}</h1>
      <ul class="btn-list clearfix">
        <li class="btn download"><a :href="activeImage.url" :download="activeImage.name" class="link"><i class="icon iconfont icon-xiazai"></i>下载</a></li>
        <li class="btn comments"><i class="icon iconfont icon-pinglun"></i>评论</li>
        <li class="btn" @click="like" :class="{like: likeIt}"><i class="icon iconfont icon-zan"></i>喜欢</li>
      </ul>
    </div>

    <div class="comment-wrapper">
      <div class="head">
        <h1 class="title">评论</h1>
        <div class="line"></div>
      </div>
      <ul class="comment-list">
        <li class="comment-item" v-for="comment in activeImage.comments">
          <i class="avatar icon iconfont icon-geren"></i>
          <section class="comment-right">
            <div class="title">{{comment.username}}</div>
            <p class="content">{{comment.content}}</p>
          </section>
        </li>
        
      </ul>
    </div>

  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  props: {
    images: {
      type: Array,
      default: []
    },
    sliderIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeIndex: 0,
      activeImage: this.images[this.sliderIndex],
      likeIt: false
    }
  },
  methods: {
    like() {
      this.likeIt = !this.likeIt;
    },
    _return() {
      this.$emit('returnPhoto');
    }
  },
  mounted() {
    setTimeout(() => {
       var mySwiper =  new Swiper('.swiper-container', {
          loop: false,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          onSlideChangeStart: (swiper) => {
            this.activeIndex = swiper.activeIndex;
            this.activeImage = this.images[this.activeIndex];
          }
       });
       
    }, 100);
    
  },
  
}
</script>

