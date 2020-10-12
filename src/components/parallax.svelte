<script>
import Location from './articles/context/location.md'
import Subtext from './components/_subtext.svelte'
import { fade } from 'svelte/transition'

import { state } from '../js/stores'

import { Scroll } from '../js/Tools'
import { isWidthMobile } from '../js/Validate'



let noResponse = false
let scroll = new Scroll()
$: events  = $state.events

setTimeout(() => { if(events === undefined) noResponse = true }, 5000)
</script>

<div class="landing-page">
    <div>
		<header></header>
		
        <div class="text-container">
			<p>Din guide till jakt i Halland</p>
			<span></span>
            <p>Vi hjälper dig att ta jägarexamen, bli jaktledare och jaga i Halland</p>
		</div>
		
		<div class="img"></div>
		
        <div class="button-container">
			<button on:click={() => scroll.toParam('#article-1')}>Jägarexamen</button>
			<button on:click={scroll.toBottom}>Kontakta oss</button>
		</div>

		{#if !noResponse || isWidthMobile()}
			<div class="announcement" transition:fade>
				<div>
					{#if events}
						{#each events as {intensive, calm, leader}}
							<p id="parallaxInfo" transition:fade>
								Nästa kurstillfällen:
								{#if intensive}
									Intensiv Jägarexamen, den {intensive}.
								{/if}

								{#if calm}
									Lugn Jägarexamen, den {calm}.
								{/if}

								{#if leader}
									Jaktledarutbildning, den {leader}.
								{/if}

								<br><Subtext><Location /></Subtext>
							</p>
						{/each}
					{:else}
						<p id="parallaxInfo">
							Nästa kurstillfällen: ...
						</p>
					{/if}
				</div>
			</div>
		{/if}
	</div>
	<div class="background-block"></div>
	
</div>
