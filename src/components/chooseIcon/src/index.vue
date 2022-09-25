<template>
  <el-button type="primary" @click="handleClick">
    <slot></slot>
  </el-button>
  <el-dialog :model-value="visible" :title="title" @close="close"></el-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  // 对话框的显示/隐藏
  visible: boolean;
  // 对话框的标题
  title: string;
}>();
const emits = defineEmits(["update:visible"]);
// 点击
const handleClick = () => {
  emits("update:visible", true);
};
// 关闭
const close = () => {
  emits("update:visible", false);
};
</script>

<style></style>
