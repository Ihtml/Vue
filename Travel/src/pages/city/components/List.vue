<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <ul class="item-list">
          <li class="item" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // better-scroll提供的方法，滚动到对应DOM元素的位置
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.title
  font-size 0.24rem
  margin 0.24rem 0.3rem
.item-list
  position relative
  overflow hidden
  z-index 0
  background-color #fff
  &:before
    content ''
    position absolute
    width 25%
    left 25%
    height 100%
    border-left 0.02rem solid #ddd
    border-right 0.02rem solid #ddd
  &:after
    content ''
    position absolute
    width 10%
    left 75%
    height 100%
    border-left 0.02rem solid #ddd
    border-right 0
  .item
    width 25%
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
ellipsis()
</style>
