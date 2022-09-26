<template>
  <span @click="toggleClick" class="toggle-btn">
    <el-icon-expand v-if="isCollapse" />
    <el-icon-fold v-if="!isCollapse" />
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(["update:isCollapse"]);
const toggleClick = () => {
  emits("update:isCollapse", !props.isCollapse);
};
</script>

<style lang="scss" scoped>
</style>
