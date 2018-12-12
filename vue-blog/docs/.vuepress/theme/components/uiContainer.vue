<template>
 <div ref="container" class="container">
   <div>
    <slot></slot>
   </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
 data() {
 return {
   scroll: ''
 }
 },
  mounted(){
    this.$nextTick(()=>{
      let wrapper = this.$refs.container;
      this.scroll = new BScroll(wrapper,{
        click: true,
        mouseWheel: {
          speed: 100,
          invert: false,
          easeTime: 300
        },
        scrollbar: {
          fade: false,
          interactive: true
        },
        bounce: {
          top: false,
          bottom: false,
          left: false,
          right: true
        }
      });
    })
  }
}
</script>

<style scoped>
.container{
  overflow:hidden;
  height:100vh;
}
</style>


