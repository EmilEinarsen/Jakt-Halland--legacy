<script>

import Event from '../components/_event.svelte'
import List from '../components/_list.svelte'
import Subtext from '../components/_subtext.svelte'

export let body
export let location
export let info
export let event
	
</script>


# {body.title}
						
Pris: _{body.price}_

<Event {location} {event} />

<List list={body.lists[0]} />

Under utbildningen går vi igenom hela teoridelen tillsammans. Detta sker över 10 kvällar, varannan vecka mellan 18.00 - 21.00.
Vilket ger er gott om tid att studera.

<List list={body.lists[1]} />

<Subtext subtext={info}/>