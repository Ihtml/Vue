<template>
  <div class="tab">
    <ul>
      <li :class="{active: isInBorder}" @click.prevent="switchInBorder">境内</li>
      <li :class="{active: !isInBorder}" @click.prevent="switchAbroad">境外·港澳台</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityTab',
  data () {
    return {
      isInBorder: true
    }
  },
  methods: {
    switchInBorder () {
      this.$emit('showAbroad', false)
      if (this.isInBorder) {
      } else {
        this.isInBorder = true
      }
    },
    switchAbroad () {
      this.$emit('showAbroad', true)
      if (this.isInBorder) {
        if (this.isInBorder) {
          this.isInBorder = false
        } else {
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab
  height 0.4rem
  line-height 0.4rem
  background-color #00bcd4
  padding 0.2rem 1rem
  color #fff
  ul
    border 1px solid #fff
    border-radius 0.03rem
    zoom 1
    overflow hidden
    li
      width 50%
      float left
      text-align center
      background-color #00bcd4
      font-size 0.28rem
      color #fff
    li.active
      background-color #fff
      color #00bcd4
</style>
