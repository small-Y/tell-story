<template>
  <div class="home">
    <div class="bighome">
      <header class="head">
        <div class="headimg"></div>
        <div class="headCla">
          <span @click='change' class="active"><router-link to='/main'>首页</router-link></span>
          <span @click='change'><router-link to='/discover'>推荐</router-link></span>
          <span @click='change'><router-link to='/true'>真事</router-link></span>
          <span @click='change'><router-link to='/screm'>秘密</router-link></span>
        </div>
        <div class="headint">
          <router-link to="/search"><div class="search"></div></router-link>
          <div class="write" @click="writeStory">写故事</div>
          <template v-if="user!=''">
            <div class="center" @click='setcenter'>
              <s class="d"></s>
              <div class="setting">
                <ul>
                  <router-link to="/mymain"><li>主页</li></router-link>
                  <router-link to="/setting"><li>设置</li></router-link>
                  <li @click='loginout'>登出</li>
                </ul>
              </div>
            </div>
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
            <span class="redspan1" style="color: red; font-size: 12px; height: 50px;"></span>
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
            <span class="redspan2" style="color: red; font-size: 12px; height: 50px;"></span>
            <div class="registbtns btns">
              <button class="registB Btn1" @click="regist">注册</button>
              <button class="cancelBtn Btn2" @click="cancel">取消</button>
            </div>
          </div>
      </div>
      <div class="writeBox">
        <header class="head">
          <div class="headint">
            <div class="publish" @click='publish'>发布</div>
            <div class="center"></div>
            <div class="storyClose" @click="storyClose">关闭</div>
          </div>
        </header>
        <section class="chooseType">
          <p class="text1">选择故事类型</p>
          <p class="text2">选择准确的故事类型能让你的故事让更多感兴趣的读者看到。</p>
          <div class="typelist">
            <template v-for="type in typeList">
              <p @click='chonseType'>{{type}}</p>
            </template>
          </div>
        </section>
        <div class="storyBox">
          <div class="backphoto"><img src="" alt=""></div>
          <div class="addImg"  >
            <iframe name="ansynform" frameborder="0" style="display: none"></iframe>
            <form target="ansynform"  method="post" id="upload" @submit="doSubmit" enctype="multipart/form-data">
              <div class="formtop" @click="chooseImg">
                <div class="backImg"></div>
                <p>故事封面</p>
                <input id="addImg" type="file" @change='changeImg' name="photo" accept="image/*" style="display: none;">
              </div>
              <input type="submit" class="btn btn-block btn-success" id="upsubmit"  value="上传图片"/>
            </form>
          </div>
          <div class="storyHead">
            <input type="text" id="storyHead"  placeholder="故事标题">
          </div>
          <div class="addStoryTip" @click="addContent"></div>
          <div id="contentBox"></div>
        </div>
      </div>
      <!-- <router-view></router-view> -->
    </div>
    <div class="smallhome">
        <header class="smallhead">
          <div class="shimg"></div>
          <div class="shright">
              <router-link to="/search"><div class="shsearch"></div></router-link>
              <div class="shwrite" @click="smallwriteStory">写故事</div>
              <template v-if="user!=''">
                <div class="shcenter" @click='setcenter'>
                  <s class="d"></s>
                  <div class="shsetting">
                    <ul>
                      <router-link to="/mymain"><li>主页</li></router-link>
                      <router-link to="/setting"><li>设置</li></router-link>
                      <li @click='loginout'>登出</li>
                    </ul>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="samlllogin" @click="smallgologinPage">注册/登录</div>
              </template>
            </div>
        </header>
        <div class="smallmenu">
          <span @click='change' class="active"><router-link to="/main">首页</router-link></span>
          <span @click='change'><router-link to="/discover">推荐</router-link></span>
          <span @click='change'><router-link to="/true">真事</router-link></span>
          <span @click='change'><router-link to="/screm">秘密</router-link></span>
        </div>
       <div class="smallwrite">
          <div class="smwhead">
            <div class="smallpublish" @click='smallpublish'>发布</div>
            <div class="smwicenter"></div>
            <div class="smallstoryClose" @click="smallstoryClose">关闭</div>
          </div>
          <section class="smallchooseType">
            <p class="text1">选择故事类型</p>
            <p class="text2">选择准确的故事类型能让你的故事让更多感兴趣的读者看到。</p>
            <div class="smalltypelist">
              <template v-for="type in typeList">
                <p @click='smallchonseType'>{{type}}</p>
              </template>
            </div>
          </section>
          <div class="smallstoryBox">
            <div class="smallbackphoto"><img src="" alt=""></div>
            <div class="smalladdImg">
              <iframe name="smallansynform" frameborder="0" style="display: none"></iframe>
              <form target="smallansynform"  method="post" id="smallupload" @submit="smalldoSubmit" enctype="multipart/form-data">
                <div class="smallformtop" @click="smallchooseImg">
                  <div class="smallbackImg"></div>
                  <p>故事封面</p>
                  <input id="smalladdImg" type="file" @change='smallchangeImg' name="photo" accept="image/*" style="display: none;">
                </div>
                <input type="submit" class="btn btn-block btn-success" id="smallupsubmit"  value="上传图片"/>
              </form>
            </div>
            <div class="smallstoryHead">
              <input type="text" id="smallstoryHead"  placeholder="故事标题">
            </div>
            <div class="smalladdStoryTip" @click="smalladdContent"></div>
            <div id="smallcontentBox"></div>
          </div>
       </div>
       <div class="smallmodel">
        <div class="loginClose" @click="smallClose">关闭</div>
        <div class="liginBox box">
          <span>说说故事吧</span>
          <div>
            <input type="text" class="put" id="smallusername" placeholder="用户名">
            <br>
            <input type="text" class="put" id="smallpassword" placeholder="密码">
          </div>
          <span class="smallredspan1" style="color: red; font-size: 12px; height: 50px;"></span>
          <div class="loginbtns btns">
            <button class="loginBtn Btn1" @click="smalllogin">登录</button>
            <button class="registBtn Btn2" @click="goregistpage">注册</button>
          </div>
        </div>
        <div class="registBox box">
          <span>说说故事吧</span>
          <div>
            <input type="text" class="put" id="smallregistname" placeholder="用户名">
            <br>
            <input type="text" class="put" id="smallregistpsw" placeholder="密码">
            <br>
            <input type="text" class="put" id="smallrpsw" placeholder="确认密码">
          </div>
          <span class="smallredspan2" style="color: red; font-size: 12px; height: 50px;"></span>
          <div class="registbtns btns">
            <button class="registB Btn1" @click="smallregist">注册</button>
            <button class="cancelBtn Btn2" @click="cancel">取消</button>
          </div>
        </div>
       </div>
    </div>
    <div class="uptip">
        <div class="tipup">提示</div>
        <div class="uptipcon"></div>
        <div class="tipbottom">
          <button @click="closetip">确定</button>
        </div>
    </div>
    <div class="back"></div>
     <router-view></router-view>
  </div>
 
