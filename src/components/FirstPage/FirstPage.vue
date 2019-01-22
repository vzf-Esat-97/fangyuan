<template>
    <div class="hello">
        <div class="jumbotron text-center" style="margin-bottom:0">
            <div style="width:100%;height:60px;">
                <div style="width:60px;height:60px;"> 122323</div>
                <div style="width:100px;height:60px;">546545656</div>
            </div>
            <h1>我的第一个 Bootstrap 页面</h1>
            <p>重置浏览器窗口大小查看效果！</p>
        </div>

        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">网站名</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">主页</a></li>
                        <li><a href="#">页面 2</a></li>
                        <li><a href="#">页面 3</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <h2>关于我</h2>
                    <h5>我的照片:</h5>
                    <div class="fakeimg">这边插入图像</div>
                    <p>关于我的介绍..</p>
                    <h3>链接</h3>
                    <p>描述文本。</p>
                    <ul class="nav nav-pills nav-stacked">
                        <li class="active"><a href="#">链接 1</a></li>
                        <li><a href="#">链接 2</a></li>
                        <li><a href="#">链接 3</a></li>
                    </ul>
                    <hr class="hidden-sm hidden-md hidden-lg">
                </div>
                <div class="col-sm-8">
                    <h2>标题</h2>
                    <h5>副标题</h5>
                    <div class="fakeimg">图像</div>
                    <p>一些文本..</p>
                    <p>菜鸟教程，学的不仅是技术，更是梦想！！！菜鸟教程，学的不仅是技术，更是梦想！！！菜鸟教程，学的不仅是技术，更是梦想！！！</p>
                    <br>
                    <h2>标题</h2>
                    <h5>副标题</h5>
                    <div class="fakeimg">图像</div>
                    <p>一些文本..</p>
                    <p>菜鸟教程，学的不仅是技术，更是梦想！！！菜鸟教程，学的不仅是技术，更是梦想！！！菜鸟教程，学的不仅是技术，更是梦想！！！</p>
                </div>
            </div>
        </div>

        <div class="jumbotron text-center" style="margin-bottom:0">
            <p>底部内容11111111111111111111</p>
            <div class="test-border"></div>
        </div>
        <router-view />
    </div>
</template>

<script>
$(function () {
    // alert(123123132123);
});
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',

        }
    },
    methods: {
        testclick() {
            console.log(123123123123)
        }
    },
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
@border:1px solid red;
@width:200px;
@height:100px;
.width(@brwidth:100px){
    width: @brwidth;
}
.test-border{
    .width(200px);
    height:@height; 
    border:@border;
}


.keyframes(@fx,@fy,@tx,@ty,@name){   //声明一个动画函数，只需要写一个函数就可以到处调用了
  @keyframes @name
  {
    from {
       transform:translate(@fx,@fy);
       opacity:0;
       filter:alpha(opacity=0);
    }
    to {
      transform:translate(@tx,@ty);
      opacity:1;
      filter:alpha(opacity=100);
    }
  }
  @-moz-keyframes @name /* Firefox */
  {
    from {
      -moz-transform:translate(@fx,@fy);
      opacity:0;
      filter:alpha(opacity=0);
    }
    to {
      -moz-transform:translate(@tx,@ty);
      opacity:1;
      filter:alpha(opacity=100);
    }
  }

  @-webkit-keyframes @name /* Safari 和 Chrome */
  {
    from {
      -webkit-transform:translate(@fx,@fy);
      opacity:0;
      filter:alpha(opacity=0);
    }
    to {
      -webkit-transform:translate(@tx,@ty);
      opacity:1;
      filter:alpha(opacity=100);
    }
  }

  @-o-keyframes @name /* Opera */
  {
    from {
      -o-transform:translate(@fx,@fy);
      opacity:0;
      filter:alpha(opacity=0);
    }
    to {
      -o-transform:translate(@tx,@ty);
      opacity:1;
      filter:alpha(opacity=100);
    }
  }
}


