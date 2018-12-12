<template>
 <header class="header">
   <a class="logo" :href="$site.base">
     >!<
   </a>
   <span>{{$site.title}}</span>
   <nav class="nav">
      <a v-for="(item,index) in $themeConfig.nav" :key="index" :class="{ current: $withBase($page.path) === item.link }" :href="item.link">{{item.text}}</a>
   </nav>
 </header>
</template>

<script>
export default {
 data() {
 return {

 }
 },
  mounted(){
    console.log(this.$site);
    console.log(this.$themeConfig);
    console.log();
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color:#333;
}
.header{
  font-size: 35px;
  color: #333;
  padding: 10px 0;
}
.header *{
  vertical-align: middle;
}
.header::before,.nav::before{
  content: '';
  height: 40px;
  width: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}
.header .logo{
  cursor: pointer;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 #888;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  transform: scale(1);
  transition: all .2s;
}
.header .logo:hover{
  transform: scale(1.1) translateY(-5px);
}

.nav{
  float: right;
}
.nav a{
  font-size: 16px;
  padding: 6px 12px;
  border-bottom: 2px solid transparent;
  position: relative;
  top:0;
  transition: all .2s;
  overflow: hidden;
  margin-left:10px;
  /* letter-spacing: 1px; */
}
.nav a.current{
  border-bottom-color: #333; 
}
.nav a:active{
  background: #eeeeee;
  border-radius: 2px 2px 0 0;
  border-bottom-color: #333; 
}
.nav a:hover{
  top:-2px;
  border-bottom-color: #333; 
}
</style>
