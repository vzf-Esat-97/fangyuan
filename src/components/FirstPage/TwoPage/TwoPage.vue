<template>
    <div class="hello">
        <p>我是首页的第一个子组件</p>
        <div class="main">
            <p>这里放一号孙子组件</p>
            <router-view />
        </div>
        <div class="main">
            <p>这里是二号孙子组件</p>
            <GrandsonPage1 />
        </div>
    </div>
</template>

<script>
import GrandsonPage1 from './OthersPages/GrandsonPage1'
export default {
    components: {
        GrandsonPage1
    },
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        testclick() {
            console.log(123123123123)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  height: #333333;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main {
  width: 100%;
  height: 200px;
}
</style>
