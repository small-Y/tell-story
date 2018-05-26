<template>
    <div class="mymain">
        <header class="head">
                <div class="headimg"></div>
                <div class="headint">
                    <div class="back" @click="goBack">返回</div>
                </div>
        </header>
        <div class="my">
            <div class="myimg"></div>
            <p class="myname"></p>
            <div class="concern">
                <p>
                    <span>我关注的</span>
                    <br>
                    <span>0</span>
                </p>
                <p>
                    <span>关注我的</span>
                    <br>
                    <span>0</span>
                </p>
            </div>
            <div class="mystory">
                <div class="storyhead">
                    <span class="active" @click='boxchange'>我的故事</span>
                    <span @click='boxchange'>我的收藏</span>
                </div>
                <div class="storybox">
                    <div class="box1">
                        <story :list="storylist"></story>
                    </div>
                    <div class="box2">
                        2
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import qs from 'qs'
    import $ from 'jquery'
    import story from '../components/story'
    export default {
        name:'mymain',
        components: {
            story
        },
        data () {
            return {
                user:'',
                storylist:[]
            }
        },
        mounted () {
          this.init();  
        },
        methods: {
            init:function(){
                var initwidth=document.body.clientWidth;
                if(initwidth<=900){
                    $(".my").css({"width":"100%","margin-left":"0px"});

                }else{
                    $(".my").css({"width":"70%","margin-left":"15%"});
                }
                window.onresize = function(){
                    var width=document.body.clientWidth;
                    if(width<=900){
                        $(".my").css({"width":"100%","margin-left":"0px"});
                    }else{
                        $(".my").css({"width":"70%","margin-left":"15%"});
                    }
                }

                var arr = document.cookie.split(";"); 
                if(arr[0]!=''){
                    this.user=arr[0].split("=")[1];
                    $('.myname').text(this.user);
                }

                this.$http.get("/storyapi/storylist",{
                    params: {
                        'username':this.user,
                    }
                }).then(res=>{
                    if(res.data.code==1){
                        this.storylist =res.data.msg;
                    }
                },err=>{
                    console.log(err);
                    
                })
            },
            goBack:function(){
                window.history.back();
            },
            boxchange:function(e){
                $(".storyhead span").removeClass('active');
                $(e.target).addClass('active');
                console.log($(e.target)[0].textContent);
                if($(e.target)[0].textContent=='我的故事'){
                    $('.box1').css('display','block');
                    $('.box2').css('display','none');
                }else{
                    $('.box1').css('display','none');
                    $('.box2').css('display','block');
                }
            }
        },
    }
</script>

<style scoped>
.head{
  height: 80px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
  z-index: 99999;
}
.head .headimg{
  height: 50px;
  width: 50px;
  border-radius: 20px;
  position: absolute;
  top: 15px;
  left: 5px;
  background-image: url(../assets/logo.png);
  background-size: 100% 100%;
  cursor: pointer;
}
.head .headint{
  width: 100px;
  position: absolute;
  right: 10px;
  top: 15px;
}
.headint div{
  float: left;
  cursor: pointer;
}
.headint .back{
  height: 50px;
  width: 100px;
  border-radius: 10px;
  background-color: green;
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
}
.my{
    width: 70%;
    margin-left: 15%;
    margin-top: 50px;
}
.myimg{
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin: auto;
    margin-top: 50px;
    background-image: url(../assets/default_hp.png);
    background-size: 100% 100%;
}
.myname{
    height: 80px;
    width: 100%;
    font-size: 45px;
    line-height: 80px;
    text-align: center;
    margin-top: 30px;
}
.concern{
    margin: auto;
    height: 80px;
    width: 130px;
}
.concern p{
    float: left;
    text-align: center;
}
.concern p:nth-of-type(2){
    border-left: 1px solid gray;
    padding-left: 8px;
}
.mystory{
    width: 90%;
    border-top: 1px solid lightgray;
    margin: auto;
}
.storyhead{
    height: 50px;

}
.storyhead span{
    display: block;
    width: 50%;
    height: 50px;
    float: left;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    cursor: pointer;
}
.active{
    font-weight: bold;
    border-top: 2px solid black;
}
.box2{
    display: none;
}
</style>