<template>
  <!-- router-view отталкивается от того, что написано в адресной строке. Соответственно,
  если адрес - главная страница, то router-view будет отображать главную страницу. И т.д. -->
  <router-view />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #2a6c56);
}
</style>