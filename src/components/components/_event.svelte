<script>

import { fade, slide } from 'svelte/transition'
import Subtext from './_subtext.svelte'

export let event
export let data
let noResponse = false
$: full = data?.[0]?.info.full ?? false
setTimeout(() => { if(event === '') noResponse = true }, 5000)
$: console.log(event)
</script>

{#if !noResponse}

<p transition:slide="{{duration: 100}}">
	Nästa kurstillfälle: {#if event} <em transition:fade>{@html !full ? event : `<s style="opacity: .7;">${event}</s>` }</em> {:else} ... {/if}
	{#if full}
		<br><Subtext>
			Kursen är full. Om det finns intresse öppnar vi en ny kurs och återkommer med ett preliminärt datum.
		</Subtext>
	{:else}
		<slot />
	{/if}
</p>

{/if}