<template>
  <!-- <div class="header">
    <div class="inner_header">
      <div class="logo_container">
        <h1>{{ title }}</h1>
      </div>
      <div class="links_container">
        <ul v-if="isLogined" class="navigation">
          <div class="loginBtns">
            <li>
              <router-link class="list-item" to="/profile">Профиль</router-link>
            </li>
            <li>
              <router-link class="list-item" to="/"
                >Выйти из аккаунта</router-link
              >
            </li>
          </div>
        </ul>
        <ul v-else class="navigation">
          <div class="loginBtns">
            <li>
              <router-link class="list-item" to="/login">Вход</router-link>
            </li>
            <li>
              <router-link class="list-item" to="/registrationForm"
                >Регистрация</router-link
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div> -->
  <div class="header">
    <router-link class="logo" to="/">Kora Praktikum</router-link>
    <nav class="navbar">
      <router-link class="list-item" to="/">Главная</router-link>
      <router-link class="list-item" to="/courses">Курсы</router-link>
      <router-link class="list-item" to="/about">О проекте</router-link>
    </nav>
    <nav class="navbar">
      <router-link class="list-item" to="/login">Вход</router-link>
      <router-link class="list-item" to="/registrationForm">Регистрация</router-link>
    </nav>
      
   
  </div>
</template>

<script>
import { appTitle } from "@/_config";
export default {
  name: "Header",
  data() {
    return {
      title: appTitle.title,
      isLogined: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
