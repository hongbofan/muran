<template>
    <div style="width:100%;margin:20px auto;height: 100%;">
        <div id="myCarousel" class="carousel slide" data-ride="carousel"  >
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner">
                <div class="carousel-item"  v-for="(item,index) in imgList" :class="{active:index==0}">
                    <img :src="item.url"  alt="" class="img-fluid">
                </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slider",
        data(){
            return{
                imgList:[
                    {url:require('../../../assets/images/slider/slider1.jpg')},
                    {url:require('../../../assets/images/slider/slider1.jpg')},
                    {url:require('../../../assets/images/slider/slider1.jpg')}
                ]
            }
        }
    }
</script>

<style scoped>
    .carousel-indicators li{
        background-color: rgba(0, 0, 0,0.4);
        height: 10px;
        width: 0px;
        border-radius:10px ;
        padding-left: 40px;
        border: none;
    }
    .carousel-indicators li.active{
        background-color: rgba(235,98,93,1)
    }
</style>