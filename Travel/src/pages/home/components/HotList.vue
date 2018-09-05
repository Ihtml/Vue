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
      <li class="item">
        <a class="item-link" href="http://touch.piao.qunar.com/touch/detail.htm?id=6330&from=as_recommend_sight">
          <div class="item-tag">
            <img class="tag-img" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png">
          </div>
          <div class="item-img">
            <img src="http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_150x150_eab8097d.jpg">
          </div>
          <div class="item-sight">南京总统府</div>
          <div class="item-price">
            <span class="price-tag">￥</span>
            <span class="price-num">35</span>
            <span class="price-txt">起</span>
          </div>
        </a>
      </li>
      <li class="item">
        <a class="item-link" href="http://touch.piao.qunar.com/touch/detail.htm?id=6330&from=as_recommend_sight">
          <div class="item-tag">
            <img class="tag-img" src="http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png">
          </div>
          <div class="item-img">
            <img src="http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_150x150_eab8097d.jpg">
          </div>
          <div class="item-sight">南京总统府</div>
          <div class="item-price">
            <span class="price-tag">￥</span>
            <span class="price-num">35</span>
            <span class="price-txt">起</span>
          </div>
        </a>
      </li>
      <li class="item">
        <a class="item-link" href="http://touch.piao.qunar.com/touch/detail.htm?id=6330&from=as_recommend_sight">
          <div class="item-tag">
            <img src="http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png" class="tag-img">
          </div>
          <div class="item-img">
            <img src="http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_150x150_eab8097d.jpg">
          </div>
          <div class="item-sight">南京总统府</div>
          <div class="item-price">
            <span class="price-tag">￥</span>
            <span class="price-num">35</span>
            <span class="price-txt">起</span>
          </div>
        </a>
      </li>
      <li class="item">
        <a class="item-link" href="http://touch.piao.qunar.com/touch/detail.htm?id=6330&from=as_recommend_sight">
          <div class="item-img">
            <img src="http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_150x150_eab8097d.jpg">
          </div>
          <div class="item-sight">南京总统府</div>
          <div class="item-price">
            <span class="price-tag">￥</span>
            <span class="price-num">35</span>
            <span class="price-txt">起</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHotList'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
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
  .list
    padding 0 0.24rem
    overflow-x scroll
    white-space nowrap
    font-size 0
    .item
      position relative
      display inline-block
      width 2rem
      padding 0.06rem 0 0.2rem
      &:not(:first-child)
        margin-left 0.12rem
      .item-link
        display block
        width 100%
        height 100%
        .tag-img
          position absolute
          top 0
          left 0
          z-index 1
          overflow hidden
          width 0.84rem
          height 0.4rem
        .item-img
          overflow hidden
          width 2rem
          height 0
          padding-bottom 100%
          background #f0f5f8
          img
            width 100%
        .item-sight
          margin-top 0.12rem
          color #212121
          font-size 0.24rem
          line-height 0.32rem
          text-align center
          ellipsis()
        .item-price
          color #616161
          line-height 0.36rem
          text-align center
          font-size 0.24rem
          display flex
          justify-content center
          align-items baseline
          .price-tag
            color #ff8300
            font-size 0.24rem
            margin-right -0.05rem
          .price-num
            color #ff8300
            font-size 0.28rem
          .price-txt
            font-size 0.24rem
</style>
