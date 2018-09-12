<template>
  <div class="hot-city">
    <div class="hot-city-title">热门城市</div>
    <ul class="hot-city-list">
      <li v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotCityList',
  props: {
    hot: Array
  },
  methods: {
    handleCityClick (city) {
      this.$emit('changeCity', city)
    }
  }
}
</script>

<style lang="stylus" scoped>
.hot-city-title
  font-size 0.24rem
  line-height 0.72rem
  padding-left 0.3rem
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
