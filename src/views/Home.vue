<template>
	<b-overlay
		:show="!(showVideoPlayer && showStreamer)"
		spinner-variant="primary"
		spinner-type="grow"
		spinner-small
		rounded="lg"
		style="max-width: 100%; height: 100%; z-index:100;"
	>
		<div id="home" class="home">
			<div class="navbar-comp"><Navbar /></div>
			<div class="chatbox-comp"><ChatBox /></div>
			<div class="videoplayer-comp">
				<VideoPlayer @videoPlayerStatus="videoPlayerStatus" />
			</div>
			<div class="left-side"></div>
			<div class="streamer-comp">
				<Streamer
					:liveData="liveData"
					@streamerStatus="streamerStatus"
				/>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'
import ChatBox from '@/components/ChatBox.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import Streamer from '@/components/Streamer.vue'
export default {
	name: 'Home',
	components: {
		Navbar,
		ChatBox,
		VideoPlayer,
		Streamer
	},
	data: () => ({
		liveData: {
			current_view: 135,
			markdown: '# خوش بومای :)',
			source_live: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
			title: 'به‌به ببین کی اومده...',
			total_view: 315
		},
		showVideoPlayer: false,
		showStreamer: false
	}),
	beforeMount() {
		if (localStorage.token) {
			axios
				.get('http://bstream.guilandev.ir/api/user/stream/profile', {
					headers: {
						Authorization: 'Bearer ' + localStorage.token
					}
				})
				.then(response => {
					if (response.status === 200) {
						localStorage.profile_pic =
							response.data.data.profile.profile_pic
					}
				})
				.catch(e => {
					console.log(e)
				})
		}
	},
	methods: {
		videoPlayerStatus(value) {
			this.showVideoPlayer = value
		},
		streamerStatus(value) {
			this.showStreamer = value
		}
	}
}
</script>
<style lang="sass" scoped>
$bgColor: #000000
$primaryColor: #212226
$gray: #38393D

.home
	width: 100%
	height: 100%
	overflow: hidden auto
	background-color: $bgColor
	position: relative
	.navbar-comp
		height: 65px
		width: 100%
		position: fixed
		top: 0
		z-index: 10
	.chatbox-comp
		width: 350px
		height: calc( 100vh - 65px )
		position: fixed
		top: 65px
		right: 0
		bottom: 0
	.videoplayer-comp
		width: calc( 100vw - 400px )
		height: 70vh
		position: absolute
		top: 65px
		right: 350px
	.left-side
		width: 50px
		position: fixed
		left: 0
		top: 65px
		height: calc( 100vh - 65px )
		background-color: $primaryColor
	.streamer-comp
		width: calc( 100vw - 400px )
		height: 720px
		position: absolute
		top: calc( 70vh + 65px )
		right: 350px
	@media only screen and (max-width: 880px)
		.chatbox-comp
			display: none
		.videoplayer-comp , .streamer-comp
			width: calc( 100vw - 50px )
			right: 0
		@media only screen and (orientation: landscape)
			.streamer-comp, .left-side, .navbar-comp
				display: none
			.chatbox-comp
				display:  block
				width: 250px
				height: 100vh
				position: fixed
				top: 0
				right: 0
				bottom: 0
			.videoplayer-comp
				width: calc( 100vw - 250px )
				height: 100vh
				position: absolute
				top: 0
				left: 0
				right: auto

	@media only screen and (max-width: 500px)
		.left-side
			display: none
		.videoplayer-comp , .streamer-comp
			width: 100vw
</style>
