<template>
  <div>时间选择器页面</div>
  <choose-time @changeStart="changeStart" @changeEnd="changeEnd"></choose-time>
</template>

<script setup lang="ts">
const changeStart = (res) => {
  console.log(res);
};
const changeEnd = (res) => {
  console.log(res);
};
</script>
