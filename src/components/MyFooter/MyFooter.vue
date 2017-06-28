<template> 
	<div class='footer-container'>
    	<img src="./btn.png" @click='download' class="footer-img"> 
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
        let ua = navigator.userAgent
		let client
		if (ua.match('iPhone') || ua.match('iPad')) {
			this.client = 'ios' 
		}
		else if (ua.match('Android') || ua.match('Windows')) {
			this.client = 'android'
		}
    },
    methods: {
     download () {
     		goldlog.record('/uctoutiao.qiqudown.download','CLK','','H1484266036')
			if (this.client == 'ios') {
				let UTP = window.UTPJSSDK;
		        let utp = new UTP();
	            utp.sdkClick({
	                downLink: 'https://itunes.apple.com/cn/app/uc-tou-tiao-zui-dong-ni-zi/id1085421653',
	                pkgName: 'com.uc.ucnews',
	                adChannel: 9999,
	                adBid: 999,
	                adPosID: 700,
	                ucLink: '',
	                appID: '',
	                cid: '11b517e6f800000000000000100000000000800,ios_news'
	            });
			}
			else if (this.client == 'android') {
				location.href = 'https://pdds.ucweb.com/download/newest/UCNewsApp/zh-cn/190/35784/qiquzb?redirectUrl=ucnews://ext:info_flow_open_channel:ch_id=10070&from=21'
			}	
    	}
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