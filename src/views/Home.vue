<template>
	<div id="home" class="home">
		<Navbar class="navbarComp" />
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
	name: 'Home',
	components: {
		Navbar
	}
}
</script>
<style lang="sass" scoped>
$bgColor: #000000
.home
	width: 100%
	height: 100vh
	overflow-x: hidden
	background-color: $bgColor
	.navbarComp
		position: fixed
</style>
