<template> 
  <div class='third-container'>
      <div class="third-head-container">
        <img src="./title3.png" class="third-head-img">
      </div>
      <div class="third-content-container">
        <img src="./center3.png" class="third-content-img"> 
      </div>
      <div>
        <img src="./msg.png" class="msg-1">
        <img src="./msg.png" class="msg-2">
        <img src="./msg3.png" class="msg-3">
        <img src="./msg.png" class="msg-4">
        <img src="./msg2.png" class="msg-5">
      </div>
  </div>
</template>

<script type="text/babel">

export default {
    data () {
      return {
        client: ''
      }
    },
    mounted () { 
      
    },
    methods: {
     
    }
  }
</script>
<style scoped>
.third-container {
  position: relative;
  height: 100%;
}
.third-head-container {
  padding-top: 11.7%;
}
.third-head-img {
  position: relative;
  display: block;
  width: 19.1875rem;
  height: 4.5rem;
  margin: 0 auto;
  z-index: 10;
}
.third-content-img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 72.2%;
  height: 50%;
  z-index: 20;
}
.msg-1 {
  position: absolute;
  width: 5.75rem;
  top: 36%;
  left: -2%;
}
.msg-2 {
  position: absolute;
  width: 3.25rem;
  left: 12%;
  top: 22%;
}
.msg-3 {
  position: absolute;
  width: 2.4375rem;
  top: 0%;
  right: 17%;
}
.msg-4 {
  position: absolute;
  width: 4.5rem;
  right: -3%;
  top: 3%;
}
.msg-5 {
  position: absolute;
  height: 3.75rem;
  bottom: 34%;
  right: 5%;
}
</style>