<template>
  <div class="footer">
    <nav class="navbar">
      <router-link class="list-item" to="/">Главная</router-link>
      <router-link class="list-item" to="/courses">Курсы</router-link>
      <router-link class="list-item" to="/about">О проекте</router-link>
    </nav>
  </div>
</template>

<script>
import { appTitle } from "@/_config";
export default {
  name: "Footer",
  data() {
    return {
      title: appTitle.title,
      isLogined: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  padding: 1.3rem 10%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-top: 80px;
}
.navbar a {
  font-size: 1.15rem;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  margin-left: 2.5rem;
}
</style>
