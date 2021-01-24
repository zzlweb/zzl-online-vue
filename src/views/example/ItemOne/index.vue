<template>
  <div ref="mapContainer" class="map-container">
    <div id="NetWork" class="title_container">
      <HeaderTitle>
        <template #BigTitle>全球网络</template>
      </HeaderTitle>
    </div>

    <div id="map-apart" class="map-apart">
      <!-- <div class="out-layer" />
      <div class="middle-layer" />
      <div class="inside-layer" /> -->

      <div class="china_tag">
        <div class="tagItem Wuhan">
          <div class="Tag">Wuhan</div>
          <div class="content">
            <div class="title">中国&nbsp;·&nbsp;武汉</div>
            <div class="address">地址：上海嘉定区城北路 2258 号，201807</div>
            <div class="phone">电话：+86 (21) 67076888</div>
            <div class="email">传真：+86 (21) 67076889</div>
            <div class="get_line">获取路线</div>
          </div>
        </div>

        <div class="tagItem shanghai">
          <div class="Tag">ShangHai</div>
          <div class="content">
            <div class="title">中国&nbsp;·&nbsp;上海</div>
            <div class="address">全球&nbsp;&nbsp;总部</div>
          </div>
        </div>
      </div>

      <!-- 韩国标签 -->
      <div class="Korea_tag">
        <div class="tagItem shouer">
          <div class="Tag">首尔</div>
          <div class="content">
            <div class="title">韩国&nbsp;·&nbsp;首尔</div>
            <div class="address">韩国总部</div>
          </div>
        </div>
      </div>

      <!-- 日本标签 -->
      <div class="Japan_tag">
        <div class="tagItem DongJing">
          <div class="Tag">东京</div>
          <div class="content">
            <div class="title">日本&nbsp;·&nbsp;东京</div>
            <div class="address">日本总部</div>
          </div>
        </div>
      </div>

      <!-- 马来西亚标签 -->
      <div class="Malaysia_tag">
        <div class="tagItem jilongpo">
          <div class="Tag">吉隆坡</div>
          <div class="content">
            <div class="title">马来西亚&nbsp;·&nbsp;吉隆坡</div>
            <div class="address">亚太区 总部</div>
          </div>
        </div>
      </div>

      <!-- 澳大利亚标签 -->
      <div class="Australia_tag">
        <div class="tagItem moerben">
          <div class="Tag">墨尔本</div>
          <div class="content">
            <div class="title">澳大利亚&nbsp;·&nbsp;墨尔本</div>
            <div class="address">澳大利亚及新西兰总部</div>
          </div>
        </div>
      </div>

      <!-- 美国标签 -->
      <div class="us_tag">
        <div class="tagItem XiusiDun">
          <div class="Tag">Houston</div>
          <div class="content">
            <div class="title">USA&nbsp;·&nbsp;Houston</div>
            <div class="address">中央研究院美国分院</div>
            <div class="phone">北美研发中心</div>
            <div class="email">北美生产基地</div>
          </div>
        </div>
      </div>

      <!-- 波兰标签 -->
      <div class="Poland_tag">
        <div class="tagItem huasha">
          <div class="Tag">Warsaw</div>
          <div class="content">
            <div class="title">波兰&nbsp;·&nbsp;华沙</div>
            <div class="address">中东欧区域总部</div>
          </div>
        </div>
      </div>

      <!-- 迪拜标签 -->
      <div class="Dibai_tag">
        <div class="tagItem dibai">
          <div class="Tag">dubai</div>
          <div class="content">
            <div class="title">阿联酋&nbsp;·&nbsp;迪拜</div>
            <div class="address">中东及非洲区域总部</div>
          </div>
        </div>
      </div>

      <!-- 埃及标签 -->
      <div class="Egypt_tag">
        <div class="tagItem kailuo">
          <div class="Tag">Cairo</div>
          <div class="content">
            <div class="title">埃及&nbsp;·&nbsp;开罗</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '@/components/CommonTitle/CommonHeaderTitle'
import { define } from './utils/configMaptwo.js'
import { Runtime, Inspector } from './utils/runtime.js'

