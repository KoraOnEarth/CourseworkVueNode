<template>
  <div class="mount">
    <div class="container">
      <HelloWorld msg="Начало моей курсовой - это начало конца меня" />
    </div>
    <div class="info">
      <p>Данный проект был сделан студентом гр.3136, Смирновым Никитой, в качестве курсовой работы к 5 семестру (3 курс).</p>
      <p style="margin-top: 20px;">Использованные фреймворки/технологии/языки:</p>
      <ul>
        <li>1. HTML/CSS/JS</li>
        <li>2. Vue 3.0</li>
        <li>3. VueX</li>
        <li>4. Vue-router</li>
        <li>5. NodeJS</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.mount {
  margin: auto;
  margin-top: 20px;
  width: 65%;
}

p, ul{
  font-family: 'Montserrat';
}

ul {
  margin-left: 25px;
}
</style>
