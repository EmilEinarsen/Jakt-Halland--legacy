<script>

import Left from './left.md'
import Right from './right.md'

import Thumbnail from "../../components/_thumbnail.svelte"

export let leader

</script>

<article id="article-2">
	<Thumbnail  
		data={{
				title: 'Jaktledarutbildning',
				photoPath: '../img/hunter-1200x1000-min.jpg',
				photoBackgroundColor: '#44413f',
		}}
	/>
	<div>
		<div class="flex_gap_text">

			<Left event={leader} />
			
			<Right />

		</div>
	</div>
</article>

<style src="../context/_article.sass"></style>