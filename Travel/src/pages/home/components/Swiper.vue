<template>
  <div class="wrapper">
    <swiper v-if="showSwiper" :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        // swiper下的圆点
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  // touch-action none
  overflow hidden
  width 100%
  height 0
  padding-bottom 27.25%
  background #eee
  .swiper-img
    width 100%
</style>
