<template>
	<div class="profile">
		<b-button pill class="back-btn" :to="{ name: 'Home' }">
			<span>بازگشت</span>
			<b-icon-arrow-left-short />
		</b-button>
		<div class="card">
			<span class="profile__name">موارد لازم برای استریم:</span>
			<b-form class="profile__form">
				<!-- Plain mode -->
				<div>
					<span>عکس پروفایل</span>
					<b-form-file
						accept=".jpg, .png"
						v-model="profileData.userPic"
						class="mt-3"
						plain
					></b-form-file>
				</div>

				<b-form-input
					class="profile__form__title"
					v-model="profileData.title"
					placeholder="تایتل استریم"
					@keypress.enter.prevent.stop
				></b-form-input>

				<div>
					<span>کاور استریم</span>
					<b-form-file
						accept=".jpg, .png"
						v-model="profileData.coverStream"
						class="mt-3"
						plain
					></b-form-file>
				</div>

				<b-form-textarea
					v-model="profileData.markdown"
					placeholder="کد مارکدان..."
					rows="3"
					max-rows="6"
				></b-form-textarea>
			</b-form>
			<div class="server-address">
				StreamKey: <br />
				<span>
					{{ profileData.stream_key }}
				</span>
				<br />
				StreamURL: <br />
				<span>
					{{ profileData.stream_url }}
				</span>
			</div>
			<b-button
				pill
				id="submit-btn"
				class="submit-btn"
				@click="sendProfileDetails"
			>
				<span>
					تایید اطلاعات
				</span>
			</b-button>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'Profile',
	data: () => ({
		name: localStorage.name,
		profileData: {
			userPic: null,
			title: '',
			coverStream: null,
			markdown: '',
			stream_key: '',
			stream_url: ''
		}
	}),
	beforeMount() {
		axios
			.get('http://bstream.guilandev.ir/api/user/stream/profile', {
				headers: {
					Authorization: 'Bearer ' + localStorage.token
				}
			})
			.then(response => {
				if (response.status === 200) {
					this.profileData.title = response.data.data.profile.title
					this.profileData.markdown =
						response.data.data.profile.markdown
					this.profileData.stream_key = response.data.data.stream_key
					this.profileData.stream_url = response.data.data.stream_url
				}
			})
			.catch(e => {
				console.log(e)
			})
	},
	methods: {
		sendProfileDetails() {
			const formData = new FormData()
			formData.append('profile_pic', this.profileData.userPic)
			formData.append('title', this.profileData.title)
			formData.append('markdown', this.profileData.markdown)
			formData.append('cover', this.profileData.coverStream)

			axios
				.post(
					'https://bstream.guilandev.ir/api/user/stream/update',
					formData,
					{
						headers: {
							Authorization: 'Bearer ' + localStorage.token
						}
					}
				)
				.then(response => {
					if (response.status === 200) {
						document.getElementById(
							'submit-btn'
						).style.backgroundColor = '#0A9600'
					}
				})
				.catch(e => {
					document.getElementById(
						'submit-btn'
					).style.backgroundColor = '#960B00'
					console.log('Error Profile: ', e)
				})
		}
	}
}
</script>
<style lang="sass" scoped>
$bgColor: #000000
$primaryColor: #212226
$secondColor: #fafafa
$gray: #38393D
$card: #171819
$navBG: #212226
$loginBtn-HoverBG: #292a33
$loginBtn-HoverClr: #d3d6e0
$loginBtn-Clr: #fafafa

.profile
	width: 100%
	height: 100%
	overflow: hidden auto
	background-color: $primaryColor
	position: relative
	display: flex
	flex-direction: column
	align-items: center
	justify-content: space-evenly
	color: $secondColor
	text-align: right
	&__name
		font-size: 25px
		font-weight: 500
		text-transform: capitalize
	&__form
		width: 69%
		height: 60%
		display: flex
		flex-direction: column
		justify-content: space-between
		align-items: center
		input:focus, textarea:focus
			box-shadow: none
	.back-btn
		border: none
		height: 33px
		display: flex
		align-items: center
		> span
			margin-left: 3px
			transition: margin-left .3s ease
			font-size: 12.6px
		&:hover
			> span
				margin-left: 8px
		&:focus
			box-shadow: none !important
	.card
		width: 50%
		height: 80%
		padding: 1em
		display: flex
		flex-direction: column
		align-items: center
		justify-content: space-evenly
		background-color: $card
		border: 1px solid $gray
		border-radius: 28px
		.submit-btn
			margin: 0px 5px
			background-color: $loginBtn-Clr
			color: $navBG
			border: none
			height: 33px
			display: flex
			align-items: center
			> span
				font-size: 14px
				font-weight: 600
				line-height: 32.6px
			&:hover
				background-color: $loginBtn-HoverBG
				color: $loginBtn-HoverClr
			&:focus
				box-shadow: none !important
		.server-address
			padding: 1em
			text-align: center
			direction: ltr
			user-select: none
			span
				font-size: 13px
				user-select: text
</style>
