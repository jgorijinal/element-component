<template>
  <div class="choose-time" style="display: flex">
    <div class="start-time">
      <el-time-select
        v-model="startTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="step"
        :end="startTimeEnd"
        clearable
        v-bind="$attrs.startOptions"
      />
    </div>
    <div class="end-time" style="margin-left: 10px">
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="step"
        :end="endTimeEnd"
        clearable
        :disabled="endTImeDisabled"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  // 开始时间的占位符
  startPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  // 开始的初始化选择
  startTimeStart: {
    type: String,
    default: "08:00",
  },
  // 时间间隔
  step: {
    type: String,
    default: "00:30",
  },
  // 开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: "18:30",
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  // 结束时间的初始化选择
  endTimeStart: {
    type: String,
    default: "08:00",
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: "18:30",
  },
});
const emits = defineEmits(["changeStart", "changeEnd"]);
const startTime = ref<string>("");
const endTime = ref<string>("");

// 禁用 结束时间 的选择
const endTImeDisabled = ref<boolean>(false);

watch(
  startTime,
  (val) => {
    if (val === "") {
      endTime.value = "";
      endTImeDisabled.value = true;
    } else {
      endTImeDisabled.value = false;
    }
    if (val !== "") {
      emits("changeStart", {
        start: startTime.value,
      });
    }
  },
  {
    immediate: true,
  }
);

watch(endTime, (val) => {
  if (val !== "") {
    emits("changeEnd", {
      start: startTime.value,
      end: endTime.value,
    });
  }
});
</script>