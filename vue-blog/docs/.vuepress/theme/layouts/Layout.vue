<template>
  <my-layout>
    <my-post-list></my-post-list>
  </my-layout>
</template>

<script>
import myLayout from '../components/mylayout.vue'
import myPostList from '../components/myPostList.vue'
export default {
 data() {
 return {

 }
 },
 components: {
  myLayout,
  myPostList
 }
}
</script>

<style scoped>
.wrapper{
  width: 900px;
  margin: auto;
}
</style>
