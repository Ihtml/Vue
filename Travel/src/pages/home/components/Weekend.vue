<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <a class="item-link" :href="item.linkUrl">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.weekend
  background #fff
.item-link
  display block
  width 100%
  height 100%
.title
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 37.09%
  .item-img
    width 100%
.item-info
  padding 0.1rem
  .item-title
    padding-right 1.4rem
    color #212121
    font-size 0.28rem
    line-height 0.48rem
    ellipsis()
  .item-desc
    padding-right 1.4rem
    color #616161
    font-size 0.24rem
    line-height 0.42rem
    ellipsis()
</style>
