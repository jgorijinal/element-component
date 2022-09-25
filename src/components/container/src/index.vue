<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <nav-side :is-collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <nav-header v-model:isCollapse="isCollapse" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavHeader from "./navHeader/index.vue";
import NavSide from "./navSide/index.vue";
import { ref } from "vue";
const isCollapse = ref(true);
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  display: flex;
  align-items: center;
  .toggle-btn {
    display: inline-block;
    padding: 12px;
    cursor: pointer;
  }
}
</style>
