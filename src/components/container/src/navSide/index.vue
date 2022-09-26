<template>
  <el-menu
    router
    default-active="/home"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"  
  >
    <el-menu-item index="/home">
      <el-icon-house />
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/chooseIcon">
      <el-icon-select />
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="/chooseArea">
      <el-icon-position />
      <span>省市区选择</span>
    </el-menu-item>
    <el-menu-item index="/trend">
      <el-icon-arrow-up />
      <span>趋势标记</span>
    </el-menu-item>
    <el-menu-item index="/notification">
      <el-icon-bell />
      <span>通知菜单</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
defineProps({
  isCollapse: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  .el-menu-item {
    span {
      margin-left: 10px;
    }
  }
}
</style>
