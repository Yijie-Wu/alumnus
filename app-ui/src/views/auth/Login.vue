<script setup>
import {ref, onBeforeUnmount, reactive} from 'vue';
import {User, Lock} from '@element-plus/icons-vue'
import {useUserStore} from "@/stores/user/user.js";
import {setToken} from "@/utils/token.js";
import {showMessage} from "@/utils/message.js";
import {useRouter} from 'vue-router'
import {login_by_basic_auth} from "@/apis/auth.js";

const formRef = ref(null)
const loading = ref(false)
const basic_auth_message = ref('登陆校友管理系统')
const store = useUserStore()
const router = useRouter()

const form = reactive({
  username: '',
  password: ''
})

const rules = reactive({
      username: [
        {required: true, message: '用户名不能为空', trigger: 'blur'},
        {min: 2, max: 20, message: '用户名长度必须在2到20之间', trigger: 'blur'},
      ],
      password: [
        {required: true, message: '密码不能为空', trigger: 'blur'},
        {min: 6, max: 20, message: '密码长度必须在6到20之间', trigger: 'blur'},
      ]
    }
)


const loginByBasicAuth = (formEl) => {
  formEl.validate(valid => {
    if (!valid) {
      return false
    }

    loading.value = true
    basic_auth_message.value = '登录中...'
    login_by_basic_auth(form).then(res => {
      setToken(res.data.token);
      store.setIsLogin(true);
      router.push({path: '/'})
      showMessage('success', '登陆成功')
    }).catch(err => {
      showMessage('error', err.message)
    }).finally(() => {
      loading.value = false
      basic_auth_message.value = '登陆校友管理系统'
    })
  })
}


function onKeyUp(e) {
  if (e.key === "Enter") loginByBasicAuth(formRef.value)
}

onBeforeUnmount(() => {
  document.removeEventListener("keyup", onKeyUp)
})

</script>

<template>
  <el-row class="main-container">
    <el-col :xs="0" :sm="0" :md="0" :lg="12" :xl="12" class="logo-container">
      <img class="logo-image" src="@/assets/image/welcome.png" alt="logo"/>
    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="login-container">
      <div class="login-box">
        <div class="login-header">
          <div class="login-logo">
            <img src="@/assets/image/logo.jpeg" alt="">
          </div>
          <div class="logo-name">
            <div><h1 style="color:#0dda91">泉州经贸职业技术学院</h1></div>
            <div>校友管理系统平台</div>
          </div>
        </div>
        <div class="form-area">
          <el-form ref="formRef" :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input
                  v-model="form.username"
                  class="w-50 m-2"
                  placeholder="账号"
                  :prefix-icon="User"
                  size="large"
              />
            </el-form-item>
            <el-form-item style="margin-top:20px;" prop="password">
              <el-input
                  v-model="form.password"
                  class="w-50 m-2"
                  placeholder="密码"
                  :prefix-icon="Lock"
                  size="large"
                  type="password"
                  show-password
              />
            </el-form-item>
            <el-form-item style="margin-top:30px;box-sizing:border-box;">
              <el-button type="success" plain size="large" round style="width:100%;" @click="loginByBasicAuth(formRef)"
                         :loading="loading">{{ basic_auth_message }}
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.main-container {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #4A90E2 0%, rgba(196, 116, 35, 0.29) 100%);
}

.logo-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container img {
  width: 80%;
}

.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  min-width: 70%;
  width: 80%;
  min-height: 70%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 5px rgb(13, 218, 145);
}

.login-box:hover {
  transition: 1s;
  box-shadow: 0 0 5px rgba(234, 23, 104, 0.62);
}

.login-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.login-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #13ce66;
  font-size: 40px;
  font-weight: bold;
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.login-logo img {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  top: -50%;
  position: relative;
}

.logo-name {
  top: -80px;
  position: relative;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-area {
  padding: 5px 0;
}


</style>
