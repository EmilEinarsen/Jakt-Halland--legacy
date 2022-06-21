<script>
import { scrollTo } from 'svelte-scrollto';

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
		title: 'Överlevand', 
		text: 'Känna er trygga i att ni har kunskapen som krävs för att klara en kris.',
	},
]

</script>

<div class="thumbnail-container">
	{#each content as { title, text }, index}
		<div on:click={() => scrollTo({element: `#article-${index+1}`})} class="lazy">
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