<template>
  <div id="chart-box" :style="{ height: height, width: width}" />
</template>

<script>
import echarts from 'echarts/lib/echarts'
import resize from '../mixins/resize'
import drawChart from '../utils/charts1.js'
const lineData = {
  axisData: [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00'
  ],
  reportData: [
    36,
    42,
    32,
    22,
    42,
    41,
    52,
    37,
    42,
    37,
    28,
    31,
    41,
    36,
    56
  ],
  imageData: [34, 17, 21, 18, 16, 19, 7, 12, 14, 15, 7, 6, 12, 8, 38]
}
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
      this.drawLine()
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
    drawLine() {
      // 绘制图表
      this.myChart = echarts.init(this.$el)
      const lineChartOption = drawChart.getlineChartOption(lineData)
      this.myChart.setOption(lineChartOption)
    }
  }
}
</script>

