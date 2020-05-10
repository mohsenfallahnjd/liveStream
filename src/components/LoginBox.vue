<template>
	<div class="login-box">
		<div class="signup-bar">
			<div class="signup-bar__header">
				اگر حساب کاربری ندارید، ثبت نام کنید:
			</div>
			<b-button pill class="signup-bar__btn">
				<span>ایجاد حساب</span>
			</b-button>
		</div>
		<div class="login-form">
			<div class="login-form__header">
				اگر حساب کاربری دارید، وارد شوید:
			</div>

			<input type="email" placeholder="Email" />
			<input type="password" placeholder="password" />
			<!-- <b-form id="form" inline>
				<b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
					<b-input
						id="inline-form-input-username"
						placeholder="نام کاربری"
					></b-input>
				</b-input-group>
				<b-button variant="primary">Save</b-button>
			</b-form> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'LoginBox'
}
</script>

<style lang="sass" scoped>
$signup-bar: #232A42
$signup-header: #fafafa

.login-box
    width: 100%
    height: 100%
    box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75)
    border-radius: 8px
    overflow: hidden
    position: relative
    .signup-bar
        display: flex
        align-items: center
        justify-content: space-between
        background-color: $signup-bar
        width: 100%
        height: 100px
        color: $signup-header
        padding: 10px 20px 35px
        &__header
        &__btn
            color: $signup-bar
            background-color: $signup-header
            border: none
            align-items: center
            margin-left: 2px
            > span
                font-weight: 800
                font-size: 15px
            &:hover
                color: $signup-header
                background-color: $signup-bar
                border: .8px solid  $signup-header
            &:focus
                box-shadow: none !important
    .login-form
        background-color: $signup-header
        width: 100%
        height: calc( 100% - 70px )
        position: absolute
        bottom: 0
        box-shadow: 0px -5px 3px -3px rgba(0,0,0,0.3)
        border-radius: 18px
        color: $signup-bar
        padding: 20px
        display: flex
        flex-direction: column
        &__header
            text-align: right
        #form
            direction: ltr
            width: 80%
</style>
