<template>
  <div class="chart-container flex-col">
    <div class="item-container flex-row">
      <div class="left-container fill-flex">
        <div id="chart-box" />
      </div>
      <div class="right-container">
        <div class="right-pie-chart">
          <div class="center-info-container flex-col">
            <div class="common-info-item">
              <div class="top-label">当前使用量</div>
              <div class="bototm-value">123,234</div>
            </div>
            <div class="common-info-item">
              <div class="top-label">总存储量</div>
              <div class="bototm-value">263,780</div>
            </div>
          </div>
          <div id="rightPieChart" class="chart-container" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import drawChart from './utils/charts1.js'

export default {
  data() {
    return {
      lineData: {
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
      },
      pieData: [
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
    }
  },
  mounted() {
    this.drawLine()
    this.drawPieChart()
  },
  methods: {
    drawLine() { // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('chart-box'))
      // 绘制图表
      const lineChartOption = drawChart.getlineChartOption(this.lineData)

      myChart.setOption(lineChartOption)
    },
    drawPieChart() {
      const pieChart = echarts.init(
        document.getElementById('rightPieChart')
      )
      const pieChartOption = drawChart.getpieChartOption(this.pieData)
      pieChart.setOption(pieChartOption)
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  width: 100%;
  height: 100%;
  background-color:  #23262b;

  #rightPieChart {
    background: transparent;
  }

  .item-container {
    height: 350px;
    margin: 20px;
    background: url("../../../assets/images/chartImg/liuliangjiance-bg.png") no-repeat center;
    border-radius: 4px;

    .left-container {
      #chart-box {
        width: 100%;
        height: 100%;
      }
    }

    .right-pie-chart {
      flex: 0 0 390px;
      width: 390px;
      height: 100%;
      position: relative;
      background: transparent;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 1px;
        height: 100px;
        transform: translateY(-50%);
        background-color: rgba(255, 255, 255, 0.3);
      }

      .center-info-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 170px;
        height: 170px;
        align-items: center;
        justify-content: center;
        background: url("../../../assets/images/chartImg/pie-bg.png") top center no-repeat;
        background-size: 100% 100%;

        .common-info-item {
          &:nth-child(n + 2) {
            margin-top: 14px;
          }
        }

        .top-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 16px;
          text-align: center;
        }

        .bototm-value {
          font-size: 20px;
          color: #01ecd5;
          line-height: 26px;
          margin-top: 5px;
          font-weight: bold;
          text-align: center;
        }
      }
    }
  }
}
</style>
