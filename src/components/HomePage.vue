<template>
  <div class="hello">
    <div class="headnav">
      <ul>
        <li v-for="(item,idx) in navData" @click="testclick(idx)" :key="idx">{{item.name}}</li>
      </ul>
    </div>
    <div id="testapp">
      <!-- <transition :name="transitionName">
        <keep-alive>
          <router-view class="Router" v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition> -->

      <transition :name="transitionName">
        <router-view class="Router"></router-view>
      </transition>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      navData: [
        { name: '第一' },
        { name: '第2' },
        { name: '第3' },
        { name: '第4' }
      ],
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to, from,scrollBehavior) {
        console.log(scrollBehavior)
      if (to.path === '/') {
        this.transitionName = 'slide-left'
      } else {
        // this.transitionName = 'slide-right'
        this.transitionName = 'slide-left'
      }
    }
  },

  methods: {
    testclick (idx) {
      switch (idx) {
        case 0:
          this.$router.push({
            path: '/',
          })
          break;
        case 1:
          this.$router.push({
            path: '/FirstPage1',
          })
          break;
        case 2:
          this.$router.push({
            path: '/FirstPage2',
          })
          break;
        case 3:
          this.$router.push({
            path: '/FirstPage3',
          })
          break;
      }
    }
  }
}
</script>

<style lang='less' scoped>
.headnav {
  width: 400px;
  height: 30px;
  background-color: aquamarine;
  li {
    float: left;
    list-style: none;
    padding: 5px;
    cursor: pointer;
  }
}
#testapp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
  height: 100%;
  //渐变动效
  .Router {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.377s ease;
    // box-sizing: border-box;
    overflow: hidden;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    // opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    overflow: hidden;
  }

  .slide-left-leave-active,
  .slide-right-enter {
    // opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
    overflow: hidden;
  }
}
</style>
