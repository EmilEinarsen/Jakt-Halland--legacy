<script>
  import { state } from "../js/stores";

  import Jagarexamen from "./articles/jagarexamen/jagarexamen.svelte";
  import Leadership from "./articles/jaktledarutbildning/jaktledarutbildning.svelte";
  import JaktIHalland from "./articles/jaktihalland/jaktihalland.svelte";
  import SurvivalCourse from "./articles/överlevnadskurs/överlevnadskurs.svelte";

  $: events = $state.events;
  $: eventData = $state.eventData;

  $: [{ intensive, summer, calm, leader, weekend, survival }] = events ? events : [{}];
  $: [{ intensive: intensiveData, summer: summerData, calm: calmData, leader: leaderData, weekend: weekendData, survival: survivalData }] = eventData ? [eventData] : [{}]
	
</script>

<Jagarexamen {intensive} {summer} {calm} data={{ intensiveData, summerData, calmData }} />

<Leadership {leader} data={leaderData} />

<SurvivalCourse {survival} data={survivalData} />

<JaktIHalland {weekend} />
