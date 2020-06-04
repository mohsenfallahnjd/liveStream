<template>
	<div id="streamer" class="streamer">
		<!-- streamer-title -->
		<div class="streamer-title">
			<b-avatar
				class="streamer-title__avatar"
				size="37px"
				:variant="streamer.avatar == '' ? 'light' : 'dark'"
			>
				<img
					v-if="streamer.avatar != ''"
					class="streamer-title__avatar--img"
					:src="streamer.avatar"
					alt="streamer-avatar"
				/>
			</b-avatar>

			<span class="streamer-title__username">
				{{ streamer.userName }}
			</span>
			<span class="streamer-title__folowers">
				{{ streamer.folowers }} دنبال کننده
			</span>
			<b-button
				pill
				class="streamer-title__donate-btn"
				:href="streamer.doante_link"
				target="_blank"
				rel="noopener"
			>
				<span>تزریق انرژی !</span>
				<b-icon-battery-charging class="mr-2" font-scale="1" />
			</b-button>
		</div>
		<!--  -->

		<!-- stream-details -->
		<div class="stream-details">
			<div class="live-details">
				<b-img
					class="live-details__cover"
					:src="live.img"
					alt="live-cover"
				/>

				<div class="live-details__header">
					<div class="live-details__header__description">
						{{ live.description }}
					</div>
					<div class="live-details__header__name">
						<img
							class="gamepad-icon"
							src="../assets/images/gamepad.svg"
							alt="gamepad-icon"
						/>
						{{ live.name }}
					</div>
				</div>

				<div class="live-details__statistics">
					{{ live.statistics.now }} <b-icon-eye /> |
					{{ live.statistics.total }} بازدید کل
				</div>
			</div>
			<div v-html="compiledMarkdown" class="streamer-social">
				<!-- <textarea :value="input" @input="update"></textarea> -->
			</div>
		</div>
		<!--  -->
	</div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'
export default {
	name: 'Streamer',
	props: {
		liveData: {
			type: Object
		}
	},
	data: () => ({
		streamer: {
			avatar: '',
			// 'https://static.cdn.asset.aparat.com/profile-photo/6183348-m.jpg',
			userName: '', //'cigatech',
			folowers: 69,
			doante_link: 'https://www.google.com'
		},
		live: {
			img:
				'https://www.aparat.com/public/public/user_data/tag_image2/5133825_onpattern.png',
			name: 'Zula',
			description: '',
			statistics: {
				now: '',
				total: ''
			}
		},
		input: ''
	}),
	created() {
		if (this.$route.name == 'Live') {
			axios
				.post('http://bstream.guilandev.ir/api/stream/getLive', {
					page: this.$route.params.username
				})
				.then(response => {
					if (response.data.code == 200) {
						this.live.description = response.data.data.title
						this.live.statistics.now =
							response.data.data.current_view
						this.live.statistics.total =
							response.data.data.total_view
						this.input = response.data.data.markdown
						this.streamer.userName = this.$route.params.username
						this.streamerStatus()
					}
				})
				.catch(error => {
					console.log(error)
				})
		} else {
			this.getData()
			this.streamerStatus()
		}
	},
	computed: {
		compiledMarkdown() {
			return marked(this.input, { sanitize: true })
		}
	},
	methods: {
		getData() {
			this.live.description = this.liveData.title
			this.live.statistics.now = this.liveData.current_view
			this.live.statistics.total = this.liveData.total_view
			this.input = this.liveData.markdown
		},
		streamerStatus() {
			this.$emit('streamerStatus', true)
		}
	}
	// methods: {
	// 	update: _.debounce(function(e) {
	// 		this.input = e.target.value
	// 	}, 300)
	// },
}
</script>

<style lang="scss">
$primaryColor: #212226;
$secondColor: #fafafa;
$userName: #9da1b1;
$folowers: #7f828d;
$gray: #38393d;
$streamerBG: #171819;
$green: #28a745;
$statistics: #c5c5c5;
.streamer {
	width: 100%;
	height: 100%;
	background-color: $streamerBG;
	.streamer-title {
		width: 100%;
		height: 55px;
		padding: 0.3em 0.8em;
		background-color: $primaryColor;
		border-bottom: 0.1px solid $gray;
		border-top: 0.1px solid $gray;
		text-rendering: optimizeLegibility;
		display: flex;
		align-items: center;
		&__avatar {
			margin-left: 1em;
			&--img {
				width: 100% !important;
				height: 100% !important;
			}
		}
		&__username {
			color: $secondColor;
			letter-spacing: 0.3px;
			font-weight: 300;
			margin-left: 0.8em;
		}
		&__folowers {
			color: $folowers;
			font-size: 10px;
			font-weight: 700;
			word-spacing: 1px;
		}
		&__donate-btn {
			margin-right: auto;
			background-color: $green;
			border: 1px solid darken($green, 10%);
			height: 33px;
			width: auto !important;
			display: flex;
			align-items: center;
			padding: 5px 15px;
			> span {
				color: $secondColor;
				font-size: 12px;
			}
			&:hover {
				background-color: darken($green, 10%);
			}
			&:active {
				background-color: darken($green, 20%) !important;
				border-color: darken($green, 20%) !important;
			}
			&:focus {
				box-shadow: none !important;
			}
		}
	}
	.stream-details {
		width: 100%;
		padding: 1em;
		.live-details {
			width: 100%;
			height: 69px;
			border-bottom: 0.1px solid $gray;
			padding-bottom: 0.7em;
			display: flex;
			align-items: center;
			&__cover {
				width: 45px;
				height: auto !important;
				object-fit: cover;
			}
			&__header {
				display: flex;
				flex-direction: column;
				width: 70%;
				text-align: right;
				padding: 0 0.8em;
				&__description {
					color: $secondColor;
				}
				&__name {
					color: $folowers;
					font-size: 13px;
					margin-top: 0.5em;
					display: flex;
					align-items: center;
					.gamepad-icon {
						fill: $folowers;
						width: 12px;
						height: 12px;
						margin-left: 0.3em;
						margin-bottom: 0.2em;
						filter: invert(57%) sepia(6%) saturate(576%)
							hue-rotate(190deg) brightness(89%) contrast(88%);
					}
				}
			}
			&__statistics {
				width: 30%;
				height: 100%;
				color: $statistics;
				font-weight: 500;
				font-size: 14px;
			}
		}
		.streamer-social {
			width: 100%;
			height: calc(720px - 160px);
			text-align: center;
			color: $secondColor;
			padding: 2em;
			img {
				width: 135px;
				object-fit: cover;
			}
		}
	}

	@media only screen and (max-width: 500px) {
		.live-details {
			&__header__description,
			&__statistics {
				font-size: 12px !important;
			}
		}
	}
	@media only screen and (max-width: 350px) {
		.streamer-title {
			&__folowers {
				display: none;
			}
		}
	}
}
</style>
