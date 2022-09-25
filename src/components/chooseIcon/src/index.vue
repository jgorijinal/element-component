<template>
  <el-button type="primary" @click="handleClick">
    <slot></slot>
  </el-button>
  <div class="choose-icon-dialog-height">
    <el-dialog
      :model-value="visible"
      :title="title"
      @close="close"
      class="dialog"
    >
      <div class="container">
        <div
          class="box"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div class="icon">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="text">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import * as ElIcons from "@element-plus/icons-vue";
import { toLine } from "../../../utils";
import { useCopy } from '../../../hooks/useCopy'
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

const clickItem = (item) => {
  const iconName = `<el-icon-${toLine(item)} />`
  // 复制功能的 hooks
  useCopy(iconName)
  // 关闭对话框
  close()
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;

  .box {
    border-radius: 4px;
    padding: 10px 0;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 12px;
    transition: all 0.25 ease;
    cursor: pointer;
    &:hover {
      background-color: rgb(251, 246, 252);
    }
    svg {
      width: 2.5em;
      height: 2.5em;
    }
  }
}
</style>
