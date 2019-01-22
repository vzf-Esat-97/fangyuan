<template>
    <div class="hello">
        <p>FirstPage3</p>
        <p>a的值是：{{a}}</p>
        <p>b的值是：{{b}}</p>
        <button @click="change">按钮</button>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            a: 1
        }
    },
    computed: {
        b: {
            // getter
            get(a) {
                console.log(a)
                console.log('我是get')
                return this.a + 1
            },
            // setter
            set(val) {
                this.a = 10 + 10
                console.log(val)
                console.log('我是set')
            }
        }
    },
    methods: {
        change() {
            this.b = 100
        },





        // map.plugin(['AMap.Geolocation'], function () {
        //     let geolocation = new AMap.Geolocation({
        //         enableHighAccuracy: true, //  是否使用高精度定位，默认:true
        //         timeout: 1000, //  超过10秒后停止定位，默认：无穷大
        //         maximumAge: 0, // 定位结果缓存0毫秒，默认：0
        //         convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        //         showButton: true, //  显示定位按钮，默认：true
        //         buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
        //         buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        //         showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
        //         showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
        //         panToLocation: true, //  定位成功后将定位到的位置作为地图中心点，默认：true
        //         zoomToAccuracy: true //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        //     })

        //     map.addControl(geolocation)
        //     geolocation.getCurrentPosition()
        //     AMap.event.addListener(geolocation, 'complete', (result) => {
        //         map.setCenter(result.position)
        //         const position = [result.position.lng, result.position.lat] //  返回定位信息
        //         lng = result.position.lng
        //         lat = result.position.lat
        //         lnglatXY = position
        //     })
        //     AMap.event.addListener(geolocation, 'error', (result) => { //  返回定位出错信息
        //         alert('定位失败')
        //     })
        // })



















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
</style>
