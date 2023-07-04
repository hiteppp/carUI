<template>
  <div>
    <div class="hello">
      <h3>返回数据 : {{receiveNews}}</h3>
      <button @click="createConnection">创建连接</button><br>
      <button @click="doPublish">发布数据</button><br>
      <!-- <button @click="doSubscribe">订阅主题</button><br> -->
      <button @click="doUnSubscribe">取消订阅</button><br> 
      <button @click="destroyConnection">断开连接</button><br>
    </div>
    
    <div>
      <div class="login-box">
        <h2>Login</h2>
        <form @submit.prevent="submitForm">
          <div class="form-item">
            <input type="text" v-model="username" required>
            <label>Username</label>
          </div>
          <div class="form-item">
            <input type="password" v-model="password" required>
            <label>Password</label>
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      receiveNews: "",
      username: "",
      password: ""
    };
  },
  methods: {
    createConnection() {
      // 创建连接的逻辑
    },
    doPublish() {
      // 发布消息的逻辑
    },
    doUnSubscribe() {
      // 取消订阅的逻辑
    },
    destroyConnection() {
      // 断开连接的逻辑
    },
    submitForm() {
      // 提交表单的逻辑
      console.log(`用户名：${this.username}，密码：${this.password}`);
    }
  }
};
</script>

<style>
.hello {
  margin-bottom: 20px;
}

.login-box {
  width: 300px;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
}

.form-item {
  margin-bottom: 10px;
}

.form-item label {
  display: block;
  margin-bottom: 5px;
}

.form-item input[type="text"],
.form-item input[type="password"] {
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
}

.submit-btn {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
