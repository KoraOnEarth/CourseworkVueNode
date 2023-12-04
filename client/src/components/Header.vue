<template>
    <div class="header">
      <div class="inner_header">
        <div class="logo_container">
          <h1>{{ title }}</h1>
        </div>
        <ul class="navigation">
          <div class="loginBtns">
            <li><router-link to="/">Вход</router-link></li>
            <li><router-link to="/">Регистрация</router-link></li>
          </div>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { appTitle } from '@/_config'
  export default {
    name: 'Header',
    data() {
      return {
        title: appTitle.title
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  .header {
    width: 100%;
    height: 80px;
    display: block;
    background-color: rgba($color: #d1d1d1, $alpha: 0.7);
  }
  
  .inner_header {
    width: 80%;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
  
  .logo_container {
    height: 100%;
    display: table;
    float: left;
  }
  
  .logo_container h1 {
    color: black;
    padding-left: 20px;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    font-family: 'Montserrat';
    font-size: 32px;
    font-weight: 400;
  }
  
  .logo_container h1 span {
    font-weight: 700;
  }
  
  .navigation {
    float: right;
    height: 100%;
    display: flex;
    padding-top: 10px;
    justify-content: center;
  }
  
  .navigation a {
    display: table;
    padding: 0px 20px;
    color: black;
  }
  
  .loginBtns{
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  </style>
  