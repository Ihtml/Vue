<template>
  <div class="header">
    <h1 class="header-title">城市选择</h1>
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header
  position relative
  overflow hidden
  height 0.68rem
  line-height 0.68rem
  text-align center
  color #fff
  background $bgColor
  font-size 0.32rem
  .header-title
    margin 0 1rem
    line-height 0.88rem
    font-size 0.32rem
    text-align center
    color #fff
    ellipsis()
  .header-back
    position absolute
    top 0
    left 0
    width 0.8rem
    height 0.88rem
    line-height 0.88rem
    text-align center
    font-size 0.36rem
    font-weight bold
    color #fff
</style>
