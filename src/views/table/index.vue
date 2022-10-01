<template>
  <m-table :data="tableData" :options="tableOptions">
    <template #action="{ scope }">
      <el-button type="primary" @click="editAction(scope)">编辑</el-button>
      <el-button type="danger" @click="deleteAction(scope)">删除</el-button>
    </template>
    <template v-slot:name="{scope}">
        自定义{{scope.row.name}}
    </template>
    <template v-slot:date="{scope}">
        自定义{{scope.row.date}}
    </template>
    <template v-slot:address="{scope}">
        自定义{{scope.row.address}}
    </template>
  </m-table>
</template>

<script setup lang="ts">
import { tableOptions } from "../../components/table/src/types";
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom1",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom2",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom3",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom4",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const tableOptions: tableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "center",
    slot: "date",
  },
  {
    label: "姓名",
    prop: "name",
    align: "center",
    slot: "name",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
    slot: "address",
  },
  // 最后一列
  {
    label: "操作",
    action: true,
  },
];

const editAction = (scope) => {
  console.log(scope.row.name);
};
const deleteAction = (scope) => {
  console.log(scope.row.name);
};
</script>
