<template>
  <!-- Шапка (header) -->
  <Header />
  <SecondHeader />
  <!-- Контент -->
  <!-- router-view отталкивается от того, что написано в адресной строке. Соответственно,
  если адрес - главная страница, то router-view будет отображать главную страницу. И т.д. -->
  <router-view />
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SecondHeader from './components/SecondHeader.vue'
export default {
  components: {
    Header,
    SecondHeader,
    Footer
  }
}
</script>

<style lang="scss"></style>
