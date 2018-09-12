<template>
  <div class="hot-city">
    <div class="hot-city-title">热门城市</div>
    <ul class="hot-city-list">
      <li>北京</li>
      <li>上海</li>
      <li>三亚</li>
      <li>香港</li>
      <li>杭州</li>
      <li>广州</li>
      <li>成都</li>
      <li>深圳</li>
      <li>苏州</li>
      <li>厦门</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotCityList'
}
</script>

<style lang="stylus" scoped>
.hot-city-title
  font-size 0.24rem
  margin 0.48rem 0.3rem 0.24rem
.hot-city-list
  position relative
  overflow hidden
  z-index 0
  background-color #fff
  li
    width 33.3%
    height 0.9rem
    line-height 0.9rem
    font-size 0.28rem
    text-align center
    border-bottom 0.02rem solid #ddd
    margin-bottom -1px
    float left
    position relative
    z-index 10
    color #212121
  &:before
    width 33.33%
    content ''
    position absolute
    left 33.33%
    height 100%
    border-left 0.02rem solid #ddd
    border-right 0.02rem solid #ddd
</style>
