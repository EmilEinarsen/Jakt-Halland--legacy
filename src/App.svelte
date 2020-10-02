<script>
	import { beforeUpdate } from 'svelte'
	
	import { state } from './js/stores'
	import { body } from './js/Helpers'
	import { getPosY, LazyImgLoading, scrollToInstantly } from './js/Tools'

	import Navbar from './components/navbar.svelte'
	import Parallax from './components/parallax.svelte'
	import Thumbnail from './components/thumbnail.svelte'
	import Articles from './components/article/articles.svelte'
	import { getEvents } from './js/Server'
	import { structureApprouchingEvents } from './js/Announcement'

	let events
	let lazyImgLoading

	$: $state.events = events
	$: body.classList = $state.menu ? 'stop-scrolling' : ''
	$: body.style.top = $state.posY

	data()
	async function data() {
		try {
			events = [structureApprouchingEvents(await getEvents())]
		} catch (error) {
			console.log(error)
		}
	}

	export const toggleScroll = () => $state.menu ? disableScroll() : enableScroll()
	export function enableScroll() {
		scrollToInstantly({top: $state.posY})
		$state.posY = ''
	}
	function disableScroll() {
		$state.posY = `-${getPosY()}px`
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

<Navbar {toggleScroll} {enableScroll} />

<Parallax {events} />
<Thumbnail />
<Articles />

<style lang="sass">
</style>