<template>
  <div class="health">
    <!-- <button @click="xianshi">显示体温</button> -->
    <!-- <img src="../assets/身体大屏.png" alt="" /> -->
    <input type="text" v-model="heartShu" class="heartinp" />
    <input type="text" v-model="temShu" class="teminp" />
    <input type="text" v-model="alcholShu" class="alcholinp" />
    <input type="text" v-model="bloodShu" class="bloodinp" />
    <div class="canCar" v-if="decidealchol">不能开车!</div>
    <div class="notCar" v-else>可以开车!</div>
  </div>
</template>

<script>
export default {
  name: "HealthView",
  props: ["heartData", "temData", "alcholData", "bloodData"],
  data() {
    return {
      heartShu: "",
      temShu: "",
      alcholShu: "",
      bloodShu: "",
      decidealchol: "",
    };
  },
  mounted() {
    //console.log("School", this);
    //给School组件绑定了$bus，等待其他事件的触发
    this.$bus.$on("hello", (heartData, temData, alcholData, bloodData) => {
      console.log(
        "我是Health组件,收到了数据",
        heartData,
        temData,
        alcholData,
        bloodData
      );
      this.heartShu = heartData;
      this.temShu = temData;
      this.alcholShu = alcholData;
      this.bloodShu = bloodData;
      if (Number(alcholData) > 50) {
        this.decidealchol = true;
      }
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello"); //用完了把当前组件所用到的事件解绑
  },
  methods: {
    // Uint8ArrayToString(fileData) {
    //   var dataString = "";
    //   for (var i = 0; i < fileData.length; i++) {
    //     dataString += String.fromCharCode(fileData[i]);
    //   }
    //   return dataString;
    // },
    xianshi() {
      console.log(this.temData);
    },
  },
};
</script>

<style>
.canCar {
  font-size: 30px;
  position: absolute;
  left: 900px;
  top: 430px;

  width: 200px;
  height: 100px;
  color: red;
}
.notCar {
  font-size: 30px;
  position: absolute;
  left: 900px;
  top: 430px;

  width: 200px;
  height: 100px;
  color: aquamarine;
}
.alcholinp {
  color: aliceblue;
  background-color: #1a1f29;
  position: absolute;
  left: 1020px;
  top: 210px;
  width: 150px;
  height: 150px;
  font-size: 80px;
  border: 0;
}

.bloodinp {
  color: aliceblue;
  background-color: #1a1f29;
  border: 0;
  position: absolute;
  left: 540px;
  top: 380px;
  width: 100px;
  height: 100px;
  font-size: 50px;
}

.teminp {
  color: aliceblue;
  background-color: #1a1f29;
  position: absolute;
  left: 265px;
  top: 380px;
  width: 100px;
  height: 100px;
  font-size: 50px;
  border: 0;
}
.heartinp {
  color: aliceblue;
  background-color: #1a1f29;
  position: absolute;
  left: 420px;
  top: 180px;
  width: 150px;
  height: 150px;
  font-size: 80px;
  border: 0;
}

.health {
  position: absolute;
  top: 0;
  background-color: salmon;
  left: 120px;
  width: 1400px;
  height: 700px;
  background-image: url(../assets/身体大屏.png);
}
.health img {
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>