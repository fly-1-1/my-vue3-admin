<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12" :xs="24">
        <el-form :model="loginForm" :rules="rules" class="login_from" ref="loginFormRef">
          <h1>hello</h1>
          <h2>欢迎来到我的后台管理系统</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" size="large" class="login_btn" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang='ts'>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
import useUserStore from "../../stores/modules/user";
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus'

const useStore = useUserStore();
const router = useRouter();
const loginForm = reactive({ username: 'admin', password: '123456' })
const loading = ref(false)
const loginFormRef = ref()


const rules = {
  username: [
    { min: 3, max: 10, message: '用户名长度在 3 到 10 个字符', trigger: 'change' }
  ],
  password: []
}

const login = async () => {
  loading.value = true
  loginFormRef.value.validate((valid: boolean) => {
    if (valid) {
      return
    } else {
      loading.value = false
    }
  })
  useStore.userLogin(loginForm).then(() => {
    ElNotification({
      title: '登录成功',
      message: '欢迎回来',
      type: 'success'
    })
    router.push('/');
  }).catch(() => {
    ElNotification({
      title: '登录失败',
      message: '用户名或密码错误',
      type: 'error'
    })
  }).finally(() => {
    loading.value = false
  })

}

</script>
<style scoped lang='scss'>
.login_container {
  widows: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_from {
    position: relative;
    width: 60%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 20px 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }

  }
}
</style>
