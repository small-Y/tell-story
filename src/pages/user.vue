<template>
    <div class="user">
        <header class="head">
            <div class="headimg"></div>
            <div class="headint">
                <div class="back" @click="goBack">返回</div>
            </div>
        </header>
        <div class="thisstory">
            <div class="thishead">
                <img :src='"http://localhost:3000/uploads/"+content.imgsrc+".jpg"' alt="背景图">
            </div>
            <p class="thisname">{{content.storyname}}</p>
            <p class="thistype"><img src="../assets/green.png" alt="">&nbsp;{{content.storytype}}</p>
            <div class="thisuser"><img src="../assets/default_hp.png" alt="">&#x3000;{{content.username}}</div>
            <div class="thiscon" v-for="item in content.content" :key="item.id">
                {{item}}
            </div>
            <div class="thissc"><img src="../assets/sc.png" alt="">&nbsp;0收藏&#x3000;</div>
            <div class="thispl">
                <p><img src="../assets//default_hp.png" alt="用户头像"><input type="text" name="pinlun" placeholder="发表你的评论"></p>
                <div @click="pinlun">发表评论</div>
            </div>
            <div class="plbox" >
                <section v-for="item in pinluncon" :key="item.id">
                    <div class="secleft"><img src="../assets/default_hp.png" alt=""></div>
                    <div class="secright">
                        <p class="plname">{{item.username}}</p>
                        <span>{{item.content}}</span>
                        <div class="answ">
                            <p>{{item.date}}</p>
                            <div @click="answer">回复</div>
                        </div>
                    </div>
                </section>
                <section v-for="item in answercon" :key="item.id">
                    <div class="secleft"><img src="../assets/default_hp.png" alt=""></div>
                    <div class="secright">
                        <p class="plname">{{item.username}}</p>
                        <span>回复{{item.targetname}}: {{item.content}}</span>
                        <div class="answ">
                            <p>{{item.date}}</p>
                            <div @click="answer">回复</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import qs from 'qs'
