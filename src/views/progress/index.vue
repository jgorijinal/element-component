<template>
  <m-progress :percentage="100" isAnimation status="success"/>
  <br />
  <m-progress :text-inside="true" :stroke-width="26" :percentage="70" isAnimation/>  
  <br />
  <m-progress :percentage="60" isAnimation type="circle"/>
</template>
<script lang="ts" scoped>

</script>