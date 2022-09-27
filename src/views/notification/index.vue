<template>
  <notification :value="12">
    <m-list :list="list" :actions="actions" @clickListItem="clickListItem" @clickAction="clickAction"></m-list>
  </notification>
  <!-- <br />
  <br />
  <notification :value="65" />
  <br />
  <br />
  <notification :value="2" is-dot />
  <br />
  <br />
  <notification icon="ChatDotRound" value="13" /> -->
</template>

<script setup lang="ts">
import { list, actions } from "./data";

const clickListItem = (value) => {
    console.log(value)
}
const clickAction = (value) => {
    console.log(value)
}
</script>
<style lang="scss">
.el-popper {
  padding: 0 !important;
}
</style>
