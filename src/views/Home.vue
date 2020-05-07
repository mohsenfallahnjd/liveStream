<template>
	<div id="home" class="home">
		<div class="navbar-comp"><Navbar /></div>
		<div class="chatbox-comp"><ChatBox /></div>
		<div class="videoplayer-comp"><VideoPlayer /></div>
		<div class="left-side"></div>
		<div class="streamer-comp"><Streamer /></div>
	</div>
</template>

<script>
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
		z-index: 20
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
		// border-right: 0.1px solid $gray
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
</style>
