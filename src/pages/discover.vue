<template>
    <div class='discover'>
        <div class="mainLeft">
            <div class="storybox">
                <hotlist :list="hotpllist" :title="titles[0]"></hotlist>
                <hotlist :list="hotrslist" :title="titles[1]"></hotlist>
            </div>
        </div>
        <div class="mainRight">
            <div class="hottype">
                <span><div style="border: 1px solid black;width: 80px;"></div>热门类型</span>
                <section>
                <p v-for="item in typeList" :key="item.id">
                    {{item.type}}
                </p>
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
import hotlist from '../components/hotlist'
export default {
    name: 'Discover',
    components: {
        hotlist
    },
    data () {
        return {
            typeList: '',
            niceList: '',
            hotpllist:[],
            hotrslist:[],
            titles:['热评榜','热搜榜']
        }
    },
    mounted () {
        this.init();
    },
    methods: {
        init:function(){
            var initwidth=document.body.clientWidth;
            if(initwidth<=1100){
                $(".mainLeft").css({"width":"100%","margin-top":"0px","min-width":'0px'});
                $(".mainRight").css('display','none');
                $(".storybox").css({"width":"94%","margin-left":"3%"});
                $(".hotleft").css("height","100px");
            }else{
                $(".mainLeft").css({"width":"70%","margin-top":"80px","min-width":'1000px'});
                $(".mainRight").css('display','inline-block');
                $(".storybox").css({"width":"63%","margin-left":"18%"});
                $(".hotleft").css("height","200px");
            }
            window.onresize = function(){
                var width=document.body.clientWidth;
                if(width<=1100){
                    $(".mainLeft").css({"width":"100%","margin-top":"0px","min-width":'0px'});
                    $(".mainRight").css('display','none');
                    $(".storybox").css({"width":"94%","margin-left":"3%"});
                    $(".hotleft").css("height","100px");
                }else{
                    $(".mainLeft").css({"width":"70%","margin-top":"80px","min-width":'1000px'});
                    $(".mainRight").css('display','inline-block');
                    $(".storybox").css({"width":"63%","margin-left":"18%"});
                    $(".hotleft").css("height","200px");
                }
            }

            this.$http.get("/storyapi/hotpllist")
            .then(res=>{
                this.hotpllist=res.data.msg; 
            },err=>{
                console.log(err);
                
            })

            this.$http.get("/storyapi/hotrslist")
            .then(res=>{
                this.hotrslist=res.data.msg; 
            },err=>{
                console.log(err);
                
            })

            this.$http.get("/storyapi/typelist")
                .then(res=>{
                this.typeList=res.data.msg; 
                },err=>{
                console.log(err);
                
                })
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
  margin-top: 80px;
}
.mainRight{
  width: 30%;
  height: 500px;
  display: inline-block;
  margin-top: 80px;
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
.hottype section{
  height: 150px;
}
.hottype section p{
  float: left;
  height: 50px;
  padding: 0 15px;
  text-align: center;
  line-height: 50px;
  background-color: whitesmoke;
  margin: 10px 20px;
  cursor: pointer;
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
.storybox{
  width: 63%;
  margin-left: 18%;
  margin-top: 50px;
}
</style>