</template>

<script>
import $ from 'jquery'
import qs from 'qs'
export default {
  name: 'Home',
  data () {
    return {
      user: '',
      typeList:['真事','秘密'],
      type:'',
      isshow:false
    }
  },
  mounted () {
    this.getCookie();
    this.init();
  },
  methods:{
    closetip:function(){
      $(".back").css('display','none');
      $(".uptipcon").empty();
        $(".uptip").animate({
            top: "-125px"
          }, 500 );
    },
    smalllogin:function(){
      var username=$("#smallusername").val();
      var password=$("#smallpassword").val();
      this.$http.post("/storyapi/login",qs.stringify({
        'username':username,
        'password':password
       })).then(res=>{
         $(".smallredspan1").text(res.data.msg);
         this.user=username;
         document.cookie = 'name'+ "=" +username;
       },err=>{
         console.log(err);
         
       })
    },
    smallregist:function(){
      var username=$("#smallregistname").val();
      var password=$("#smallregistpsw").val();
      var repsw=$("#smallrpsw").val();
      if(username==''){
        $(".smallredspan2").text('用户名不能为空');
      }else if(password==''){
        $(".smallredspan2").text('密码不能为空');
      }else if(password!=repsw){
        $(".smallredspan2").text('俩次密码不一致');
      }else{
        this.$http.post("/storyapi/register",qs.stringify({
            'username':username,
            'password':password
          })).then(res=>{
            $(".smallredspan2").text(res.data.msg);
          },err=>{
            console.log(err);
          })
      }
    },
    smallgologinPage:function(){
      $(".smallmodel").css("display","block");
    },
    smallstoryClose:function(){
      $(".smallwrite").css("display","none");
      $("#smallcontentBox").empty();
      $(".smallformtop").css("display",'block');
      $(".smallbackphoto").css('display','none');
      $(".smallbackphoto img").attr('src','');
      $("#smallstoryHead").val('');
      var file = document.getElementById('smalladdImg');
      file.value = '';
    },
    smallchonseType:function(e){
      this.type=$(e.target).text();
      $(".smallchooseType").css("display","none");
      $(".smallstoryBox").css("display","block");
    },
    smallwriteStory:function(){
      if(this.user!=''){
        $(".smallwrite").css("display","block");
        $(".smallchooseType").css("display","block");
        $(".smallstoryBox").css("display","none");
      }else{
        $(".smallmodel").css("display","block");
      }
    },
    smallchooseImg:function(){
      $("#smalladdImg").click();
    },
    smallchangeImg:function(e){
      var file=$(e.target)[0].files[0];
      $(".smallbackphoto img").attr("src", URL.createObjectURL(file));
      $(".smallformtop").css("display",'none');
      $(".smallbackphoto").css('display','block');
    },
    smalladdContent:function(){
      var storyCon=$("<div class='storyContent' contenteditable='true'></div>");
      storyCon.css({
        height:'100px',
        width:'80%',
        marginLeft:'10%',
        fontSize:'20px',
        lineHeight:'20px',
        border:'1px solid lightgray',
        padding:'5px 10px',
        marginTop:'20px'
      })
      $("#smallcontentBox").append(storyCon);
    },
    smallpublish:function(){
      var headname=$("#smallstoryHead").val();
      var storytype=this.type;
      var contents=$("#smallcontentBox").children();
      var conBox=[];
      var msg='';
      
      for (let index = 0; index < contents.length; index++) {
        var content=contents[index].textContent;
        conBox.push(content);
        if(content==''){
          msg='页面内容不能为空'
        }
      }
      if(this.type==''){
        msg='请先选择故事类型'
      }else if(headname==''){
        msg='标题不能为空' 
      }else if(contents.length==0){
        msg='内容不能为空'
      }

      if(msg!=''){
        $(".back").css('display','block');
        $(".uptipcon").text(msg);
        $(".uptip").animate({
            top: "0"
          }, 500 );
      }else{
        this.$http.post("/storyapi/publish",qs.stringify({
            'name':this.user,
            'storyname':headname,
            'storytype':storytype,
            'con':conBox
          },{arrayFormat: 'brackets'})).then(res=>{
            if(res.data.code=1){
              $(".back").css('display','block');
              $(".uptipcon").text(res.data.msg);
              $(".uptip").animate({
                top: "0"
              }, 500 );
            }
          },err=>{
            console.log(err);
          })
      }
    },
    smallClose:function(){
      $(".smallmodel").css("display","none");
    },
    smalldoSubmit:function(e){
      e.preventDefault();
      var data =new FormData(e.target);
      var url = $("#smalladdImg")[0].files;
      if(url.length!=0){
        $.post({
          url:"/storyapi/upload",
          data:data,
          contentType:false,
          processData:false, //不会序列化 data，而是直接使用data
          success:function(res){
            console.log(res.msg);
            $(".back").css('display','block');
            $(".uptipcon").text(res.msg);
            $(".uptip").animate({
                top: "0"
              }, 500 );
            
            // this.$alert(res.msg, '提示');
          }
        });
      }else{
        $(".back").css('display','block');
            $(".uptipcon").text('请先选择图片');
            $(".uptip").animate({
                top: "0"
              }, 500 );
      }
    },
    init:function(){
      var initwidth=document.body.clientWidth;
      if(initwidth<=1100){
          $(".bighome").css('display','none');
          $(".smallhome").css('display','block');
          $(".mainLeft").css({"width":"100%","margin-top":"0px","min-width":'0px'});
          $(".mainRight").css('display','none');
          $(".swiper").css({"width":"100%","height":"250px","margin-left":"0px","margin-top":"0px"});
          $(".el-carousel__container").css("height","250px");
          $(".storybox").css({"width":"94%","margin-left":"3%"});
          $(".uptip").css({"width":"90%","margin-left":'5%'});
          $(".hotleft").css("height","100px");
      }else{
          $(".bighome").css('display','block');
          $(".smallhome").css('display','none');
          $(".mainLeft").css({"width":"70%","margin-top":"80px","min-width":'1000px'});
          $(".mainRight").css('display','inline-block');
          $(".swiper").css({"width":"900px","height":"350px","margin-left":"18%","margin-top":"20px"});
          $(".el-carousel__container").css("height","350px");
          $(".storybox").css({"width":"63%","margin-left":"18%"});
          $(".uptip").css({"width":"400px","margin-left":'40%'});
          $(".hotleft").css("height","200px");
      }
      window.onresize = function(){
        var width=document.body.clientWidth;
        if(width<=1100){
          $(".bighome").css('display','none');
          $(".smallhome").css('display','block');
          $(".mainLeft").css({"width":"100%","margin-top":"0px","min-width":'0px'});
          $(".mainRight").css('display','none');
          $(".swiper").css({"width":"100%","height":"250px","margin-left":"0px","margin-top":"0px"});
          $(".el-carousel__container").css("height","250px");
          $(".storybox").css({"width":"94%","margin-left":"3%"});
          $(".uptip").css({"width":"90%","margin-left":'5%'});
          $(".hotleft").css("height","100px");
        }else{
          $(".bighome").css('display','block');
          $(".smallhome").css('display','none');
          $(".mainLeft").css({"width":"70%","margin-top":"80px","min-width":'1000px'});
          $(".mainRight").css('display','inline-block');
          $(".swiper").css({"width":"900px","height":"350px","margin-left":"18%","margin-top":"20px"});
          $(".el-carousel__container").css("height","350px");
          $(".storybox").css({"width":"63%","margin-left":"18%"});
          $(".uptip").css({"width":"400px","margin-left":'40%'});
          $(".hotleft").css("height","200px");
        }
      }
    },
    getCookie:function(){
      var arr = document.cookie.split(";"); 
      if(arr[0]!=''){
        this.user=arr[0].split("=")[1];
      }
    },
    change:function(e){
      $(e.target).parent().parent().children().removeClass('active');
      $(e.target).parent().addClass('active');
    },
    setcenter:function(){
      this.isshow=!this.isshow;
      if(this.isshow){
        $('.d').css('display','block');
        $('.setting').css("display",'block');
        $(".shsetting").css('display','block');
      }else{
        $('.d').css('display','none');
        $('.setting').css("display",'none');
        $(".shsetting").css('display','none');
      }
    },
    gologinPage:function(){
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
      var username=$("#username").val();
      var password=$("#password").val();
      this.$http.post("/storyapi/login",qs.stringify({
        'username':username,
        'password':password
       })).then(res=>{
         $(".redspan1").text(res.data.msg);
         this.user=username;
         document.cookie = 'name'+ "=" +username;
       },err=>{
         console.log(err);
         
       })
    },
    loginout:function(){
      document.cookie = "name=" +'';
      location.reload([true]) 
    },
    regist:function(){
      var username=$("#registname").val();
      var password=$("#registpsw").val();
      var repsw=$("#rpsw").val();
      if(username==''){
        $(".redspan2").text('用户名不能为空');
      }else if(password==''){
        $(".redspan2").text('密码不能为空');
      }else if(password!=repsw){
        $(".redspan2").text('俩次密码不一致');
      }else{
        this.$http.post("/storyapi/register",qs.stringify({
            'username':username,
            'password':password
          })).then(res=>{
            $(".redspan2").text(res.data.msg);
          },err=>{
            console.log(err);
          })
      }
    },
    writeStory:function(){
      if(this.user!=''){
        $(".writeBox").css("display","block");
        $(".headint").css("width","20%");
      }else{
        $(".model").css("display","block");
      }
    },
    storyClose:function(){
      $(".chooseType").css("display","block");
      $(".storyBox").css("display","none");
      $("#contentBox").empty();
      $(".writeBox").css("display","none");
      $(".headint").css("width","30%");
      $(".formtop").css("display",'block');
      $(".backphoto").css('display','none');
      $(".backphoto img").attr('src','');
      $("#storyHead").val('');
      var file = document.getElementById('addImg');
      file.value = '';
    },
    chonseType:function(e){
      this.type=$(e.target).text();
      $(".chooseType").css("display","none");
      $(".storyBox").css("display","block");
    },
    chooseImg:function(){
      $("#addImg").click();
    },
    changeImg:function(e){
      var file=$(e.target)[0].files[0];
      $(".backphoto img").attr("src", URL.createObjectURL(file));
      $(".formtop").css("display",'none');
      $(".backphoto").css('display','block');
    },
    addContent:function(){
      var storyCon=$("<div class='storyContent' contenteditable='true'></div>");
      storyCon.css({
        height:'100px',
        width:'80%',
        marginLeft:'10%',
        fontSize:'20px',
        lineHeight:'20px',
        border:'1px solid lightgray',
        padding:'5px 10px',
        marginTop:'20px'
      })
      $("#contentBox").append(storyCon);
    },
    doSubmit:function(e){
      e.preventDefault();
      var data =new FormData(e.target);
      var url = $("#smalladdImg")[0].files;
      if(url.length!=0){
        $.post({
          url:"/storyapi/upload",
          data:data,
          contentType:false,
          processData:false, //不会序列化 data，而是直接使用data
          success:function(res){
            console.log(res.msg);
            $(".back").css('display','block');
            $(".uptipcon").text(res.msg);
            $(".uptip").animate({
                top: "0"
              }, 500 );
          }
        });
      }else{
        $(".back").css('display','block');
            $(".uptipcon").text('请先选择图片');
            $(".uptip").animate({
                top: "0"
              }, 500 );
      }
      
    },
    publish:function(){
      var headname=$("#storyHead").val();
      var storytype=this.type;
      var contents=$("#contentBox").children();
      var conBox=[];
      var msg='';
      
      for (let index = 0; index < contents.length; index++) {
        var content=contents[index].textContent;
        conBox.push(content);
        if(content==''){
          msg='页面内容不能为空'
        }
      }
      if(this.type==''){
        msg='请先选择故事类型'
      }else if(headname==''){
        msg='标题不能为空' 
      }else if(contents.length==0){
        msg='内容不能为空'
      }

      if(msg!=''){
        this.$alert(msg, '提示', {});
      }else{
        this.$http.post("/storyapi/publish",qs.stringify({
            'name':this.user,
            'storyname':headname,
            'storytype':storytype,
            'con':conBox
          },{arrayFormat: 'brackets'})).then(res=>{
            if(res.data.code=1){
              this.$alert(res.data.msg, '提示');
            }
          },err=>{
            console.log(err);
          })
      }
    }
  }
}
</script>

