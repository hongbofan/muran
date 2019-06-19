<template>
    <div>
        <div class="c_contaian clearfix">
            <p class="fs24 bold ">木苒学舍  <span class="color7">模式+</span> </p>
            <p class="title1" style="width: 180px;"></p>
            <p class="bold fs14"><span class="color8">MTS </span>  <span class="color7">MODE +</span> </p>
            <div class="row courseBox mt40 container">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 courseItem" v-for="item in studyLists">
                    <ul class="courseUl">
                        <li class="studyImg" :style="item.style"></li>
                        <li><p class="bold fs14 mb10">{{item.title}}</p>
                            <p  style="line-height: 16px">{{item.desc}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <router-link to="/">
                <div class="readMore fs14">
                    阅读更多
                    <i class="iconfont icon-qianjinzhuanhuan"></i>
                </div>
            </router-link>
        </div>
        <div class="c_contaian clearfix">
            <p class="fs24 bold ">课程  <span class="color7">体系+</span> </p>
            <p class="title1"></p>
            <p class="bold fs14"><span class="color8">MTS </span>  <span class="color7">ACADEMICS +</span> </p>
            <div class="row courseBox mt40 container">
                <div class="col-lg-3 col-md-6 col-sm-6  courseItem">
                    <ul class="courseUl">
                        <li class="courseImg course_icon1"></li>
                        <li><p class="bold fs14 mb10">STUDIO + SEMINAR</p>
                            <p  style="line-height: 16px">木苒将并行海外名校studio模式的教学设置课程多样性将被极大地丰富</p>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 courseItem">
                    <ul class="courseUl">
                        <li class="courseImg course_icon2"></li>
                        <li ><p class="bold fs14 mb10">实验室</p>
                            <p style="line-height: 16px">将以线上讲座+线下辅导的形式来全面提升学生对于设计的感知和实践</p>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 courseItem">
                    <ul class="courseUl">
                        <li class="courseImg course_icon3"></li>
                        <li ><p class="bold fs14 mb10">OP+</p>
                            <p style="line-height: 16px">由导师开题，学生以组队的方式来完成竞赛或是自由命题的项目</p>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 courseItem">
                    <ul class="courseUl">
                        <li class="courseImg course_icon4"></li>
                        <li ><p class="bold fs14 mb10">LECTURE</p>
                            <p style="line-height: 16px">木苒全球的舍友将为你带来院校最前沿的设计资源，体验将是前所未有的</p>
                        </li>
                    </ul>
                </div>
            </div>
            <router-link to="">
                <div class="readMore fs14">
                    阅读更多
                    <i class="iconfont icon-qianjinzhuanhuan"></i>
                </div>
            </router-link>
        </div>
        <div class="c_contaian clearfix">
            <p class="fs24 bold ">木苒学舍  <span class="color7">选校+</span> </p>
            <p class="title1" style="width: 160px;"></p>
            <p class="bold fs14"><span class="color8">MTS </span>  <span class="color7">SCHOOL-LIST +</span> </p>
            <div class="row courseBox mt40 container">
                <div class="row courseBox schoolBox mt40 container">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 courseItem schoolItem" v-for="item in schoolList">
                        <ul class="courseUl">
                            <li class="schoolImg" :style="item.style"></li>
                            <li><p class="bold fs14" style="color: #070707;">{{item.title}}</p>
                                <p>{{item.abbr}}</p>
                                <p>{{item.name}}</p>
                                <p>{{item.desc}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <router-link to="/">
                <div class="readMore fs14">
                    阅读更多
                    <i class="iconfont icon-qianjinzhuanhuan"></i>
                </div>
            </router-link>
        </div>
        <div class="c_contaian clearfix">
            <p class="fs24 bold ">木苒  <span class="color7">作品集+</span> </p>
            <p class="title1" style="width: 160px;"></p>
            <p class="bold fs14"><span class="color8">MTS </span>  <span class="color7">PORTFOLIO +</span> </p>
            <div class="row courseBox mt40 container">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12 pr mb10 workItems oh" v-for="item in workImgs" >
                    <img :src="item.src" class="img-fluid" alt="">
                    <div class="pa h imgShade">
                    </div>
                    <div class="descBox">
                        <p class="bold fs14">{{item.school}}</p>
                        <p class="title2" ></p>
                        <p>{{item.name}}{{item.desc}}</p>
                    </div>
                </div>
            </div>
            <router-link to="/">
                <div class="readMore fs14">
                    阅读更多
                    <i class="iconfont icon-qianjinzhuanhuan"></i>
                </div>
            </router-link>
        </div>
        <div class="c_contaian clearfix">
            <p class="fs24 bold ">木苒  <span class="color7">团队+</span> </p>
            <p class="title1" style="width: 160px;"></p>
            <p class="bold fs14"><span class="color8">MTS </span> <span class="color7">FACULTY  +</span> </p>
            <div class="row courseBox mt40 container">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 pr mb20  oh" v-for="item in teamLists" >
                    <div class="teamItem tl" >
                        <div class="teamImg w" :style="item.style"></div>
                        <div style="border-bottom:1px solid #D8D8D8; ">
                            <h1 class="fs18 color11  mt10">{{item.name}}</h1>
                            <p class="fs15 color9">{{item.school}}</p>
                            <p class="fs15 color9">{{item.edu}}</p>
                        </div>
                        <p class="mt20 fs14 color10">{{item.skill}}</p>
                        <p class="fs14 color10">{{item.desc}}</p>
                    </div>

                </div>
            </div>
            <router-link to="/">
                <div class="readMore fs14">
                    阅读更多
                    <i class="iconfont icon-qianjinzhuanhuan"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contain",
        data(){
            return{
                studyLists:[{
                    title:'不止于专属的留学支持',
                    desc:'对学生的申请进行专属的全方位留学规划定制',
                    style:{
                        'background-position': '-4px -8px'
                    }
                },{
                    title:'不止于海外名校的设计理念',
                    desc:'模拟名校的建筑学课程体系，并行mind+hand的渗透式教学体验',
                    style:{
                        'background-position': '-355px -8px'
                    }
                },{
                    title:'不止于强大的菁英讲师团队',
                    desc:'木苒团队全部由来自于全球最前沿领域的顶尖院校',
                    style:{
                        'background-position': '-744px -8px'
                    }
                },{
                    title:'不止于跨领域的多平台交流',
                    desc:'木苒学舍坚信跨领域的互构始终是不断保持创新的根本',
                    style:{
                        'background-position': '-1094px -8px'
                    }
                },],
                workImgs:[
                    {src:require('../../../assets/images/works/works1.jpg'),
                        school:'康奈尔大学',
                        name:'张牧野',
                        desc:' | 人大附中 美本 '
                    },
                    {src:require('../../../assets/images/works/works2.jpg'),
                        school:'建筑联盟 AA  建筑&城市设计 DRL',
                        name:'陈昊',
                        desc:' | 南加州大学 Architecture Study '
                    },{src:require('../../../assets/images/works/works3.jpg'),
                        school:'曼彻斯特大学',
                        name:'田雨翔 ',
                        desc:' | 河北工业大学 建筑学'
                    }, {src:require('../../../assets/images/works/works4.jpg'),
                        school:'密西根大学',
                        name:'徐阳',
                        desc:' | 匹兹堡大学 Architecture Study '
                    },
                ],
                teamLists:[
                    {name:'顾磊',
                    school:'伊利诺伊香槟-厄本那分校',
                    edu:'建筑学硕士',
                        skill:'建筑 | 艺术设计',
                        desc:'MADA s.p.a.m. 马达思班',
                    style:{
                        'background-position': '-127px -62px'
                    }},{name:'张少鹏',
                        school:'伊利诺伊香槟-厄本那分校',
                        edu:'建筑学硕士',
                        skill:'建筑 | 城市设计 | 交互',
                        desc:'Steven Holl Architects',
                        style:{
                            'background-position': '-498px -62px'
                        }},{name:'陈海童',
                        school:'伊利诺伊香槟-厄本那分校',
                        edu:'建筑学硕士',
                        skill:'建筑 | 城市设计 | 交互',
                        desc:'Steven Holl Architects',
                        style:{
                            'background-position': '-870px -62px'
                        }},{name:'温昊',
                        school:'AA建筑联盟学院',
                        edu:'建筑学硕士',
                        skill:'建筑 | 城市设计 | 交互',
                        desc:'Steven Holl Architects',
                        style:{
                            'background-position': '-1237px -62px'
                        }},
                ],
                schoolList:[
                    {
                        title:'Massachusetts Institute of Technology',
                        abbr:'MIT',
                        name:'麻省理工学院 | 美国 ',
                        desc:'世界排名-2',
                        style:{
                            'background-position': '50px 0'
                        }
                    },{
                        title:'University Collage London ',
                        abbr:'UCL',
                        name:'伦敦大学学院 | 英国 ',
                        desc:'世界排名 - 1',
                        style:{
                            'background-position': '-318px 0'
                        }
                    },{
                        title:'Havard University ',
                        abbr:'GSD',
                        name:'哈佛大学 | 美国 ',
                        desc:'世界排名 - 5 ',
                        style:{
                            'background-position': '-680px 0px'
                        }
                    },{
                        title:'University of California, Berkeley ',
                        abbr:'UCB',
                        name:'加州大学伯克利分校 | 美国 ',
                        desc:'世界排名 - 6',
                        style:{
                            'background-position': '-1075px -3px'
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .c_contaian{margin-top: 5rem;}
    .container{width: 80%;height: 100%;overflow: visible;margin-left:auto;margin-right: auto;}
    .title1{border-bottom: 1px solid #000;width: 140px;margin: 10px auto 5px;}
    .title2{border-bottom: 1px solid #D8D8D8;width: 60%;margin: 2px 0 6px 0;}
    .courseItem{border-right:1px solid #E8E8E8;height: 130px;text-align: center;margin-bottom: 20px;padding: 0 28px; transition: all 0.5s ease 0s;}
    .courseItem:hover{box-shadow: 1px 0px 30px 0px rgba(147,147,147,0.71);}
    .schoolBox .schoolItem{padding: 0;height: 180px;line-height: 16px;}
    .courseBox{display: flex;}
    .courseUl li{margin: 0 auto 15px;}
    .courseImg{width: 50px;height: 50px;background: url("./@assets/images/course_icons.png") no-repeat;}
    .course_icon1{background-position: 6px -8px;}
    .course_icon2{background-position: -338px -8px;}
    .course_icon3{background-position: -728px -8px;}
    .course_icon4{background-position: -1082px -8px;}
    .readMore{position:relative;width: 150px;height: 37px;line-height: 35px;border:1px solid #DCDCDC;margin: 30px auto 0px;}
    .studyImg{width: 50px;height: 50px;background: url("./@assets/images/study_icons.png") no-repeat;}
    .schoolImg{width: 165px;height: 85px;background: url("./@assets/images/school.png") no-repeat;}
    .imgShade{background: rgba(255,255,255,.5);z-index: 10;bottom:0;left: 0;}
    .descBox{text-align: left;background: #ffffff;position: absolute;bottom: 0;width: 100%;padding: 10px 20px;z-index: 11;opacity: 0;}
    a:hover{
        text-decoration: none;
    }
    .workItems{padding: 3px;}
    .workItems:hover .imgShade{
        animation: fadeH .3s;
        width: 100%;
    }
    .workItems:hover .descBox{
        animation: fadeIn .3s;
        opacity: 1;
    }
    .readMore i{font-weight:bold;color: #ffffff;font-size: 20px;position: absolute;left: 30px;opacity: 0;transition: opacity .3s,left .3s;}
    .readMore:hover{
        animation: fadeBlack .3s;
        color: #ffffff;
        font-weight: bold;
        background-color: rgba(0,0,0,1);
    }
    .readMore:hover i{
        opacity: 1;
        left: 120px;
    }
    .teamItem{width: 190px;margin: auto;line-height: 20px;}
    .teamImg{border:1px solid #000000;height: 190px;background:  url("./@assets/images/team.png") no-repeat;}
    @keyframes fadeH
    {
        0%   {height: 0%;}
        25%   {height: 25%;}
        50%  {height: 50%;}
        75%  {height: 75%;}
        100% {height: 100%;}
    }
    @keyframes fadeIn
    {
        0%   {opacity: 0;}
        25%  {opacity: .25;}
        50%  {opacity: .5;}
        75%  {opacity: .75;}
        100% {opacity: 1}
    }
    @keyframes fadeBlack {
        0%   {background-color: rgba(0,0,0,0);}
        25%  {background-color: rgba(0,0,0,.25);}
        50%  {background-color: rgba(0,0,0,.5);}
        75%  {background-color: rgba(0,0,0,.75);}
        100% {background-color: rgba(0,0,0,1);}
    }
    @media (min-width: 576px) {
        .workItems{height: 20vw;}
    }
    @media (min-width: 768px){
        .container {
            width: 750px;
        }
        .workItems{height: 25vw;}
        .readMore{margin: 40px auto 0px;}
    }
    @media (min-width: 992px) {
        .container {
            width: 970px;
        }
        .workItems{height: 16vw;}
    }
    /* 大屏幕（大桌面显示器，大于等于 1200px） */
    @media (min-width: 1200px) {
        .container{
            width: 1170px;
        }
        .courseItem:nth-child(4){
            border: none;
        }
    }
    @media (max-width: 576px) {
        .courseItem{
            height: 140px;
            border-right: none;
            border-bottom:1px solid #E8E8E8;
        }
        .workItems{height: 40vw}
        .descBox{opacity: 1;}
        .imgShade{height: 100%;}
    }
</style>