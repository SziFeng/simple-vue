<template>
  <div class="layout-main">
    <div class="layout-sider">
      <Sider></Sider>
    </div>
    <!-- <div class="layout-body">
      <Header></Header>
      <Body>
        <slot></slot>
      </Body>
      <Footer></Footer>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Body from "./body.vue";
import Footer from "./footer.vue";
import Header from "./header.vue";
import Sider from "./sider.vue";
export default defineComponent({
  name: "layout",
  components: { Body, Header, Footer, Sider },
  setup() {},
});
</script>

<style lang='scss' scoped>
.layout-main {
  display: flex;
  height: 100%;
  min-height: 690px;
  min-width: 1100px;
  .layout-sider {
    width: 200px;
    background-color:rgba($color: #f0f0f0, $alpha: 0.3);
  }
  .layout-body {
    width: calc(100% - 200px);
    display: flex;
    flex-direction: column;
  }
}
</style>