export default {
  components: {
    HeaderTitle
  },
  data() {
    return {
      // TimeId: "",
      screenWidth: document.documentElement.clientWidth, // 屏幕宽度
      screenHeight: document.documentElement.clientHeight, // 屏幕高度
      text: '中国&nbsp;·&nbsp;上海',
      id: '',
      // json: "",
      options: [
        {
          value: '中国&nbsp;·&nbsp;上海',
          label: '中国·上海'
        },
        {
          value: '中国&nbsp;·&nbsp;武汉',
          label: '中国·武汉'
        },
        {
          value: '日本&nbsp;·&nbsp;东京',
          label: '日本·东京'
        },
        {
          value: '韩国&nbsp;·&nbsp;首尔',
          label: '韩国·首尔'
        },
        {
          value: '马来西亚&nbsp;·&nbsp;吉隆坡',
          label: '马来西亚·吉隆坡'
        },
        {
          value: '阿联酋&nbsp;·&nbsp;迪拜',
          label: '阿联酋·迪拜'
        },
        {
          value: '埃及&nbsp;·&nbsp;开罗',
          label: '埃及·开罗'
        },
        {
          value: '美国&nbsp;·&nbsp;休斯敦',
          label: '美国·休斯敦'
        },
        {
          value: '澳大利亚&nbsp;·&nbsp;墨尔本',
          label: '澳大利亚·墨尔本'
        },
        {
          value: '波兰&nbsp;·&nbsp;华沙',
          label: '波兰·华沙'
        }
      ]
    }
  },
  computed: {},
  watch: {
    screenWidth() {
      // 监听屏幕宽度变化
      this.handleAside()
    },
    screenHeight() {
      // 监听屏幕高度变化
      this.handleAside()
    }
  },
  mounted() {
    this.handleAside()
    const runtime = new Runtime()
    runtime.module(
      define,
      Inspector.into(document.getElementById('map-apart'))
    )
    window.onresize = () => {
      // 定义窗口大小变更通知事件
      this.screenWidth = document.documentElement.clientWidth // 窗口宽度
      this.screenHeight = document.documentElement.clientHeight // 窗口高度
    }
    document.querySelector('.observablehq').style.display = 'block'
  },
  methods: {
    onChange(value) {
      this.text = value[0]
    },
    handleAside() {
      const Dom = document.querySelector('#NetWork').querySelector('.BigTitle')
      // eslint-disable-next-line no-unused-vars
      this.Leftwidth = Dom.offsetLeft
      const DragDom = document.querySelector('#map-apart')
      DragDom.style.marginLeft = this.Leftwidth + 'px'
    },
    getPopupContainer() {
      return this.$refs.mapContainer
    }
  }
}
</script>

