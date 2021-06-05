<script>
  import Normal from "./normal.md"
  import Intensiv from "./intensiv.md"
  import SommarIntensiv from "./sommarIntensiv.md"
  import Buttons from "./buttons.md"

  import Thumbnail from "../../components/_thumbnail.svelte"
import Divider from "../../components/Divider.svelte"

  export let intensive
  export let calm
  export let summer

  export let data
  $: [{ intensiveData, calmData, summerData }] = [data]
</script>

<style src="../context/_article.sass">
</style>

<article id="article-1">
	<Thumbnail
		data={{ title: 'Jägarexamen', photoPath: '../img/shooter-1200x1000-min.jpg', photoBackgroundColor: '#2b2f28' }} />

	<div>
		<div class="flex_gap_text">
			<div>
				<Normal event={calm} data={calmData} />
			</div>

			<div>
				<Intensiv event={intensive} data={intensiveData} />
			</div>
		</div>
		<Buttons />

		<div class="article-divider"><Divider /></div>

		<div class="flex_gap_text padding-top-s">
			<div>
				<SommarIntensiv event={summer} data={summerData} />
			</div>
		</div>
	</div>
</article>
