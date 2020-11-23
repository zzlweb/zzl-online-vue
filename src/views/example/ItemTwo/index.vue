<template>
  <div class="container-two flex-col">
    <div ref="newContainer" class="new-container">
      <CommonHeaderTitle>
        <template #BigTitle>新闻</template>
        <template
          #right
        ><div class="flex-row" @click="handleClick('/NewsActiveInside')">
          更多资讯
          <div class="iconfont icon-look_more" /></div></template>
      </CommonHeaderTitle>

      <div
        ref="stripOuter"
        class="content-apart strip-outer flex-row"
        data-hover
      >
        <div class="strip-inner">
          <div class="draggable" />
          <div class="strip flex-row">
            <div
              v-for="item in itemArr"
              :key="item.id"
              class="item strip__item"
            >
              <div class="img-container img-inner">
                <img :src="item.url" draggable="false">
              </div>
              <div class="first-title flex-row">
                <div class="left">/&nbsp;{{ item.index }}</div>
                <div class="right">{{ item.title_one }}</div>
              </div>

              <div class="second-title">{{ item.title_two }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 鼠标部分 -->
    <div ref="cursor" class="cursor">
      <div class="cursor__inner cursor__inner--dot">Drag</div>
    </div>
  </div>
</template>

<script>
import CommonHeaderTitle from '@/components/CommonTitle/CommonHeaderTitle'
import CursorFx from './utils/CursorChange.js'
import Strip from './utils/DragImg.js'

export default {
  components: {
    CommonHeaderTitle
  },
  data() {
    return {
      screenWidth: document.documentElement.clientWidth, // 屏幕宽度
      itemArr: [
        {
          id: 1,
          url: require('@/assets/images/迪拜会议海报.png'),
          title_one: '联影首秀Arab Health',
          title_two:
            '1月27-30日，全球u医疗器械行业顶级盛会之一Arab Health在迪拜拉开帷幕，来自60多个国家和地区的4000多家企业参与其中。联影首次携PET-CT、PET/MR、MR、CT、DR等全线产品参展。',
          index: '01'
        },
        {
          id: 2,
          url: require('@/assets/images/zhagenmeiguo.png'),
          title_one: '中国“智”造扎根美国',
          title_two:
            '2019年12月1-6日，联影医疗技术集团有限公司（以下简称“联影”）携全线产品及最新创新成果，亮相全球放射学界规模最大、最能代表未来技术趋势和行业发展方向的医学盛会——第8届RSNA展。',
          index: '02'
        },
        {
          id: 3,
          url: require('@/assets/images/华盛顿医学院.png'),
          title_one: '联影首秀Arab Health',
          title_two:
            '1月27-30日，全球u医疗器械行业顶级盛会之一Arab Health在迪拜拉开帷幕，来自60多个国家和地区的4000多家企业参与其中。联影首次携PET-CT、PET/MR、MR、CT、DR等全线产品参展。',
          index: '03'
        },
        {
          id: 4,
          url: require('@/assets/images/穿越雪线@2x.png'),
          title_one: '联影首秀Arab Health',
          title_two:
            '1月27-30日，全球u医疗器械行业顶级盛会之一Arab Health在迪拜拉开帷幕，来自60多个国家和地区的4000多家企业参与其中。联影首次携PET-CT、PET/MR、MR、CT、DR等全线产品参展。',
          index: '04'
        }
      ]
    }
  },
  watch: {
    screenWidth() {
      // 监听屏幕宽度变化
      this.handleAside()
    }
  },
  mounted() {
    this.release()
    this.drag()
    this.handleAside()
  },
  methods: {
    drag() {
      const strip = new Strip(this.$refs.stripOuter)
      console.log(strip)
    },
    release() {
      const cursor = new CursorFx(this.$refs.cursor)
      const AllItem = document.querySelectorAll('[data-hover]')
      AllItem.forEach((item) => {
        // eslint-disable-next-line no-unused-vars
        item.addEventListener('mouseenter', (item) => cursor.enter())
        // eslint-disable-next-line no-unused-vars
        item.addEventListener('mouseover', (item) => cursor.enter())
        item.addEventListener('mouseleave', () => cursor.leave())
        item.addEventListener('click', () => cursor.click())
      })
    },
    handleAside() {
      const Dom = document
        .querySelector('.main-container')
        .querySelector('.title-container')
      // eslint-disable-next-line no-unused-vars
      this.Leftwidth = Dom.offsetLeft + 45
      const DragDom = document
        .querySelector('.strip-outer')
        .querySelector('.item')
      DragDom.style.marginLeft = this.Leftwidth + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
// 鼠标部分
.cursor__inner {
  z-index: 9999;
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  // mix-blend-mode:difference;
  border-radius: 50%;
}

.cursor__inner--dot {
  width: 80px;
  height: 80px;
  background: #000;
  text-align: center;
  line-height: 80px;
  color: #ffffff;
}
.new-container {
  width: 100%;
  background-color: #fff;

  >>> .title-container {
    margin: 0px auto 100px;
  }

  .content-apart {
    cursor: none;
    position: relative;
    width: 100%;

    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: none;

    .draggable {
      position: absolute;
      height: 100%;
      width: 100%;
      position: absolute;
      cursor: grab !important;
    }

    .draggable:active {
      cursor: grabbing !important;
    }

    .strip-inner {
      width: fit-content;
      position: relative;
      top: 0;
      height: 100%;
    }

    .strip {
      height: 100%;
      width: fit-content;
      align-items: start;
      position: relative;
      pointer-events: none;
      padding-right: 40px;
    }

    .item {
      margin-left: 50px;
      margin-right: 50px;

      .img-container {
        img {
          width: 640;
          height: 360px;
        }
      }

      .first-title {
        margin-top: 60px;
        .left {
          height: 19px;
          line-height: 19px;
          font-weight: bold;
          color: #000;
          letter-spacing: 4px;
          font-size: 14px;
          margin-right: 36px;
          margin-top: 5px;
        }

        .right {
          height: 34px;
          line-height: 34px;
          font-weight: bold;
          color: #000;
          font-size: 24px;
          margin-bottom: 38px;
        }
      }

      .second-title {
        margin-left: 80px;
        width: 548px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
        letter-spacing: 0;
        line-height: 32px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
}
</style>
