<template>
  <div class="chart-one-container">
    <div class="chart-box flex-col">
      <div class="title-box flex-row">
        <span class="left">远程服务统计</span><span
          class="right"
        >共 <span style="color: white">0</span> 个远程服务</span>
      </div>
      <div id="chart" class="fill-flex" />
    </div>
  </div>
</template>

<script>
const echarts = require('echarts')
const lineData = {
  axisData: [
    '2020-09-14',
    '2020-09-18',
    '2020-09-22',
    '2020-09-26',
    '2020-09-30',
    '2020-10-04',
    '2020-10-08'
  ],
  dataArr: [[6.7, 6, 10.3, 7.9, 7.3, 7, 5], [4, 5.2, 5.8, 4.5, 5.9, 3.8, 4]]
}
export default {
  data() {
    return {
      option: {
        tooltip: {
          // alwaysShowContent: true,
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#4586FF'
            }
          }
        },
        // 设置图标图例
        legend: {
          itemWidth: 14,
          itemHeight: 4,
          itemGap: 48,
          borderRadius: 1,
          top: 10,
          textStyle: {
            fontSize: 12,
            color: '#B9B9BA',
            fontWeight: 'bold',
            padding: [3, 0, 0, 5],
            lineHeight: 14
          }
        },
        // 设置图区域
        grid: {
          left: 15,
          top: 50,
          right: 20,
          bottom: 30,
          containLabel: true
        },
        // 设置X轴
        xAxis: [
          {
            type: 'category',
            // 两边留白
            boundaryGap: true,
            nameGap: 10,
            // 坐标轴线相关设置
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.2)'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 14
              }
            },
            data: lineData.axisData
          }
        ],
        // 设置Y轴
        yAxis: [
          {
            nameLocation: 'middle',
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.2)'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: 'rgba(255,255,255,0.3)'
              }
            },
            splitLine: {
              type: 'dashed',
              lineStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            }
          }
        ],
        series: [
          {
            name: '远程门诊',
            type: 'line',
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#D0BF60'
              }, {
                offset: 1,
                color: 'rgba(41,52,85,0)'
              }], false)
            },
            data: [6.7, 6, 10.3, 7.9, 7.3, 7, 5],
            sampling: 'average',
            lineStyle: {
              normal: {
                width: 1
              }
            },
            itemStyle: {
              normal: {
                color: '#D0BF60',
                borderColor: '#D0BF60',
                borderWidth: 1
              }
            }
          },
          {
            name: '远程影像',
            type: 'line',
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#81E4FF'
              }, {
                offset: 1,
                color: 'rgba(41,52,85,0)'
              }], false)
            },
            data: [4, 5.2, 5.8, 4.5, 5.9, 3.8, 4],
            sampling: 'average',
            lineStyle: {
              normal: {
                width: 1
              }
            },
            itemStyle: {
              normal: {
                color: '#81E4FF',
                borderColor: '#81E4FF',
                borderWidth: 1
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.drawChart()
  },
  methods: {
    generateSeries(data) {

    },
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('chart'))
      // 绘制图表
      myChart.setOption(this.option)
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-one-container{
  .chart-box {
  width: 689px;
  height: 377px;
  background: rgb(22, 26, 24);
  border-radius: 4px;
  border-radius: 4px;
  margin: 50px auto;
  padding: 0 10px;
  box-sizing: border-box;
  .title-box {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    color: #4586ff;
    border-bottom: 1px dotted rgba(255, 255, 255, 0.3);

    .left {
      margin-right: 20px;
      font-weight: bold;
    }
  }
}
}

</style>
