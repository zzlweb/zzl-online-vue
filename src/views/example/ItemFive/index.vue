<template>
  <div class="svg-page-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="panel-box flex-col">
          <div class="panel-content flex-row">
            <svg-one />
          </div>
          <copy-code :code="code1" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="panel-box flex-col">
          <div class="panel-content flex-row">123</div>
          <copy-code :code="code2" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CopyCode from './components/index'
import SvgOne from './components/svgOne'
export default {
  components: {
    CopyCode,
    SvgOne
  },
  data() {
    return {
      code1: `  <div>
    <div class="loader loader--style1" title="0">
      <svg
        id="loader-1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="40px"
        height="40px"
        viewBox="0 0 40 40"
        enable-background="new 0 0 40 40"
        xml:space="preserve"
      >
        <path
          opacity="0.2"
          fill="#000"
          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
        />
        <path
          fill="#000"
          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  </div>
  <style lang="scss" scoped>
  .loader{
    margin: 0 0 2em;
    height: 100px;
    width: 20%;
    text-align: center;
    padding: 1em;
    margin: 0 auto 1em;
    display: inline-block;
    vertical-align: middle;
  }

  svg path,
  svg rect{
    fill: #FF6700;
  }
  </style>
    `,
      code2: 'Just Mock'
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-page-container {
  padding: 20px 20px 0px 20px;

  .panel-box {
    justify-content: space-between;
    margin-bottom: 50px;
    border: 1px solid #ccc;

    &:hover {
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
    }

    .panel-content {
      min-height: 100px;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
