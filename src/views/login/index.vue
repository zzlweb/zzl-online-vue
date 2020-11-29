<template>
  <div class="login-page flex-col">
    <div class="login-container flex-row">
      <div class="left-part">
        <span>作品展示</span>
      </div>

      <div class="right-part flex-col">
        <div class="home-title">用户登录</div>
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="left"
          hide-required-asterisk
        >
          <el-form-item prop="username" class="flex-row" label="用户名">
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="请输入用户名"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item prop="password" class="flex-row" label="密码">
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="请输入密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
              />
            </span>
          </el-form-item>

          <el-button
            :loading="loading"
            type="primary"
            style="width: 100%; margin-bottom: 30px"
            @click.native.prevent="handleLogin"
          >登入</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('登录失败')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: rgb(248, 248, 248);
  .login-container {
    .left-part {
      width: 762px;
      height: 740px;
      background: url("../../assets/svg/fengmiantu.svg");
      position: relative;

      span {
        position: absolute;
        font-size: 45px;
        color: #ffffff;
        bottom: 265px;
        width: 100%;
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-weight: bold;
      }
    }

    .right-part {
      width: 500px;
      background: #fff;
      .home-title {
        font-size: 30px;
        color: #000;
        text-align: center;
        height: 42px;
        line-height: 42px;
        font-weight: bold;
        margin-top: 140px;
        margin-bottom: 60px;
      }
      .login-form {
        padding: 60px;

        .el-form-item {
          position: relative;
          height: 42px;
          margin-bottom: 36px;

          ::v-deep .el-form-item__error {
            height: 20px;
            line-height: 20px;
            color: #e04747;
            font-size: 14px;
            padding-top: 9px;
          }

          ::v-deep .el-form-item__label {
            position: absolute;
            left: 0;
            top: 0px;
            width: 60px;
            height: 30px;
            line-height: 30px;
            text-align: left;
            z-index: 10;
            font-size: 20px;
            color: #404040;
            font-weight: normal;
            padding: 0;
          }

          ::v-deep .el-form-item__content {
            width: 100%;
            height: 100%;

            .el-input__inner {
              border-radius: 0;
              border: none;
              height: 42px;
              line-height: 30px;
              padding: 0 0 12px 85px;
              font-size: 14px;
              color: #000;
              border-bottom: 1px solid #d4d4d4;
            }
          }

          &.is-error {
            ::v-deep .el-form-item__content {
              .el-input__inner {
                border-bottom: 1px solid #e04747;
              }
            }
          }
        }

        .el-button{
          height: 60px;
          line-height: 60px;
          text-align: center;
          color: #fff;
          font-size: 24px;
          margin: 80px 0 0 56px;
          width: 270px !important;
          padding: 0;
          background-color: #32479A;
          border-radius: 2px;
        }
      }
      .svg-container {
        padding: 6px 5px 6px 15px;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
      }
      .show-pwd {
        position: absolute;
        right: 10px;
        top: 0px;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
