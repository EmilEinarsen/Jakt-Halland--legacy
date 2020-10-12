<script>
	import { fade, slide, fly } from 'svelte/transition'
	import { throttle } from 'bjork_restrain'

	import { state } from '../js/stores'
	import { isWidthMobile } from '../js/Validate'
	import { Scroll } from '../js/Tools'
	import { targetId } from '../js/Helpers';

	const scroll = new Scroll()
	const { getDirection, getPosY } = scroll
	
	let isMobile
	setIsMobile()
	let isTransparent
	setTransparency()
	let isVisible = true
	let isInitialRender = true

	$: isOpen = $state.menu
	
	onEvent()

	function toggle()  {
		$state.menu = !$state.menu
		if(isMobile) scroll.toggle()
	}
	function close(e) {
		if(targetId(e) === 'btnMenu' || !$state.menu) return
		$state.menu = false
		scroll.enable()
	}
	function onEvent()  {
		// stops unintended scroll events after pagerefresh
		// by pushing toggling of isInitialRender to callback queue
		if(isInitialRender) {
			setTimeout(() => {
				isInitialRender = false
				setIsMobile()
				setTransparency()
			}, 0)
			return
		}

		throttle(() => {
			setIsMobile()
			setTransparency() 
			setVisibility()
		}, 100)
	}
	function setVisibility() {
		let isUp
		const direction = getDirection()
		
		if(direction === 0) return

		isUp = direction > 0
		
		if(isVisible !== isUp) isVisible = isUp
	}
	function setTransparency() {
		isTransparent = !isMobile && getPosY() < 60
	}
	function setIsMobile() {
		isMobile = isWidthMobile()
		if(!isMobile) $state.menu = false
	}
</script>

<svelte:window on:click={close} on:resize={()=> {onEvent(); scroll.enable();}} on:scroll={onEvent} />

{#if isVisible || isOpen}
	<nav id="navbar" class:isMobile class:isTransparent transition:fly="{{duration: 500, y: -150, opacity: 0.7}}">
		<div>
			<div>
				<div id="logo" class="logo-container" on:click={scroll.toTop}>
					<div class="img" alt=""></div>
					<p>Jakt Halland</p>
				</div>

				{#if isMobile}
					<div id="btnMenu" class="menu-toggle" on:click="{toggle}">
						{#if $state.menu}
							<div class="close">stäng</div>
						{:else}
							<div class="open">meny</div>
						{/if}
					</div>
				{/if}
			</div>

			{#if isOpen || !isMobile}
				<ul class:isMobile class:isTransparent transition:slide="{{duration: 300, y: -150}}">
					<li on:click={scroll.toTop}>Hem</li>
					<li on:click={() => scroll.toParam('#article-1')}>Jägarexamen</li>
					<li on:click={() => scroll.toParam('#article-2')}>Jaktledarutbildning</li>
					<li on:click={() => scroll.toParam('#article-3')}>Jakt</li>
					<li on:click={scroll.toBottom}>Kontakta</li>
				</ul>
				<div class:isMobile class="shadow" transition:fade="{{duration: 200}}"></div>
			{/if}
			
		</div>
	</nav>
{/if}

<style lang="sass">



nav
	position: fixed
	z-index: 4
	height: 90px
	background: white
	width: 100%
	box-shadow: 0 0 10px rgba( black, .05)
	transition: .3s linear
	min-width: 250px
	&.isTransparent
		background: transparent
		box-shadow: 0 0 0
	&  > div
		position: relative
		max-width: 1780px
		margin: 0 auto

		& > ul > li, & > div
			padding: 20px
			white-space: nowrap
			font-size: 25px
		
		& > ul.isMobile > li, & > div
			padding: 0 25px
			@media (min-width: 800px)
				padding: 0 50px

		& > div.isMobile
			text-transform: uppercase

		div
			display: grid
			grid-template-areas: "one . two"
			grid-template-columns: percentage(360/1680) percentage(290/1680) percentage(990/1680)
			align-items: center
			height: 90px
			color: #C5AB4E
			.logo-container
				grid-area: one
				justify-self: start
				display: grid
				grid-auto-flow: column
				align-items: center
				padding: 0 20px
				margin: 0 0 0 -25px
				@media (min-width: 450px)
					padding: 0 0 0 20px
					gap: 20px
				text-transform: uppercase
				cursor: pointer
				&:hover
					background: #f2f2f2
				.img
					background: url(../img/icon_trans_cut-80x80.png)
					background-size: contain
					background-repeat: no-repeat
					height: 50px
					width: 50px
				p
					display: none
					@media (min-width: 450px)
						display: block

					width: 8em

			.menu-toggle
				grid-area: two
				justify-self: end
				cursor: pointer
				text-transform: uppercase
				padding: 0 20px
				margin: 0 -40px 0 0
				&:hover
					background: #f2f2f2	
				& > div
					display: grid
					gap: 10px
					pointer-events: none
					&::before
						@extend %font-awsome
						font-weight: 700
				.close
					display: flex
					&::before
						content: '\f00d'
				.open
					display: flex
					&::before
						content: '\f0c9'
		
		ul
			grid-area: one
			position: absolute
			top: 0
			z-index: 6
			background: white
			display: flex
			justify-content: space-between
			align-items: center
			transition: .3s linear
			right: 25px
			width: percentage(1010/1680)
			li
				color: #223D6E
				height: 90px
				width: min-content
				display: grid
				align-items: center
				cursor: pointer
				font-size: 22px
				user-select: none
				&:hover
					background: lighten(black, 95%)
			&.isMobile
				background: lighten(black, 95%)
				display: grid
				position: relative
				width: 100vw
				gap: 2px
				padding: 2px 0 0 0
				font-size: 14px
				text-transform: uppercase
				right: 0
				li
					background: white
					height: 80px
					width: 100vw
					&:hover
						background: lighten(black, 95%)
			&.isTransparent
				background: transparent
				li
					background: transparent
					color: #223D6E
					@media (min-width: 1100px)
						color: white
					&:nth-child(1), &:nth-child(2)
						color: white
						@media (min-width: 1100px)
							color: #C5AB4E

.shadow.isMobile
	z-index: 5
	height: 100vh
	width: 100vw
	position: absolute
	top: 90px
	background-color: rgba(0, 0, 0, 0.5)


%font-awsome
	display: inline-block
	font-family: 'Font Awesome 5 Free'
	font-style: normal
	font-variant: normal
	font-size: inherit
	text-rendering: auto
	-webkit-font-smoothing: antialiased		

</style>
