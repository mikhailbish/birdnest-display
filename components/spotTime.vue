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
        const dateTime = new Date(this.detail);
        const representation = `${dateTime.getHours()}:${ String(dateTime.getMinutes()).length > 1 ? dateTime.getMinutes() :  `0${dateTime.getMinutes()}`} ${dateTime.getDay()}.${dateTime.getMonth() + 1}.${dateTime.getFullYear()}`;
        return representation;
      }
    }
  }
</script>
