<script>

import Normal from './normal.md'
import Intensiv from './intensiv.md'
import Buttons from './buttons.md'

import Thumbnail from "../../components/_thumbnail.svelte"

export let intensive
export let calm
	
</script>

<article id="article-1">

	<Thumbnail 
		data={{
			title: 'Jägarexamen',
			photoPath: '../img/shooter-1200x1000-min.jpg',
			photoBackgroundColor: '#2b2f28'
		}}
	/>

	<div>
		<div class="flex_gap_text">
			
			<div>
				<Normal event={calm} />
			</div>
			
			<div>
				<Intensiv event={intensive} />
			</div>
			
		</div>
			
		<Buttons />
		
	</div>
</article>

<style src="../context/_article.sass"></style>