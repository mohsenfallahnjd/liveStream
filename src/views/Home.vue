<template>
	<div id="home" class="home">
		<div class="navbar-comp"><Navbar /></div>
		<div class="chatbox-comp"><ChatBox /></div>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ChatBox from '@/components/ChatBox.vue'
export default {
	name: 'Home',
	components: {
		Navbar,
		ChatBox
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
	position: relative
	.navbar-comp
		height: auto !important
		width: 100%
		position: fixed
		top: 0
		z-index: 20
	.chatbox-comp
		height: auto !important
		width: 350px
		position: fixed
		top: 65px
		right: 0
		bottom: 0
</style>
