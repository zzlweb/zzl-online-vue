<template>
  <div class="login-container">
    <!-- 添加背景 -->
    <div id="large-header" class="large-header">
      <canvas id="demo-canvas" />
    </div>

    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">登陆页面</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
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
      >Login</el-button>

      <div class="tips">
        <span style="margin-right: 20px">用户名: admin</span>
        <span> 密码: 123456</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import TweenLite from 'gsap'
let largeHeader
let canvas
let ctx
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请填入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码长度不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
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
  mounted() {
    // 自动获取焦点交互
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }

    // Main
    this.initHeader()
    this.initAnimation()
    this.addListeners()
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
          console.log('error submit!!')
          return false
        }
      })
    },
    initHeader() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.target = { x: this.width / 2, y: this.height / 2 }
      largeHeader = document.getElementById('large-header')
      largeHeader.style.height = this.height + 'px'
      canvas = document.getElementById('demo-canvas')
      canvas.width = this.width
      canvas.height = this.height
      ctx = document.getElementById('demo-canvas').getContext('2d')
      // create points
      this.points = []
      for (var x = 0; x < this.width; x = x + this.width / 20) {
        for (var y = 0; y < this.height; y = y + this.height / 20) {
          var px = x + (Math.random() * this.width) / 20
          var py = y + (Math.random() * this.height) / 20
          var p = { x: px, originX: px, y: py, originY: py }
          this.points.push(p)
        }
      }
      // for each point find the 5 closest points
      for (var i = 0; i < this.points.length; i++) {
        var closest = []
        var p1 = this.points[i]
        for (var j = 0; j < this.points.length; j++) {
          var p2 = this.points[j]
          if (!(p1 === p2)) {
            var placed = false
            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2
                  placed = true
                }
              }
            }
            // eslint-disable-next-line no-redeclare
            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (
                  this.getDistance(p1, p2) < this.getDistance(p1, closest[k])
                ) {
                  closest[k] = p2
                  placed = true
                }
              }
            }
          }
        }
        p1.closest = closest
      }
      // assign a circle to each point
      // eslint-disable-next-line no-redeclare
      for (var i in this.points) {
        var c = new this.Circle(
          this.points[i],
          2 + Math.random() * 2,
          'rgba(255,255,255,0.3)'
        )
        this.points[i].circle = c
      }
    },
    addListeners() {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', this.mouseMove)
      }
      window.addEventListener('scroll', this.scrollCheck)
      window.addEventListener('resize', this.resize)
    },
    mouseMove(e) {
      var posx = 0
      var posy = 0
      if (e.pageX || e.pageY) {
        posx = e.pageX
        posy = e.pageY
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop
      }
      this.target.x = posx
      this.target.y = posy
    },
    scrollCheck() {
      if (document.body.scrollTop > this.height) this.animateHeader = false
      else this.animateHeader = true
    },
    resize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      largeHeader.style.height = this.height + 'px'
      canvas.width = this.width
      canvas.height = this.height
    },
    // animation
    initAnimation() {
      this.animate()
      for (var i in this.points) {
        this.shiftPoint(this.points[i])
      }
    },
    animate() {
      if (this.animateHeader) {
        ctx.clearRect(0, 0, this.width, this.height)
        for (var i in this.points) {
          // detect points in range
          if (Math.abs(this.getDistance(this.target, this.points[i])) < 4000) {
            this.points[i].active = 0.3
            this.points[i].circle.active = 0.6
          } else if (
            Math.abs(this.getDistance(this.target, this.points[i])) < 20000
          ) {
            this.points[i].active = 0.1
            this.points[i].circle.active = 0.3
          } else if (
            Math.abs(this.getDistance(this.target, this.points[i])) < 40000
          ) {
            this.points[i].active = 0.02
            this.points[i].circle.active = 0.1
          } else {
            this.points[i].active = 0
            this.points[i].circle.active = 0
          }
          this.drawLines(this.points[i])
          this.points[i].circle.draw()
        }
      }
      requestAnimationFrame(this.animate)
    },
    shiftPoint(p) {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: this.Circle.easeInOut,
        onComplete: () => {
          // eslint-disable-next-line no-undef
          this.shiftPoint(p)
        }
      })
    },
    // Canvas manipulation
    drawLines(p) {
      if (!p.active) {
        return
      }
      for (var i in p.closest) {
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.closest[i].x, p.closest[i].y)
        ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')'
        ctx.stroke()
      }
    },
    Circle(pos, rad, color) {
      var _this = this;
      // constructor
      (function() {
        _this.pos = pos || null
        _this.radius = rad || null
        _this.color = color || null
      })()
      this.draw = function() {
        if (!_this.active) return
        ctx.beginPath()
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false)
        ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')'
        ctx.fill()
      }
    },
    // Util
    getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  position: relative;

  .large-header {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
  }

  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 520px;
    max-width: 100%;
    padding: 0px 35px 0;
    z-index: 1;
    background-color:$bg;
    border-radius: 5px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
