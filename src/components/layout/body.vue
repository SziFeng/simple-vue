<template>
  <div class="layout-body">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "",
  setup() {},
});
</script>

<style lang='scss' scoped>
.layout-body {
  height: calc(100% - 150px);
  overflow: auto;
}
</style>