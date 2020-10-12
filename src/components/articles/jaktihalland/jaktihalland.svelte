<script>

import Thumbnail from "../../components/_thumbnail.svelte"
export let weekend
$: [{pig, deer, deerPig}] = weekend ? [weekend] : [{}]
</script>

<article id="article-3">
	<Thumbnail  
		data={{
			title: 'Jakthelg i Halland',
			photoPath: '../img/forest_sun-1200x1440-min.jpg',
			photoBackgroundColor: '#ccc9a2',
		}}
	/>

	<div class="flex_gap">
		<Thumbnail 
			data={{
				subtitle: 'Grisjakt',
				photoPath: '../img/pig-900x600-min.jpg',
				photoBackgroundColor: '#424042',
				text: `6 500 kr
					Fredag - söndag
					Nattjakt fredag och lördag
					Stötjakt på söndag`,
			}}
			event={pig}
		/>
		
		<Thumbnail 
			data={{
				subtitle: 'Bockjakt',
				photoPath: '../img/deer-900x600-min.jpg',
				photoBackgroundColor: '#33250c',
				text: `5 000 kr
					Fredag - söndag
					Passjakt fredag och lördag`,
			}}
			event={deer}
		/>
		
		<Thumbnail
			data={{
				subtitle: `Rådjur & 
						Grisjakt`,
				photoPath: '../img/deer_small-900x600-min.jpg',
				photoBackgroundColor: '#1a250f',
				text: `6 500 kr
					Fredag- söndag
					Passjakt fredag och lördag
					Stötjakt på söndag med hund`,
			}}
			event={deerPig}
		/>
	</div>

	<div class="article-3-bottom-thubnail-wrapper">
		<Thumbnail 
			data={{
				photoPath: '../img/forest-900x600-min.jpg',
				photoBackgroundColor: '#1b222a',
				text: `Alla troféer tillfaller skytten, under förutsättning att man tar hand om 	djuret själv.

					Vid grisjakt får den skytt som fäller en gris ta med sig djuret hem, om han så önskar.

					I priset ingår övernattning på hotell i dubbelrum med helpension
					(enkelrumstillägg 500 kr/natt).

					Transport till och från jakten.
				`,
				
			}} 
		/>
	</div>

</article>

<style src="../context/_article.sass"></style>