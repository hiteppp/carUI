<template>
  <div class="jumbotron">
    <h1>音乐Music</h1>
    <audio id="myAudio" src="../assets/MerryChristmas.mp3"></audio>
    <p>这是一首令人激动的歌曲</p>
    <p class="musicp">
      <a
        class="btn btn-primary btn-lg musicBtn"
        href="#"
        role="button"
        @click="playMusic"
        >开始</a
      >
      <a
        class="btn btn-primary btn-lg musicBtn"
        href="#"
        role="button"
        @click="pauseMusic"
        >暂停</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "MusicView",
  methods: {
    playMusic() {
      var audio = document.getElementById("myAudio");
      audio.play();
      // if (audio.paused) {
      //   audio.play();
      // } else {
      //   audio.pause();
      // }
    },
    pauseMusic() {
      var audio = document.getElementById("myAudio");
      audio.pause();
      // if (audio.paused) {
      //   audio.play();
      // } else {
      //   audio.pause();
      // }
    },
  },
};
</script>

<style>
.musicp {
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin-left: 550px;
}
.musicBtn {
  text-decoration: none;
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.jumbotron {
  text-align: center;
  position: absolute;
  top: 0;
  background-color: slateblue;
  left: 120px;
  width: 1400px;
  height: 700px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eeeeee;
}

.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}

.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

.btn-lg {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
</style>