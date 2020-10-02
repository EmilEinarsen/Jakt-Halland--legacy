<script>
	export let data
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


<div class="lazy" {style} class:text>
	{#if title}
		<h1>{title}</h1>
	{/if}
	{#if subtitle}
		<h2>{subtitle}</h2>
	{/if}
	{#if text}
		<p>{text}</p>
	{/if}
</div>


<style lang="sass">

div
	display: grid
	grid-auto-flow: row
	place-content: center
	height: 400px
	padding: 60px 30px
	color: #fff
	width: 100%
	&.lazy
		background-image: none

	h1
		font-size: clamp(1rem, 9vw, 3.5rem)

	h2, p
		width: 100%
	
	h2
		font-size: 35px

	p
		font-size: 20px

	&.text
		text-align: center
		align-content: start
		justify-content: center
		height: auto
		h2
			@media (min-width: 880px)	
				height: 90px

</style>