<template>
  <div>
    <el-select
      v-model="province"
      placeholder="请选择省份"
      size="default"
      clearable
    >
      <el-option
        v-for="item in allAreas"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select
      :disabled="!province"
      v-model="city"
      placeholder="请选择省份"
      size="default"
      clearable
    >
      <el-option
        v-for="item in cities"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select
      :disabled="!province || !city"
      v-model="area"
      placeholder="请选择省份"
      size="default"
      clearable
    >
      <el-option
        v-for="item in areas"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import allAreas from "../lib/pca-code.json";
import { ref, watch } from "vue";

export interface AreaItem {
  name: string;
  code: string;
  children?: AreaItem[];
}
export interface Data {
  name: string;
  code: string;
}
const emits = defineEmits(["change"]);
// 下拉框选中的 省份 的值
const province = ref<string>("");
// 下拉框选中的 城市 的值
const city = ref<string>("");
// 下拉框选中的 区域 的值
const area = ref<string>("");

// 选择完省份后, 需要展示的 城市
const cities = ref<AreaItem[]>([]);
watch(province, (newValue) => {
  if (newValue) {
    cities.value = allAreas.find((item) => item.code === newValue)?.children!;
  }
  // 只要省份一变化, 那么城市和区域都置空
  city.value = "";
  area.value = "";
});

// 选择完省份, 城市之后, 需要展示的区域
const areas = ref<AreaItem[]>([]);
watch(city, (newValue) => {
  if (newValue) {
    areas.value = cities.value.find(
      (item) => item.code === newValue
    )?.children!;
  }
  // 只要城市一变化, 那么把区域置空
  area.value = "";
});

watch(area, (value) => {
  // 参数 value 是最新的 区
  if (value) {
    const provinceData: Data = {
      code: province.value,
      name:
        province.value &&
        allAreas.find((item) => item.code === province.value)!.name,
    };
    const cityData: Data = {
      code: city.value,
      name:
        city.value &&
        cities.value.find((item) => item.code === city.value)!.name,
    };
    const areaData: Data = {
      code: value,
      name: value && areas.value.find((item) => item.code === value)!.name,
    };
    const result = {
      province: provinceData,
      city: cityData,
      area: areaData,
    };
    emits("change", result);
  }
});
</script>
<style lang="scss" scoped>
  .el-select {
    margin-right:8px;
  }
</style>
