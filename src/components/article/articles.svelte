<script>
import { markdown } from '../../js/Format';

import { state } from '../../js/stores'

import { articleData } from './modules/articleData.js'

import Body from "./modules/_body.svelte"
import BtnAdditionalInfo from "./modules/_btnAdditionalInfo.svelte"
import Event from './modules/_event.svelte';
import Schedule from './modules/_schedule.svelte';
import Thumbnail from "./modules/_thumbnail.svelte"

const { articles, location, info } = articleData


$: events = $state.events

$: [{intensive, calm, leader}] = events ? events : [{}]

</script>

<article id="article-1">
	<Thumbnail data={{...articles[0]}} /><br>
	<div>
		<div class="flex_gap">

			<Body body={articles[0].body[0]}>
				<span slot="event">
					<Event event={calm} />
				</span>
				<span slot="info">{info}</span>
				<span slot="location">{location}</span>
			</Body>

			<Body body={articles[0].body[1]}>
				<span slot="event">
					<Event event={intensive} />
				</span>
				<span slot="info">{info}</span>
				<span slot="location">{location}</span>
			</Body>

		</div>
		<div class="flex_gap padding-top-s">

			<BtnAdditionalInfo title={articles[0].info[0].title}>
				<p>{@html markdown(articles[0].info[0].text)}</p>
			</BtnAdditionalInfo>

			<BtnAdditionalInfo title={articles[0].info[1].title}>
				<Schedule schedule={articles[0].info[1].schedule}/>
			</BtnAdditionalInfo>

		</div>
	</div>
</article>

<article id="article-2">
	<Thumbnail  data={articles[1]} /><br>
	<div>
		<div class="flex_gap">

			<Body body={articles[1].body[0]}>
				<span slot="event">
					<Event event={leader} />
				</span>
			</Body>
			
			<Body body={articles[1].body[1]}>
				<span slot="info">{info}</span>
				<span slot="location">{location}</span>
			</Body>

		</div>
	</div>
</article>

<article id="article-3">
	<Thumbnail  data={articles[2]} />
	<div class="flex_gap">
		<Thumbnail data={articles[2].content[0]}/>
		<Thumbnail data={articles[2].content[1]}/>
		<Thumbnail data={articles[2].content[2]}/>
	</div>
	<div class="article-3-bottom-thubnail-wrapper"><Thumbnail data={articles[2].content[3]} /></div>
</article>



<style lang="sass">

$gap: 20px

.flex
	display: grid
	width: 100%
	@media (min-width: 880px)
		display: inline-flex

.gap
	gap: $gap/4
	@media (min-width: 880px)
		gap: $gap

.flex_gap
	@extend .flex
	@extend .gap

.article-3-bottom-thubnail-wrapper
	max-width: 800px
	margin: 0 auto
	

article
	@extend .gap
	display: grid
	min-width: 275px
	max-width: 1000px
	width: 100%
	margin: 30px auto 40px auto
	white-space: pre-line
	transition: 1s linear

.padding-top-s
	padding: 20px 0 0 0


</style>