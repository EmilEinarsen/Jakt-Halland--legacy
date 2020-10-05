<script>

import { fade, slide } from 'svelte/transition'
import Subtext from './_subtext.svelte';

export let event
export let location
let noResponse = false

setTimeout(() => { if(event === '') noResponse = true }, 5000)

</script>

{#if !noResponse}

<p transition:slide="{{duration: 100}}">
	Nästa kurstillfälle: {#if event}
		<span transition:fade>{event}</span>
	{:else}
		...
	{/if}
	<br>
	<Subtext subtext={location} />
</p>

{/if}


<style lang="sass">
</style>