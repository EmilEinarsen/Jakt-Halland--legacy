<script>

import Body from "../components/_body.md"
import BtnAdditionalInfo from "../components/_btnAdditionalInfo.svelte"
import Event from '../components/_event.svelte'
import List from '../components/_list.svelte'
import Schedule from '../components/_schedule.svelte'
import Thumbnail from "../components/_thumbnail.svelte"
import Subtext from '../components/_subtext.svelte'

export let article
export let event

const { 
	body, 
	thumbnail, 
	location, 
	info 
} = article

</script>

<article id="article-2">
	<Thumbnail  data={thumbnail} /><br>
	<div>
		<div class="flex_gap">

			<Body>
				<span slot="top" class="gap-content">
					<span>
						Pris: {@html markdown(body[0].price)}
					</span>
					<Event {event} {location} />
				</span>

				<List list={body[0].lists[0]} />

				<span>{@html markdown(body[0].main)}</span>
			</Body>
			
			<Body>
				<span>{@html markdown(body[1].main)}</span>
				
				<List list={body[1].lists[0]} />
				
				<span slot="subText">
					<Subtext subtext={info}/>
				</span>

				<span slot="bottom">
					<BtnAdditionalInfo>
						<span slot="name">
							{body[1].schedule[0][0].title.toUpperCase()}
						</span>
						<Schedule schedule={body[1].schedule} />
					</BtnAdditionalInfo>
				</span>
			</Body>

		</div>
	</div>
</article>

<style src="../components/_article.sass"></style>