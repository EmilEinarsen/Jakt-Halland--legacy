<script>

import Thumbnail from "../components/_thumbnail.svelte"

export let article

const { 
	title,
	photoPath,
	photoBackgroundColor,
	content, 
} = article

</script>

<article id="article-3">

	

	<Thumbnail  data={{
		title,
		photoPath,
		photoBackgroundColor
	}} />

	<div class="flex_gap">
		<Thumbnail data={content[0]}/>
		
		<Thumbnail data={content[1]}/>
		
		<Thumbnail data={content[2]}/>
	</div>

	<div class="article-3-bottom-thubnail-wrapper">
		<Thumbnail data={content[3]} />
	</div>

</article>

<style src="../components/_article.sass"></style>