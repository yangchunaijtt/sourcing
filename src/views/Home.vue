<template>
  <div class="home">
    <v-top></v-top>
    <v-footer></v-footer>
  </div>
</template>

<script>

import top from "@/components/top"
import footer from "@/components/footer"

export default {
  name: "home",
  components:{
    "v-top":top,
    "v-footer":footer,
  },
  data(){
    return {

    }
  },

};
</script>
