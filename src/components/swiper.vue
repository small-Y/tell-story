<template>
    <div class="swiper">
      <el-carousel autoplay height="350px">
        <el-carousel-item v-for="item in 3" :key="item">
            <img :src='"../assets/"+item+".png"' alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>

  <script>
      export default {
        name: 'Swiper',
        data () {
            return {
                
            }
        }
      }
  </script>

  <style scoped>
    .swiper{
        height: 350px;
        width: 900px;
        margin-top: 20px;
        margin-left: 18%;
    }
    .el-carousel__item img{
        height: 100%;
        width: 100%;
    }
  </style>