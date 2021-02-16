<template>
  <div id="chartConainer" class="chart-container">
    <div class="item-container flex-row">
      <div class="left-container fill-flex felx-row"><ChartsOne class="fill-flex" /></div>
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
          <charts-two />
        </div>
      </div>
    </div>

    <div class="flex-row chart-box-two">
      <div class="item fill-flex"><charts-three /></div>
      <div class="item fill-flex"><china-map /></div>
    </div>
  </div>
</template>

<script>
import ChartsThree from './component/chartsThree'
import ChartsOne from './component/chartsOne'
import ChartsTwo from './component/chartsTwo'
import ChinaMap from './component/ChinaMap'
export default {
  components: {
    ChartsThree,
    ChinaMap,
    ChartsOne,
    ChartsTwo
  }

}
</script>

<style lang="scss" scoped>
.chart-container {
  min-height: calc(100vh - 50px);
  background-color: #23262b;
  overflow: hidden;

  #rightPieChart {
    background: transparent;
  }

  .item-container {
    height: 350px;
    margin: 20px 20px ;
    background: url("../../../assets/images/chartImg/liuliangjiance-bg.png")
      no-repeat center;
    border-radius: 4px;

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
        background: url("../../../assets/images/chartImg/pie-bg.png") top center
          no-repeat;
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

  .chart-box-two{
    .item{
      overflow: hidden;
    }
  }
}
</style>
