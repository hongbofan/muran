<template>
    <div>
        <Nav></Nav>
        <school-list></school-list>
    </div>
</template>

<script>
    import Nav from '../head/index'

    import schoolList from './components/schoolList'
    export default {
        name: "index",
        components: {
            Nav,
            schoolList
        }
    }

</script>

<style scoped>

</style>