<style lang="scss" scoped>
.map-container {
  overflow-x: auto;
  overflow-y: hidden;
  height: calc( 100vh - 50px);
  position: relative;
  background: rgba(12, 12, 12, 0.102);
  padding: 50px 0 50px 50px;

  .map-apart {
    height: 1200px;
    width: 1440px;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;

    ::v-deep .observablehq{
      display: none;

      &:nth-child(1){
        display: block;
      }
    }

    canvas {
      position: absolute;
      left:0;
      width: 1800px !important;
    }

    .china_tag,
    .us_tag,
    .Korea_tag,
    .Japan_tag,
    .Malaysia_tag,
    .Australia_tag,
    .Poland_tag,
    .Egypt_tag {
      width: 100%;
      height: 100%;
      background-color: transparent;
      position: absolute;

      &.active {
        z-index: 10;
      }
    }
  }

  .tagItem {
    width: 970px;
    height: 40px;
    position: absolute;
    z-index: 2;

    &.active_item {
      .Tag {
        width: 100px;
        height: 50px;
        line-height: 50px;
        transition: all 0.3s;
      }
    }

    &.reactive {
      // 改变标签大小
      .Tag {
        width: 100px;
        height: 50px;
        line-height: 50px;
        transition: all 0.3s;
      }

      .Tag::after {
        opacity: 1;
        transition: all 0.3s;
      }

      .content {
        opacity: 1;
        transition: all 0.3s;
      }
    }

    .Tag {
      width: 90px;
      height: 40px;
      box-sizing: border-box;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-weight: bold;
      background-color: #000;
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      transition: all 0.5s;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 970px;
        height: 1px;
        background-color: #000;
        right: 0;
        opacity: 0;
      }
    }
    .content {
      top: 10px;
      text-align: left;
      position: absolute;
      left: 0px;
      width: 400px;
      color: #000;
      opacity: 0;
      transition: all 0.3s;

      .title {
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
        height: 24px;
        line-height: 24px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .address,
      .phone,
      .email {
        font-size: 16px;
        color: #666666;
        letter-spacing: 0;
        height: 24px;
        line-height: 24px;
      }

      .get_line {
        font-size: 16px;
        color: #00485e;
        line-height: 16px;
        margin-top: 36px;
      }
    }

    &.Wuhan {
      left: 40px;
      top: 460px;

      .Tag {
        // border-bottom: 4px solid transparent;
        // border-image: url("../../assets/svg/sekuai3.svg") 3.4 4 round;
        opacity: 0;
      }

      &.active {
        z-index: 4;
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }

    &.shanghai {
      left: 150px;
      top: 540px;

      .Tag {
        // border-bottom: 4px solid #0091bd;
        opacity: 0;
      }

      &.active {
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }

    &.XiusiDun {
      left: 80px;
      top: 400px;

      .Tag {
        // border-image: url("../../assets/svg/sekuai3.svg") 3.4 4 round;
        // border-bottom: 4px solid transparent;
        opacity: 0;
      }

      &.active {
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }

    &.shouer {
      left: 220px;
      top: 170px;

      .Tag {
        // border-image: url("../../assets/svg/sekuai3.svg") 3.4 4 round;
        // border-bottom: 4px solid transparent;
        opacity: 0;
      }

      &.active {
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }

    &.DongJing {
      left: 40px;
      top:430px;

      .Tag {
        // border-image: url("../../assets/svg/sekuai3.svg") 3.4 4 round;
        // border-bottom: 4px solid transparent;
        opacity: 0;
      }

      &.active {
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }

    &.jilongpo {
      left: 0px;
      top: 450px;

      .Tag {
        // border-image: url("../../assets/svg/sekuai3.svg") 3.4 4 round;
        // border-bottom: 4px solid transparent;
        opacity: 0;
      }

      &.active {
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }

    &.moerben {
      left: 30px;
      top: 500px;

      .Tag {
        opacity: 0;
      }

      &.active {
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }

    &.huasha {
      left: 30px;
      top: 500px;

      .Tag {
        opacity: 0;
      }

      &.active {
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }

    &.kailuo {
      left: 30px;
      top: 700px;

      .Tag {
        opacity: 0;
      }

      &.active {
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }

    &.dibai {
      left: 170px;
      top: 500px;

      .Tag {
        opacity: 0;
      }

      &.active {
        // 改变标签大小
        .Tag {
          opacity: 1;
        }
      }

      &.active_item {
        & > .Tag::after {
          opacity: 1;
        }
        & > .content {
          opacity: 1;
        }
      }
    }
  }
   @media screen and (max-width: 1500px) {
      .map-apart {
    height: 1000px;
    width: 1240px;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;

    canvas {
      position: absolute;
      left:0;
      width: 1600px !important;
    }
  }
    .tagItem {
      width: 750px;
      .Tag::after {
        width: 750px;
      }

      &.Wuhan {
        left: 300px;
        top: 480px;
      }
      &.shanghai {
        left: 350px;
        top: 550px;
      }
      &.shouer{
        left:400px;
        top:280px;
      }

      &.DongJing{
        left:300px
      }

      &.huasha{
        left: 400px;
      }

      &.XiusiDun {
        top: 500px;
        left: 150px;
      }
      &.jilongpo {
        left: 50px;
      }
      &.moerben {
        top: 500px;
        left:300px;
      }
      &.huasha {
        top: 600px;
      }
      &.kailuo {
        top: 600px;
        left: 200px;
      }
      &.dibai {
        top: 400px;
      }
    }
  }
}
</style>
