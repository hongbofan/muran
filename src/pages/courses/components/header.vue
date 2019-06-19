<template>
    <div>
        <img src="" class="img-fluid" alt="">
        <div class="course-bar">
            <div class="container">
                <ul class="top-bar col-md-8 col-sm-10 col-12">
                   <li v-for="item in navLists.type">
                        <span>{{item}}</span>
                   </li>
                </ul>
                <div class="classify">
                    <div class="classify-works mt15" v-for="item in navLists.classify">
                        <span>{{item.name}}</span>
                        <b class="b-line"></b>
                        <span v-for="cats in item.cats">{{cats}}</span>
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
                    type:['全部','设计课','实验室','团队项目','公开课'],
                    classify:[{
                        name:'学科',
                        cats:['全部','建筑','城市设计','景观','规划','动画','纯艺','工业设计']
                    },{
                        name:'方向',
                        cats:['全部','设计理念','逻辑','软件提升','图纸表达','申请经验']
                    },{
                        name:'难度',
                        cats:['全部','初级','进阶','高级']
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
    .classify-works span{display: inline-block;justify-content:space-between;padding: 8px 10px ;}
    .color-on{color: rgb(235, 98, 93);}
    .b-line{border-right: 1px solid #9E9E9E;height: 16px;margin-top: 8px;}
    @media (min-width: 992px) {
        .classify-works span{
            padding: 0 20px;
        }
        .b-line{margin: 0;}
    }
</style>