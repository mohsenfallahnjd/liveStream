<template>
	<div class="video-player">
		<video
			id="video"
			class="video-js"
			controls
			preload="auto"
			poster="https://static.cdn.asset.aparat.com/agf/liveCover-86332-326456-l.jpg"
			autoplay
		/>
	</div>
</template>

<script>
import Hls from 'hls.js'
export default {
	name: 'VideoPlayer',
	mounted() {
		if (Hls.isSupported()) {
			var video = document.getElementById('video')
			var hls = new Hls()

			// bind them together
			hls.attachMedia(video)
			hls.on(Hls.Events.MEDIA_ATTACHED, function() {
				console.log('video and hls.js are now bound together !')
				hls.loadSource(
					'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
				)
				hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
					console.log(
						'manifest loaded, found ' +
							data.levels.length +
							' quality level'
					)
					video.onclick = function() {
						video.play()
					}
				})
			})
		}
	}
}
</script>

<style lang="sass" scoped>

.video-player
	width: 100%
	height: 100%
	.video-js
		width: 100%
		height: 100%
		&:focus
			outline: none
</style>
