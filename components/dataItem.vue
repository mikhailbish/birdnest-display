<template>
  <tr>
    <td><name :detail="item.name" /></td>
    <td><phone :detail="item.phone" /></td>
    <td><email :detail="item.email" /></td>
    <td><distance :detail="item.distance" /></td>
    <td><spot-time :detail="item.spotTime"/></td>
  </tr>
</template>
<script>
import name from "./name.vue";
import phone from "./phone.vue";
import email from "./email.vue";
import distance from "./email.vue";
import spotTime from "./spotTime.vue";
export default {
  props: [ "item" ],

  components: {
    name,
    phone,
    email,
    distance,
    spotTime
  }
}

</script>
