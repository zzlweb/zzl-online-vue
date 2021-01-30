<template>
  <div class="home-container">
    <div class="home">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="panel-box">123</div>
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
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding: 20px;
  height: 100%;

  .panel-box{
    height: 400px;
    border: 1px solid#d8dce5;
  }
}
</style>
