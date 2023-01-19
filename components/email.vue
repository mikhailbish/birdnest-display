<template>
  <div><a :href="`mailto:${detail}`">{{ display }}</a></div>
</template>
<script>
  export default {
    props: [
      "detail"
    ],
    computed: {
      display() {
        return this.detail;
      }
    }
  }
</script>