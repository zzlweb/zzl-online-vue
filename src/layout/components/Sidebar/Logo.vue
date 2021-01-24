<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link collapse"
        to="/"
      >
        <div v-if="logo" class="sidebar-logo-box">
          <img :src="logo" class="sidebar-logo">
        </div>
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '作品展示',
      logo: require('../../../assets/images/touxiang.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: $primary-color;
  padding: 0 20px;
  overflow: hidden;

  &.collapse {
    padding: 0;
    text-align: center;
  }

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    .sidebar-logo-box {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 9px auto;
      overflow: hidden;

      .sidebar-logo {
        width: 32px;
        height: 32px;
        display: block;
      }
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 16px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
