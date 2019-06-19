<template>
    <div>
        <img src="" class="img-fluid" alt="">
        <div class="course-bar">
            <div class="container">
                <ul class="top-bar  col-sm-10 col-12">
                    <li v-for="item in navLists.type">
                        <span class="color-on">{{item}}</span>
                    </li>
                </ul>
                <div class="classify">
                    <div class="classify-works mt15 d-flex" v-for="item in navLists.classify">
                        <span>{{item.name}}</span>
                        <b class="b-line"></b>
                        <span  v-for="cats in item.cats">{{cats}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toper",
        data(){
            return{
                navLists:{
                    type:['选校'],
                    classify:[{
                        name:'国家',
                        cats:['全部','美国','英国','澳洲','欧洲','香港/新加坡','日本','加拿大','其他']
                    },{
                        name:'专业',
                        cats:['全部','建筑','城市设计','景观','城市规划','动画','纯艺','工业设计']
                    },{
                        name:'标签',
                        cats:['IVY/常春藤联盟','QS排名']
                    }],
                }
            }
        }
    }
</script>

<style scoped>
    .course-bar{background-color: #F1F1F1;padding: 30px;color: #000;}
    .top-bar{display: flex;border-bottom: 1px solid #B2B2B2;}
    .top-bar li{flex: 1;  font-size: 18px;font-weight: bold;margin-bottom: 8px;text-align: left; }
    .classify-works{display: flex;font-size: 15px;flex-wrap: wrap;}
    .classify-works span{display: inline-block;justify-content:space-between;padding: 8px 10px ;cursor: pointer;}
    .color-on{color: rgb(235, 98, 93);}
    .b-line{border-right: 1px solid #9E9E9E;height: 16px;margin-top: 8px;}
    @media (min-width: 992px) {
        .classify-works span{
            padding: 0 20px;
        }
        .b-line{margin: 0;}
    }
</style>