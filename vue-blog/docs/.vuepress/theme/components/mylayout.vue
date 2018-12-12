<template>
 <ui-container>
   <div class="wrapper">
    <my-header></my-header>
    <slot></slot>
   </div>
 </ui-container>
</template>

<script>
import uiContainer from './uiContainer.vue'
import myHeader from './myHeader.vue'
export default {
 data() {
 return {

 }
 },
 components: {
  uiContainer,
  myHeader
 }
}
</script>

<style scoped>
.wrapper{
  width: 900px;
  margin: auto;
}
</style>
<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
</style>