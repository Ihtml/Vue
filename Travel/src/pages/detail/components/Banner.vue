<template>
  <div>
    <div>
      <span class="iconfont banner-icon">&#xe6dd;</span>
    </div>
    <common-gallary :imgs="imgs"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: []
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
</style>
