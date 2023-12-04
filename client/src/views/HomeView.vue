<template>
  <div class="mount">
    <div class="container">
      <HelloWorld msg="Начало моей курсовой - это начало конца меня" />
      <p>{{ textFirst }}</p>
      <p>{{ textSecond }}</p>
      <p>{{ textThird }}</p>
      <p>{{ textFourth }}</p>
      <p>{{ textFifth }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { homePageAboutInfo } from '@/_config'

export default {
  name: 'HomeView',
  data() {
    return {
      textFirst : homePageAboutInfo.texts.textFirst,
      textSecond: homePageAboutInfo.texts.textSecond,
      textThird: homePageAboutInfo.texts.textThird,
      textFourth: homePageAboutInfo.texts.textFourth,
      textFifth: homePageAboutInfo.texts.textFifth,
    }
  },
  components: {
    HelloWorld,
    Header,
    Footer
  },

}
</script>

<style lang="scss" scoped>
.mount {
  margin: auto;
  margin-top: 50px;
  width: 65%;
}

p{
  font-family: 'Montserrat';
  font-weight: 400;
  margin-top: 2px;
}
</style>
