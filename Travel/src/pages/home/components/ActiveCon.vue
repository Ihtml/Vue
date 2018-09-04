<template>
  <div class="active-con border-topbottom">
    <ul class="lists">
      <li class="item border-right"></li>
      <li class="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeActiveCon'
}
</script>

<style lang="stylus" scoped>
.active-con
  width 100%
  margin-top 0.2rem
  background-color #fff
  dispaly flex
.lists
  display flex
.item
  flex 1
  width 0
  height 1.4rem
  line-height 1.4rem
  color #212121
  font-size 0.28rem
.item:first-child
  background url('http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png') center center no-repeat // img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png) center center no-repeat;
  background-size auto 100%
.item:last-child
  background url('http://img1.qunarzz.com/piao/fusion/1809/13/d6a5711a7dd07402.png') center center no-repeat // img1.qunarzz.com/piao/fusion/1809/13/d6a5711a7dd07402.png) center center no-repeat;
  background-size auto 100%
</style>
