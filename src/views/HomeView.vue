<template>
  <div>
    <div class="hello">
      <div id="mainye">主页</div>
      <div id="mapye">地图</div>
      <div id="musicye">音乐</div>
      <button @click="sendBodyData" class="xianshiData">人体健康</button>
      <p id="heart">{{ receiveNews1 }}</p>
      <div id="tem">{{ receiveNews3 }}{{ "℃" }}</div>
      <div id="alc">{{ receiveNews2 }}ppm</div>
      <div id="blood">{{ receiveNews4 }}{{ "%" }}</div>
      <!-- <div id="jingdu">经度{{ longtitude }}</div>
      <div id="weidu">维度{{ latitude }}</div>
      <div id="shiwen">室温{{ temp }}</div>
      <button @click="receiveDu">点我接收经纬度</button> 
      <button @click="Output">点我</button> -->
      <!-- <button @click="receiveDu">显示体温</button> -->
    </div>

    <div class="light">
      <img src="../assets/绿灯.png" alt="" v-if="countDown == lightG" />
      <img src="../assets/黄灯.png" alt="" v-else-if="countDown == lightY" />
      <img src="../assets/红灯.png" alt="" v-else />
      <div>{{ receiveNews5.slice(1, 2) }}</div>
    </div>
  </div>
</template>

