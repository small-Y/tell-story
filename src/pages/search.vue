<template>
    <div class="search">
        <header class="head">
            <div class="headimg"></div>
            <div class="demo-input-suffix">
                <el-input
                    placeholder="请输入内容"
                    v-model="searchCon">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
            <div class="headint">
                <div class="back" @click="goBack">返回</div>
            </div>
        </header>
        <div class="searchbox">
            <div class="hotsearch">
                <div class="searchpre">
                     <p>热门搜索</p>
                    <section v-for="item in hotsearch" :key="item.id">
                        {{item.content}}
                    </section>
                </div>
               <div class="searchnext">
                    <story :list="searchresult"></story>
               </div>
            </div>
            <div class="searchhistory">
                <p>搜索历史</p>
                <section v-for="item in searchhistory" :key="item.id">
                    {{item.content}}
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import qs from 'qs'
import story from '../components/story'
export default {
    data () {
        return {
            searchCon:'',
            hotsearch:'',
            searchresult:[],
            hotsearch:[],
            searchhistory:[]
        }
    },
    components: {
        story
    },
    methods: {
      goBack:function(){
        window.history.back();
      },
      init:function(){
        var initwidth=document.body.clientWidth;
        if(initwidth<=900){
            $(".searchbox").css("width","100%");
            $(".searchhistory").css("display","none");
        }else{
            $(".searchbox").css("width","80%");
            $(".searchhistory").css("display","block");
        }
        window.onresize = function(){
            var width=document.body.clientWidth;
            if(width<=900){
                $(".searchbox").css("width","100%");
                $(".searchhistory").css("display","none");
            }else{
                $(".searchbox").css("width","80%");
                $(".searchhistory").css("display","block");
            }
        }

        this.$http.get("/storyapi/getsearch").then(res=>{
            if(res.data.code==1){
                this.hotsearch =res.data.msg;
            }
        },err=>{
            console.log(err);
            
        })

        this.$http.get("/storyapi/getsearch",{
            params:{
                username:document.cookie.split("=")[1]
            }
        }).then(res=>{
            if(res.data.code==1){
                this.searchhistory =res.data.msg;
            }
        },err=>{
            console.log(err);
            
        })
      }
    },
    mounted () {
        this.init();
    },
    watch: {
        searchCon:function(n,o){
            var arr = document.cookie.split("="); 
            if(arr[1]!=''){
                var username=arr[1];
                this.$http.post("/storyapi/search",qs.stringify({
                    'searchcon':n,
                    'username':username
                })).then(res=>{
                    if(res.data.code==1){
                        this.searchresult =res.data.msg;
                        if(res.data.msg.length>0){
                            $(".searchpre").css('display','none');
                            $(".searchnext").css('display','block');
                        }else{
                            $(".searchpre").css('display','block');
                            $(".searchnext").css('display','none');
                        }
                    }
                },err=>{
                    console.log(err);
                    
                })
            }else{
                this.$alert('请先登录', '提示');
            }
        }
    }
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
.demo-input-suffix{
    width: 40%;
    position: absolute;
    top: 20px;
    left: 20%;
}
.searchbox{
    width: 80%;
    margin-left: 15%;
    position: relative;
}
.searchbox .hotsearch{
    width: 70%;
    position: absolute;
}
.searchbox .searchhistory{
    width: 30%;
    position: absolute;
    right: -5%;
    padding-left: 50px;
}
.hotsearch p{
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    height: 50px;
}
.hotsearch section{
    height: 60px;
    cursor: pointer;
    border-bottom: 1px solid lightgray;
    line-height: 60px;
    padding-left: 5px;
    font-size: 16px;
    color: #737373;
    background: url(../assets/rightjt.png) no-repeat 97% center;
    background-size: 10px 16px;
}
.hotsearch section:hover{
    background-color: whitesmoke;
}
.searchhistory p{
    margin-top: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    padding-left: 30px;
}
.searchhistory section{
    height: 50px;
    border-bottom: 1px solid lightgray;
    line-height: 50px;
    padding-left: 50px;
    font-size: 14px;
    color: #737373;
}
</style>