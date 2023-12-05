<template>
  <Header />
  <div class="mount">
    <div class="container">
      <p v-for="result in results">{{ result.title }}</p>
      <p v-for="result in results">{{ result.message }}</p>
      <p>{{ results.data }}</p>
      <p>{{ textFirst }}</p>
      <p>{{ textSecond }}</p>
      <p>{{ textThird }}</p>
      <p>{{ textFourth }}</p>
      <p>{{ textFifth }}</p>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { homePageAboutInfo } from "@/_config";
const axios = require("axios");

export default {
  name: "HomeView",
  data() {
    return {
      results: {},
      textFirst: homePageAboutInfo.texts.textFirst,
      textSecond: homePageAboutInfo.texts.textSecond,
      textThird: homePageAboutInfo.texts.textThird,
      textFourth: homePageAboutInfo.texts.textFourth,
      textFifth: homePageAboutInfo.texts.textFifth,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    getInfo() {
      axios
        .get("http://localhost:5000/api/user/auth")
        .then((response) => (this.results = response));
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
.mount {
  margin: auto;
  margin-top: 50px;
  width: 65%;
}

p {
  font-family: "Montserrat";
  font-weight: 400;
  margin-top: 2px;
  color: #fff;
}
</style>
