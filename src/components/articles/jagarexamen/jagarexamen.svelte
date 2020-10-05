<script>

import Lugn from './lugn.md'
import Intensiv from './intensiv.md'

import Body from "../components/_body.md"
import BtnAdditionalInfo from "../components/_btnAdditionalInfo.svelte"
import Thumbnail from "../components/_thumbnail.svelte"

export let article
export let events

const { 
	body,
	thumbnail,
	btnInfo,
	location,
	info,
} = article

const {
	intensive, 
	calm
} = events
	
</script>

<article id="article-1">
	<Thumbnail data={thumbnail} /><br>
	<div>
		<div class="flex_gap">
			
			
			<Body>
				<Lugn body={body[0]} {location} {info} event={calm} />
			</Body>
			<Body>
				<Intensiv body={body[1]} {location} {info} event={intensive} />
			</Body>
			

		</div>

		<div class="flex_gap">
			
			{#each btnInfo as btnInfo}
				<BtnAdditionalInfo>
					<span slot="name">{btnInfo.title.toUpperCase()}</span>
					{btnInfo.text}
				</BtnAdditionalInfo>
			{/each}

		</div>
	</div>
</article>

<style src="../components/_article.sass"></style>