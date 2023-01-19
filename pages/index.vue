<script setup>
  import displayData from "../components/displayData.vue";
  import { useIntervalFn } from '@vueuse/core';

  const { pending, data, error, refresh } = await useFetch('/api/offenders');

    useIntervalFn(() => {
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
