<template>
  <div id="app" @touchstart.prevent="movestart($event)" @touchend.prevent="moveend($event)">
    <div class="nav">
      <div class="nav-radius" id='index'></div>
      <div class="nav-radius" id='second'></div>
      <div class="nav-radius" id='third'></div>
    </div>
    <transition :name='transitionName'>
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import router from './router'
import MyFooter from './components/MyFooter/MyFooter'
export default {
  components: {
    MyFooter
  },
  data () {
    return {
      transitionName: '',
      startx: '',
      endx: '',
      movingx: ''
    }
  },
  mounted () {
    require.ensure([], function (require) {
            require('../public/utp-jssdk.js')
            require('../public/aplus_v2.js')
    },'ucsdk')//懒加载sdk
    let index = document.getElementById('index')
    let second = document.getElementById('second')
    let third = document.getElementById('third')
    if (router.history.current.path == '/') {
      index.style.backgroundColor = '#fb8935'
    }
    else if (router.history.current.path == '/second') {
      second.style.backgroundColor = '#fb8935'
    }
    else if (router.history.current.path == '/third') {
      third.style.backgroundColor = '#fb8935'
    }
  },
  methods: {
    movestart (event) {
      this.startx = event.changedTouches[0].clientX
    },
    moveend (event) {
      this.endx = event.changedTouches[0].clientX
      if (this.endx - this.startx > 30) {
        //向左滑动
         if (router.history.current.path == '/second') {
            router.push('/')
          }
          else if (router.history.current.path == '/third') {
            router.push('/second')
          }
      }
      else if (this.endx - this.startx < -30) {
        //向右滑动
         if (router.history.current.path == '/') {
            router.push('/second')
          }
          else if (router.history.current.path == '/second') {
            router.push('/third')
          }   
        }
    },
  },
  watch: {
    '$route' (to, from) {
      const toDepth = parseInt(to.name)
      const fromDepth = parseInt(from.name)
      this.transitionName = toDepth < fromDepth ? 'scrollleft' : 'scrollright'
      let index = document.getElementById('index')
      let second = document.getElementById('second')
      let third = document.getElementById('third')
      if (to.path == '/') {
        index.style.backgroundColor = '#fb8935'
        second.style.backgroundColor = '#fff'
        third.style.backgroundColor = '#fff'
      }
      else if (to.path == '/second') {
        second.style.backgroundColor = '#fb8935'
        index.style.backgroundColor = '#fff'
        third.style.backgroundColor = '#fff'
      }
      else if (to.path == '/third') {
        third.style.backgroundColor = '#fb8935'
        index.style.backgroundColor = '#fff'
        second.style.backgroundColor = '#fff'
      }
    }
  }
}
</script>

<style>
#app {
  height: 100%;
  background: url('./assets/images/bg.png');
  overflow: hidden;
  z-index: -999;
}
.nav {
  position: fixed; 
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
}
.nav-radius {
  float: left;
  width: 0.3125rem;
  height: 0.3125rem;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 5px;
}
.scrollleft-enter-active {
  animation: scroll-left 1s ease 1;
}
.scrollright-enter-active {
  animation: scroll-right 1s ease 1;
}
@keyframes scroll-left {
  from {
    transform: translateX(-100%)
  }
  to {
    transform: translateX(0)
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0)
  }
}
</style>
