<script>
	import Schedule from './_schedule.svelte'
	import BtnAdditionalInfo from './_btnAdditionalInfo.svelte'
	import { markdown } from '../../../js/Format'
	import List from './_list.svelte'
	export let body
	let {title, price, lists, main, schedule} = body

	const scheduleTitle = schedule ? schedule[0].shift().title : ''
</script>


<div>
	<br><br>

	{#if title} <h1>{title}</h1> {/if}

	<p>
		{#if price}<span>Pris: <span class="heavy">{price}</span></span><br> {/if}

		<slot name="event" />

		{#if lists} <br><List list={lists[0]} /> {/if}

		{@html markdown(main)}<br>
		
		<span class="info light">
			<slot name="info" />
			<slot name="location" />
		</span>

		{#if schedule}
			<br><br>
			<BtnAdditionalInfo title={scheduleTitle}>
				<Schedule {schedule} /> 
			</BtnAdditionalInfo>
		{/if}
	</p>
</div>


<style lang="sass">

div
	display: inline-block
	position: relative
	width: 100%
	padding: 0 20px

	@media (min-width: 880px)
		width: 50%
		padding: 0

	& > h1
		font-size: 30px
		text-transform: uppercase
		margin: 0 0 30px 0

	& > p
		font-size: 20px
		.info
			font-size: 16px
			
</style>