<style scoped>
.back{
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #333;
  z-index: 9999;
  opacity: 0.5;
  display: none;
}
.uptip{
  height: 130px;
  width: 90%;
  margin-left: 5%;
  z-index: 9999;
  background-color: #fff;
  position: fixed;
  z-index: 99999;
  top: -125px;
}
.uptip .tipup{
  height: 30px;
  text-align: left;
  line-height: 30px;
  font-size: 16px;
  padding-left: 20px;
  border-bottom: 1px solid whitesmoke;
}
.uptip .uptipcon{
  height: 60px;
  font-size: 18px;
  line-height: 60px;
  padding: 0 20px;
}
.uptip .tipbottom{
  height: 30px;
  width: 100%;
  border-top: 1px solid whitesmoke;
}
.tipbottom button{
  height: 30px;
  padding: 3px 10px;
  background-color: #409EFF;
  border: none;
  float: right;
  margin-right: 30px;
  border-radius: 3px;
  margin-top: 4px;
}
.smallhead{
  height: 80px;
  width: 100%;
}
.smallhead .shimg{
  height: 50px;
  width: 50px;
  border-radius: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-image: url(../assets/logo.png);
  background-size: 100% 100%;
  cursor: pointer;
}
.smallhead .shright{
  width: 65%;
  height: 70px;
  position: absolute;
  right: 0;
  top: 10px;
}
.shright .shsearch{
  height: 50px;
  width: 50px;
  border-radius: 20px;
  background-image: url(../assets/search.png);
  background-size: 100% 100%;
  position: absolute;
  right: 180px;
  top: 2px;
}
.shright .shwrite{
  height: 40px;
  width: 80px;
  border-radius: 10px;
  background-color: green;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  top: 5px;
  right: 90px;
}
.shright .samlllogin{
  height: 40px;
  width: 70px;
  border: 1px solid #27c4b5;
  border-radius: 10px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  color: #27c4b5;
  position: absolute;
  right: 10px;
  top: 5px;
}
.shright .shcenter{
  height: 50px;
  width: 50px;
  background-image: url(../assets/default_hp.png);
  background-size: 100% 100%;
  position: absolute;
  right: 5px;
  top: 0px;
}
.shcenter .d{
  width: 14px;
  height: 14px;
  background-color: #FFF;
  position: absolute;
  top: 60px;
  right: 20px;
  border-top: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  -o-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
  display: none;
} 
.shcenter .shsetting{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 70px;
  right: 5px;
  border: 1px solid whitesmoke;
  display: none;
  z-index: 98;
}
.shsetting ul{
  list-style: none;
  padding: 0 0;
  margin: 0 0;
}
.shsetting ul li{
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-top: 3px;
  border-bottom: 1px solid whitesmoke;
  background-color: #fff;
}
.smallmenu{
  height: 50px;
  width: 100%;
}
.smallmenu span{
  display: block;
  height: 50px;
  width: 25%;
  float: left;
  text-align: center;
  cursor: pointer;
  line-height: 50px;
  background-color: whitesmoke;
}
.smallwrite{
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 99;
  margin-top: -130px;
  background-color: #fff;
  overflow: auto;
}
.smallwrite .smwhead{
  height: 70px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid lightgray;
}
.smwhead .smallpublish{
  height: 40px;
  width: 60px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  border: 1px solid #27c4b5;
  border-radius: 10px;
  position: absolute;
  right: 80px;
  top: 15px;
}
.smwhead .smwicenter{
  height: 40px;
  width: 40px;
  background-image: url(../assets/default_hp.png);
  background-size: 100% 100%;
  margin-left: 40px;
  position: absolute;
  left: 0px;
  top: 15px;
}
.smwhead .smallstoryClose{
  font-size: 20px;
  height: 40px;
  width: 60px;
  border: 1px solid #27c4b5;
  line-height: 40px;
  text-align: center;
  border-radius: 10px;
  position: absolute;
  right: 5px;
  top: 15px;
}
.smallchooseType{
  height: 30%;
  width: 60%;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 10px 10px gray;
  margin-left: 20%;
  margin-top: 80px;
}
.smallchooseType .text1{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
.smallchooseType .text2{
  font-size: 10px;
  text-align: center;
  margin-top: 20px;
}
.smallchooseType .smalltypelist{
  margin-top: 10px;
}
.smallchooseType .smalltypelist p{
  font-size: 18px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.smallchooseType .smalltypelist p:hover{
  background-color: lightgray;
}
.smallstoryBox{
  margin-top: 10px;
  width: 95%;
  margin-left: 10px;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 5px 5px lightgray;
  position: relative;
  padding-bottom: 100px;
  display: none;
}
.smallbackphoto{
  width: 60%;
  height: 200px;
  margin: auto;
  margin-top: 10px;
  display: none;
  margin-bottom: 10px;
}
.smallbackphoto img{
  width: 100%;
  height: 100%;
}
.smallstoryBox .smalladdImg{
  width: 100%;
  position: relative;
  background-color: whitesmoke;
  cursor: pointer;
}
.smallformtop{
  height: 150px;
  background-color: #f9f9f9;
  margin-top: 20px;
  margin-bottom: 20px;
}
#smallupload{
  background-color: #fff;
}
#upsubmit{
  width: 100px;
  margin: auto;
}
.smalladdImg .smallbackImg{
  height: 80px;
  width: 80px;
  position: absolute;
  top: 40px;
  left: 20%;
  background-image: url(../assets/img.png);
  background-size: 100% 100%;
}
.smalladdImg p{
  height: 150px;
  width: 100px;
  font-size: 20px;
  line-height: 150px;
  position: absolute;
  left: 55%;
  color: gray;
}
.smallstoryBox .smallstoryHead{
  height: 100px;
  width: 100%;
}
#smallstoryHead{
  height: 100px;
  width: 80%;
  margin-left: 10%;
  padding-left: auto;
  text-align: center;
  border: none;
  font-size: 24px;
  border-bottom: 1px solid #ebebeb;
  font-weight: bold;
}
#smallstoryHead::placeholder{
  color: #ebebeb;
}
.smalladdStoryTip{
  height: 50px;
  width: 50px;
  background-image: url(../assets/wz.png);
  background-size: 100% 100%;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  left: 43%;
}
#smallcontentBox{
  width: 100%;
}
.smallmodel{
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 99;
  margin-top: -130px;
  background-color: #fff;
  overflow: auto;
}
.smallmodel .loginClose{
  width: 50px;
  height: 50px;
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  float: right;
  margin-right:10px;
  cursor: pointer; 
}
.smallmodel .box{
  margin-top: 100px;
}
#smallpassword{
  margin-top: 50px;
}
#smallregistpsw{
  margin-top: 30px;
}
#smallrpsw{
  margin-top: 30px;
}




