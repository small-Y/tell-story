<template>
    <div class="hotlist">
            <p><span>{{title}}</span></p>
            <div class="hotbottom">
                <div class="hotleft"><img :src='"http://localhost:3000/uploads/"+list[0].imgsrc+".jpg"' alt=""></div>
                <div class="hotright">
                     <div v-for="(item,index) in list" :key="list.id">
                            <router-link :to="/user/+item._id">
                                {{index+1}}.{{item.storyname}}————{{item.username}}
                            </router-link>
                        
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name:'Hotlist',
        props:['list','title'],
        data () {
            return {
                
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
.hotlist{
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
    padding-top: 10px;
}
.hotlist p{
    height: 50px;
    width: 100%;
    font-size: 20px;
    line-height: 50px;
}
.hotbottom{
    width: 100%;
    height: 200px;
    position: relative;
}
.hotleft{
    width: 30%;
    height: 200px;
    position: absolute;
    left: 0;
}
.hotleft img{
    width: 100%;
    height: 100%;
}
.hotright{
    width: 70%;
    height: 200px;
    position: absolute;
    right: 0;
}
.hotright div{
    height: 50px;
    width: 100%;
    overflow: hidden;
    line-height: 50px;
    padding-left: 40px;
    font-size: 18px;
}
</style>