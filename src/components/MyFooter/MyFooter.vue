<template> 
	<div class='footer-container'>
    	<img src="./btn.png" class="footer-img"> 
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
<style>
.footer-container {
	position: fixed;
	bottom: 22px;
	left: 50%;
	transform: translate(-50%, 0);
}
.footer-img {
	width: 195px;
}
@media screen and (max-width: 374px) {
  .footer-img {
  	transform: scale(0.7, 0.7);
  }
}
@media screen and (min-width: 500px) {
  .footer-img {
  	transform-origin: bottom;
  	transform: scale(2, 2);
  }
}
</style>