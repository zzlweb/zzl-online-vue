<template>
  <div id="app">
    <router-view v-if="flag" />

    <div v-else class="flex-col resize-container">
      <img src="./assets/svg/warning.svg" alt="">
      <div class="alert-text">设备暂不支持</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      flag: true
    }
  },
  watch: {
    screenWidth(val) {
      val < 1100 ? this.flag = false : this.flag = true
    }
  },
  mounted() {
    if (this.screenWidth < 1100) {
      this.flag = false
    }
    window.addEventListener('resize', () => {
      this.screenWidth = document.body.offsetWidth
    })
  }
}
</script>

<style lang="scss" scoped>
.resize-container{
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  .alert-text{
    height: 40px;
    line-height: 40px;
  }
}
</style>
