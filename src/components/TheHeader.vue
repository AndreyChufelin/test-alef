<script setup></script>

<template>
  <header class="header">
    <div class="header__container">
      <RouterLink to="/"><img alt="Alef logo" class="logo" src="@/assets/logo.svg" /></RouterLink>
      <nav class="menu">
        <RouterLink class="menu__item" to="/">Форма</RouterLink>
        <RouterLink class="menu__item" to="/preview">Превью</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);
}
.header__container {
    display: flex;
    align-items: center;
    max-width: 1265px;
    width: 100%;
    margin: 0 auto;
}
.logo {
    width: 93px;
    padding: 2px 41px;
}
.menu {
    display: flex;
    justify-content: center;
    flex: 1;
}
.menu__item {
    color: #1111117A;
    padding: 25px;
    margin-top: 2px;
}
</style>
