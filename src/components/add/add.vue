<template>
  <div class="add">
    <i class="icon iconfont icon-tianjia"></i>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="less" scoped>
.add{
  position: absolute;
  right: 20px;
  bottom: 40px;
  z-index: 40;
  background: #fff;
  .icon{
    font-size: 42px;
    margin: 10px 0;
    color: rgba(51, 51, 51, .5);
    -webkit-transition: font-size 0.25s ease-out 0s;
    -moz-transition: font-size 0.25s ease-out 0s;
    transition: font-size 0.25s ease-out 0s, color 0.25s ease-out 0s;
    cursor: pointer;
  }
  .icon:hover{
    color: rgba(51, 51, 51, .8);
  }
}
    
</style>
