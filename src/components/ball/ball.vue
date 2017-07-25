<template>
  <div>
    <header flex="">
      <h3 flex-box="1">我的名称名称名称名称我的名称名称名称名称</h3>
      <div @click="addCart($event)">加入购物车</div>
    </header>
    <div class="ball-container">
      <transition name="drop" v-on:before-enter="beforeEnter"
        v-on:enter="enter" v-on:after-enter="afterEnter"
        v-for="(ball,index) in balls">
        <div class="ball" v-show="ball.show">
          <div class="inner inner-hook"></div>
        </div>
      </transition>
    </div>
    <div class="shop-add" flex="cross:center">
      <div class="cart-mark iconfont icon-gouwuche1"><badge class="badge" text="2"></badge></div>
      <div class="one-price" flex-box="1">￥0</div>
      <div class="cartadd-btn"><span>添加商品：</span><inline-x-number class="x-num" :min="0" button-style="round"></inline-x-number></div>
    </div>
  </div>
</template>

<script>
  import { InlineXNumber, Badge } from 'vux'
  export default {
    data () {
      return {
        detail: {},
        balls: [{
          show: false
        }, {
          show: false
        }, {
          show: false
        }, {
          show: false
        }, {
          show: false
        }],
        dropBalls: []
      }
    },
    components: {
      InlineXNumber,
      Badge
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '球的运行轨迹')
      this.$store.dispatch('changeBackState', true)
      this.$store.dispatch('changeFooterState', false)
    },
    methods: {
      addCart (event) {
        this.drop(event.target)
      },
      drop (el) {
        for (let i = 0, l = this.balls.length; i < l; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            this.dropBalls.push(ball)
            return
          }
        }
      },
      beforeEnter (el) {
        let count = this.balls.length
        while (count--) {
          let ball = this.balls[count]
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect()
            let x = rect.left - 32
            let y = -(window.innerHeight - rect.top - 22)
            el.style.display = ''
            el.style.webkitTransform = `translate3d(0,${y}px,0)`
            el.style.transform = `translate3d(0,${y}px,0)`
            let inner = el.querySelector('.inner-hook')
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`
            inner.style.transform = `translate3d(${x}px,0,0)`
          }
        }
      },
      enter (el) {
        el.offsetHeight // 触发浏览器重绘，offsetWidth、offsetTop等方法都可以触发
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)'
          el.style.transform = 'translate3d(0,0,0)'
          let inner = el.querySelector('.inner-hook')
          inner.style.webkitTransform = 'translate3d(0,0,0)'
          inner.style.transform = 'translate3d(0,0,0)'
        })
      },
      afterEnter (el) {
        let ball = this.dropBalls.shift()
        if (ball) {
          ball.show = false
          el.style.display = 'none'
        }
      }
    }
  }
</script>

<style lang="scss" scope>
@import url('//at.alicdn.com/t/font_7pn5lp0p4z589f6r.css');
@import '../../css/base.scss';
.shop-add {
  position: fixed;
  background-color: #f6f6f6;
  bottom: 0;
  z-index: 100;
  height: rem(98px);
  width: rem(750px);
  margin: 0 auto;
  @include font-dpr(12px);
  padding: 0 rem(24px);

  .cart-mark {
    color: #f8d74b;
    @include font-dpr(52px);
    -webkit-transform: translate(0, -28%);
    transform: translate(0, -28%);
    position: relative;
    .badge{
      position: absolute;
      vertical-align: top;
      top: 0;
      left: rem(70px);
    }
  }

  .x-num {
    vertical-align: middle;
  }

  input {
    background-color: transparent;
  }
}

.ball-container {
  .ball {
      position: fixed;
      left: 32px;
      bottom: 22px;
      z-index: 200;

      &.drop-enter, &.drop-enter-active {
        transition: all 0.4s cubic-bezier(0.49,-0.29,0.75,0.41);
        .inner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgb(0,160,220);
          transition: all 0.4s linear;
        }
      }
    }
}
</style>
