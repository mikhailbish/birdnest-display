<template>
  <div>
    <download :data="data" />
    <table>
      <thead><td>Name</td><td>Phone</td><td>Email</td><td>Distance (mm)</td><td>Last Seen</td></thead>
      <tbody><data-item v-for="( item, index ) in data" :key="`index${index}`" :item="item" /></tbody>
    </table>
  </div>
</template>
<script>
import dataItem from "./dataItem.vue";
export default {
  props: {
    data: Array
  },
  components: {
    dataItem,
  }
}
</script>