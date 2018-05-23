<template>
    <div class="setting">
        <header class="head">
                <div class="headimg"></div>
                <div class="headint">
                    <div class="back" @click="goBack">返回</div>
                </div>
        </header>
        <div class="mysetting">
            <p>设置</p>
            <p>基本资料</p>
            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                <el-form-item label="用户名">
                    <el-input v-model="sizeForm.name" style="width: 45%;"></el-input>
                </el-form-item>
                <el-form-item label="出生日期">
                    <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="sizeForm.sex" size="medium">
                    <el-radio border label="男"></el-radio>
                    <el-radio border label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
            </el-form>
            <span class="redspan3" style="color: red"></span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import qs from 'qs'
export default {
    name:'setting',
    data () {
        return {
            sizeForm: {
                username:'',
                name: '',
                date1: '',
                sex: ''
            }
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
            var arr = document.cookie.split(";");
            if(arr[0]!=''){
                this.sizeForm.username=arr[0].split("=")[1];
            }
        },
        onSubmit() {
            this.$http.post("/storyapi/setting",qs.stringify({
                'username':this.sizeForm.username,
                'name':this.sizeForm.name,
                'date':this.sizeForm.date1,
                'sex':this.sizeForm.sex
            })).then(res=>{
                $(".redspan3").text(res.data);
                document.cookie = 'name'+ "=" +this.sizeForm.name;
            },err=>{
                console.log(err);
                
            })
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
.mysetting{
    width: 80%;
    height: 500px;
    margin-left: 10%;
    margin-top: 40px;
}
.mysetting p:nth-of-type(1){
    font-size: 40px;
    height: 80px;
    line-height: 80px;
    margin-left: 10px;
}
.mysetting p:nth-of-type(2){
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
}
</style>