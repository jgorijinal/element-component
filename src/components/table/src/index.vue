<template>
  <el-table :data="data">
    <template v-for="option in tableOptions" :key="option.label">
      <el-table-column
        v-if="!option.slot"
        :prop="option.prop"
        :align="option.align"
        :label="option.label"
      >
      </el-table-column>
      <el-table-column
        v-else
        :prop="option.prop"
        :align="option.align"
        :label="option.label"
      >
        <template #default="scope">
            <slot :name="option.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column :label="actionOption!.label">
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { tableOptions } from "./types";
import { PropType, computed } from "vue";
const props = defineProps({
  // 表格的配置
  options: {
    type: Array as PropType<tableOptions[]>,
    required: true,
  },
  //表格数据
  data: {
    type: Array as PropType<any[]>,
  },
});

// 过滤操作项之外的配置数据 , computed + filter 过滤一下
const tableOptions = computed(() => {
  return props.options.filter((item) => !item.action);
});
// 找到配置项的配置数据 , computed + find 找一下
const actionOption = computed(() => {
  return props.options.find((item) => item.action);
});
</script>
