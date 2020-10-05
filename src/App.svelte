<script>
	import { beforeUpdate } from 'svelte'
	
	import { state } from './js/stores'
	import { body } from './js/Helpers'
	import { LazyImgLoading } from './js/Tools'

	import Navbar from './components/navbar.svelte'
	import Parallax from './components/parallax.svelte'
	import Thumbnail from './components/thumbnail.svelte'
	import Articles from './components/articles.svelte'
	import { getEvents } from './js/Server'
	import { structureApprouchingEvents } from './js/Announcement'

	let events
	let lazyImgLoading

	$: $state.events = events

	data()
	async function data() {
		try {
			events = [structureApprouchingEvents(await getEvents())]
		} catch (error) {
			console.log(error)
		}
	}
	
	/* function scrollIntoView(param) {
		const yOffset = 120
		let y = queryTarget(param).getBoundingClientRect().top + window.pageYOffset - yOffset
		window.scrollTo({top: y, behavior: 'smooth'})
	} */
	
	beforeUpdate(() => {
		lazyImgLoading = new LazyImgLoading()
		lazyImgLoading.load()
	})
</script>

<svelte:window on:resize={lazyImgLoading.load} on:scroll={lazyImgLoading.load} />

<Navbar />

<Parallax {events} />
<Thumbnail />
<Articles />

<style lang="sass">
</style>