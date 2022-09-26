<template>
  <el-card shadow="never">
    <template #header>
      <h1>基本使用</h1>
    </template>
    <trend>上升趋势</trend>
    <trend type="down">下降趋势</trend>
  </el-card>
  <el-card shadow="never">
    <template #header>
      <h1>自定义颜色(图标,标题)</h1>
    </template>
    <trend upIconColor="blue">上升图标颜色</trend>
    <trend type="down" downIconColor="blue">下降图标颜色</trend>
    <trend upTextColor="blue">上升标题颜色</trend>
    <trend type="down" downTextColor="blue">下降标题颜色</trend>
  </el-card>
  <el-card shadow="never">
    <template #header>
      <h1>自定义图标类型</h1>
    </template>
    <trend upIcon="CaretTop">自定义图标</trend>
    <trend type="down" downIcon="CaretBottom">自定义图标</trend>
  </el-card>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.trend-container {
  margin-right: 10px;
}
.el-card {
    margin-bottom:20px;
}
</style>
