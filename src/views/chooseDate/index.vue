<template>
  <div>
    <choose-date
      @changeStart="changeStart"
      @changeEnd="changeEnd"
    ></choose-date>
  </div>
</template>

<script setup lang="ts">
const changeStart = (res) => {
  console.log(res);
};
const changeEnd = (res) => {
  console.log(res);
};
</script>
