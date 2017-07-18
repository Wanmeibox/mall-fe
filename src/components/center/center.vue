<template>
  <div class="s-center">
    <div class="ban">
      <p class="uname" v-if="showState === 'logined'">
        <span>用户 ：{{dataLogin.name}}</span>
      </p>
      <p class="uname" v-else-if="showState === 'register'">
        <span>注册</span>
      </p>
      <p class="uname" v-else-if="showState === 'logining'">
        <span>登录</span>
      </p>
    </div>
    <div class="form-item">
      <p class="form-tips">{{tips}}</p>
    </div>
    <div class="cont-center" v-if="showState === 'logined'">
      <div class="item">
        <p>数据1</p>
        <p>数据2</p>
        <p>数据3</p>
        <p>数据4</p>
      </div>
      <div class="btn-div">
        <a href="javascript:;" class="btn-a" @click="clickLogout">退出登录</a>
      </div>
    </div>

    <div class="cont-register" v-else-if="showState === 'register'">
      <div class="form-item">
        <label for="mobile">手机号</label>
        <input type="tel" name="mobile" placeholder="请输入手机号" maxlength="11" v-model="dataLogin.name">
      </div>
      <div class="form-item">
        <label for="code">验证码</label>
        <input type="tel" name="code" placeholder="请输入验证码" maxlength="6" v-model="dataLogin.code">
        <a href="javascript:;" class="btn-get">重新获取</a>
      </div>
      <div class="form-item">
        <label for="password">密码</label>
        <input type="password" name="password" placeholder="请输入密码" maxlength="6" v-model="dataLogin.pass">
        <a href="javascript:;" class="btn-get">眼睛</a>
      </div>
      <div class="btn-div">
        <a href="javascript:;" class="btn-a" @click="clickRegister">注册按钮</a>
      </div>
      <fieldset>
        <legend>或</legend>
        <a href="javascript:;" @click="toLogin">已有账号？快速登录</a>
      </fieldset>
    </div>

    <div class="cont-login" v-else-if="showState === 'logining'">
      <div class="form-item">
        <label for="username">帐号</label>
        <input type="tel" name="username" placeholder="请输入手机号" maxlength="11" v-model="dataLogin.name">
      </div>
      <div class="form-item">
        <label for="password">密码</label>
        <input type="password" name="password" placeholder="请输入密码" maxlength="6" v-model="dataLogin.pass">
        <a href="javascript:;" class="btn-get">眼睛</a>
      </div>
      <div class="btn-div">
        <a href="javascript:;" class="btn-a" @click="clickLogin">登陆按钮</a>
      </div>
      <fieldset class="form-fieldset">
        <legend>或</legend>
        <a href="javascript:;" @click="toRegister">未有帐号？免费注册</a>
      </fieldset>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)
  // const router = new VueRouter()
  import Jam from '../com/jam'
  export default {
    data () {
      return {
        tips: '',
        showState: 'logined',
        dataLogin: {
          name: '',
          pass: '',
          code: ''
        },
        jam: function () {}
      }
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '我的')
      this.jam = new Jam()
      let lDataLogin = this.jam.locDbGet('dataLogin')
      if (lDataLogin === undefined || lDataLogin === null) {
        this.showState = 'logining'
      } else {
        this.dataLogin = this.jam.locDbGet('dataLogin')
        this.showState = 'logined'
      }
    },
    methods: {
      showSideBar () {
        return this.$store.dispatch('changeSideBarState', true)
      },
      hideSideBar () {
        return this.$store.dispatch('changeSideBarState', false)
      },
      clickLogin () {
        if (this.jam.isPhone(this.dataLogin.name)) {
          if (this.jam.isPass(this.dataLogin.pass)) {
            this.jam.locDbSet('dataLogin', {name: this.dataLogin.name, pass: this.dataLogin.pass})
            this.showState = 'logined'
            this.tips = ''
          } else {
            this.tips = '请输入由字母数字组成的6位密码！'
          }
        } else {
          this.tips = '请输入正确的手机号！'
        }
      },
      clickRegister () {
        if (this.jam.isPhone(this.dataLogin.name)) {
          if (this.jam.isPass(this.dataLogin.pass) && this.jam.isPass(this.dataLogin.code)) {
            this.jam.locDbSet('dataLogin', {name: this.dataLogin.name, pass: this.dataLogin.pass})
            this.showState = 'logined'
            this.tips = ''
          } else {
            this.tips = '请输入由字母数字组成的6位验证码密码！'
          }
        } else {
          this.tips = '请输入正确的手机号！'
        }
      },
      clickLogout () {
        localStorage.removeItem('dataLogin')
        this.showState = 'logining'
        this.dataLogin.name = ''
        this.dataLogin.pass = ''
      },
      toRegister () {
        this.showState = 'register'
        this.tips = ''
      },
      toLogin () {
        this.showState = 'logining'
        this.tips = ''
      }
    }
  }
</script>

<style lang="scss" scope>
  @import '../../css/center.scss'
</style>
