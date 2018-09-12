<template>
  <div class="city-alphabet">
    <h2 class="title">字母排序</h2>
    <ul class="list">
      <li class="item" v-for="item of letters" :key="item" @click="handleLetterClick(item)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.cities) {
        if (this.cities.hasOwnProperty(i)) {
          letters.push(i)
        }
      }
      return letters
    }
  },
  data () {
    return {}
  },
  methods: {
    handleLetterClick (letter) {
      this.$emit('change', letter)
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 0.24rem
  margin 0.24rem 0.3rem
.list
  position relative
  overflow hidden
  z-index 0
  background-color #fff
  padding 0.3rem 0
.item
  width 16.66%
  height 0.9rem
  line-height 0.9rem
  font-size 0.28rem
  text-align center
  float left
  position relative
  z-index 10
  color #212121
</style>
