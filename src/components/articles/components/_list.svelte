<script>
import { markdown } from "../../../js/Format";



export let list

const {title, type, items} = list
</script>

<div>
	<p>{title}</p>
	<ol class={type ? type : 'ghost'}>
		{#each items as item}
			<li>{@html markdown(item)}</li>
		{/each}
	</ol>
</div>


<style lang="sass">
p
	margin: -.5em 0 1em 0
ol
	list-style: none
	margin: -.5em 0 -1em 0
	padding: 0 0 0 20px
	& > li
		margin: 0 0 -.66em 0
		padding-bottom: 1em

	&.ghost
		padding: 0 0 0 15px

	&.bullet
		li
			&::before
				content: "• "
				color: grey
				margin: 0 .35em 0 -1em

	&.number
		counter-reset: item
		padding: 0 0 0 20px
		li
			&::before
				content: counter(item) ")"
				counter-increment: item
				margin: 0 .35em 0 -1em

</style>