<script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>
<script>
import mqtt from "mqtt";
export default {
  name: "HelloWorld",
  props: ["receive"],
  data() {
    return {
      connection: {
        host: "192.168.24.175",
        port: 8083,
        endpoint: "/mqtt",
        clean: true, // 保留会话
        connectTimeout: 4000, // 超时时间
        reconnectPeriod: 4000, // 重连时间间隔
        // 认证信息
        clientId: "jjy",
        username: "emqx_test",
        password: "emqx_test",
      },
      subscriptions: [
        { topic: "publish", qos: 0 },
        { topic: "publish1", qos: 1 },
        { topic: "publish2", qos: 2 },
        { topic: "publish3", qos: 3 },
        { topic: "publish4", qos: 4 },
        { topic: "publish5", qos: 2 },
        { topic: "publish6", qos: 3 },
        { topic: "publish7", qos: 4 },
        // 其他主题配置...
      ],
      publication: [
        { topic: "jjy", qos: 0, payload: "{ hello world publish }" },
        { topic: "jjy2", qos: 1, payload: "{ hello world publish2 }" },
        { topic: "jjy3", qos: 2, payload: "{ hello world publish3 }" },
        // 其他主题配置...
      ],
      receiveNews1: "",
      receiveNews2: "",
      receiveNews3: "",
      receiveNews4: "",
      receiveNews5: "",
      longtitude: "",
      temp: "",
      latitude: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
      },
      subscribeSuccess: false,
    };
  },

  computed: {
    countDown() {
      return this.receiveNews5.slice(0, 1);
    },
    lightG() {
      return "G";
    },
    lightY() {
      return "Y";
    },
    // countNumber() {
    //   let count1 = this.receiveNews5.split("");
    //   return count1.slice(count1.length - 1, count1.length);
    // },
  },
  methods: {
    // 方式一
    // (function fun4(){
    //     console.log("fun4");
    // }()),

    Uint8ArrayToString(fileData) {
      var dataString = "";
      for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
      }
      return dataString;
    },

    sendBodyData: function () {
      console.log(Number(this.Uint8ArrayToString(this.receiveNews1)));
      if (Number(this.Uint8ArrayToString(this.receiveNews1)) > 80) {
        alert("心率超标，不建议开车");
      }
      if (Number(this.Uint8ArrayToString(this.receiveNews3)) > 38) {
        alert("体温超标，不建议开车");
      }
      if (Number(this.Uint8ArrayToString(this.receiveNews2)) > 50) {
        alert("酒精超标，不建议开车");
      }
      if (Number(this.Uint8ArrayToString(this.receiveNews4)) > 50) {
        alert("血氧异常，不建议开车");
      }
      this.$bus.$emit(
        "hello",
        this.Uint8ArrayToString(this.receiveNews1),
        this.Uint8ArrayToString(this.receiveNews3),
        this.Uint8ArrayToString(this.receiveNews2),
        this.Uint8ArrayToString(this.receiveNews4)
      );
    },

    receiveDu() {
      console.log(this.Uint8ArrayToString(this.receiveNews1));
    },
    // Output() {

    //   console.log(this.Uint8ArrayToString(this.receiveNews2));
    // },

    createConnection() {
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `ws://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.error("mqtt.connect error", error);
      }
      this.client.on("connect", () => {
        this.doSubscribe();
        console.log("Connection succeeded!");
      });
      this.client.on("error", (error) => {
        console.error("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        const msg = message;
        console.log(`Received message ${msg} from topic ${topic}`);
        if (topic == "publish") {
          // 将消息保存在 receiveNews 属性中
          this.receiveNews1 = msg;
        }
        if (topic == "publish1") {
          // 将消息保存在 receiveNews 属性中
          this.receiveNews2 = msg;
        }
        if (topic == "publish2") {
          // 将消息保存在 receiveNews 属性中
          this.receiveNews3 = msg;
        }
        if (topic == "publish3") {
          // 将消息保存在 receiveNews 属性中
          this.receiveNews4 = msg;
        }
        if (topic == "publish4") {
          // 将消息保存在 receiveNews 属性中
          this.receiveNews5 = msg;
        }
        if (topic == "publish5") {
          // 将消息保存在 receiveNews 属性中
          this.longtitude = msg;
        }
        if (topic == "publish6") {
          // 将消息保存在 receiveNews 属性中
          this.temp = msg;
        }
        if (topic == "publish7") {
          // 将消息保存在 receiveNews 属性中
          this.latitude = msg;
        }
      });
    },
    doSubscribe() {
      this.subscriptions.forEach((subscription) => {
        const { topic, qos } = subscription;
        this.client.subscribe(topic, { qos }, (error, granted) => {
          if (error) {
            console.error(`Subscribe topic ${topic} error`, error);
            return;
          }
          console.log(`Subscribe topic ${topic} success`, granted);
        });
      });
      this.subscribeSuccess = true;
    },
    doPublish() {
      this.publication.forEach((msg) => {
        const { topic, payload, qos } = msg;
        this.client.publish(topic, payload, { qos }, (error) => {
          if (error) {
            console.error(`Publish message to topic ${topic} error`, error);
            return;
          }
          console.log(`Publish message to topic ${topic} success`);
        });
      });
    },
    doUnSubscribe() {
      this.subscriptions.forEach((subscription) => {
        const { topic } = subscription;
        this.client.unsubscribe(topic, (error) => {
          if (error) {
            console.error(`Unsubscribe topic ${topic} error`, error);
            return;
          }
          console.log(`Unsubscribe topic ${topic} success`);
        });
      });
      this.subscribeSuccess = false;
    },
    destroyConnection() {
      if (this.client && this.client.connected) {
        try {
          this.doUnSubscribe();
          this.client.end();
          this.client = null;
          console.log("Successfully disconnected!");
        } catch (error) {
          console.error("Disconnect failed", error.toString());
        }
      }
    },
  },
  created() {
    this.sendBodyData();
  },
  mounted() {
    this.createConnection();

    console.log(this.Uint8ArrayToString(this.receiveNews1));
  },
  //监视
  watch: {
    receiveNews1: {
      immediate: true,
      handler(newValue, oldValue) {
        this.receive(
          this.Uint8ArrayToString(this.receiveNews1),
          this.Uint8ArrayToString(this.receiveNews2),
          this.Uint8ArrayToString(this.receiveNews3),
          this.Uint8ArrayToString(this.receiveNews4)
        );
      },
    },
    receiveNews2: {
      immediate: true,
      handler(newValue, oldValue) {
        this.receive(
          this.receiveNews1,
          this.receiveNews2,
          this.receiveNews3,
          this.receiveNews4
        );
      },
    },
    receiveNews3: {
      immediate: true,
      handler(newValue, oldValue) {
        this.receive(
          this.receiveNews1,
          this.receiveNews2,
          this.receiveNews3,
          this.receiveNews4
        );
      },
    },
    receiveNews4: {
      immediate: true,
      handler(newValue, oldValue) {
        this.receive(
          this.receiveNews1,
          this.receiveNews2,
          this.receiveNews3,
          this.receiveNews4
        );
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainye {
  position: absolute;
  left: -60px;
  top: -90px;
  width: 100px;
  height: 50px;
}
#mapye {
  position: absolute;
  left: -60px;
  top: 65px;
  width: 100px;
  height: 50px;
}
#musicye {
  position: absolute;
  left: -60px;
  top: 355px;
  width: 100px;
  height: 50px;
}
.xianshiData {
  position: absolute;
  left: -75px;
  top: 205px;
  background-color: #151921;
  color: aliceblue;
  border: 0;
}
#jingdu {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #42b983;
}
#weidu {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #42b983;
}
#shiwen {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #42b983;
}
.light {
  position: absolute;
  left: 180px;
  top: 455px;
  width: 405px;
  height: 210px;
}

.light img {
  margin-top: 20px;
  width: 175px;
  height: 175px;
}

.light div {
  color: aliceblue;
  position: absolute;
  left: 220px;
  bottom: 80px;
  top: 35px;
  font-size: 100px;
}

.hello {
  position: absolute;
  left: 100px;
  top: 250px;
  width: 500px;
  height: 210px;
}
.hello p {
  margin-left: 100px;
  margin-top: 0px;
  line-height: 50px;
  font-size: 40px;
  color: whitesmoke;
}
.hello div {
  font-family: "微软雅黑";
  color: whitesmoke;
  display: inline;
  width: 50px;
  height: 100px;
}
#tem {
  width: 150px;
  position: absolute;
  left: 115px;
  top: 80px;
  font-size: 20px;
}
#alc {
  position: absolute;
  left: 215px;
  top: 80px;
  font-size: 20px;
}
#blood {
  position: absolute;
  left: 315px;
  top: 80px;
  font-size: 20px;
}

h3 {
  margin: 40px 0 0;
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
