<template>
    <div>
        <Nav></Nav>

        <div>
            <Slider></Slider>
        </div>
        <Contain></Contain>
        <BackTop></BackTop>
        <Foot></Foot>
    </div>

</template>

<script>
    import Nav from '../head/index'
    import Slider from './componets/slider'
    import Contain from './componets/contain'
    import Foot from '../foot/index'
    import BackTop from '../../components/backTop'
    export default {
        name: "index",
        components:{
            Nav,
            Slider,
            Contain,
            Foot,
            BackTop
        }
    }
</script>

<style scoped>

</style>