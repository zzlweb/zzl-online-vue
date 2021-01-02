// 表单数据处理
const echarts = require('echarts')

// lineChart
function getlineChartOption(lineData) {
  // console.log(lineData)
  const option = {
    legend: {
      icon: 'roundRect',
      show: false,
      itemWidth: 14,
      itemHeight: 2,
      itemGap: 10,
      borderRadius: 1,
      top: 0,
      right: 0,
      textStyle: {
        fontSize: 12,
        color: '#B9B9BA',
        fontWeight: 'bold',
        padding: [3, 0, 0, 5],
        lineHeight: 14
      }
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'transparent',
      padding: 0,
      confine: true,
      axisPointer: {
        lineStyle: {
          color: '#FFD500',
          type: 'dashed'
        }
      },
      formatter: function(params) {
        var itemDom = ''
        if (params && params.length > 0) {
          params.map(item => {
            const dotDom = `<div class="top-dot qualified-dot" style="background-color: ${item.color}"></div>`

            itemDom =
              itemDom +
              '<div class="common-item flex-col">' +
              dotDom +
              '<div class="bottom-value flex-row fill-flex"><div class="series-name">' +
              item.seriesName +
              '</div><div class="series-value fill-flex">' +
              item.data +
              ' w</div></div></div>'
          })
        }

        const res = `<div class='custom-tooltip flex-col'>
          <div class='time-title'>2020-09-25 ${params[0].axisValue}</div>
          <div class='fill-flex bottom-img-container flex-col'>${itemDom}</div>
        </div>`
        return res
      }
    },
    grid: {
      left: 40,
      top: 40,
      right: 40,
      bottom: 30,
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.2)'
        }
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
    }],
    yAxis: [{
      type: 'value',
      nameLocation: 'middle',
      splitNumber: 4,
      nameTextStyle: {
        color: '#rgba(255,255,255,0.3)',
        padding: [0, 0, 20, 0]
      },
      axisTick: {
        show: false
      },
      axisLine: {
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
    }],
    series: [{
      name: '报告数量',
      type: 'line',
      // symbol: 'none',
      symbolSize: 0.01,
      sampling: 'average',
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        normal: {
          // opacity: 0.32,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,170,255,0.50)'
          }, {
            offset: 1,
            color: 'rgba(0,170,255,0.00) '
          }], false)
        }
      },
      itemStyle: {
        normal: {
          color: '#ffffff',
          borderColor: '#ffffff',
          borderWidth: 2
        }
      },
      data: lineData.reportData
    }, {
      name: '影像数量',
      type: 'line',
      // symbol: 'none',
      symbolSize: 0.01,
      sampling: 'average',
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        normal: {
          // opacity: 0.4,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(2,247,236,0.5)'
          }, {
            offset: 1,
            color: 'rgba(2,247,236,0.15)'
          }], false)
        }
      },
      itemStyle: {
        normal: {
          color: '#01ECD5',
          borderColor: '#01ECD5',
          borderWidth: 2
        }
      },
      data: lineData.imageData
    }]
  }

  return option
}

// pieChart

function getpieChartOption(pieData) {
  const option = {
    legend: {
      show: false
    },
    grid: {
      left: '5%',
      top: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true
    },
    tooltip: {
      trigger: 'item',
      show: false,
      backgroundColor: 'rgba(14,48,45,0.9)',
      padding: [7, 10],
      textStyle: {
        fontSize: 12
      },
      formatter: '{b} : {c} ({d}%)'
    },
    series: [{
      type: 'pie',
      radius: [85, 150],
      center: ['50%', '50%'],
      roseType: 'area',
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [{
        value: pieData[0].value,
        name: pieData[0].name,
        itemStyle: {
          color: 'rgba(111,236,113,0.13)',
          borderColor: 'rgba(111,236,113,0.9)',
          borderWidth: 2
        }
      }, {
        value: pieData[1].value,
        name: pieData[1].name,
        itemStyle: {
          color: 'rgba(83,67,255,0.22)',
          borderColor: 'rgba(83,67,255,0.9)',
          borderWidth: 2
        }
      }, {
        value: pieData[2].value,
        name: pieData[2].name,
        itemStyle: {
          color: 'rgba(255,255,255,0.14)',
          borderColor: 'rgba(255,255,255,0.8)',
          borderWidth: 2
        }
      }, {
        value: pieData[3].value,
        name: pieData[3].name,
        itemStyle: {
          color: 'rgba(69,134,255,0.25)',
          borderColor: 'rgba(69,134,255,0.8)',
          borderWidth: 2
        }
      }, {
        value: pieData[4].value,
        name: pieData[4].name,
        itemStyle: {
          color: 'rgba(1,236,213,0.2)',
          borderColor: 'rgba(1,236,213,0.8)',
          borderWidth: 2
        }
      }]
    }]
  }

  return option
}

export default {
  getlineChartOption,
  getpieChartOption
}
