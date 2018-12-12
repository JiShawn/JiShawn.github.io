<template>
 <div class="wrapper">
   <ul>
     <li v-for="(item,index) in list" :key="index">
       <h3 class="title">{{item.title}}</h3>
       <p v-html="item.excerpt" class="desc"></p>
       <div class="tag-group" v-if="item.frontmatter.tags && item.frontmatter.tags.length>1">
         标签：<span v-for="(tag,tagIndex) in item.frontmatter.tags" class="tag">{{tag}}</span>
       </div>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
 data() {
  return {
    
  }
 }, 
 computed:{
   list(){
     return this.$site.pages.filter((item) => {
       return item.path.includes('/posts/')
     })
   }
 },

}
</script>

<style scoped>
.wrapper{
  min-height: 90vh;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #eee;
}
ul{
  list-style: none;
}
li{
  padding: 15px;
  overflow-wrap: break-word;
  border-bottom: 1px solid #eee;
}
li:last-child{
  border-bottom: 0;
}
.desc{
  margin: 10px 0;
  font-size:14px;
}
.tag-group{
  font-size: 14px;
}
.tag{
  cursor: pointer;
  margin-right: 10px;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 12px;
  border: 1px solid #ddd;
  background: #eee;
  color: #666;
}
</style>
