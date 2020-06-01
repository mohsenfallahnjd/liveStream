<template>
	<div id="login-page" class="login-page">
		<b-button pill class="back-btn" :to="{ name: 'Home' }">
			<span>بازگشت</span>
			<b-icon-arrow-left-short />
		</b-button>
		<div class="loginbox-comp"><LoginBox /></div>
	</div>
</template>

<script>
import LoginBox from '@/components/LoginBox.vue'
export default {
	name: 'Login',
	components: {
		LoginBox
	},
	beforeCreate() {
		if (localStorage.token) {
			this.$router.push({ name: 'Home' })
		}
	}
}
</script>

<style lang="sass" scoped>
$bgColor: #fafafa
$loginBtn-Clr: #000
.login-page
	width: 100%
	height: 100%
	overflow: auto
	background-color: $bgColor
	position: relative
	display: flex
	justify-content: center
	align-items: center
	flex-direction: column
	.back-btn
		background-color: $bgColor !important
		border: none
		height: 33px
		display: flex
		align-items: center
		margin-bottom: 1em
		position: relative
		right: 160px
		color: $loginBtn-Clr
		> span
			margin-left: 3px
			transition: margin-left .3s ease
			font-size: 12.6px
		&:hover
			> span
				margin-left: 8px
		&:focus
			box-shadow: none !important
	.loginbox-comp
		width: 400px
		height: 330px
		margin-bottom: 3em
	@media only screen and (max-width: 500px)
		.loginbox-comp
			width: 340px
			height: 320px
		.back-btn
			right: 130px
</style>
