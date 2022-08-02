<template>
<div>
  <ul class="tweets__wrapper">
    <Item v-for="item in items" :key="item.id" :item="item" />
  </ul>
</div>  
</template>

<script>
import Item from './Item.vue'
export default {
  components: { Item },
  props: {
    items: {
      type: Array,
      reqired: true
    }
  },
}
</script>

<style scoped>
  .tweets__wrapper {
  display: flex;
  flex-direction: column;
}

</style>