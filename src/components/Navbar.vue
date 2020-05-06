<template>
	<b-navbar id="navbar" class="navbar">
		<b-icon-list
			class="sidebar-btn h3 mb-0 ml-3"
			variant="secondary"
			v-b-toggle.sidebar-right
		/>
		<router-link :to="{ name: 'Home' }">
			<b-img :src="logoImg" alt="navbar-logo" class="navbar__logo" />
		</router-link>

		<b-button pill class="login-btn" :to="{ name: 'Login' }">
			<b-icon-person class="ml-1" />
			<span>
				ورود یا ثبت نام
			</span>
		</b-button>
		<!-- Sidebar details -->
		<b-sidebar id="sidebar-right" title="Sidebar" right shadow>
			<div class="px-3 py-2">
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo
					odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
					risus, porta ac consectetur ac, vestibulum at eros.
				</p>
				<b-img
					src="https://picsum.photos/500/500/?image=54"
					fluid
					thumbnail
				/>
			</div>
		</b-sidebar>
		<!--  -->
	</b-navbar>
</template>

<script>
export default {
	name: 'Navabr',
	data: () => ({
		logoImg: require('../assets/images/icons8-microsoft-stream-2019.svg')
	})
}
</script>

<style lang="sass" scoped>
$navBG: #212226
$loginBtn-HoverBG: #292a33
$loginBtn-HoverClr: #d3d6e0
$loginBtn-Clr: #fafafa
.navbar
	height: 65px
	width: 100%
	background-color: $navBG
	-webkit-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.5)
	-moz-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.5)
	box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.5)
	display: flex
	align-items: center
	&__logo
		width: auto
		height: 40px
		object-fit: cover
	.sidebar-btn
		cursor: pointer
	.login-btn
		position: absolute
		margin: 0px 5px
		left: 15px
		background-color: $navBG
		color: $loginBtn-Clr
		border: none
		height: 33px
		display: flex
		align-items: center
		> span
			font-size: 12.6px
			line-height: 32.6px
		&:hover
			background-color: $loginBtn-HoverBG
			color: $loginBtn-HoverClr
</style>
