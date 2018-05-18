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
        <template v-if="user!=''">
          <div class="center"></div>
        </template>
        <template v-else>
          <div class="login" @click="gologinPage">注册/登录</div>
        </template>
      </div>
    </header>
    <div class="model">
        <div class="loginClose" @click="Close">关闭</div>
        <div class="liginBox box">
          <span>说说故事吧</span>
          <div>
            <input type="text" class="put" id="username" placeholder="用户名">
            <br>
            <input type="text" class="put" id="password" placeholder="密码">
          </div>
          <div class="loginbtns btns">
            <button class="loginBtn Btn1" @click="login">登录</button>
            <button class="registBtn Btn2" @click="goregistpage">注册</button>
          </div>
        </div>
        <div class="registBox box">
          <span>说说故事吧</span>
          <div>
            <input type="text" class="put" id="registname" placeholder="用户名">
            <br>
            <input type="text" class="put" id="registpsw" placeholder="密码">
            <br>
            <input type="text" class="put" id="rpsw" placeholder="确认密码">
          </div>
          <div class="registbtns btns">
            <button class="registB Btn1" @click="regist">注册</button>
            <button class="cancelBtn Btn2" @click="cancel">取消</button>
          </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home',
  data () {
    return {
      user: ''
    }
  },
  methods:{
    change:function(e){
      $(e.target).parent().parent().children().removeClass('active');
      $(e.target).parent().addClass('active');
    },
    gologinPage:function(){
      console.log(111);
      
      $(".model").css("display","block");
    },
    Close:function(){
      $(".liginBox").css("display","block");
      $(".registBox").css("display","none");
      $(".model").css("display","none");
    },
    goregistpage:function(){
      $(".liginBox").css("display","none");
      $(".registBox").css("display","block");
    },
    cancel:function(){
      $(".liginBox").css("display","block");
      $(".registBox").css("display","none");
    },
    login:function(){

    },
    regist:function(){
      
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
  width: 30%;
  position: absolute;
  right: 30px;
  top: 15px;
}
.headint div{
  float: left;
  cursor: pointer;
}
.headint .search{
  height: 50px;
  width: 50px;
  border-radius: 20px;
  background-image: url(../assets/search.png);
  background-size: 100% 100%;
  margin-left: 35%;
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
  margin-left: 40px;
}
.headint .center{
  height: 50px;
  width: 50px;
  background-image: url(../assets/default_hp.png);
  background-size: 100% 100%;
  margin-left: 40px;
}
.headint .login{
  height: 50px;
  width: 100px;
  border: 1px solid #27c4b5;
  border-radius: 10px;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  margin-left: 30px;
  color: #27c4b5;
}
.model{
  width: 100%;
  height: 110%;
  position: fixed;
  background-color: #fff;;
  z-index: 99999;
  top: -80px;
  display: none;
}
.model .loginClose{
  width: 50px;
  height: 50px;
  margin-top: 80px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  float: right;
  margin-right:10px;
  cursor: pointer; 
}
.model .box{
  width: 500px;
  height: 500px;
  margin-left: calc(50% - 250px);
  margin-top: 250px;
}
.box span{
  display: block;
  width: 100%;
  height: 100px;
  font-weight: bold;
  margin-top: 20px;
  font-size: 30px;
  text-align: center;
}
.put{
  width: 80%;
  margin-left: 10%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid lightgray;
  padding-left: 10px;
}
#password{
  margin-top: 50px;
}
.btns{
  margin-top: 80px;
  width: 80%;
  height: 80px;
  margin-left: 10%;
}
.Btn1{
  margin-left: 50px;
  height: 50px;
  width: 80px;
  background-color: #27c4b5;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
}
.Btn2{
  margin-left: 150px;
  height: 50px;
  width: 80px;
  background-color: #fff;
  border: 1px solid #27c4b5;
  border-radius: 10px;
  color: #27c4b5;
  font-size: 18px;
}
.registBox{
  display: none;
}
#registpsw{
  margin-top: 30px;
}
#rpsw{
  margin-top: 30px;
}
</style>
  