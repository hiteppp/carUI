<template>
  <div id="app">
    <Home-view :receive="receive" />

    <!-- <button @click="xianshi">数据显示</button> -->
    <nav>
      <router-link class="r1" to="/">
        <img src="./assets/主界面图标.png" alt="" />
      </router-link>
      <router-link class="r2" to="/MapView">
        <img src="./assets/导航图标.png" alt=""
      /></router-link>
      <router-link
        class="r3"
        to="/HealthView"
        :heartData="heartData"
        :temData="temData"
        :alcholData="alcholData"
        :bloodData="bloodData"
      >
        <img src="./assets/人体图标.png" alt="" width="45px" height="50px"
      /></router-link>
      <router-link class="r4" to="/MusicView">
        <img src="./assets/音乐图标.png" alt=""
      /></router-link>
    </nav>

    <div class="ditu">
      <!-- <img src="地图.png" alt="" width="830px" height="642px" /> -->
    </div>

    <div class="a"></div>
    <div class="zhuanxiangjiantou">
      <img width="60px" height="72px" src="./assets/直行.png" />
    </div>
    <div class="time">
      <span id="mytime"></span>
    </div>
    <div class="shisu">
      <p></p>
    </div>

    <router-view class="luyou" />
    <!-- <div class="shangyiqu">
      <img width="22px" height="22px" src="./assets/上一曲.png" />
    </div>
    <div class="zhanting">
      <img width="32px" height="32px" src="./assets/暂停.png" />
    </div> -->
  </div>
  <!-- <div class="map">

  </div> -->
</template>
<script>
import HomeView from "./views/HomeView.vue";

// import Left from "./views/Left.vue";
export default {
  components: { HomeView },
  data() {
    return {
      heartData: "1213",
      temData: "31231",
      alcholData: "",
      bloodData: "",
    };
  },
  methods: {
    Uint8ArrayToString(fileData) {
      var dataString = "";
      for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
      }
      return dataString;
    },
    xianshi() {
      console.log(this.Uint8ArrayToString(this.alcholData));
      // console.log(this.Uint8ArrayToString(this.receiveNews2));
      // console.log(this.Uint8ArrayToString(this.receiveNews3));
      // console.log(this.Uint8ArrayToString(this.receiveNews4));
    },
    receive(receiveNews1, receiveNews2, receiveNews3, receiveNews4) {
      this.heartData = receiveNews1;
      this.temData = receiveNews2;
      this.alcholtData = receiveNews3;
      this.bloodData = receiveNews4;
    },
  },
};
</script>



<style lang="scss">
.r1,
.r2,
.r3,
.r4 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 25px;
  margin-top: 100px;
  width: 50px;
  height: 50px;
}

// .leftfun {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   padding-left: 25px;
//   /* background-color: palegoldenrod; */
//   width: 100px;
//   height: 650px;
// }

.a {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.ditu {
  position: absolute;
  left: 615px;
  top: 90px;
  z-index: -1;
  background-color: oldlace;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
.luyou {
  background-color: purple;
  position: absolute;
  left: 188px;
  top: 300px;
}

.a {
  position: absolute;
  width: 2200px;
  height: 1100px;
  background-color: #141111;
  margin: 0 auto;
  font-size: 40px;
  padding: 50px;
  border: #e6c3c4;
  background-image: url("./assets/beiban.png");
  background-size: 1440px 720px;
  background-repeat: no-repeat;
  background-origin: border-box;
  z-index: -1;
}
.a1 {
  position: absolute;
  left: 18px;
  top: 60px;
  z-index: -1;
}
.a2 {
  position: absolute;
  left: 34px;
  top: 210px;
  z-index: -1;
}
.a3 {
  position: absolute;
  left: 34px;
  top: 335px;
  z-index: -1;
}
.a4 {
  position: absolute;
  left: 34px;
  top: 460px;
  z-index: -1;
}
.a5 {
  position: absolute;
  left: 34px;
  top: 585px;
  z-index: -1;
}
.honglvdeng {
  position: absolute;
  left: 1008px;
  top: 260px;
  z-index: -1;
}
#mytime {
  position: absolute;
  left: 1150px;
  top: 35px;
  font-size: 25px;
  color: #7b8796;
}
.zhuanxiangjiantou {
  position: absolute;
  left: 835px;
  top: 180px;
  z-index: -1;
}
.julishisu {
  font-size: 60px;
  font-weight: 600;
  position: absolute;
  left: 180px;
  top: 85px;
  color: #ffffff;
}
.juli {
  font-size: 45px;
  font-weight: 600;
  position: absolute;
  left: 690px;
  top: 113px;
  color: #ffffff;
}
.zhuangxiangtishi {
  font-size: 25px;
  font-weight: 350;
  position: absolute;
  left: 690px;
  top: 200px;
  color: #ffffff;
}
.xinlv {
  font-size: 42px;
  font-weight: 600;
  position: absolute;
  left: 210px;
  top: 230px;
  color: #ffffff;
}
.tiwen {
  font-size: 21px;
  font-weight: 550;
  position: absolute;
  left: 220px;
  top: 330px;
  color: #ffffff;
}
.jiujing {
  font-size: 21px;
  font-weight: 550;
  position: absolute;
  left: 313px;
  top: 330px;
  color: #ffffff;
}
.xueyang {
  font-size: 21px;
  font-weight: 550;
  position: absolute;
  left: 454px;
  top: 330px;
  color: #ffffff;
}
.honglvdengshishu {
  font-size: 30px;
  font-weight: 550;
  position: absolute;
  left: 1040px;
  top: 260px;
  color: #ffffff;
}
.shangyiqu {
  position: absolute;
  left: 220px;
  top: 605px;
  z-index: -1;
}
.zhanting {
  position: absolute;
  left: 265px;
  top: 600px;
  z-index: -1;
}
.xiayiqu {
  position: absolute;
  left: 325px;
  top: 605px;
  z-index: -1;
}
</style>
