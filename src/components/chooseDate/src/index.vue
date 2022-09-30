<template>
  <div class="choose-date" style="display: flex">
    <div class="start-date">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabledFn"
        clearable
        v-bind="$attrs.startOptions"
      />
    </div>
    <div class="end-date" style="margin-left: 10px">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        clearable
        :disabled="endDisabled"
        :disabled-date="endDisabledFn"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始日期",
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束日期",
  },
  // 是否禁用选择今天之前的日期
  disableToday: {
    type: Boolean,
    default: false,
  },
});
const startDate = ref<Date | null>(null);
const endDate = ref<Date | null>(null);

const emits = defineEmits(["changeStart", "changeEnd"]);
// 禁用选择今天之前日期的函数
const startDisabledFn = (time: Date) => {
  if (props.disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 25;
  } else {
    return false;
  }
};
// 禁用 结束日期中的选择的开始日期 的函数
const endDisabledFn = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24;
  }
};
// 处理 开始 与 结束 间的逻辑
const endDisabled = ref<Boolean>(true); // 禁用 选择结束日期
watch(startDate, (val) => {
  if (val !== null) {
    endDisabled.value = false;
    emits("changeStart", { startDate: startDate.value });
  }
  if (val === null) {
    endDate.value = null;
    endDisabled.value = true;
  }
});

watch(endDate, (val) => {
  if (val !== null) {
    emits("changeEnd", {
      startDate: startDate.value,
      endDate: endDate.value,
    });
  }
});
</script>