<template>
    <nav class="nav">

        <div class="navbar navbar-expand-sm bg-light navbar-light ">
                <span class="navbar-brand">
                    <span class="logoBox">
                        <img src="./@assets/images/logo.png" alt="">
                        <span class="vBar"></span>
                    </span>
                </span>
            <button class="navbar-toggler"  @click="dropExtend()" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span v-if="dropDown">
                                <span class="hBar"></span>
                                <span class="hBar mt10"></span>
                    </span>
                <span v-else  style="font-size: 2rem">&times;</span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav nav_list">
                    <li v-for="item in navLists" class="nav-item" >
                        <router-link :to="item.url" :class="{'nav-item-on':item.url==router}" >{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                navLists:[{
                    'name':'首页',
                    'url':'/'
                },{
                    'name':'课程',
                    'url':'/courses'
                },{
                    'name':'师资',
                    'url':'/teachers'
                },{
                    'name':'作品集',
                    'url':'/works'
                },{
                    'name':'选校',
                    'url':'/schools'
                },{
                    'name':'评估',
                    'url':'/wenjuan'
                }],
                dropDown:true,
                router:'/'
            }
        },
        created(){
            this.router=this.$route.path
        },
        methods:{
            dropExtend:function () {

            }
        }
    }
</script>

<style scoped>
    .hBar{display: block;border-top: 1px solid #212536;width: 15px;}
    .vBar{display: inline-block;border: 1px solid #D9D9D9;height: 35px;margin-left: 20px;vertical-align: middle;}
    .nav{
        position: fixed;
        top: 0px;
        width: 100%;
        min-height: 60px;
        height: 60px;
        background-color: rgb(255, 255, 255);
        display: block;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        z-index: 100;
        box-shadow: 1px 0px 10px 0px rgba(89,89,89,0.24);
        font-size: 15px;
        line-height: 60px;
    }
    .navbar-collapse{
        justify-content: flex-end
    }
    .bg-light{
        background-color: rgb(255, 255, 255) !important;
        box-shadow: 1px 0px 10px 0px rgba(89,89,89,0.24);
    }
    .navbar{padding: 0;}
    .nav_bar{
        margin: auto;
    }
    .nav-item-on{
        color: #EB625D;
    }
    .nav_list{
        color: rgb(83, 86, 86) !important;
        font-weight:700 ;
    }
    .nav li a{
        padding: 15px;
    }
    .nav li a:hover{
        color: rgb(235, 98, 93);
        text-decoration: none;
    }

    @media (min-width: 768px){
        .navbar{padding: 0 60px;}
        .navbar-brand{margin-left: 100px;}
    }
    @media (min-width: 992px) {
        .navbar{padding: 0 80px;}
    }
    /* 大屏幕（大桌面显示器，大于等于 1200px） */
    @media (min-width: 1200px) {
        .navbar{padding: 0 100px;}
        .navbar-brand{margin-left: 200px;}
    }
    @media (max-width: 768px) {
        .navbar{padding: 0 30px;}
        .logoBox{
            float: left;
            margin-left:20px ;
        }
        .nav_drop{
            color: rgb(83, 86, 86);
            font-weight:700 ;
            border: none;
            margin-top: 20px;
            min-width: 27rem;
            left: -10px !important;
        }
        .nav_drop li{
            padding:0 10px;
            border-bottom:1px solid #cccccc ;
        }
    }



</style>