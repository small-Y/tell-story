<template>
    <div class="main">
      <div class="swiper">
        <ul>
          <li><img src="../assets/1.png" alt=""></li>
          <li><img src="../assets/1.png" alt=""></li>
          <li><img src="../assets/2.png" alt=""></li>
        </ul>
        <section class="imgactive"></section>
        <section></section>
        <section></section>
      </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'Main',
  data () {
    return {
      msg: ''
    }
  },
  mounted:{
    
  }
}
</script>
<style scoped>
.main{
  width: 60%;
  margin-left: 10%;
}
.imgactive{
  background-color: #444 !important
}
.swiper{
  height: 350px;
  width: 950px;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
}
.swiper ul{
  height: 350px;
  width: 2950px;
}
.swiper ul li{
  float: left;
  height: 350px;
  width: 950px;
}
img{
  height: 100%;
  width: 100%;
}
.swiper section{
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  bottom: 10px;
  cursor: pointer;
}
.swiper section:nth-of-type(1){
  right: 70px;
}
.swiper section:nth-of-type(2){
  right: 40px;
}
.swiper section:nth-of-type(3){
  right: 10px;
}
</style>