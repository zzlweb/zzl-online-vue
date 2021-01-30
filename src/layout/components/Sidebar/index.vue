<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['sidebar', 'permission_routes']),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
::v-deep .el-scrollbar {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    background-color: #eaeaea;
    right: 0;
    top: 0;
    height: 100%;
  }

  .el-submenu__title,
  .submenu-title-noDropdown {
    font-weight: bold;
  }

  .el-submenu {
    .el-menu-item.is-active {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 2px;
        background-color: $primary-color;
        right: 0;
        top: 0;
        height: 100%;
      }
      // border-right: 4px solid $primary-color !important;
      background: rgba(50, 71, 154, 0.05) !important;
    }
  }
}
</style>
