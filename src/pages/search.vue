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
    </div>
</template>

<script>
export default {
    data () {
        return {
            searchCon:''
        }
    },
    methods: {
      goBack:function(){
        window.history.back();
      }  
    },
    mounted () {
        
    },
    watch: {
        searchCon:function(n,o){
            console.log(n);
            
        }
    }
}
</script>

<style scoped>
.head{
  height: 80px;
  width: 100%;
  background-color: #fff;
  position: fixed;
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
</style>