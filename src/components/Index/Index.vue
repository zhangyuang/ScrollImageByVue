<template> 
	<div class='index-container'>
      <div class="index-head-container">
        <img src="./title.png" class="index-head-img">
      </div>
    	<div class="index-content-container">
        <img src="./center.png" class="index-content-img"> 
      </div>
      <div>
        <img src="./cloud1-5.png" class="cloud5">
        <img src="./cloud1-2.png" class="cloud2">
        <img src="./cloud1-1.png" class="cloud1">
        <img src="./cloud1-4.png" class="cloud4">
        <img src="./cloud1-3.png" class="cloud3">
      </div>
	</div>
</template>

<script type="text/babel">

export default {
    data () {
      return {
      	client: '',
        startx: '',
        endx: '',
        movingx: ''
      }
    },
    mounted () { 
    	
    },
    methods: {
     
  	}
  }
</script>
<style scoped>
.index-container {
  position: relative;
  height: 100%;
}
.index-head-container {
  padding-top: 11.7%;
}
.index-head-img {
  display: block;
  width: 20.375rem;
  height: 4.5rem;
  margin: 0 auto;
}
.index-content-img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 72.2%;
  height: 50%;
  z-index: 20;
}
.cloud1 {
  opacity: 0.8;
  position: absolute;
  width: 6.25rem;
  right: 2.2%;
  top: 50%;
}
.cloud2 {
  opacity: 0.8;
  position: absolute;
  width: 7.3125rem;
  height: 6rem;
  left: 4%;
  bottom: 19%;
}
.cloud3 {
  opacity: 0.8;
  position: absolute;
  width: 15%;
  left: 34%;
  top: 0;
}
.cloud4 {
  opacity: 0.8;
  position: absolute;
  height: 6rem;
  top: -6%;
  right: -5%;
}
.cloud5 {
  opacity: 0.8;
  position: absolute;
  height: 12.8125rem;
  top: 15%;
  left: -22%;
  z-index: 10;
}

</style>