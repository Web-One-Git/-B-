<template>
  <div class="home">
      <LeftMenu />
    <div :class="{ 'menu-app': true, 'menu-unfold': $store.state.collapsed }">
      <SilderNav />
    </div>
    
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/Layout/LeftMenu.vue";
import SilderNav from "@/components/Layout/SilderNav.vue";
export default {
  data() {
    return { 
      // collapsed: false,
    };
  },
  components: {
    LeftMenu,
    SilderNav,
  },
  methods: {},
};
</script>

<style lang="less">
.home {
  .menu-list {
    width: 180px;
    position: fixed;
    height: 100%;
    overflow: hidden;
    .ant-menu {
      height: 100%;
    }
  }
  .menu-app {
    margin-left: 180px;
    transition: all 0.3s;
    &.menu-unfold {
      margin-left: 80px;
    }
    .main-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    padding-left: 10px;
    padding-right: 20px;
    .breadcrumb {
      display: inline-block;
      margin-left: 20px;
    }
    .user-info {
      float: right;
      cursor: pointer;
      li:not(:first-child) {
        display: none;
        &:hover {
          background: #1890ff;
          color: #fff;
          font-weight: 600;
        }
      }
      li {
        padding: 0 20px;
        text-align: center;
      }
      &:hover {
        li {
          display: block;
        }
      }
    }
  }
  
  }
}
</style>
