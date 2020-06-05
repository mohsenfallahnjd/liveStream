<template>
	<b-navbar id="navbar" class="navbar">
		<b-icon-list
			class="sidebar-btn h3 mb-0 ml-3"
			v-b-toggle.sidebar-right
		/>
		<b-img
			@click="gotoHome"
			:src="logoImg"
			alt="navbar-logo"
			class="navbar__logo"
		/>

		<span v-if="token" class="user">
			<router-link :to="{ name: 'Profile' }">
				<span class="user__username">
					{{ user.userName }}
				</span>
				<b-avatar
					class="user__avatar"
					size="35px"
					:variant="user.avatar == '' ? 'light' : 'dark'"
				>
					<img
						v-if="user.avatar != ''"
						class="user__avatar--img"
						:src="user.avatar"
						alt="user-avatar"
					/>
				</b-avatar>
			</router-link>
		</span>
		<b-button v-else pill class="login-btn" :to="{ name: 'Login' }">
			<b-icon-person class="ml-1" />
			<span>
				ورود یا ثبت نام
			</span>
		</b-button>
		<!-- Sidebar details -->
		<b-sidebar
			width="250px"
			bg-variant="dark"
			text-variant="light"
			id="sidebar-right"
			right
			shadow
		>
			<div class="side-bar px-3 py-2">
				<b-button
					v-show="token"
					pill
					class="logout-btn"
					@click="logOut"
				>
					<b-icon-power class="ml-1" />
					<span>
						خروج از حساب کاربری
					</span>
				</b-button>
				<p v-show="!token">
					خوش اومدید<br />
					برای استفاده از امکانات استریم ، چت باکس و ... لطفا وارد
					شوید
				</p>
			</div>
		</b-sidebar>
		<!--  -->
	</b-navbar>
</template>

<script>
export default {
	name: 'Navabr',
	data: () => ({
		logoImg: require('../assets/images/icons8-youtube.svg'),
		token: localStorage.token,
		user: {
			avatar: localStorage.profile_pic,
			userName: localStorage.name
		}
	}),
	methods: {
		logOut() {
			localStorage.token = ''
			localStorage.name = ''
			localStorage.profile_pic = ''
			location.reload()
		},
		gotoHome() {
			this.$router.push({ name: 'Home' })
			location.reload()
		}
	}
}
</script>

<style lang="sass" scoped>
$navBG: #212226
$loginBtn-HoverBG: #292a33
$loginBtn-HoverClr: #d3d6e0
$loginBtn-Clr: #fafafa
.navbar
	height: 100%
	width: 100%
	position: relative
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
		color: $loginBtn-Clr
		&:focus
			outline: none
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
		&:focus
			box-shadow: none !important
	.user
		width: auto !important
		position: absolute
		margin: 0px 5px
		left: 20px
		background-color: $navBG
		color: $loginBtn-Clr
		border: none
		height: 33px
		display: flex
		align-items: center
		> a
			text-decoration: none
		&__avatar
			&--img
				width: 100% !important
				height: 100% !important
		&__username
			color: $loginBtn-Clr
			font-weight: 300
			margin-left: .8em
	.logout-btn
		margin: 0px 5px
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
		&:focus
			box-shadow: none !important
	.side-bar
		text-align: right
</style>
