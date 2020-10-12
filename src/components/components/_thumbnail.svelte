<script>
import { fade, slide } from 'svelte/transition';

import Subtext from './_subtext.svelte'

export let data
export let event

const {title, subtitle, text, photoPath, photoBackgroundColor} = data

let style = !text ? `
	background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${photoPath});
	background-size: cover;
	background-position: center;
	background-color: ${photoBackgroundColor};
` : `
	background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${photoPath});
	background-size: cover;
	background-position: center;
	background-color: ${photoBackgroundColor};
	`
</script>


<div class="lazy" {style} class:text class:subtitle transition:slide>
	{#if title}
		<h1>{title}</h1>
	{/if}
	{#if subtitle}
		<h2>{subtitle}</h2>
	{/if}
	{#if text}
		<p><br>{text}</p>
	{/if}
	<span>
	{#if event}
		<span transition:fade><Subtext><br>Varje helg från {event}</Subtext></span>
	{/if}
	</span>
</div>


<style lang="sass">

div
	display: grid
	grid-auto-flow: row
	place-content: center
	height: 350px
	padding: 60px 30px
	color: #fff
	width: 100%
	opacity: 1
	transition: .5s linear
	&.lazy
		opacity: .7

	h1
		font-size: clamp(1rem, 9vw, 3.5rem)

	h2, p
		width: 100%
	
	h2
		font-size: 35px

	p
		font-size: 20px
		max-width: 60ch

	&.text
		text-align: center
		align-content: start
		justify-content: center
		height: auto
		h2
			@media (min-width: 880px)	
				height: 90px
		&.subtitle
			p
				@media (min-width: 880px)
					height: 160px

		span
			align-self: end !important
			height: 40px

</style>