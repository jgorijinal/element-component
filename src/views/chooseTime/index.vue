<template>
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
