<template>
    <div class="clearfix">
        <div class="foot mt40">
            <div class="footer-c">
                <div class="container">
                    <div class="clearfix"></div>
                    <div class=" tl container_c row">
                        <div class="col-12 col-md-6 ">
                            <img src="./@assets/images/logo.png" alt="">
                            <p class="fs14">
                                <router-link to=""><span>关于木苒 |</span></router-link>
                                <router-link to=""><span> 加入我们 |</span></router-link>
                                <router-link to=""><span> 木苒年鉴 |</span></router-link>
                                <router-link to=""><span> designer的文娱圈</span></router-link>
                            </p>
                        </div>
                        <div class="col-12 col-md-6 oh address" >
                            <img src="./@assets/images/address.jpg" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 100px;margin:40px auto 10px">
                <img src="./@assets/images/WeChat_code.jpg" class="img-fluid" alt="">
            </div>
            <p class="mb10">Copyright ©2018  杭州木苒文化创意有限公司  </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
    .footer-c{
        background: #F3F3F3;
        line-height: 20px;
    }
    .container_c{padding: 40px;}
    .container_c p{margin-top: 30px;}
    @media (min-width: 992px) {
        .container_c p{margin-top: 60px;}
    }

</style>