a{
  display: block;
  height: 100%;
  color: gray;
  text-decoration: none;
}
.head{
  height: 80px;
  width: 100%;
  min-width: 1500px;
  background-color: #fff;
  position: fixed;
  border-bottom: 1px solid lightgray;
  z-index: 998;
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
  min-width: 500px;
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
  position: relative;
}
.center .d{
  display: block;
  width: 14px;
  height: 14px;
  background-color: #FFF;
  position: absolute;
  top: 55px;
  left: 22px;
  border-top: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  -o-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
  display: none;
}
.setting{
  width: 200px;
  height: 180px;
  position: absolute;
  border: 1px solid #eff0f0;
  top: 65px;
  left: -120px;
  z-index: 99999;
  background-color: #fff;
  display: none;
}
.setting ul{
  padding: 0;
  margin: 0;
}
.setting li{
  list-style: none;
  height: 60px;
  width: 200px;
  line-height: 60px;
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid #eff0f0;
}
.setting li:hover{
  background-color: whitesmoke;
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
  margin-left: 20%;
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
.writeBox{
  width: 100%;
  height: 110%;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  display: none;
  top: 0;
  overflow: auto;
  padding-bottom: 200px;
}
.publish{
  height: 50px;
  width: 100px;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
  border: 1px solid #27c4b5;
  border-radius: 20px;
  margin-left: 50px;
}
.storyClose{
  font-size: 20px;
  margin-left: 50px;
  height: 50px;
  width: 80px;
  border: 1px solid #27c4b5;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
}
.chooseType{
  height: 350px;
  width: 500px;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 10px 10px gray;
  margin-left: calc(50% - 250px);
  margin-top: 200px;
}
.chooseType .text1{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
.chooseType .text2{
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
}
.chooseType .typelist{
  margin-top: 50px;
}
.typelist p{
  font-size: 18px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
.typelist p:hover{
  background-color: lightgray;
}
.storyBox{
  margin-top: 100px;
  width: 70%;
  margin-left: 15%;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 5px 5px lightgray;
  position: relative;
  padding-bottom: 100px;
  display: none;
}
.backphoto{
  width: 600px;
  height: 500px;
  margin: auto;
  margin-top: 10px;
  display: none;
}
.backphoto img{
  width: 100%;
  height: 100%;
}
.storyBox .addImg{
  width: 100%;
  position: relative;
  background-color: whitesmoke;
  cursor: pointer;
}
.formtop{
  height: 150px;
  background-color: #f9f9f9;
  margin-top: 20px;
  margin-bottom: 20px;
}
#upload{
  background-color: #fff;
}
#upsubmit{
  width: 100px;
  margin: auto;
}
.addImg .backImg{
  height: 80px;
  width: 80px;
  position: absolute;
  top: 40px;
  left: 40%;
  background-image: url(../assets/img.png);
  background-size: 100% 100%;
}
.addImg p{
  height: 150px;
  width: 100px;
  font-size: 20px;
  line-height: 150px;
  position: absolute;
  left: 48%;
  color: gray;
}
.storyBox .storyHead{
  height: 150px;
  width: 100%;
}
#storyHead{
  height: 100px;
  width: 80%;
  margin-left: 10%;
  padding-left: auto;
  text-align: center;
  border: none;
  font-size: 24px;
  border-bottom: 1px solid #ebebeb;
  font-weight: bold;
}
#storyHead::placeholder{
  color: #ebebeb;
}
.addStoryTip{
  height: 50px;
  width: 50px;
  background-image: url(../assets/wz.png);
  background-size: 100% 100%;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  left: 48%;
}
#contentBox{
  width: 100%;
}
</style>
  