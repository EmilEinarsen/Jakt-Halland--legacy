<script>

export let list

const {title, className, items} = list
$: console.log(className)
</script>

<p>{title}</p>
<ol class={className}>
	{#each items as item}
		<li>{item}</li>
	{/each}
</ol>


<style lang="sass">
p
	margin: 0 0 1em
ol
	list-style: none
	margin: -.5em 0 -.5em 0
	padding: 0 0 0 30px
	& > li
		margin: 0 0 -.66em
		padding-bottom: 1em

ol.bullet-list
	& > li::before
		content: "• "
		color: grey
		margin: 0 .35em 0 -1em

ol.number-list
	counter-reset: item
	& > li::before
		content: counter(item) "."
		counter-increment: item
		margin: 0 .35em 0 -1em

</style>