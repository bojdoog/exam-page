<template>
  <router-view></router-view>
</template>

<script lang="ts">

export default {
  name: 'App',
  setup() {
    return{
      
    }
  },
}
</script>

<style>
.container{
  width:1920px;
  height:1080px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
body{
  margin: 0;
  padding: 0;
}
</style>
