<template>
<div class="layout-header flex-between">
  <div class="flex-between padding-md full-width">
    <div class="flex-start">
      <div title="上一步" class="header-button">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#maple-fanhui"></use>
        </svg>
      </div>
      <div title="下一步" class="header-button">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#maple-xiayibu"></use>
        </svg>
      </div>
    </div>
    <div class="flex-start">
      <div title="最小化" class="header-button" @click="WinMin">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#maple-zuixiaohua"></use>
        </svg>
      </div>
      <div title="最大化" class="header-button" @click="WinMax" v-if="!isMax">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#maple-zuidahua-1"></use>
        </svg>
      </div>
      <div title="向下还原" class="header-button" @click="WinMax" v-else>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#maple-zuidahua-3"></use>
        </svg>
      </div>
      <div title="关闭" class="header-button" @click="WinClose">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#maple-guanbi"></use>
        </svg>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
// import { ipcRenderer } from "electron";
export default defineComponent({
  setup() {
    const isMax = ref(false);
    //自定义窗口关闭
    function WinClose() {
      // ipcRenderer.send('win-close');
    }
    //自定义窗口最小化
    function WinMin() {
      // ipcRenderer.send('win-min');
    }
    //自定义窗口关闭
    function WinMax() {
      isMax.value=!isMax.value;
      // ipcRenderer.send('win-max');
    }
    return {
      WinClose,
      WinMin,
      WinMax,
      isMax
    }
  },
});
</script>

<style lang="scss" scoped>
.layout-header {
  height: 60px;
  overflow: hidden;
  padding: 10px;
  -webkit-app-region: drag;

  .header-button {
    width: 40px;
    text-align: center;
    line-height: 30px;
    border-radius: 2px;
    -webkit-app-region: no-drag;

    &:hover {
      background-color: #f0f0f0;
    }
  }
}
</style>
