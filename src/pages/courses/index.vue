<template>
    <div>
        <Nav></Nav>
        <toper></toper>
    </div>
</template>

<script>
    import Nav from '../head/index'
    import toper from './components/header'
    export default {
        name: "index",
        components: {
            Nav,
            toper
        }
    }

</script>

<style scoped>

</style>