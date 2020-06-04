<template>
	<div id="app">
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="sass">
@import './assets/css/style.css'
#app
	width: 100%
	height: 100vh
  // max-height: 768px
</style>
