<template>
<div class="collapse">
  <div class="collapse-header flex-between" :style="{cursor:isOperation?'pointer':'default'}">
    <div  @click="changeCollapse(isCollapse)">{{ title }}</div>
    <div class="collapse-header-operation" v-if="isOperation">
      <svg class="icon" aria-hidden="true" v-if="isAddItem" @click="createSingList">
        <use xlink:href="#maple-xinjian"></use>
      </svg>
      <svg class="icon icon-hidden" aria-hidden="true" v-if="isCollapse"  @click="changeCollapse(isCollapse)">
        <use xlink:href="#maple-hidden"></use>
      </svg>
      <svg class="icon icon-show" aria-hidden="true" v-else  @click="changeCollapse(isCollapse)">
        <use xlink:href="#maple-show"></use>
      </svg>
    </div>
  </div>
  <div class="collapse-content" v-if="isCollapse&&children.length">
    <slot>
      <template v-for="item in children" :key="item.key">
        <div class="collapse-content-text">{{item.name}}</div>
      </template>
    </slot>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
export default defineComponent({
  props: {
    title: String,
    type: String,
    children: {
      type: Array,
      default: []
    },
    isOperation: {
      type: Boolean,
      default: false
    },
    isAddItem: {
      type: Boolean,
      default: false
    },
  },
  setup(props,context) {
    const { title } = props;

    /**
     * 子项目的展开与收缩
     */
    const isCollapse = ref(true);
    const changeCollapse = (flag: boolean) => {
      isCollapse.value = !flag;
    };

    /**
     * 创建歌单
     */
    const createSingList = () =>{
      context.emit('createSingList')
    }

    onMounted(() => {
      console.log("props :>> ", props);
    });
    return {
      changeCollapse,
      createSingList,
      isCollapse,
    };
  },
});
</script>

<style lang="scss" scoped>
.collapse {
  cursor: default;

  .collapse-header {
    margin-top: 16px;
    padding: 8px 16px;
    border-radius: 8px;
    color: #7b7b7b;
    font-size: 13px;
  }

  .collapse-header-operation {
    .icon {
      font-size: 22px;
      padding: 0 4px;
      color: #7b7b7b;
    }
  }

  .collapse-content {
    cursor: pointer;
    padding: 4px 0;
    color: #313131;
    font-size: 14px;

    &-text {
      padding: 8px 16px;
      border-radius: 8px;

      &:hover {
        background-color: rgba($color: #ddd, $alpha: 0.6);
      }
    }

  }
}
</style>
