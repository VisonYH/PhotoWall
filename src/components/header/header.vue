<template>
  <div class="header clearfix">
    <div class="logo">
      <img class="logo-img" src="./logo.png" alt="LOGO" height="20" width="100">
    </div>
    <div class="avatar">
      <img src="./avatar.jpeg" alt="" width="20" height="20">
    </div>
    <div class="tab">
      <ul class="clearfix">
        <li class="tab-item timeline">时间轴</li>
        <li class="tab-item album">相册</li>
        <li class="tab-item optimum">最佳</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.header{
  height: 40px;
 
  background: #88aec9;
  padding: 0 10px;
  .logo{
    float: left;
    margin-top: 9px;
  }
  .tab{
    float: right;
    margin-right: 10px;
    height: 40px;
    font-size: 14px;
    ul{
      .tab-item{
        float: left;
        padding: 0 5px;
        line-height: 40px;
        color: #fff;
        cursor: pointer;
      }
      .tab-item:hover{
        color: #fff;
        background: #4b7fa5;
      }
    }
  }
  .avatar{
    float: right;
    margin-top: 10px;
    img{
      border-radius: 50%;
    }
  }
}
</style>
