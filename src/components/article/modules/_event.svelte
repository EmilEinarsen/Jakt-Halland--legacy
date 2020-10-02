<script>

import { fade, slide } from 'svelte/transition'

export let event
let noResponse = false

setTimeout(() => { if(event === '') noResponse = true }, 5000)

</script>

{#if !noResponse}
	<div transition:slide="{{duration: 100}}">
		<br>Nästa kurstillfälle: {#if event}<span transition:fade class="heavy">{event}</span>{:else}...{/if} <br>
	</div>
{/if}


<style lang="sass">
</style>