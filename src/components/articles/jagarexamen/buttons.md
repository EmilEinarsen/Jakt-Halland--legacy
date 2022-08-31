<script>
	import BtnAdditionalInfo from "../../components/_btnAdditionalInfo.svelte"
	import Tables from "../../components/_tables.svelte"
	import LeftButtonContent from './leftButtonContent.md'
</script>

<div class="btnsJagarexamen">

<BtnAdditionalInfo>

<span slot="name">JÄGAREXAMEN INNEHÅLL</span>

<LeftButtonContent />

</BtnAdditionalInfo>

<BtnAdditionalInfo>

<span slot="name">EXEMPEL INTENSIVKURS SCHEMA</span>

<Tables
	tables={[
		[
			{title: 'Torsdag:'},
			{time: '13.00 - 15.00', activity: 'Kursstart teoripass 1'},
			{time: '15.30 - 18.00', activity: 'Teoripass 2'},
			{time: '18.30 - Middag', activity: ''},
		],
		[
			{title: 'Fredag:'},
			{time: '09.00 - 10.00', activity: 'Säker vapenhantering'},
			{time: '10.00 - 12.00', activity: 'Teoripass 3'},
			{time: '12.00 - 13.00', activity: 'Lunch'},
			{time: '13.00 - 15.00', activity: 'Skyttesimulator'},
			{time: '15.15 - 16.30', activity: 'Teoripass 4'},
			{time: '17.00 - 18.00', activity: 'Teoriprov'},
			{time: '18.30 - Middag', activity: ''},
		],
		[
			{title: 'Lördag:'},
			{time: '08.00 – 09.00', activity: 'Eventuellt omprov'},
			{time: '09.30 - 12.00', activity: 'Skjutsimulator'},
			{time: '12.00 - 13.00', activity: 'Lunch'},
			{time: '13.00 - 15.00', activity: 'Lerduveskytte'},
			{time: '16.00 - 18.00', activity: 'Genomgång praktiskt prov'},
			{time: '19.00 - Middag', activity: ''},
		],
		[
			{title: 'Söndag:'},
			{time: '09.00 - 12.00', activity: 'Uppskjutning kula/hagel'},
			{time: '13.00 - 14.00', activity: 'Lunch. Utdelning jägarbevis'},
		],
	]}
/>

</BtnAdditionalInfo>

</div>

<style src="../context/_article.sass"></style>