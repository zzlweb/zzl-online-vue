<template>
  <div class="home-container">
    <div class="home">
      <div class="gitConer-container">
        <GithubCorner />
      </div>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <div class="panel-item"><IndexOne /></div>
        </el-col>
      </el-row>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="panel-box flex-row"><SvgTwo /></div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="panel-box"><ClockThree /></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SvgTwo from './components/index2.vue'
import IndexOne from './components/index1.vue'
import ClockThree from './components/index3.vue'
import GithubCorner from './components/GithubCorner'
export default {
  name: 'Dashboard',
  components: {
    SvgTwo,
    ClockThree,
    IndexOne,
    GithubCorner
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding: 20px;
  height: 100%;
  position: relative;

  .gitConer-container {
    position: absolute;
    top: 0;
    right: 0;
  }

  .panel-item {
    height: 400px;
    margin-bottom: 30px;
    padding: 30px;
    box-shadow: 0px 0px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }

  .panel-box {
    height: 400px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
}
</style>
