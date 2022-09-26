<template>
  <el-badge :value="value" :max="max" :is-dot="isDot">
    <component :is="`el-icon${toLine(icon)}`"></component>
  </el-badge>
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
