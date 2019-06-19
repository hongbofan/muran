<template>
  <div id="app">
      <keep-alive >
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Microsoft Yahei';
  text-align: center;
  margin-top: 60px;
}
</style>
