<template>
<div class="city-alphabet">
  <h2 class="title">字母排序</h2>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" @click="handleLetterClick">
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
    handleLetterClick (e) {
      console.log('letter click')
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size: .24rem;
  margin: .24rem .3rem;
.list
  position: relative;
  overflow: hidden;
  z-index: 0;
  background-color: #fff;
  padding: .3rem 0;
.item
  width: 16.66%;
  height: .9rem;
  line-height: .9rem;
  font-size: .28rem;
  text-align: center;
  float: left;
  position: relative;
  z-index: 10;
  color: #212121;
</style>
