<script>

import { state } from '../js/stores'

import { articleData } from './articles/components/articleData.js'
import Jagarexamen from './articles/jagarexamen/jagarexamen.svelte'
import Leadership from './articles/jaktledarutbildning/jaktledarutbildning.svelte'
import JaktIHalland from './articles/jaktihalland/jaktihalland.svelte'


const { 
	articles, 
	location, 
	info,
} = articleData

$: events = $state.events

$: [{intensive, calm, leader}] = events ? events : [{}]

</script>

<Jagarexamen 
	events={{
		intensive, 
		calm
	}}
	article={{
		thumbnail: {
			title: articles[0].title,
			photoPath: articles[0].photoPath,
			photoBackgroundColor: articles[0].photoBackgroundColor,
		},
		body: [
			articles[0].body[0], 
			articles[0].body[1],
		],
		btnInfo: [
			articles[0].info[0],
			articles[0].info[1],
		],
		location,
		info,
	}}
/>

<!-- <Leadership
	event={leader} 
	article={{
		thumbnail: {
			title: articles[1].title,
			photoPath: articles[1].photoPath,
			photoBackgroundColor: articles[1].photoBackgroundColor,
		},
		body: [
			articles[1].body[0], 
			articles[1].body[1],
		],
		location,
		info,
	}}
/>
<JaktIHalland 
	article={{
		title: articles[2].title,
		photoPath: articles[2].photoPath,
		photoBackgroundColor: articles[2].photoBackgroundColor,
		content: articles[2].content,
	}}
/>
 -->
<style lang="sass">
</style>