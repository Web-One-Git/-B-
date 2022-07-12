<template>
  <div class="main-header">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>

    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <ul class="user-info">
      <li>
        欢迎, tengwangfei
        <a-icon type="down" />
      </li>
      <li>
        <a-icon type="logout" />
        退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch("changeCollapsed");
    },
  },
};
</script>

<style lang="less" scoped>
// .sliderNav-container {
//   height: 50px;
//   line-height: 50px;
//   border-bottom: 1px solid #eee;
//   background: rgb(190, 65, 65);
//   box-sizing: border-box;
//   padding-left: 10px;
//   padding-right: 30px;
//   .menu-btn {
//     margin-right: 10px;
//   }
//   .breadcrumb {
//     display: inline-block;
//     margin-left: 20px;
//   }
//   .user-info {
//     float: right;
//     cursor: pointer;
//     text-align: center;
//     margin-right: 20px;
//     li:not(:first-child) {
//       display: none;
//       &:hover {
//         background: #eee;
//         color: #999;
//         font-weight: 600;
//       }
//     }
//     li {
//       padding: 0 30px;
//     }
//     &:hover {
//       li {
//         display: block;
//       }
//     }
//   }
// }
</style>
