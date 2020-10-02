<script>
	import { fade, slide, fly } from 'svelte/transition'
	import Restrain from 'bjork_restrain'

	import { state } from '../js/stores'
	import { targetId } from '../js/Helpers'
	import { isWidthMobile } from '../js/Validate'
	import { ScrollDirection, getPosY } from '../js/Tools'

	export let toggleScroll
	export let enableScroll

	const scrollDirection = new ScrollDirection()
	const { throttle, debounce } = new Restrain()
	let transparent
	let mobile
	let visible = true
	let initialRender = true

	$: open = $state.menu

	function toggle()  {
		$state.menu = !$state.menu
		if(mobile) toggleScroll()
	}
	function close(e) {
		if(targetId(e) === 'btnMenu' || !$state.menu) return
		$state.menu = false
		enableScroll()
	}

	function onScroll()  {
		debounce(() => initialRender = false, 100)
		if(!initialRender) throttle(() => {
			isMobile()
			toggleTransparency() 
			toggleVisibility()
		}, 200)
	}
	function onResize()  {
		throttle(() => {
			isMobile()
			toggleTransparency()
		}, 200)
	}
	function toggleVisibility() {
		const isScrollUp = scrollDirection.get()
		visible !== isScrollUp ? visible = isScrollUp : ''
	}
	function toggleTransparency() {
		transparent = !mobile && (getPosY() < 60)
	}
	function isMobile() {
		mobile = isWidthMobile()
		if(!mobile) $state.menu = false
	}
</script>

<svelte:window on:click={close} on:resize={onResize} on:scroll={onScroll}/>

{#if visible || open}
	<nav id="navbar" class:mobile class:transparent transition:fly="{{duration: 500, y: -150, opacity: 0.5}}">
		<div>
			<div>
				<div id="logo" class="logo-container">
					<div class="img" alt=""></div>
					<p>Jakt Halland</p>
				</div>

				{#if mobile}
					<div id ="btnMenu" class="menu-toggle" on:click="{toggle}">
						{#if $state.menu}
							<div class="btnMenuClose">stäng</div>
						{:else}
							<div class="btnMenuOpen">meny</div>
						{/if}
					</div>
				{/if}
			</div>

			{#if open || !mobile}
				<ul id="menu" class="main-nav" transition:slide="{{duration: 300, y: -150, opacity: 0.5}}">
					<li id="nav-1">Hem</li>
					<li id="nav-2">Jägarexamen</li>
					<li id="nav-3">Jaktledarutbildning</li>
					<li id="nav-4">Jakt</li>
					<li id="nav-5">Kontakta oss</li>
				</ul>
				<div class="shadow-mobile" transition:fade="{{duration: 200}}"></div>
			{/if}
			
		</div>
	</nav>
{/if}

<style lang="sass">
</style>
