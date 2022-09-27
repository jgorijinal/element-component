<template>
  <el-popover placement="bottom-start" :width="300" trigger="click">
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge
        style="cursor: pointer"
        :value="value"
        :max="max"
        :is-dot="isDot"
      >
        <component :is="`el-icon${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>
<script setup lang="ts">
import { toLine } from "../../../utils";

const props = defineProps({
  // 要显示的图标
  icon: {
    type: String,
    default: "Bell",
  },
  // 消息条数
  value: {
    type: [String, Number],
    required: true,
  },
  // 最大值
  max: {
    type: Number,
    default: 50,
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
::v-deep .el-popper {
  padding: 0 !important;
}
svg {
  width: 22px;
}
</style>
