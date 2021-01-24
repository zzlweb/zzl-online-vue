<template>
  <div id="chart-box" :style="{ height: height, width: width}" />
</template>

<script>
import echarts from 'echarts/lib/echarts'
import resize from '../mixins/resize'
import drawChart from '../utils/charts1.js'
const pieData = [
  {
    name: 'CT',
    value: 78
  },
  {
    name: 'MR',
    value: 36
  },
  {
    name: 'PET-CT',
    value: 22
  },
  {
    name: 'DR',
    value: 95
  },
  {
    name: 'RT',
    value: 33
  }
]
export default {
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'chart-box'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawPieChart()
    })
  },
  beforeDestroy() {
    if (!this.myChart) {
      return
    }
    this.myChart.dispose()
    this.myChart = null
  },
  methods: {
    drawPieChart() {
      // 绘制图表
      this.myChart = echarts.init(this.$el)
      const lineChartOption = drawChart.getpieChartOption(pieData)
      this.myChart.setOption(lineChartOption)
    }
  }
}
</script>

