<template>
  <div>
    <el-form
      ref="loginForm"
      v-loading="loading"
      :rules="rules"
      element-loading-text="正在登录..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :model="loginForm"
      class="loginContainer"
    >
      <h3 class="loginTitle">
        系统登录
      </h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          size="normal"
          type="text"
          auto-complete="off"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          size="normal"
          type="password"
          auto-complete="off"
          placeholder="请输入密码"
        />
      </el-form-item>
      <!-- <el-form-item prop="code">
        <el-input
          v-model="loginForm.code"
          size="normal"
          type="text"
          auto-complete="off"
          placeholder="点击图片更换验证码"
          style="width: 250px"
          @keydown.enter.native="submitLogin"
        />
        <img
          :src="vcUrl"
          alt
          style="cursor: pointer"
          @click="updateVerifyCode"
        >
      </el-form-item>-->
      <!-- <el-checkbox
        v-model="checked"
        size="normal"
        class="loginRemember"
      />-->
      <el-button
        size="normal"
        type="primary"
        style="width: 100%;"
        @click="submitLogin"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      // 是否加载
      loading: false,
      /* 验证码 */
      // vcUrl: '/verifyCode?time=' + new Date(),
      vcUrl: '',
      loginForm: {
        username: 'admin',
        password: '456',
        code: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
      // checked: true
    }
  },
  methods: {
    /* 更新校验码 */
    // updateVerifyCode () {
    //   this.vcUrl = '/verifyCode?time=' + new Date()
    // },
    submitLogin () {
      /* 前端校验 */
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          /* 后台登录校验 */
          this.loading = true
          console.log(this.loginForm)
          this.postRequest('/doLogin', this.loginForm).then(resp => {
            this.loading = false
            if (resp) {
              // 如果有响应，初始化当前用户
              this.$store.commit('INIT_CURRENTHR', resp.obj)
              window.sessionStorage.setItem('user', JSON.stringify(resp.obj))
              console.log(resp)
              // 登陆后重定向至当前路由
              const path = this.$route.query.redirect
              // 编程式跳转
              this.$router.replace((path === '/' || path === undefined) ? '/home' : path)
            } else {

            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
  margin: 15px auto 20px auto;
  text-align: center;
  color: #505458;
}

.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}
.el-form-item__content {
  display: flex;
  align-items: center;
}
</style>
