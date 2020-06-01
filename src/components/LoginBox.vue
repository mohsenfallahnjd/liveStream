<template>
	<div class="login-box">
		<div class="signup-bar">
			<div class="signup-bar__header">
				اگر حساب کاربری ندارید، ثبت نام کنید:
			</div>
			<b-button pill class="signup-bar__btn" :to="{ name: 'Signup' }">
				<span>ایجاد حساب</span>
			</b-button>
		</div>
		<div class="login-form">
			<div class="login-form__header">
				اگر حساب کاربری دارید، وارد شوید:
			</div>

			<b-form class="form">
				<b-form-input
					class="form__email"
					v-model="loginData.username"
					placeholder="نام کاربری"
				></b-form-input>
				<b-form-input
					class="form__pass"
					v-model="loginData.password"
					placeholder="رمزعبور"
				></b-form-input>
			</b-form>
			<b-button @click="Login" class="submit-btn" variant="success">
				ورود
			</b-button>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'LoginBox',
	data: () => ({
		loginData: {
			username: '',
			password: ''
		}
    }),
	methods: {
		Login() {
			axios
				.post('http://bstream.guilandev.ir/api/user/auth/login', {
					username: this.loginData.username,
					password: this.loginData.password
				})
				.then(response => {
					if (response.data.code == 200) {
						localStorage.token = response.data.data.token
						localStorage.name = response.data.data.name
						this.$router.push({ name: 'Home' })
					}
				})
				.catch(error => {
					console.log(error)
				})
		}
	}
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
        padding: 10px 20px 45px
        font-size: 12px
        &__header
        &__btn
            color: $signup-bar
            background-color: $signup-header
            border: none
            display: flex
            align-items: center
            margin-left: 2px
            height: 30px
            > span
                font-weight: 800
                font-size: 12px
            &:hover
                color: $signup-header
                background-color: $signup-bar
                border: .8px solid  $signup-header
            &:focus
                box-shadow: none !important
    .login-form
        background-color: $signup-header
        width: 100%
        height: calc( 100% - 60px )
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
        .form
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            margin-top: 20px
            &__email , &__pass
                margin: 10px 0px
                width: 70%
                border-radius: 4px
                &:focus
                    box-shadow: none !important
        .submit-btn
            width: 30%
            margin: 20px auto 0px
</style>
