<template> 
  <div class='second-container'>
      <div class="second-head-container">
        <img src="./title2.png" class="second-head-img">
      </div>
      <div class="second-content-container">
        <img src="./center2.png" class="second-content-img"> 
      </div>
      <div>
        <img src="./emoji1-2.png" class="emoji1-2">
        <img src="./emoji1-1.png" class="emoji1-1">
        <img src="./emoji1-4.png" class="emoji1-4">
        <img src="./emoji1-6.png" class="emoji1-6">
        <img src="./emoji1-5.png" class="emoji1-5">
      </div>
  </div>
</template>

<script type="text/babel">
import util from '../../../public/util'
export default {
    data () {
      return {
        client: ''
      }
    },
    mounted () { 
      setTimeout(function () {
        goldlog.setPageSPM(null, 'qiqu2')
        let checksum = 'a2s0h.' + 'qiqu2'
        checksum = util.checksum(checksum)
        goldlog.sendPV({ pageid: "", checksum: checksum })
      },2000)
    },
    methods: {
     
    }
  }
</script>
<style scoped>
.second-container {
  position: relative;
  height: 100%;
}
.second-head-container {
  padding-top: 11.7%;
}
.second-head-img {
  display: block;
  width: 16.1875rem;
  height: 4.5rem;
  margin: 0 auto;
}
.second-content-img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 72.2%;
  height: 50%;
  z-index: 20;
}
.emoji1-1 {
  opacity: 0.8;
  position: absolute;
  width: 6.25rem;
  right: 1.5%;
  top: 50%;
}
.emoji1-2 {
  opacity: 0.8;
  position: absolute;
  width: 4.375rem;
  left: 20%;
  top: -5%;
}
.emoji1-4 {
  position: absolute;
  height: 6.3875rem;
  right: -10%;
  top: -4%;
}
.emoji1-5 {
  opacity: 0.8;
  position: absolute;
  height: 8.75rem;
  top: 22%;
  left: -10%;
}
.emoji1-6 {
  opacity: 0.8;
  position: absolute;
  width: 3.125rem;
  bottom: 22%;
  left: 5%;
}
</style>