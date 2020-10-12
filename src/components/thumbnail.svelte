<script>
import { Scroll } from "../js/Tools";


let content = [
	{ 
		title: 'Jägarexamen', 
		text: 'Ta jägarexamen med lugn eller intensiv takt, under ett samlat pris.', 
		onClick: () => scroll.toParam('#article-1')
	},
	{ 
		title: 'Jaktledarutbildning', 
		text: 'Lär dig allt som behövs för att bli en bra jaktledare.',
		onClick: () => scroll.toParam('#article-2')
	},
	{ 
		title: 'Jakthelg i Halland', 
		text: 'Bock-, Gris-, Rådjursjakt samt transport och hotell med helpension.',
		onClick: () => scroll.toParam('#article-3')
	},
]
let scroll = new Scroll()
</script>

<div class="thumbnail-container">
	{#each content as { title, text, onClick }, index}
		<div on:click={onClick} class="lazy">
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