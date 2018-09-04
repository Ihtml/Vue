<template>
  <div class="hot-list">
    <div class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
      <span class="title-txt">本周热门榜单</span>
      <a class="title-more" href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=南京">
        全部榜单
        <span class="title-more-icon">></span>
      </a>
    </div>
    <ul class="list">

    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHotList'
}
</script>

<style lang="stylus" scoped>
.hot-list
  margin-top 0.2rem
  background #fff
  .title
    padding 0.24rem 0.26rem
    position relative
    .title-img
      display inline-block
      overflow hidden
      width 0.3rem
      height 0.3rem
      margin-left 0.2rem
      vertical-align top
    .title-txt
      display inline-block
      margin-left 0.08rem
      height 0.44rem
      color #212121
      font-size 0.32rem
      line-height 0.44rem
    .title-more
      position absolute
      top 0.36rem
      right 0.32rem
      color #616161
      font-size 0.24rem
      line-height 0.28rem
      .title-more-icon
        margin-left 0.04rem
</style>
