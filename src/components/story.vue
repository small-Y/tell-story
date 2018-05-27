<template>
    <div class="story">
      <div class="sbox" v-for="(L,index) in list">
        <div class="top">
          <div class="storyi">
            <img src="../assets/default_hp.png" alt="头像">
          </div>
          <div class="storyn">
            <p>{{L.username}}</p>
            <p>{{L.date.slice(0,11)}}</p>
          </div>
          <div class="storyt">
            {{L.storytype}}
          </div>
        </div>
        <router-link :to="/user/+L._id">
          <div class="bottom">
            <div class="bimg">
              <img :src='"http://localhost:3000/uploads/"+L.imgsrc+".jpg"' alt="背景图">
            </div>
            <div class="storyh">
              {{L.storyname}}
            </div>
            <div class="storyc">
              {{L.content[0]}}
            </div>
          </div>
        </router-link>
        <div class="share">
          <div class="sharepl sharebox">
            <p></p>
            <span>{{L.noticecount}}</span>
          </div>
          <div class="sharesc sharebox">
            <p></p>
            <span>{{L.nicecount}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Story',
  props:['list'],
  data () {
    return {

    }
  },
  methods: {
    gouserpage:function(id){
      console.log(id);
      
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
.story{
  margin-bottom: 50px;
  }
.sbox{
  border-bottom: 1px solid #b3b3b3;
  margin-top: 20px;
}
.top{
  height: 50px;
  width: 100%;
  position: relative;
}
.top div{
  position: absolute;
}
.top .storyi{
  top: 2px;
  left: 5px;
}
.top .storyn{
  top: 2px;
  left: 80px;
}
.storyn p:nth-of-type(1){
   color: #27c4b5;
}
.storyn p:nth-of-type(2){
  color: #b3b3b3;
}
.top .storyt{
  top: 2px;
  right: 5px;
  color: #b3b3b3;
}
.storyi{
  height: 50px;
  width: 50px;
  border-radius: 25px;
}
.storyi img{
  height: 100%;
  width: 100%;
}
.bottom{
  height: 250px;
  width: 100%;
  margin-top: 10px;
}
.bottom .bimg{
  height: 150px;
  width: 60%;
}
.bimg img{
  height: 100%;
}
.bottom .storyh{
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 35px;
  margin-left: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.bottom .storyc{
  height: 50px;
  width: 100%;
  margin-top: 5px;
  padding-left: 5px;
  line-height: 50px;
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.share{
  height: 50px;
  width: 100%;
  position: relative;
}
.share .sharebox{
  height: 50px;
  width: 80px;
  position: absolute;
  cursor: pointer;
}
.sharebox p{
  position: absolute;
  height: 16px;
  width: 16px;
  margin-top: 15px;
  margin-left: 8px;
}
.sharebox span{
  position: absolute;
  height: 50px;
  width: 50px;
  right: 2px;
  line-height: 50px;
  text-align: center;
  color: #b3b3b3;
}
.sharebox span:hover{
  color: #333;
}
.share .sharepl{
  right: 100px;
}
.sharepl p{
  background-image: url(../assets/pinlun.png);
  background-size: 100% 100%;
}
.share .sharesc{
  right: 10px;
}
.sharesc p{
  background-image: url(../assets/sc.png);
  background-size: 100% 100%;
}
</style>