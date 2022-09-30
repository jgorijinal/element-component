<template>
  <choose-city
    @changeCity="changeCity"
    @changeProvince="changeProvince"
  ></choose-city>
</template>

<script setup lang="ts">
const changeCity = (city) => {
  console.log(city);
};
const changeProvince = (province) => {
  console.log(province);
};
</script>

<style></style>
