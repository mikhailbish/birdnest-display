<template>
  <div>{{display}}</div>
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