.animation(@animation-name,     //声明一个过渡函数，只需要声明一个函数就可以到处调用了
@animation-duration,
@animation-timing-function,
@animation-delay,
@animation-iteration-count,
@animation-direction)
{
  animation: @arguments;
  /* Firefox: */
  -moz-animation: @arguments;
  /* Safari 和 Chrome: */
  -webkit-animation: @arguments;
  /* Opera: */
  -o-animation: @arguments;
}



/*初始动画*/
  //banner--------------------------------------------------
.keyframes(0,-600px,0,0,animation1_1);//banner动画1
.keyframes(-421px,0,0px,0,animation1_2);//banner动画2,底部左1
.keyframes(183px,0,0px,0,animation1_3);//banner动画3，底部左2
//第二屏-------------------------------------------------------------
.keyframes(0,-326px,0px,0,animation2_1);//第一行
.keyframes(0,40px,0px,0,animation2_2);//第二行
//第三行
.keyframes(-610px,0,0px,0,animation2_3);
.keyframes(670px,0px,0px,0,animation2_4);
//第三屏-------------------------------------------------------------
.keyframes(0px,-300px,0px,0,animation3_1);
.keyframes(-700px,0,0px,0,animation3_2);
.keyframes(1145px,0,0px,0,animation3_3);
//第四屏
.keyframes(0px,-383px,0px,0,animation4_1);
.keyframes(0,-390px,0px,0,animation4_2);
.keyframes(-800px,0,0px,0,animation4_3);
.keyframes(800px,0,0px,0,animation4_4);
//第五屏

.keyframes(0px,-383px,0px,0,animation5_1);
.keyframes(0,390px,0px,0,animation5_2);
.keyframes(-800px,0,0px,0,animation5_3);
.keyframes(800px,0,0px,0,animation5_4);

/*执行动画过渡*/
  //banner---------------------------------------------
.animation .animation1_1{
  .animation(animation1_1,2s,ease-in-out,0s,1,normal)
}
.animation .animation1_2{
  .animation(animation1_2,2.5s,ease-in-out,0s,1,normal)
}
.animation .animation1_3{
  .animation(animation1_3,2.5s,ease-in-out,0s,1,normal)
}

//第二屏-----------------------------------------------
.animation .animation2_1{                     //第一行
  .animation(animation2_1,1s,ease-in-out,0s,1,normal)
}
.animation .animation2_2{    //第二行
  .animation(animation2_2,3s,ease-in-out,0s,1,normal)
}
//第三行
.animation .animation2_3{
  .animation(animation2_3,3.5s,ease-in-out,0s,1,normal)
}
.animation .animation2_4{
  .animation(animation2_4,3.5s,ease-in-out,0s,1,normal)
}
//第三屏----------------------------------------------------------
.animation .animation3_1{          //第一行
  .animation(animation3_1,2.5s,ease-in-out,0s,1,normal)
}
//第二行
.animation .animation3_2{          //左边
  .animation(animation3_2,3s,ease-in-out,0s,1,normal)
}
//右边
.animation .animation3_3{          //左边
  .animation(animation3_3,3s,ease-in-out,0s,1,normal)
}
//第四屏-----------------------------------------------------------------
.animation .animation4_1{
  .animation(animation4_1,2s,ease-in-out,0s,1,normal)
}
.animation .animation4_2{
  .animation(animation4_2,2.5s,ease-in-out,0s,1,normal)
}
.animation .animation4_3{
  .animation(animation4_3,3s,ease-in-out,0s,1,normal)
}

//第五屏
.animation .animation5_1{
  .animation(animation5_1,1.5s,ease-in-out,0s,1,normal)
}
.animation .animation5_2{
  .animation(animation5_2,1.5s,ease-in-out,0s,1,normal)
}
.animation .animation5_3{
  .animation(animation5_3,2.5s,ease-in-out,0s,1,normal)
}
.animation .animation5_4{
  .animation(animation5_4,2.5s,ease-in-out,0s,1,normal)
}
</style>
