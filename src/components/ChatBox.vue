<template>
	<div id="chat-box" class="chat-box">
		<div class="chat-box__header"><p>گفتگوها</p></div>
		<div class="chat-box__body">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<p>
				Eveniet, distinctio. Fugiat voluptatibus numquam in natus eum
				earum,
			</p>
			<p>
				quae esse, illum architecto temporibus quas deserunt saepe aut
			</p>
			<p>accusamus mollitia voluptatem unde.</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<p>
				Eveniet, distinctio. Fugiat voluptatibus numquam in natus eum
				earum,
			</p>
			<p>
				quae esse, illum architecto temporibus quas deserunt saepe aut
			</p>
			<p>accusamus mollitia voluptatem unde.</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<p>
				Eveniet, distinctio. Fugiat voluptatibus numquam in natus eum
				earum,
			</p>
			<p>
				quae esse, illum architecto temporibus quas deserunt saepe aut
			</p>
			<p>accusamus mollitia voluptatem unde.</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<p>
				Eveniet, distinctio. Fugiat voluptatibus numquam in natus eum
				earum,
			</p>
			<p>
				quae esse, illum architecto temporibus quas deserunt saepe aut
			</p>
			<p>accusamus mollitia voluptatem unde.</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<p>
				Eveniet, distinctio. Fugiat voluptatibus numquam in natus eum
				earum,
			</p>
			<p>
				quae esse, illum architecto temporibus quas deserunt saepe aut
			</p>
			<p>accusamus mollitia voluptatem unde.</p>
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
export default {}
</script>

<style lang="sass" scoped>
$primaryColor: #212226
$secondColor: #fafafa
$gray: #38393D
$loginBtn-HoverBG: #292a33
$loginBtn-HoverClr: #d3d6e0
$loginBtn-Clr: #fafafa
$scrollThumb: #555555

.chat-box
    width: 350px
    height: calc( 100vh - 65px )
    background-color: $primaryColor
    display: flex
    flex-direction: column
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
        overflow-x: hidden
        overflow-y: auto
        text-align: right
        color: $secondColor
        &::-webkit-scrollbar
            width: 8px
            // background-color: $scrollTrack
        &::-webkit-scrollbar-track
            // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
            // border-radius: 10px
            background-color: $primaryColor
        &::-webkit-scrollbar-thumb
            border-radius: 10px
            // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3)
            background-color: $scrollThumb

    &__footer
        width: 100%
        height: 60px
        padding: 1em
        border-top: 0.1px solid $gray
        display: flex
        justify-content: flex-start
        z-index: 10
        .login-btn
            margin: 0px 5px
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
                background-color: $primaryColor
                color: $loginBtn-Clr
</style>
