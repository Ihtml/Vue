<template>
  <div class="city">
    <city-header></city-header>
    <city-tab></city-tab>
    <hot-city></hot-city>
    <city-alphabet :cities="cities"></city-alphabet>
    <city-list :cities="cities"></city-list>
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
      letter: ''
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
</style>
