<script>
	import RippleEffect from './RippleEffect.svelte'	
	import { writable } from 'svelte/store'

	export let style = {
		width: '100%',
		height: 'auto',
	}
	
	export let rippleBlur = 2,
		speed = 500,
		rippleColor = '#000000',
		sizeIn = 20,
		opacityIn = 0.2
	

	function handleRipple() {
		const ripples = writable([])

		return {
			subscribe: ripples.subscribe,

			add: item => {
				ripples.update( items => {
					return [...items, item]
				})
			},
			clear: () => {
				ripples.update( items => {
					return []
				})
			}
		}
	}

	export const ripples = handleRipple()
	
	let rect, rippleBtn, w, h, x, y, offsetX, offsetY, deltaX, deltaY, locationY, locationX, scale_ratio, timer
	
	let coords = { x: 50, y: 50 }
	
	$: offsetX = Math.abs( (w / 2) - coords.x ),
		 offsetY = Math.abs( (h / 2) - coords.y ),
		 deltaX = (w / 2) + offsetX,
     deltaY = (h / 2) + offsetY,
		 scale_ratio = Math.sqrt(Math.pow(deltaX, 2.2) + Math.pow(deltaY, 2.2))

	const debounce = () => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			ripples.clear()
		}, speed + (speed * 2))
	}
	
	let touch
	
	async function handleClick(e, type) {
		await getCordinates()
		if (type == 'touch') {
			touch = true
			ripples.add({ x: e.pageX - locationX, y: e.pageY - locationY, size: scale_ratio })  
		} else {
			if (!touch) {
				ripples.add({ x: e.clientX - locationX, y: e.clientY - locationY, size: scale_ratio })
			}
			touch = false
		}
		debounce()
	}
	function getCordinates() {
		return new Promise(resolve => {
			w = rippleBtn.offsetWidth
			h = rippleBtn.offsetHeight
			rect = rippleBtn.getBoundingClientRect()
			locationY = rect.y
			locationX = rect.x
			resolve('done')
		})
	}
</script>

<button 
	on:click 
	style="--ripple-color: {rippleColor}; --width: {style.width}; --height: {style.height};" 
	bind:this={rippleBtn} 
	on:touchstart={e => handleClick(e.touches[0], 'touch')}  
	on:mousedown={e => handleClick(e, 'click')}
>
	<slot></slot>
	<svg>
		{#each $ripples as ripple, index}
			<RippleEffect x="{ripple.x}" y="{ripple.y}" size={ripple.size} {speed} {sizeIn} {opacityIn} {rippleBlur}/>
		{/each}
	</svg>
</button>

<style lang="sass">

button
	position: relative
	cursor: pointer
	-webkit-transition: 200ms all ease-out
	transition: 200ms all ease-out
	width: var(--width)
	height: var(--height)
svg
	height: 100%
	pointer-events: none
	position: absolute
	top: 0
	left: 0
	z-index: 0
	width: 100%
	
</style>