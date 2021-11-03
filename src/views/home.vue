<template>
  <div>{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'home',
  setup() {
    const name = ref('Welcome to my music player !');
    return {
      name,
    };
  },
});
</script>

<style lang="scss">
</style>
