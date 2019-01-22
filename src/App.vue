<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    
}
</script>

<style lang='less' scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  font-size: 10px;
  background-color: tomato;
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  html {
    font-size: 11px;
    background-color: aquamarine;
  }
}
@media screen and (min-width: 376px) and (max-width: 414px) {
  html {
    font-size: 12px;
    background-color: aqua;
  }
}
@media screen and (min-width: 415px) and (max-width: 639px) {
  html {
    font-size: 15px;
    background-color: blue;
  }
}
@media screen and (min-width: 640px) and (max-width: 719px) {
  html {
    font-size: 20px;
    background-color: yellowgreen;
  }
}
@media screen and (min-width: 720px) and (max-width: 749px) {
  html {
    font-size: 22.5px;
    background-color: yellow;
  }
}
@media screen and (min-width: 750px) and (max-width: 799px) {
  html {
    font-size: 23.5px;
    background-color: antiquewhite;
  }
}
@media screen and (min-width: 800px) {
  html {
    font-size: 25px;
    background-color: red;
  }
}

// html,
// body {
//   height: 100%;
// }

// a.active {
//   text-decoration: none;
// }
</style>