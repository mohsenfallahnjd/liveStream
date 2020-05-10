<template>
	<div id="login-page" class="login-page">
		<div class="back-btn">
			<b-button pill class="login-btn" @click="goBack">
				<span>بازگشت</span>
				<b-icon-arrow-left-short />
			</b-button>
		</div>
		<div class="login-comp"><LoginBox class="loginbox-comp" /></div>
	</div>
</template>

<script>
import LoginBox from '@/components/LoginBox.vue'
export default {
	name: 'Login',
	components: {
		LoginBox
	},
	methods: {
		goBack() {
			this.$router.go(-1)
		}
	}
}
</script>

<style lang="sass" scoped>
$bgColor: #fafafa
// $loginBtn-HoverClr: #d3d6e0
$loginBtn-Clr: #000
.login-page
	width: 100%
	height: 100%
	overflow: hidden auto
	background-color: $bgColor
	position: relative
	display: flex
	justify-content: center
	align-items: center
	flex-direction: column
	.login-btn
		background-color: $bgColor !important
		border: none
		height: 33px
		display: flex
		align-items: center
		margin-bottom: 1em
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
		width: 500px
		height: 400px
</style>
