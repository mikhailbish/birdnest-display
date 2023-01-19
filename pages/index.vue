<script setup>
//vueuse/core
  import displayData from "../components/displayData.vue";
  import { useIntervalFn } from '@vueuse/core';

  const { pending, data, error, refresh } = await useFetch('/api/offenders');

    useIntervalFn(() => {
     // console.log(`refreshing the data again ${new Date().toISOString()}`);
      refresh();
  }, 2000);

</script>
<template>

  <div>
   <pre>{{ data.length }}</pre>
    <display-data :data="data" />
  </div>



</template>
<style></style>
