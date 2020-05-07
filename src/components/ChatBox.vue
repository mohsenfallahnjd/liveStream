<template>
	<div id="chat-box" class="chat-box">
		<div class="chat-box__header"><p>گفتگوها</p></div>

		<div class="chat-box__body">
			<div class="chat-box__body__welcome-box">
				به اتاق گفتگو خوش آمدید!
			</div>

			<!-- message item -->
			<div v-for="(user, index) in users" :key="index" class="message">
				<b-avatar
					class="message__avatar"
					size="20px"
					:variant="user.avatar == '' ? 'light' : 'dark'"
				>
					<img
						v-if="user.avatar != ''"
						class="message__avatar--img"
						:src="user.avatar"
						alt="avatar-img"
					/>
				</b-avatar>

				<span class="message__username"> {{ user.userName }}: </span>
				<div class="message__text">
					{{ user.text }}
				</div>
			</div>
			<!--  -->
		</div>

		<div class="chat-box__footer">
			<b-button pill class="login-btn" :to="{ name: 'Login' }">
				<b-icon-person class="ml-1" />
				<span>برای گفتگو وارد شوید</span>
			</b-button>
		</div>
	</div>
</template>

<script>
import users from '../data.json'
export default {
	name: 'ChatBox',
	data: () => ({
		users
	})
}
</script>

<style lang="sass" scoped>
$primaryColor: #212226
$secondColor: #fafafa
$gray: #38393D
$loginBtn-HoverBG: #292a33
$loginBtn-HoverClr: #d3d6e0
$loginBtn-Clr: #fafafa
$scrollThumb: #555555
$userName: #9da1b1


.chat-box
    width: 100%
    height: 100%
    background-color: $primaryColor
    display: flex
    flex-direction: column
    position: relative
    &__header
        width: 100%
        height: 50px
        text-align: right
        color: $secondColor
        padding: 1em
        border-bottom: 0.1px solid $gray
        z-index: 10
        > p
            user-select: none
            margin: 0
    &__body
        height: calc( 100% - 110px )
        overflow: hidden scroll
        text-align: right
        color: $secondColor
        padding: 10px 10px 10px 5px
        scroll-behavior: smooth
        &::-webkit-scrollbar
            width: 5px
        &::-webkit-scrollbar-track
            background-color: $primaryColor
        &::-webkit-scrollbar-thumb
            border-radius: 8px
            background-color: transparent
        &:hover
            &::-webkit-scrollbar-thumb
                background-color: $scrollThumb
        &__welcome-box
            width: 100%
            padding: .75em 1em
            background-color: $loginBtn-HoverBG
            color: $loginBtn-HoverClr
            font-size: 12px
            border-radius: 5px
            margin-bottom: .8em
            user-select: none
        > div:not(:first-child)
            margin-top: .2em
        .message
            padding: .3em .3em .3em 1em
            position: relative
            &:hover
                background-color: $loginBtn-HoverBG
                border-radius: 5px
            &__avatar
                margin-left: .3em
                &--img
                    width: 100% !important
                    height: 100% !important
            &__username
                display: inline-block
                color: $userName
                font-size: .9em
                font-weight: 400
                margin-right: .25em
                vertical-align: middle
                cursor: pointer
            &__text
                color: $loginBtn-HoverClr
                display: inline
                font-size: 12px
                font-weight: 600
                line-height: 1.8
                word-break: break-word
                vertical-align: middle
    &__footer
        width: 100%
        height: 60px
        padding: .8em 1em 1em
        border-top: 0.1px solid $gray
        display: flex
        justify-content: flex-start
        z-index: 10
        .login-btn
            background-color: $loginBtn-HoverBG
            color: $loginBtn-HoverClr
            border: none
            height: 33px
            display: flex
            align-items: center
            > span
                font-size: 12.6px
                line-height: 32.6px
            &:hover
                opacity: 0.8
            &:focus
                box-shadow: none !important
</style>
