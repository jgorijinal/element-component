<template>
  <el-menu
    router
    :default-active="defaultActive"
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
    <el-menu-item index="/progress">
      <el-icon-histogram />
      <span>进度条</span>
    </el-menu-item>
    <el-menu-item index="/chooseTime">
      <el-icon-clock />
      <span>时间选择</span>
    </el-menu-item>
    <el-menu-item index="/chooseDate">
      <el-icon-calendar />
      <span>日期选择</span>
    </el-menu-item>
    <el-menu-item index="/chooseCity">
      <el-icon-wind-power />
      <span>城市选择</span>
    </el-menu-item>
    <el-menu-item index="/table">
      <el-icon-list />
      <span>表格</span>
    </el-menu-item>
  </el-menu> 
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute}  from 'vue-router'
defineProps({
  isCollapse: {
    type: Boolean,
    required: true,
  },
});
const defaultActive = ref('/home')
const route = useRoute()

watch(() => route.path, () => {
  console.log(route.path)
  defaultActive.value = route.path
}, {
  immediate:true
})
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
svg {
  width: 22px;
}
</style>
