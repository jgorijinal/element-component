<template>
  <div>
    <el-select v-model="province" placeholder="请选择省份" size="default" clearable>
      <el-option
        v-for="item in allAreas"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select :disabled="!province" v-model="city" placeholder="请选择省份" size="default" clearable>
      <el-option
        v-for="item in cities"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select :disabled="!province || !city" v-model="area" placeholder="请选择省份" size="default" clearable>
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
import allAreas from "../../components/chooseArea/lib/pca-code.json";
import { ref, watch } from "vue";

// 下拉框选中的 省份 的值
const province = ref<string>("");
// 下拉框选中的 城市 的值
const city = ref<string>("");
// 下拉框选中的 区域 的值
const area = ref<string>("");

// 选择完省份后, 需要展示的 城市
const cities = ref<any>([]);
watch(province, (newValue) => {
  if (newValue) {
    cities.value = allAreas.find((item) => item.code === newValue)?.children;
  }
  // 只要省份一变化, 那么城市和区域都置空
  city.value = "";
  area.value = "";
});

// 选择完省份, 城市之后, 需要展示的区域
const areas = ref<any>([]);
watch(city, (newValue) => {
  if (newValue) {
    areas.value = cities.value.find((item) => item.code === newValue)?.children;
  }
  // 只要城市一变化, 那么把区域置空
  area.value = "";
});
</script>

<style></style>
