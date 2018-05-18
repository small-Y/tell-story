<template>
    <div class="main">
      <div class="mainLeft">
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
      <div class="mianRight">
        <div class="hottype">
          <span><div style="border: 1px solid black;width: 80px;"></div>热门类型</span>
          <section>

          </section>
        </div>
        <div class="todaynice">
          <span><div style="border: 1px solid black;width: 80px;"></div>今日最佳</span>
          <section>

          </section>
        </div>
      </div>
      
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'Main',
  data () {
    return {
      typeList: '',
      niceList: ''
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init:function(){
      
      setInterval(function(){
        // $(".swiper ul").css("left","-950px")
      },5000)
    }
  }
}
</script>
<style scoped>
.main{
  display: inline;
}
.mainLeft{
  width: 70%;
  float: left;
  display: inline-block;
}
.mianRight{
  width: 30%;
  height: 500px;
  display: inline-block;
}
.imgactive{
  background-color: #444 !important
}
.swiper{
  height: 350px;
  width: 950px;
  margin-top: 20px;
  margin-left: 10%;
  overflow: hidden;
  position: relative;
}
.swiper ul{
  height: 350px;
  width: 2950px;
  position: relative;
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
.hottype{
  margin-top: 20px;
  margin-left: 20px;
  width: 80%;
  border-top: 1px solid lightgray;
}
.hottype span{
  font-size: 20px;
  display: block;
  height: 80px;
  line-height: 80px;
  font-weight: bold;
}
.todaynice{
  margin-top: 10px;
  margin-left: 20px;
  width: 80%;
  border-top: 1px solid lightgray;
}
.todaynice span{
  font-size: 20px;
  display: block;
  height: 80px;
  line-height: 80px;
  font-weight: bold;
}
</style>