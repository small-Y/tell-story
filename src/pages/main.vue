<template>
    <div class="main">
      <div class="mainLeft">
        <swiper></swiper>
      </div>
      <div class="mianRight">
        <div class="hottype">
          <span><div style="border: 1px solid black;width: 80px;"></div>热门类型</span>
          <section>

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
import axios from 'axios'
import swiper from '../components/swiper'
export default {
  name: 'Main',
  components: {
    swiper
  },
  data () {
    return {
      typeList: '',
      niceList: ''
    }
  },
  mounted(){

  },
  methods:{

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
.mianRight{
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
</style>