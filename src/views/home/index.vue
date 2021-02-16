<template>
  <div class="home-container">
    <div class="home">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <div class="panel-item">345</div>
        </el-col>
      </el-row>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="panel-box">1</div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="panel-box">456</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding: 20px;
  height: 100%;
  .panel-item {
    height: 400px;
    margin-bottom: 30px;
  }

  .panel-box {
    height: 400px;
    box-shadow: 0px 0px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
}
</style>
