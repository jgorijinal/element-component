<template>
    <choose-area @change="change"></choose-area>
</template>

<script setup lang="ts">
const change = (result) => {
  console.log(result);
};
</script>

<style></style>
