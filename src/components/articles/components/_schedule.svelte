<script>

	export let schedule

</script>


<div>
	{#each schedule as table}
	<table>
		{#each table as {title, time, activity}}
			<tr>
				{#if title}
					<th>{title}</th>
				{:else}
					<td>{time}</td>
					<td>{activity}</td>
				{/if}
			</tr>

		{/each}
	</table>
	{/each}
</div>


<style lang="sass">

div
	display: grid
	gap: 15px
	table
		border-collapse: collapse
		font-size: 20px
		width: 100%
		th
			padding: 0 0 5px 0
			font-weight: 400
			text-align: left
			font-style: italic
			white-space: nowrap
		td
			padding: 1px 20px 1px 0
		tr
			vertical-align: middle
			td
				color: rgba( black, .9)
				padding: 5px
				&:first-child
					vertical-align: top
					width: 150px
				
		tr:nth-child(even) td
			background-color: #0630000e

</style>