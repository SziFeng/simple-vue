<template>
<div class="full-height sider-container">
  <div class="sider-logo flex-center">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#maple-QQyinle"></use>
      </svg>
  </div>
  <div class="sider-menu">
    <template v-for="item in menuList" :key="item.key">
      <Collapse 
        :title="item.name" 
        :isOperation="item.isOperation" 
        :isAddItem="item.isAddItem" 
        :children="item.children"
        @createSingList="createSingList">
      </Collapse>
    </template>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { MenuData } from "@/interface/layout/menu";
import Collapse from "../collapse/collapse.vue";
export default defineComponent({
  components: { Collapse },
  name: "",
  setup() {
    const menuList = reactive<MenuData[]> ([
      { name: "在线音乐", key: "01", parent: "1", isParent: true, isOperation: false,isEdit:false,
        children:[
          { name: "推荐", key: "05", parent: "0", isParent: false, isOperation: false,isEdit:false },
          { name: "音乐馆", key: "06", parent: "0", isParent: false, isOperation: false,isEdit:false },
          { name: "视频", key: "07", parent: "0", isParent: false, isOperation: false,isEdit:false },
          { name: "电台", key: "08", parent: "0", isParent: false, isOperation: false,isEdit:false },
        ] 
      },
      { name: "我的音乐", key: "02", parent: "1", isParent: true, isOperation: false,isEdit:false,
        children:[
          { name: "我喜欢", key: "09", parent: "0", isParent: false, isOperation: false,isEdit:false },
          { name: "本地和下载", key: "10", parent: "0", isParent: false, isOperation: false,isEdit:false },
          { name: "最近播放", key: "11", parent: "0", isParent: false, isOperation: false,isEdit:false },
          { name: "试听列表", key: "12", parent: "0", isParent: false, isOperation: false,isEdit:false },
        ] 
       },
      { name: "创建歌单", key: "03", parent: "1", isParent: true, isOperation: true, isAddItem: true,isEdit:false ,
        children:[
          { name: "test1", key: "09", parent: "0", isParent: false, isOperation: false,isEdit:false },
          { name: "test2", key: "10", parent: "0", isParent: false, isOperation: false,isEdit:false },
          { name: "test3", key: "11", parent: "0", isParent: false, isOperation: false,isEdit:false },
          { name: "test4", key: "12", parent: "0", isParent: false, isOperation: false,isEdit:false },
        ] 
       },
      { name: "收藏歌单", key: "04", parent: "1", isParent: true, isOperation: true, isAddItem: false,isEdit:false },
    ]);

    const createSingList = () =>{
      menuList.find(item=>item.key==='03')?.children?.unshift({ 
        name: "新建歌单",
         key: "109", 
         parent: "0", 
         isParent: false, 
         isOperation: false,
         isEdit:true,
      })
    }

    return { menuList,createSingList };
  },
});
</script>

<style lang="scss" scoped>
.sider-container {
  .sider-logo {
    padding: 10px;
    height: 80px;

    .icon {
      font-size: 108px;
    }

    .sider-logo-text {
      padding: 0 8px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }

  .sider-menu {
    box-sizing: border-box;
    padding: 0 16px;
    height: calc(100% - 80px);
    overflow: auto;
    overflow-x: hidden;
  }
}
</style>
