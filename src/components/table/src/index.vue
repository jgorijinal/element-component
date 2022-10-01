<template>
  <el-table
    :data="data"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-back="elementLoadingBack"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
  >
    <template v-for="option in tableOptions" :key="option.label">
      <el-table-column
        :prop="option.prop"
        :align="option.align"
        :label="option.label"
      >
        <template #default="scope">
          <template v-if="scope.$index + scope.column.id === currentCell">
            <div style="display: flex">
              <el-input size="small" v-model="scope.row[option.prop]" />
              <span class="icons">
                <el-icon-check
                  class="check"
                  @click="clickCheck(scope)"
                ></el-icon-check>
                <el-icon-close
                  class="close"
                  @click="clickClose(scope)"
                ></el-icon-close>
              </span>
            </div>
          </template>
          <template v-else>
            <slot v-if="option.slot" :name="option.slot" :scope="scope"></slot>
            <span v-else>{{ scope.row[option.prop] }}</span>
            <el-icon-edit
              class="editIcon"
              v-if="option.editable"
              @click="editClick(scope)"
            />
          </template>
        </template>
      </el-table-column>
    </template>
    <!--操作项-->
    <el-table-column :label="actionOption!.label">
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { tableOptions } from "./types";
import { PropType, computed, ref } from "vue";
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
  // 加载文案
  elementLoadingText: {
    type: String,
    default: "加载中",
  },
  // 加载图表名
  elementLoadingSpinner: {
    type: String,
  },
  // 加载背景颜色
  elementLoadingBack: {
    type: String,
  },
  // 加载 svg
  elementLoadingSvg: {
    type: String,
  },
  // 加载 svg 的配置
  elementLoadingSvgViewBox: {
    type: String,
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
2;

// 加载动画
const isLoading = computed(() => {
  return !props.data || props.data.length === 0;
});

// 当前单元格的标识
const currentCell = ref<string>("");
// 点击编辑按钮
const editClick = (scope: any) => {
  // 生成一个唯一标识
  currentCell.value = scope.$index + scope.column.id;
};

const emits = defineEmits(["clickCheck", "clickCose"]);
// 点击 √
const clickCheck = (scope: any) => {
  // 取消单元格编辑
  currentCell.value = "";
  // 分发事件
  emits("clickCheck", scope);
};
// 点击 ×
const clickClose = (scope: any) => {
  // 取消单元格编辑
  currentCell.value = "";
  // 分发事件
  emits("clickCose", scope);
};
</script>

<style lang="scss" scoped>
svg {
  width: 14px;
  height: 14px;
}
.editIcon {
  width: 18px;
  height: 18px;
  margin-left: 4px;
  position: relative;
  top: 4px;
  cursor: pointer;
}
.icons {
  display: flex;
  align-items: center;
  .check {
    width: 22px;
    height: 22px;
    color: green;
    margin-left: 4px;
    cursor: pointer;
  }
  .close {
    width: 22px;
    height: 22px;
    color: red;
    margin-left: 4px;
    cursor: pointer;
  }
}
</style>
