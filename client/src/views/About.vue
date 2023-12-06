<template>
  <Header />
  <SecondHeader />
  <div class="mount">
    <div class="container">
      <div class="info">
        <p>
          Данный проект был сделан студентом гр. 3136, Смирновым Никитой, в
          качестве курсовой работы к 5 семестру (3 курс).
        </p>
        <p style="margin-top: 20px">
          Использованные фреймворки/технологии/языки:
        </p>
        <ul>
          <li>1. HTML/CSS/JS</li>
          <li>2. Vue 3.0</li>
          <li>3. VueX</li>
          <li>4. Vue-router</li>
          <li>5. NodeJS</li>
        </ul>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.mount {
  margin: auto;
  margin-top: 20px;
  width: 65%;
  height: 100%;
}

p,
ul {
  font-family: "Montserrat";
  color: #fff;
}

ul {
  margin-top: 10px;
  margin-left: 25px;
  list-style-type: none;
}

li {
  padding-top: 3px;
}
</style>
