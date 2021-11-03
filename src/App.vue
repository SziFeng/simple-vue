<template>
  <LayOut>
    <router-view />
  </LayOut>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LayOut from "./components/layout/index.vue";
export default defineComponent({
  components: {
    LayOut,
  },
});
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
