<template>
  <div class="container">
    <div class="container-fluid">
      <figure>
        <!-- <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228"> -->
        <figcaption>Fig.1 - The Pulpit Rock, Norway.12332</figcaption>
      </figure>
      <menu class="mainmeun">
        <!-- <li><input type="checkbox" />Red</li>
        <li><input type="checkbox" />blue</li> -->
        <li>
          <input v-model="searchName" @focus="searchDatashow = true" @blur="searchDatashow=false" @keyup.up="keyupclick($event)" @keyup.down="keydown($event)" type="text" placeholder="请输入内容" autocomplete="off">
          <div v-show="searchDatashow" class="search_Data">
            <ul>
              <li v-for="(item,idx) in searchData" :class="{isColor:isshow == idx}">{{item.name}}</li>
            </ul>
          </div>
        </li>
      </menu>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      a: 1,
      searchDatashow: false,
      searchData: [
        {
          name: '试一试',
        },
        {
          name: '试一试1'
        },
        {
          name: '试一试2'
        },
        {
          name: '试一试3'
        },
        {
          name: '试一试4'
        },
        {
          name: '试一试5'
        },
      ],
      isshow: 0,
      searchName: ''
    }
  },
  computed: {
  },
  watch: {
    // 监视input中值的变化
    searchName (newval, oldval) {
      console.log(newval, oldval)
    }
  },
  methods: {
    change () {
      this.b = 100
    },
    keyupclick ($event) {
      this.isshow--
      if (this.isshow < 0) {
        this.isshow = this.searchData.length - 1
        this.searchName = this.searchData[this.isshow].name
      } else if (this.isshow != 0) {
        this.isshow
        this.searchName = this.searchData[this.isshow].name
      }
    },
    keydown (e) {
      console.log(e)
      this.isshow++
      if (this.isshow === this.searchData.length) {
        this.isshow = 0
        this.searchName = this.searchData[this.isshow].name
      } else {
        this.searchName = this.searchData[this.isshow].name
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
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
.mainmeun {
  width: 500px;
}
.search_Data {
  width: 195px;
  max-height: 300px;
  border: 1px solid burlywood;
  ul {
    margin: 0;
    li {
      width: 195px;
    }
    :hover {
      color: red;
    }
    .isColor {
      color: red;
    }
  }
}
</style>