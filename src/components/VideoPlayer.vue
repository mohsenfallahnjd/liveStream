<template>
	<div class="video-player">
		<video
			id="my-video"
			class="video-js"
			controls="false"
			vjs-fluid
			preload="auto"
			poster="https://static.cdn.asset.aparat.com/agf/liveCover-86332-326456-l.jpg"
			data-setup="{}"
		>
			<source src="MY_VIDEO.mp4" type="video/mp4" />
			<source src="MY_VIDEO.webm" type="video/webm" />
			<p class="vjs-no-js">
				To view this video please enable JavaScript, and consider
				upgrading to a web browser that
				<a
					href="https://videojs.com/html5-video-support/"
					target="_blank"
					>supports HTML5 video</a
				>
			</p>
		</video>
	</div>
</template>

<script>
export default {
	name: 'VideoPlayer'
}
</script>

<style lang="sass" scoped>

.video-player
	width: 100%
	height: 100%
	.video-js
		width: 100%
		height: 100%
</style>
