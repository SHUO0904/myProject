<template>
  <el-menu
  <navigation-item v-for="(menu,i) in adminMenus" :key="i" :item="menu"/>
  </el-menu>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
