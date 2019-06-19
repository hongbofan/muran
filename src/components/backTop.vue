<template>
    <transition name="slide-fade">
        <div v-show="isShow" @click="getTop" class="backTop">

        </div>
    </transition>
</template>

<script>
    export default {
        name: "back-top",
        data(){
            return{
                isShow:false
            }
        },
        methods:{
            showIcon(){
                if (window.scrollY > 100) {
                    this.isShow = true
                } else if (window.scrollY < 100) {
                    this.isShow = false
                }
            },
            getTop(){
                // 点击icon之后自动返回顶部的函数
                let timer = setInterval(() => {
                    let top = window.scrollY
                    let speed = Math.ceil(top / 5)
                    window.scrollTo(0,top - speed)
                    if (top === 0) {
                        clearInterval(timer)
                    }
                }, 20)
            }
        },
        mounted () {
            window.addEventListener('scroll', this.showIcon)
            //window.addEventListener('scroll', this.showIcon)
        },
        beforeDestroy () {
            //  组件销毁的时候，需要删除scroll的监听事件。
            window.removeEventListener('scroll', this.showIcon)
        }
    }
</script>

<style  scoped>
    .backTop{
        cursor: pointer;
        z-index: 1001;
        position: fixed;
        bottom: 60px;
        width: 40px;
        height: 40px;
        right: 10px;
        background: url("./@assets/images/backTop.png") no-repeat -70px -7px ;
    }
    @media (min-width: 1200px) {
        .backTop{
            right: 40px;
        }
    }

</style>
