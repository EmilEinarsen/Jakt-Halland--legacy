<div>
	<p>
		<slot>
			## Main content...
		</slot>
	</p>
</div>


<style lang="sass">

$gap: 30px

div
	position: relative
	width: 100%
	padding: 0 10px

	@media (min-width: 880px)
		width: 50%

	& > p
		display: grid
		gap: $gap
		font-size: 20px
		height: min-content
		.info
			font-size: 16px
			
</style>