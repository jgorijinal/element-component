<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <el-menu-item index="1">
      <el-icon-menu />
      <span>导航1</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu />
      <span>导航2</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu />
      <span>导航3</span>
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
