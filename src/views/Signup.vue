<template>
	<div id="signup-page" class="signup-page">
		<b-button pill class="back-btn" :to="{ name: 'Home' }">
			<span>بازگشت</span>
			<b-icon-arrow-left-short />
		</b-button>
		<div class="signupbox-comp"><SignupBox /></div>
	</div>
</template>

<script>
import SignupBox from '@/components/SignupBox.vue'
export default {
	name: 'Signup',
	components: {
		SignupBox
	}
}
</script>

<style lang="sass" scoped>
$bgColor: #fafafa
$signupBtn-Clr: #000
.signup-page
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
		color: $signupBtn-Clr
		> span
			margin-left: 3px
			transition: margin-left .3s ease
			font-size: 12.6px
		&:hover
			> span
				margin-left: 8px
		&:focus
			box-shadow: none !important
	.signupbox-comp
		width: 400px
		height: 400px
		margin-bottom: 3em
	@media only screen and (max-width: 500px)
		.signupbox-comp
			width: 340px
			height: 320px
		.back-btn
			right: 130px
</style>
