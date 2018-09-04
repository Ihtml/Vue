<template>
  <div class="list">
    <ul class="listitem border-top">
      <li class="item border-right">
        <span class="iconfont icon-dingwei">&#xe6d1;</span>
        定位失败
      </li>
      <li class="item">
        <span class="iconfont icon-diqiu">&#xe642;</span>
        玩水季
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeListItem'
}
</script>

<style lang="stylus" scoped>
.list
  background #fff
.listitem
  display flex
.item
  flex 1
  overflow hidden
  width 0
  height 0.98rem
  font-size 0.28rem
  color #212121
  line-height 0.98rem
  text-align center
</style>
