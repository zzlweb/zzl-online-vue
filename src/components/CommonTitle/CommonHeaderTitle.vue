<template>
  <div class="title-container flex-row" :style="{ background, color }">
    <div class="left flex-row fill-flex">
      <div class="BigTitle">
        <slot name="BigTitle">关于我们</slot>
      </div>
      <!-- <div class="line" :style="{ background: color }"></div> -->
      <div class="smallTitle flex-row">
        <!-- <slot name="smallTitle">ABOUT US</slot> -->
      </div>
    </div>
    <div class="right flex-row">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-types
    background: {
      default: 'transparent'
    },
    // eslint-disable-next-line vue/require-prop-types
    color: {
      default: '#000000'
    }
  }
}
</script>

<style lang="scss" scoped>
.title-container {
  margin: 100px auto 0;
  height: 80px;
  max-width: 1200px;
  padding: 8px 45px 0;
  justify-content: space-between;

  .left {
    align-items: flex-end;

    .BigTitle {
      font-size: 56px;
      height: 64px;
      line-height: 64px;
      font-weight: bold;
    }
    .line {
      height: 50px;
      width: 1px;
      margin: 0 14px;
      transform: rotate(-345deg);
    }
    .smallTitle {
      height: 64px;
      font-size: 14px;
      letter-spacing: 11px;
      align-items: flex-end;
    }
  }

  .right {
    align-items: flex-end;
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
    text-align: right;
    flex: 0 0 100px;
    line-height: 16px;

    .iconfont {
      margin-left: 8px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
