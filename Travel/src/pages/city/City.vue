<template>
  <div class="city">
    <city-header></city-header>
    <city-tab @showAbroad="showAbroad"></city-tab>
    <city-list :cities="cities" :hot="hotCities" :class="{hide: isShowAbroad}"></city-list>
    <city-list :cities="cities" :hot="hotCities" :class="{hide: !isShowAbroad}"></city-list>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityTab from './components/Tab'
import HotCity from './components/HotCityList'
import CityAlphabet from './components/Alphabet'
import CityList from './components/List'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityTab,
    HotCity,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      isShowAbroad: false
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    },
    showAbroad (flag) {
      if (flag) {
        this.isShowAbroad = true
      } else {
        this.isShowAbroad = false
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
.city
  background #f5f5f5
  line-height 1
  color #212121
  font-size 0.28rem
.hide
  display none
</style>
