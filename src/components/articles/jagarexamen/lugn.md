<script>

import Event from '../components/_event.svelte'
import List from '../components/_list.svelte'
import Subtext from '../components/_subtext.svelte'

export let body
export let location
export let info
export let event
	
</script>


# Lugn Jägarexamen
						
Pris: _4 000 kr_

<Event {location} {event} />

<List list={body.lists[0]} />

{body.main}

<List list={body.lists[1]} />

<Subtext subtext={info}/>