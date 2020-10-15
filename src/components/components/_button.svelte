<script>

import Ripple from "./Ripple/Ripple.svelte"

const style = {
	width: 'min-content'
}

export let handleClick 

</script>

<Ripple {style}>
	<button on:click={handleClick}>
		<slot></slot>
	</button>
</Ripple>


<style lang="sass">

%font-awsome
	display: inline-block
	font-family: 'Font Awesome 5 Free'
	font-style: normal
	font-variant: normal
	font-size: inherit
	text-rendering: auto
	-webkit-font-smoothing: antialiased

button
	position: relative
	padding: 6px 16px
	font-size: 0.875rem
	min-width: 64px
	box-sizing: border-box
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
	font-family: "Roboto", "Helvetica", "Arial", sans-serif
	font-weight: 500
	line-height: 1.75
	border-radius: 4px
	letter-spacing: 0.02857em
	text-transform: uppercase
	cursor: pointer
	background-color: #223D6E
	color: #fff
	white-space: nowrap
	&:hover
		background-color: lighten(#223D6E, 5%)
	&::before
		@extend %font-awsome
		content: '\f0e0'
		font-weight: 700
		margin: 0 .5em 0 0


</style>