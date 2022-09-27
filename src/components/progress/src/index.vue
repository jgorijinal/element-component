<template>
  <el-progress :percentage="progress" v-bind="$attrs"></el-progress>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  // 百分比
  percentage: {
    type: Number,
    required: true,
  },
  // 是否开启动画
  isAnimation: {
    type: Boolean,
    default: false,
  },
  // 动画时长(毫秒)
  time: {
    type: Number,
    default: 3000,
  },
});
// setInterval 间隔时长
const t = Math.ceil(props.time / props.percentage)
const progress = ref(0);
onMounted(() => {
  if (props.isAnimation) { // 开启了动画
    let timer = setInterval(() => {
      progress.value += 1
      if (progress.value >= props.percentage) { 
        progress.value = props.percentage
        clearInterval(timer) // 
      }
    },t)
  } else {
    progress.value = props.percentage
  }
})
</script>
