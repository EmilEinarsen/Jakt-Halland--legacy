<script>

import Left from './left.md'
import Right from './right.md'

import Thumbnail from "../../components/_thumbnail.svelte"

export let survival

</script>

<article id="article-2">
	<Thumbnail  
		data={{
			title: 'Överlevnad',
			photoPath: '../img/viacheslav.jpg',
			photoBackgroundColor: '#382f24',
		}}
	/>
	<div>
		<div class="flex_gap_text">

			<Left event={survival} />
			
			<Right />

		</div>
	</div>
</article>

<style src="../context/_article.sass"></style>
