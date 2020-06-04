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
import axios from 'axios'
let sourceLive

export default {
	name: 'VideoPlayer',
	created() {
		if (this.$route.name == 'Live') {
			axios
				.post('http://bstream.guilandev.ir/api/stream/getLive', {
					page: this.$route.params.username
				})
				.then(response => {
					if (response.data.code == 200) {
						if (response.data.data.source_live != null) {
							sourceLive = response.data.data.source_live
							this.getLiveSource()
						} else {
							this.videoPlayerStatus()
						}
					}
				})
				.catch(error => {
					console.log(error)
				})
		} else {
			sourceLive = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
			this.getLiveSource()
		}
	},
	methods: {
		async getLiveSource() {
			await this.videoPlayerStatus()
			await this.hlsSetData()
		},
		hlsSetData() {
			if (Hls.isSupported()) {
				const video = document.getElementById('video')
				const hls = new Hls()

				// bind them together
				hls.attachMedia(video)
				hls.on(Hls.Events.MEDIA_ATTACHED, function() {
					console.log('video and hls.js are now bound together !')
					hls.loadSource(sourceLive)
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
		},
		videoPlayerStatus() {
			this.$emit('videoPlayerStatus', true)
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
