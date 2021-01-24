<template>
  <div class="title-container flex-row" :style="{ background, color }">
    <div class="left flex-row fill-flex">
      <div class="BigTitle">
        <slot name="BigTitle">关于我们</slot>
      </div>
    </div>
    <div class="right flex-row" @click="handleClick()">
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
  },
  methods: {
    // 触发父组件事件
    handleClick() {
      this.$emit('eventHandle')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-container {
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
      z-index: 1;
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
  }
}
</style>
