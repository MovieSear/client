<template>  
 
</template>
<script>
export default {
  data () {
    query:''
    this.$router.replace({path: '/searchPage',query:{name: this.$route.query.name}})
    return {
      
    }
  },
}
</script>