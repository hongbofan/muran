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
                        <span @click="handleEvent(item.type,cats,index)"  v-for="(cats,index) in item.cats" :class="{fwb:item.index==index}">{{cats}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row courseBox schoolBox mt40 container">
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 courseItem schoolItem" v-for="item in filterArea">
                <ul class="courseUl">
                    <li class="schoolImg"><img :src="item.imgUrl" class="img-fluid" alt=""></li>
                    <li><p class="bold fs15" style="color: #070707;">{{item.name}}</p>
                        <div class="pl" style="border-bottom: 1px solid #C1C1C1; margin: 8px 20px 0 0;">
                            <b class="pa redLine" style="border-bottom: 1px solid #E15A00;" ></b>
                        </div>
                        <p class="fs13">{{item.enName}}</p>
                        <p class="mt30 color11" >{{item.jzpm}}</p>
                        <p >{{item.zpm}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "school-list",
        data(){
            return{
                navLists:{
                    type:['选校'],
                    classify:[{
                        name:'国家',
                        cats:['全部','美国','英国','澳洲','欧洲','香港/新加坡','日本','加拿大','其他'],
                        type:'area',
                        index:0
                    },{
                        name:'专业',
                        cats:['全部','建筑','城市设计','景观','城市规划','动画','纯艺','工业设计'],
                        type:'pro',
                        index:0
                    },{
                        name:'标签',
                        cats:['全部','IVY/常春藤联盟'],
                        type:'label',
                        index:0
                    }],
                },
                schoolLists:[{
                    name:'伦敦大学学院 | 英国',
                    enName:'University London College ',
                    jzpm:'QS World 建筑排名 / 1',
                    zpm:'QS World 综合排名 / 10',
                    country:'英国',
                    pro:'建筑,城市设计,城市规划,景观',
                    label:'',
                    imgUrl:require('../../../assets/images/schools/ucl.jpg')
                },{
                        name:'麻省理工学院 | 美国',
                        enName:'Massachusetts Institute of Technology',
                        jzpm:'QS World 建筑排名 / 2',
                        zpm:'QS World 综合排名 / 1',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/mslg.jpg')
                    },{
                        name:'代尔夫特理工 | 荷兰',
                        enName:'Delft University of Technology',
                        jzpm:'QS World 建筑排名 / 3',
                        zpm:'QS World 综合排名 / 52',
                        country:'欧洲',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/deftlg.png')
                    },{
                        name:'苏黎世联邦理工学院 | 瑞士',
                        enName:'ETH Zurich',
                        jzpm:'QS World 建筑排名 / 4',
                        zpm:'QS World 综合排名 / 7',
                        country:'欧洲',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/sls.jpg')
                    },{
                        name:'哈佛大学 | 美国',
                        enName:'Havard University GSD',
                        jzpm:'QS World 建筑排名 / 5',
                        zpm:'QS World 综合排名 / 3',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'IVY常春藤联盟',
                        imgUrl:require('../../../assets/images/schools/hfdx.jpg')
                    },{
                        name:'加州大学伯克利分校 | 美国',
                        enName:'University of California, Berkeley',
                        jzpm:'QS World 建筑排名 / 6',
                        zpm:'QS World 综合排名 / 27',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/jzdx.png')
                    },{
                        name:'剑桥大学 | 英国',
                        enName:'University of Cambridge',
                        jzpm:'QS World 建筑排名 / 7',
                        zpm:'QS World 综合排名 / 6',
                        country:'英国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/jqdx.png')
                    },{
                        name:'新加坡国立大学 | 新加坡',
                        enName:'National University of Singapore',
                        jzpm:'QS World 建筑排名 / 8',
                        zpm:'QS World 综合排名 / 11',
                        country:'香港/新加坡',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/xjbgl.png')
                    },{
                        name:'曼彻斯特建筑学院 | 英国',
                        enName:'Mancherster School of Architecture',
                        jzpm:'QS World 建筑排名 / 9',
                        zpm:'QS World 综合排名 / ',
                        country:'英国',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/mcst.jpg')
                    },{
                        name:'米兰理工大学 | 意大利',
                        enName:'Politecnico di Milano',
                        jzpm:'QS World 建筑排名 / 11',
                        zpm:'QS World 综合排名 / 156',
                        country:'欧洲',
                        pro:'建筑,城市设计,城市规划,景观,纯艺,工业设计',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/mllg.png')
                    },{
                        name:'哥伦比亚大学 | 美国',
                        enName:'Columbia University',
                        jzpm:'QS World 建筑排名 / 14',
                        zpm:'QS World 综合排名 / 16',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'IVY常春藤联盟',
                        imgUrl:require('../../../assets/images/schools/glby.jpg')
                    },{
                        name:'耶鲁大学 | 美国',
                        enName:'Yale University',
                        jzpm:'QS World 建筑排名 / 48',
                        zpm:'QS World 综合排名 / 15',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'IVY常春藤联盟',
                        imgUrl:require('../../../assets/images/schools/yldx.png')
                    },{
                        name:'普林斯顿大学 | 美国',
                        enName:'Princeton University',
                        jzpm:'QS World 建筑排名 / 36',
                        zpm:'QS World 综合排名 / 13',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'IVY常春藤联盟',
                        imgUrl:require('../../../assets/images/schools/plsd.jpg')
                    },{
                        name:'加州大学洛杉矶分校 | 美国',
                        enName:'University of California, LA',
                        jzpm:'QS World 建筑排名 / 16',
                        zpm:'QS World 综合排名 / 32',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/ucla.jpg')
                    },{
                        name:'墨尔本大学 | 澳洲',
                        enName:'The University of Melbourne',
                        jzpm:'QS World 建筑排名 / 17',
                        zpm:'QS World 综合排名 / 39',
                        country:'澳洲',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/meb.jpg')
                    },{
                        name:'悉尼大学 | 澳洲',
                        enName:'The University of Sydney',
                        jzpm:'QS World 建筑排名 / 15',
                        zpm:'QS World 综合排名 / 42',
                        country:'澳洲',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/xndx.png')
                    },{
                        name:'康奈尔大学 | 美国',
                        enName:'Cornell University',
                        jzpm:'QS World 建筑排名 / 28',
                        zpm:'QS World 综合排名 / 14',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'IVY常春藤联盟',
                        imgUrl:require('../../../assets/images/schools/kne.png')
                    },{
                        name:'斯坦福大学 | 美国',
                        enName:'Stanford University',
                        jzpm:'QS World 建筑排名 / 30',
                        zpm:'QS World 综合排名 / 2',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/stf.png')
                    },{
                        name:'皇家墨尔本大学 | 澳洲',
                        enName:'RMIT',
                        jzpm:'QS World 建筑排名 / 22',
                        zpm:'QS World 综合排名 / 250',
                        country:'澳洲',
                        pro:'建筑,城市设计,城市规划,景观,纯艺,工业设计',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/hjmeb.png')
                    },{
                        name:'宾夕法尼亚大学 | 美国',
                        enName:'University of Pennsylvania',
                        jzpm:'QS World 建筑排名 / 42',
                        zpm:'QS World 综合排名 / 19',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'IVY常春藤联盟',
                        imgUrl:require('../../../assets/images/schools/bxfny.png')
                    },{
                        name:'乔治亚理工大学 | 美国',
                        enName:'Georgia Tech',
                        jzpm:'QS World 建筑排名 / 24',
                        zpm:'QS World 综合排名 / 69',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/qzylg.png')
                    },{
                        name:'谢菲尔德大学 | 英国',
                        enName:'The University of Sheffield',
                        jzpm:'QS World 建筑排名 / 21',
                        zpm:'QS World 综合排名 / 75',
                        country:'英国',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/xfed.jpg')
                    },{
                        name:'东京大学 | 日本',
                        enName:'The University of Tokyo',
                        jzpm:'QS World 建筑排名 / 19',
                        zpm:'QS World 综合排名 / 23',
                        country:'日本',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/djdx.png')
                    },{
                        name:'慕尼黑理工大学 | 德国',
                        enName:'Technical University of Munich',
                        jzpm:'QS World 建筑排名 / 25',
                        zpm:'QS World 综合排名 / 61',
                        country:'欧洲',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/mnhlg.png')
                    },{
                        name:'卡迪夫大学 | 英国',
                        enName:'Cardiff University',
                        jzpm:'QS World 建筑排名 / 37',
                        zpm:'QS World 综合排名 / 45',
                        country:'英国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/kdf.jpg')
                    },{
                        name:'密西根大学 | 美国',
                        enName:'University of Michigan',
                        jzpm:'QS World 建筑排名 / 31',
                        zpm:'QS World 综合排名 / 20',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/mxg.png')
                    },{
                        name:'新南威尔士大学 | 英国',
                        enName:'The University of New South Wales',
                        jzpm:'QS World 建筑排名 / 25',
                        zpm:'QS World 综合排名 / 45',
                        country:'英国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/snwes.jpeg')
                    },{
                        name:'德州大学奥斯汀分校 | 美国',
                        enName:'University of Texas at Austin',
                        jzpm:'QS World 建筑排名 / 35',
                        zpm:'QS World 综合排名 / 63',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/dzdx.png')
                    },{
                        name:'伊利诺伊香槟分校 | 美国',
                        enName:'UIUC',
                        jzpm:'QS World 建筑排名 / 47',
                        zpm:'QS World 综合排名 / 71',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/ylnxb.jpg')
                    },{
                        name:'香港大学 | 中国香港',
                        enName:'Hong Kong University',
                        jzpm:'QS World 建筑排名 / 13',
                        zpm:'QS World 综合排名 / 25',
                        country:'其他',
                        pro:'建筑,城市设计,城市规划,景观',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/xgdx.jpg')
                    },{
                        name:'京都大学 | 日本',
                        enName:'Kyoto University',
                        jzpm:'QS World 建筑排名 / -',
                        zpm:'QS World 综合排名 / -',
                        country:'日本',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/jddx.jpg')
                    },{
                        name:'南加州大学 | 美国',
                        enName:'University of Southern California',
                        jzpm:'QS World 建筑排名 / 51',
                        zpm:'QS World 综合排名 / 115',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/njzdx.png')
                    },{
                        name:'AA建筑联盟学院 | 英国',
                        enName:'Architectural Association',
                        jzpm:'QS World 建筑排名 / -',
                        zpm:'QS World 综合排名 / -',
                        country:'英国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/aajzlm.png')
                    },{
                        name:'罗德岛设计学院 | 美国',
                        enName:'RISD',
                        jzpm:'QS World 建筑排名 / -',
                        zpm:'QS World 综合排名 / -',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/ldtsj.png')
                    },{
                        name:'库伯联盟学院 | 美国',
                        enName:'',
                        jzpm:'QS World 建筑排名 / -',
                        zpm:'QS World 综合排名 / -',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/kblm.png')
                    },{
                        name:'卡耐基梅隆大学 | 美国',
                        enName:'Carnegie Mellon University',
                        jzpm:'QS World 建筑排名 / 51',
                        zpm:'QS World 综合排名 / 46',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺',
                        label:'',
                        imgUrl:require('../../../assets/images/schools/knjml.png')
                    },{
                        name:'皇家艺术学院 | 英国',
                        enName:'Royal College of Art',
                        jzpm:'QS World 建筑排名 / 1',
                        zpm:'QS World 综合排名 / ',
                        country:'英国',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('')
                    },{
                        name:'伦敦艺术大学 | 英国',
                        enName:'University of the Arts London',
                        jzpm:'QS World 建筑排名 / 2',
                        zpm:'QS World 综合排名 / ',
                        country:'英国',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('')
                    },{
                        name:'帕森斯艺术学院 | 美国',
                        enName:'Parsons',
                        jzpm:'QS World 建筑排名 / 3',
                        zpm:'QS World 综合排名 / ',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('')
                    },{
                        name:'Aalto University | 欧洲',
                        enName:'Aalto University',
                        jzpm:'QS World 建筑排名 / 4',
                        zpm:'QS World 综合排名 / ',
                        country:'欧洲',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('')
                    },{
                        name:'格拉斯哥艺术学院 | 英国',
                        enName:'The Glasgow School of Art',
                        jzpm:'QS World 建筑排名 / 5',
                        zpm:'QS World 综合排名 / ',
                        country:'英国',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('')
                    },{
                        name:'芝加哥艺术学院 | 美国',
                        enName:'School of the Art Institute of Chicago',
                        jzpm:'QS World 建筑排名 / 6',
                        zpm:'QS World 综合排名 / ',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('')
                    },{
                        name:'Pratt institute | 美国',
                        enName:'Pratt',
                        jzpm:'QS World 建筑排名 / 7',
                        zpm:'QS World 综合排名 / ',
                        country:'美国',
                        pro:'建筑,城市设计,城市规划,纯艺,工业设计',
                        label:'',
                        imgUrl:require('')
                    }

                ],
                searchC:'全部',
                searchP:'全部',
                searchL:'全部'
            }
        },
        methods: {
            handleEvent(type,e,idx){
                if(type=='label'){
                    this.searchL=e
                    this.navLists.classify[2].index=idx
                }else if(type==='area'){
                    this.searchC=e;
                    this.navLists.classify[0].index=idx
                }else {
                    this.searchP=e
                    this.navLists.classify[1].index=idx
                }
            },
        },
        computed:{
            filterArea(){
                let f1=this.searchC,f2=this.searchP,f3=this.searchP
                let areaArr=this.schoolLists.filter(function(i){
                    if(f1 === '全部') {
                        return i;
                    }else {
                        return i.country===f1;
                    }
                })
                let proArea=areaArr.filter(function (v) {
                    if(f2 === '全部'||f2 === '建筑'||f2 === '城市设计'||f2 === '城市规划') {
                        return v;
                    }else {
                        return v.pro===f2;
                    }
                })
                let labelArea=proArea.filter(function (v) {
                    if(f3 === '全部') {
                        return v;
                    }else {
                        return v.label===f3;
                    }
                })
                return labelArea
            }
        }
    }
</script>

<style scoped>
    /*头部*/
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
    /*列表*/
    .container{width: 80%;height: 100%;overflow: visible;margin-left:auto;margin-right: auto;}
    .courseItem{text-align: left;margin-bottom: 20px;padding: 0 28px; transition: all 0.5s ease 0s;}
    .schoolImg{width: 180px;height: 180px;display: flex; align-items: center;}
    .schoolImg img{ align-items: center;max-height: 100%;}
    .schoolBox .schoolItem{padding: 0;height: 100%;line-height: 18px;}
    .courseBox{display: flex;flex-wrap:wrap;}
    .courseUl{margin: 0 5px;}
    .courseUl li{margin: 0 0 15px;}
    .courseItem:hover .redLine{
        animation: addWidth .5s;
        width: 94%;
    }
    .courseItem:hover p{
        transition: all .3s;
        padding-left:5px ;

    }
    @keyframes addWidth
    {
        0%   {width: 0%;}
        25%   {width: 25%;}
        50%  {width: 50%;}
        75%  {width: 75%;}
        100% {width: 94%;}
    }
</style>
