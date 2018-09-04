<template>
  <div class="icons">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="wrap">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false,
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-pagination
  bottom 6px
.icons >>> .swiper-pagination-bullet
  width 0.12rem
  height 0.12rem
.icons >>> .swiper-pagination-bullet-active
  background rgba(0, 175, 190, 0.8)
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
  width 100%
  overflow hidden
.icons
  margin-top 0.1rem
  background #fff
.wrap
  display flex
  flex-wrap wrap
.icon
  width 25%
  height 0
  padding-bottom 21%
  overflow hidden
  .icon-img
    box-sizing border-box
    width 1.1rem
    height 1.1rem
    margin 0.1rem auto 0
    .icon-img-content
      display block
      margin 0 auto
      height 100%
      width 100%
  .icon-desc
    height 0.44rem
    line-height 0.44rem
    text-align center
    color $darkTextColor
    ellipsis()
</style>
