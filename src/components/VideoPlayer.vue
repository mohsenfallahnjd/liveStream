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
// import { liveData } from '../api'
let sourceLive

export default {
	name: 'VideoPlayer',
	props: {
		liveData: {
			type: Object,
			required: true
		}
	},
	beforeCreate() {
		setTimeout(() => {
			this.getLiveSource()
		}, 2000)
	},
	methods: {
		async getLiveSource() {
			// console.log('1. Start async getLiveSource()')
			// console.log(this.liveData)
			await this.getData()
			// console.log(sourceLive)
			await this.hlsSetData()
			// console.log('6. End async getLiveSource()')
		},
		hlsSetData() {
			// console.log('4. Start await hlsSetData')

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
			// console.log('5. End await hlsSetData')
		},
		getData() {
			// console.log('2. Start await liveData ')
			sourceLive = this.liveData.source_live
			// console.log('3. End await liveData')
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
