<template>
  <div class="container">
    <div class="trend">
      <div class="text" :style="{ color: textColor }">
        <slot v-if="slots.default"></slot>
        <div v-else>{{ text }}</div>
      </div>
      <div class="icon">
        <!-- <el-icon-arrow-up
          v-if="type === 'up'"
          :style="{ color: upIconColor }"
        />
        <el-icon-arrow-down v-else :style="{ color: downIconColor }" /> -->
        <component
          :is="`el-icon${toLine(upIcon)}`"
          v-if="type === 'up'"
          :style="{ color: upIconColor }"
        ></component>
        <component
          :is="`el-icon${toLine(downIcon)}`"
          v-else
          :style="{ color: downIconColor }"
        ></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from "vue";
import { toLine } from "../../../utils";
const props = defineProps({
  // 趋势类型
  type: {
    type: String,
    default: "up",
  },
  // 文字
  text: {
    type: String,
  },
  upIconColor: {
    type: String,
    default: "#f5222d",
  },
  downIconColor: {
    type: String,
    default: "#52c41a",
  },
  upTextColor: {
    type: String,
    default: "black",
  },
  downTextColor: {
    type: String,
    default: "black",
  },
  upIcon: {
    type: String,
    default: "ArrowUp",
  },
  downIcon: {
    type: String,
    default: "ArrowDown",
  },
});
// 对插槽的处理
const slots = useSlots();

// 计算文字颜色
const textColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor;
});
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
  .trend {
    display: flex;
    align-items: center;
    .text {
    }
    .icon {
      display: flex;
      align-items: center;
      svg {
        margin-left: 4px;
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
