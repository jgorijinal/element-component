<template>
  <div class="container">
    <div class="trend">
      <div class="text">{{ text }}</div>
      <div class="icon">
        <el-icon-arrow-up
          v-if="type === 'up'"
          :style="{ color: upIconColor }"
        />
        <el-icon-arrow-down v-else :style="{ color: downIconColor }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
