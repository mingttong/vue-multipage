<template>
  <div>
    <ul>
      <li><router-link to="index1">index1</router-link></li>
      <li><router-link to="index2">index2</router-link></li>
      <li><router-link to="index3">index3</router-link></li>
      <li><a href="/test.html">跳转test</a></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
