<template>
  <div class="container">
    <p>12321</p>
    <!-- <div class="row"> -->
    <!-- <div class="col-xs-4">123</div> -->
    <!-- <div class="col-xs-4">123</div> -->
    <!-- </div> -->
    <div class="row show-grid col-xs-12 col-lg-5">
      <!-- <div></div> -->
      <div class="col-xs-12 col-lg-5">4561232321</div>
      <!-- <div class="col-xs-4">12312313132</div> -->
    </div>
    <div @click="formnowDate" class="input-group">
      <span class="input-group-addon" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
    </div>
    <!-- <div class="wrapper">
      <div class="content-main">...</div>
      <div class="content-secondary">...</div>
    </div> -->

    <!-- <table class="table table-condensed">
      <tr>
        <td class="active">...</td>
        <td class="success">...</td>
        <td class="warning">...</td>
        <td class="danger">...</td>
        <td class="info">...</td>
      </tr>
    </table> -->
    <router-link to="/HomePage">shouye</router-link>
  </div>
</template>

<script>
import { formatDate } from '../date/date.js'
export default {
  name: 'Register',
  data () {
    return {
    }
  },
  filters: {
    formatDates (timeDate) {
      const DateTimes = new Date(timeDate)
      return formatDate(DateTimes, 'yyyy-MM-dd')
    }
  },
  watch: {

  },

  methods: {
    formnowDate () {
      console.log(new Date())
      console.log(this.$options.filters.formatDates(new Date()))
      console.log(this.$options.filters['formatDates'](new Date()))
      console.log(this.$options)
    }
  }
}
</script>

<style lang='less' scoped>
.show-grid [class^="col-"] {
  //   padding-top: 10px;
  //   padding-bottom: 10px;
  //   background-color: #eee;
  //   border: 1px solid #ddd;
  //   background-color: rgba(86, 61, 124, 0.15);
  //   border: 1px solid rgba(86, 61, 124, 0.2);
}
</style>
