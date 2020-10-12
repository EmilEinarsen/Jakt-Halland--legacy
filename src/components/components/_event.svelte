<script>

import { fade, slide } from 'svelte/transition'

export let event
let noResponse = false

setTimeout(() => { if(event === '') noResponse = true }, 5000)

</script>

{#if !noResponse}

<p transition:slide="{{duration: 100}}">
	Nästa kurstillfälle: {#if event} <em transition:fade>{event}</em> {:else} ... {/if}
	<slot />
</p>

{/if}