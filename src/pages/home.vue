<template>
  <div class="home">
    <header class="head">
      <div class="headimg"></div>
      <div class="headCla">
        <span @click='change' class="active"><router-link to='/main'>首页</router-link></span>
        <span @click='change'><router-link to='/discover'>推荐</router-link></span>
        <span @click='change'><router-link to='/true'>真事</router-link></span>
        <span @click='change'><router-link to='/screm'>秘密</router-link></span>
      </div>
      <div class="headint">
        <div class="search"></div>
        <div class="write">写故事</div>
        <div class="center"></div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    change:function(e){
      $(e.target).parent().parent().children().removeClass('active');
      $(e.target).parent().addClass('active')
    }
  }
}
</script>

<style scoped>
a{
  display: block;
  height: 100%;
  color: gray;
  text-decoration: none;
}
.head{
  height: 80px;
  width: 100%;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid lightgray;
}
.head .headimg{
  height: 50px;
  width: 50px;
  border-radius: 20px;
  position: absolute;
  top: 15px;
  left: 50px;
  background-image: url(../assets/logo.png);
  background-size: 100% 100%;
  cursor: pointer;
}
.head .headCla{
  width: 60%;
  position: absolute;
  top: 15px;
  left: 20%;
}
.headCla span{
  font-size: 25px;
  line-height: 50px;
  display: block;
  width: 60px;
  height: 60px;
  float: left;
  cursor: pointer;
  color: gray;
  margin-left: 50px;
  text-align: center;
}
.active{
  color:black !important;
  border-bottom: 2px solid black;
}
.headCla span:hover{
  color: #333;
}
.head .headint{
  width: 20%;
  position: absolute;
  right: 30px;
  top: 15px;
}
.headint div{
  float: left;
  cursor: pointer;
  margin-left: 40px;
}
.headint .search{
  height: 50px;
  width: 50px;
  border-radius: 20px;
  background-image: url(../assets/search.png);
  background-size: 100% 100%;
}
.headint .write{
  height: 50px;
  width: 100px;
  border-radius: 10px;
  background-color: green;
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
}
.headint .center{
  height: 50px;
  width: 50px;
  background-image: url(../assets/default_hp.png);
  background-size: 100% 100%;
}
</style>
  