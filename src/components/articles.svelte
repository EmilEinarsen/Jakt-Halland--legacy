<script>

import { state } from '../js/stores'

import Jagarexamen from './articles/jagarexamen/jagarexamen.svelte'
import Leadership from './articles/jaktledarutbildning/jaktledarutbildning.svelte'
import JaktIHalland from './articles/jaktihalland/jaktihalland.svelte'

$: events = $state.events

$: [{intensive, calm, leader, weekend}] = events ? events : [{}]

</script>


<Jagarexamen {intensive} {calm} />

<Leadership {leader} />

<JaktIHalland {weekend}/>