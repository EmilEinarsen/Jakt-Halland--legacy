<script>
	import { slide } from 'svelte/transition'

	export let title
	let open = false

</script>




<div>
	<button on:click={() => open = !open} class:open>
		{title.toUpperCase()}
	</button>
	{#if open}
		<div class="basic" transition:slide="{{duration: 300}}"><slot class="basic"></slot></div>
	{/if}
</div>



<style lang="sass">

$width: 100%

div
	width: $width
	padding: 0 20px
	@media (min-width: 880px)
		padding: 0
	.basic
		font-size: 20px
		width: $width
	& > button
		display: grid
		grid-auto-flow: column
		text-align: left
		width: $width
		padding: 10px 20px
		border-bottom: 2px solid darken(#eceff0, 20%)
		color: #223D6E
		background-color: #eceff0
		border-radius: 3px
		font-size: 15px
		transition: .01s linear

		@media (min-width: 880px)
			font-size: 20px
		
		&:hover
			cursor: pointer
			background-color: #eceff075

		&:active
			transform: scale(0.995)
			padding: 10px 20px 11px 20px
			border-bottom: 1px solid darken(#eceff0, 10%)

		&.open::after
			transform: rotate(180deg)

		&::after
			@extend %font-awsome
			content: '\f0d7'
			font-weight: 700
			justify-self: right

%font-awsome
	display: inline-block
	font-family: 'Font Awesome 5 Free'
	font-style: normal
	font-variant: normal
	font-size: inherit
	text-rendering: auto
	-webkit-font-smoothing: antialiased

</style>