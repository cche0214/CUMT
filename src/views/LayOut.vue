<template>
  <div>

    <WebHead></WebHead>

    <WebNavigation></WebNavigation>


    <router-view></router-view>

    <WebFoot></WebFoot>
    
  </div>
</template>

<script>
import WebHead from '../components/WebHead.vue'
import WebFoot from '../components/WebFoot.vue'
import WebNavigation from '@/components/WebNavigation.vue';
export default {
  components:{
    WebHead,WebFoot,WebNavigation
  }
}
</script>

<style scoped>

</style>