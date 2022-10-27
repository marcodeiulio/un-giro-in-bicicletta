<template>
  <div
    id="nav"
    class="container sticky-top bg-white bg-gradient"
    style="--bs-bg-opacity: 0.95"
  >
    <router-link to="/">Home</router-link> |
    <router-link to="/castrocaro">Castrocaro</router-link> |
    <router-link to="/bertinoro">Bertinoro</router-link> |
    <router-link to="/villafranca">Villafranca</router-link>
    <hr />
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  hr {
    // border-color: #42b983;
    border: 1px solid #42b983;
    // color: #42b983 !important;
  }
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
