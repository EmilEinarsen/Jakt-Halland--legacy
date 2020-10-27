<script>
import { scrollto } from 'svelte-scrollto';

let content = [
	{ 
		title: 'Jägarexamen', 
		text: 'Ta jägarexamen med lugn eller intensiv takt, under ett samlat pris.',
	},
	{ 
		title: 'Jaktledarutbildning', 
		text: 'Lär dig allt som behövs för att bli en bra jaktledare.',
	},
	{ 
		title: 'Jakthelg i Halland', 
		text: 'Bock-, Gris-, Rådjursjakt samt transport och hotell med helpension.',
	},
]

</script>

<div class="thumbnail-container">
	{#each content as { title, text }, index}
		<div use:scrollto={`#article-${++index}`} class="lazy">
			<div>
				<p>{title}</p>
				<span></span>
				<p>{text}</p>
			</div>
			<div class="circle-arrow-thumbnail">
				<span>
					<div>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</span>
			</div>
		</div>
	{/each}
</div>