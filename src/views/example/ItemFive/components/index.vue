<template>
  <div class="copy-code-container">
    <div class="copy-container flex-row">
      <el-tooltip effect="light" content="复制代码">
        <div class="el-btn" @click="handleCopy(code, $event)">
          <i class="el-icon-copy-document" />
        </div>
      </el-tooltip>

      <el-tooltip effect="light" content="显示代码">
        <i class="el-icon-arrow-down" @click="handeShowCode" />
      </el-tooltip>
    </div>

    <div class="code-palce-container" :class="{ 'show-code': showCode }">
      <div v-highlight class="code-box">
        <pre>
            <code class="javascirpt">{{ code }}</code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly

export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showCode: false
    }
  },
  methods: {
    handeShowCode() {
      this.showCode = !this.showCode
    },
    handleCopy(text, event) {
      clip(text, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.copy-code-container {
  width: 100%;
  border-top: 1px solid transparent;

  &:hover {
    border-top: 1px solid #ccc;
  }

  .copy-container {
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    position: relative;

    i {
      cursor: pointer;
      font-size: 18px;
      padding: 10px 20px;
      margin: 0 30px;
    }
  }

  .code-palce-container {
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: all linear 0.1s;
    background-color: #2b2b2b;

    &.show-code {
      height: 100%;
    }

    .code-box {
      ::v-deep .hljs {
        padding: 0 20px;
        line-height: 25px;
        overflow-x: hidden;
      }
    }
  }
}
</style>
