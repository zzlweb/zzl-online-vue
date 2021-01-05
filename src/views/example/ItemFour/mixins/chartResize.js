import * as echarts from 'echarts'
import _ from 'lodash'
export default {
  data() {
    return {
      doms: []
    }
  },
  computed: {
    chartResize() {
      return _.throttle(() => {
        return this.doms.forEach(dom => {
          dom && dom.resize()
        })
      }, 400)
    }
  },
  methods: {
    initChart() {
      this.doms.forEach(dom => {
        dom && echarts.init(dom)
      })
    }
  },
  mounted() {
    this.doms = [this.$refs.charts]
    // console.log(this.doms, '123')
    this.initChart()
    window.addEventListener('resize', this.chartResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.chartResize)
  }
}
