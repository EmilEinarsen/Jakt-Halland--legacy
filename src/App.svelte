<script>
import { beforeUpdate } from 'svelte'

import { state } from './js/stores'

import { LazyImgLoading } from './js/Tools'

import { getEvents } from './js/Server'
import { structureApprouchingEvents } from './js/Announcement'

import Navbar from './components/navbar.svelte'
import Parallax from './components/parallax.svelte'
import Thumbnail from './components/thumbnail.svelte'
import Articles from './components/articles.svelte'
import Footer from './components/footer.svelte'
import Form from './components/form.svelte'
import Throttle from 'bjork_restrain/modules/Throttle'
let events
let lazyload = (new LazyImgLoading()).load
let throttle = (new Throttle()).process

$: $state.events = events

data()
async function data() {
	try {
		events = [structureApprouchingEvents(await getEvents())]
	} catch (error) {
		console.log(error)
	}
}

beforeUpdate(() => {
	lazyload()
})
function handleLazyload() {
	throttle(() => {
		lazyload()
	}, 100)
}
</script>

<svelte:window on:resize={handleLazyload} on:scroll={handleLazyload} />

<Navbar />

<Parallax {events} />

<div>
	<Thumbnail />

	<Articles />

	<Form />

	<Footer />
</div>

<style lang="sass">

div 
	display: grid
	gap: 30px

</style>