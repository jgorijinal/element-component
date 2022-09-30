<template>
  <el-popover
    trigger="click"
    :width="500"
    placement="bottom-start"
    v-model:visible="visible"
  >
    <template #default>
      <el-row>
        <el-col :span="10">
          <el-radio-group v-model="radioValue">
            <el-radio-button label="按城市"></el-radio-button>
            <el-radio-button label="按省份"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="14">
          <el-select
            v-model="selectedValue"
            placeholder="请选择城市"
            filterable
            :filter-method="filterMethod"
            @change="changeSelect"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :value="item.id"
              :label="item.name"
            >
            </el-option>
          </el-select>
        </el-col>
        <template v-if="radioValue === '按城市'">
          <!--字母表-->
          <div class="city">
            <div
              v-for="item in Object.keys(cities)"
              :key="item"
              @click="clickAlphabet(item)"
            >
              {{ item }}
            </div>
          </div>
          <!--展示城市-->
          <el-scrollbar max-height="300px">
            <template v-for="(value, key) in cities" :key="key">
              <el-row class="city-row" :id="key">
                <el-col :span="1">{{ key + ":" }}</el-col>
                <el-col :span="23">
                  <span
                    v-for="item in value"
                    :key="item.id"
                    class="city-item"
                    @click="clickCity(item)"
                    >{{ item.name }}</span
                  >
                </el-col>
              </el-row>
            </template>
          </el-scrollbar>
        </template>
        <template v-if="radioValue === '按省份'">
          <!--字母表-->
          <div class="province">
            <div
              class="province-item"
              v-for="key in Object.keys(provinces)"
              :key="key"
              @click="clickAlphabet(key)"
            >
              {{ key }}
            </div>
          </div>
          <!--展示省份-->
          <el-scrollbar max-height="300px">
            <template v-for="(arr, key) in provinces" :key="key">
              <template v-for="(item, index) in arr" :key="index">
                <el-row class="province-row" :id="key">
                  <el-col :span="3">{{ item.name }}:</el-col>
                  <el-col :span="21">
                    <span
                      v-for="province in item.data"
                      class="province-item"
                      @click="clickProvince(province)"
                      >{{ province }}</span
                    >
                  </el-col>
                </el-row>
              </template>
            </template>
          </el-scrollbar>
        </template>
      </el-row>
    </template>
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <div class="icon">
          <el-icon-arrow-down :class="{ isActive: visible }" />
        </div>
      </div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import allCities from "../lib/city";
import { City } from "./types";
import province from "../lib/province.json";
const result = ref<string>("请选择");
// popover 显示/隐藏
const visible = ref<boolean>(false);
// 被选择的单选框 : '按城市' /  '按省份'
const radioValue = ref<string>("按城市");
// 被选择的下拉框
const selectedValue = ref<string>("");
// 所有城市数据
const cities = ref(allCities.cities);
// 所有省份数据
const provinces = ref<any>(province);

const emits = defineEmits(["changeCity", "changeProvince"]);

// 点击了某一个城市
const clickCity = (item: City) => {
  // 给最终结果赋值
  result.value = item.name;
  // 关闭弹层
  visible.value = false;
  // 派发事件, 给父组件传递选中的城市数据
  emits("changeCity", item);
};
// 点击了字母表
const clickAlphabet = (item: string) => {
  const el = document.getElementById(item);
  el?.scrollIntoView();
};

// 点击某一个省份
const clickProvince = (provinceName: string) => {
  result.value = provinceName; // 给结果赋值
  visible.value = false; // 关闭弹层
  emits("changeProvince", provinceName); // 给父组件分发事件
};
// 下拉框选择项
const options = ref<City[]>([]);

onMounted(() => {
  const values = Object.values(cities.value).flat();
  options.value = values;
});

// 自定义搜索 匹配规则
const filterMethod = (val: string) => {
  let values = Object.values(cities.value).flat();
  if (val === "") {
    // 没输入东西
    options.value = values;
  } else {
    // 输入了东西
    // 分情况 : 按城市可以搜索拼音或者中文 , 按省份只能搜中文(由于数据本身的限制)
    if (radioValue.value === "按城市") {
      options.value = values.filter((item) => {
        return item.spell.includes(val) || item.name.includes(val);
      });
    } else {
      options.value = values.filter((item) => {
        return item.name.includes(val);
      });
    }
  }
};
const changeSelect = (id: number) => {
  let values = Object.values(cities.value).flat();
  // 找到点击的城市
  const selectedCity = values.find(item => item.id === id)
  result.value = selectedCity!.name
  if (radioValue.value === '按城市') {
    emits('changeCity',selectedCity)
  } else if(radioValue.value === '按省份') {
    emits('changeProvince',selectedCity!.name)
  }
}
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  cursor: pointer;
  width: fit-content;
  .icon {
    display: flex;
    align-items: center;
    margin-left: 6px;
  }
}
svg {
  width: 1em;
  height: 1em;
  transition: all 0.25s linear;
}
.isActive {
  transform: rotate(180deg);
}
.city {
  display: flex;
  flex-wrap: wrap;
  margin: 4px 0;
  > div {
    display: flex;
    justify-content: center;
    padding: 4px 8px;
    border: 1px solid gray;
    border-radius: 4px;
    margin-right: 6px;
    margin-bottom: 4px;
    width: 12px;
    transition: background-color 0.25s ease;
    &:hover {
      background-color: rgb(182, 180, 180);
      cursor: pointer;
      color: white;
    }
  }
}
.city-row {
  margin-bottom: 10px;
}
.city-item {
  display: inline-block;
  margin: 0 4px 4px 4px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: antiquewhite;
  }
}
.province {
  display: flex;
  flex-wrap: wrap;
  margin: 4px 0;
  > div {
    border: 1px solid gray;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 6px;
    margin-bottom: 4px;
    transition: background-color 0.25s ease;
    &:hover {
      background-color: rgb(182, 180, 180);
      cursor: pointer;
      color: white;
    }
  }
}
.province-row {
  margin-bottom: 10px;
}
.province-item {
  display: inline-block;
  margin: 0 4px 4px 4px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: antiquewhite;
  }
}
</style>
