<template>
  <div id="chart-three" :style="{height: height}" />
</template>

<script>
import echarts from 'echarts/lib/echarts'
import resize from '../mixins/resize'
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
  dataArr: [
    [6.7, 6, 10.3, 7.9, 7.3, 7, 5],
    [4, 5.2, 5.8, 4.5, 5.9, 3.8, 4]
  ]
}
export default {
  mixins: [resize],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '370px'
    }
  },
  data() {
    return {
      myChart: null,
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
              fontSize: 12,
              color: 'rgba(255,255,255,0.3)',
              lineHeight: 14
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
              fontSize: 12,
              color: 'rgba(255,255,255,0.3)'
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
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#D0BF60'
                  },
                  {
                    offset: 1,
                    color: 'rgba(41,52,85,0)'
                  }
                ],
                false
              )
            },
            data: [6.7, 6, 10.3, 7.9, 7.3, 7, 5],
            sampling: 'average',
            lineStyle: {
              width: 1
            },
            itemStyle: {
              color: '#D0BF60',
              borderColor: '#D0BF60',
              borderWidth: 1
            }
          },
          {
            name: '远程影像',
            type: 'line',
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#81E4FF'
                  },
                  {
                    offset: 1,
                    color: 'rgba(41,52,85,0)'
                  }
                ],
                false
              )
            },
            data: [4, 5.2, 5.8, 4.5, 5.9, 3.8, 4],
            sampling: 'average',
            lineStyle: {
              width: 1
            },
            itemStyle: {
              color: '#81E4FF',
              borderColor: '#81E4FF',
              borderWidth: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart()
    })
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$el)
      // 绘制图表
      this.myChart.setOption(this.option)
    }
  }
}
</script>

<style lang="scss" scoped>
#chart-three {
  margin: 50px 0 0 50px;
}
</style>