export default {
    name:"user",
    data () {
        return {
            content:"",
            pinluncon:"",
            answercon:""
        }
    },
    mounted () {
        this.init();
    },
    methods: {
        goBack:function(){
            window.history.back();
        },
        init:function(){
            var initwidth=document.body.clientWidth;
            if(initwidth<=900){
                $(".thisstory").css("width","100%");
            }else{
                $(".thisstory").css("width","700px");
            }
            window.onresize = function(){
                var width=document.body.clientWidth;
                if(width<=900){
                    $(".thisstory").css("width","100%");
                }else{
                    $(".thisstory").css("width","700px");
                }
            }

            this.$http.post("/storyapi/user",qs.stringify({
                'id':this.$route.params.title,
            })).then(res=>{
                if(res.data.code==1){
                    this.content =res.data.msg[0];
                }
            },err=>{
                console.log(err);
                
            })

            this.$http.post("/storyapi/getpinlun",qs.stringify({
                'storyid':this.$route.params.title,
            })).then(res=>{
                if(res.data.code==1){
                    this.pinluncon =res.data.msg;
                }
            },err=>{
                console.log(err);
                
            })

            this.$http.post("/storyapi/getanswer",qs.stringify({
                'storyid':this.$route.params.title,
            })).then(res=>{
                if(res.data.code==1){
                    this.answercon =res.data.msg;
                }
            },err=>{
                console.log(err);
                
            })
        },
        pinlun:function(){
            var plcon=$(".thispl input").val();
            var arr = document.cookie.split("=");
            if(arr[1]!=''){
                if(plcon!=''){
                     var username=arr[1];
                    this.$http.post("/storyapi/pinlun",qs.stringify({
                        'pinlun':plcon,
                        'storyid':this.$route.params.title,
                        'username':username,
                        'targetname':this.content.username
                    })).then(res=>{
                        if(res.data.code==1){
                            history.go(0) 
                        }
                    },err=>{
                        console.log(err);
                        
                    })
                }else{
                    this.$alert('内容不能为空', '提示');
                }
            }else{
                this.$alert('请先登录', '提示');
            }
        },
        answer:function(e){
            var that=this;
            var huifuname=$(e.target).parent().parent().children().eq(0)[0].textContent;
            var huifuinput=$("<input style='margin-left:80px;width:70%;padding:5px 5px;' type='text' name='pinlun' placeholder='回复"+huifuname+"'>")
            var huifubtn=$("<div style='height:30px;width:50px;border-radius:10px;float:right;background-color:#27c4b5;text-align:center;line-height:30px;cursor: pointer;'>回复</div>").on('click',function(){
                
                var arr = document.cookie.split("=");
                if(arr[1]!=''){
                    if(huifuinput.val()!=''){
                        var username=arr[1];
                        that.$http.post("/storyapi/answer",qs.stringify({
                            'answer':huifuinput.val(),
                            'storyid':that.$route.params.title,
                            'username':username,
                            'targetname':huifuname
                        })).then(res=>{
                            if(res.data.code==1){
                                history.go(0) 
                            }
                        },err=>{
                            console.log(err);
                            
                        })
                    }else{
                        that.$alert('内容不能为空', '提示');
                    }
                }else{
                    that.$alert('请先登录', '提示');
                }
            });
            var ansbox=$("<div class='ansbox' style='position:absolute; bottom:0;width:100%;'></div>");
            ansbox.append(huifuinput,huifubtn);
            $(e.target).parent().parent().parent().append(ansbox);
            $(e.target).parent().parent().parent().css("height","150px")
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
  left: 10px;
  background-image: url(../assets/logo.png);
  background-size: 100% 100%;
  cursor: pointer;
}
.head .headint{
  width: 90px;
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
.thisstory{
    width: 700px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
}
.thisstory .thishead{
    width: 100%;
    text-align: center;
}
.thishead img{
    width: 100%;
    margin: auto auto;
}
.thisstory .thisname{
    margin-top: 30px;
    height: 50px;
    line-height: 50px;
    font-size: 50px;
    text-align: center;
}
.thisstory .thistype{
    text-align: center;
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
}
.thistype img{
    height: 16px;
    width: 16x;
}
.thisstory .thisuser{
    height: 50px;
    text-align: center;
    line-height: 50px;
}
.thisuser img{
    height: 38px;
    width: 38px;
}
.thisstory .thiscon{
    margin-top: 50px;
    font-size: 20px;
    padding: 0 8px;
}
.thisstory .thissc{
    height: 50px;
    text-align: right;
    line-height: 50px;
}
.thissc img{
    height: 16px;
    width: 16px;
}
.thisstory .thispl{
    height: 100px;
    margin-top: 10px;
}
.thispl p{
    height: 50px;
}
.thispl img{
    height: 38px;
    width: 38px;
}
.thispl input{
    margin-left: 25px;
    margin-top: 10px;
    padding: 5px 5px;
}
.thispl div{
    height: 30px;
    width: 80px;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
    background-color: #27c4b5;
    cursor: pointer;
    float: right;
}
.plbox{
    width: 100%;
}
.plbox section{
    border-top: 1px solid lightgray;
    margin-top: 10px;
    position: relative;
    width: 100%;
    height: 100px;
}
.secleft{
    width: 10%;
    height: 100px;
    position: absolute;
    left: 0;
}
.secleft img{
    height: 38px;
    width: 38px;
    margin-top: 10px;
}
.secright{
    width: 90%;
    min-height: 100px;
    position: absolute;
    right: 0;
}
.secright .plname{
    margin-top: 10px;
    color: #27c4b5;
    padding-left: 10px;
}
.secright span{
    padding-left: 10px;
}
.secright .answ{
    margin-top: 10px;
    padding-left: 10px;
}
.secright .answ p{
    color: lightgray;
}
.answ div{
    position: absolute;
    bottom: 8px;
    right: 0px;
    color: lightgray;
    cursor: pointer;
}
</style>