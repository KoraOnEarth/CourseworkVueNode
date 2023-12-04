<template>
  <div style="margin-top: 30px" class="footer">
    <div class="inner_footer">
      <ul class="navigation">
        <div class="pageBtns">
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/courses">Курсы</router-link></li>
          <li><router-link to="/about">О проекте</router-link></li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

.footer {
  width: 100%;
  height: 50px;
  display: block;
  background-color: rgba($color: #b9b9b9, $alpha: 0.7);
}

.inner_footer {
  width: 70%;
  height: 100%;
  display: block;
  margin: 0 auto;
}

.navigation {
  height: 100%;
  display: block;
}

.navigation a {
  height: 100%;
  display: table;
  float: left;
  padding: 0px 20px;
  color: black;
}

.navigation a li {
  display: table-cell;
  vertical-align: middle;
  height: 100%;
  color: white;
  font-family: "Monserrat";
  font-size: 20px;
}

.pageBtns {
  display: flex;
  justify-content: center;
  padding-top: 12px;
}
</style>
