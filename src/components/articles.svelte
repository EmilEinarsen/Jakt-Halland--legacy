<script>
  import { state } from "../js/stores";

  import Jagarexamen from "./articles/jagarexamen/jagarexamen.svelte";
  import Leadership from "./articles/jaktledarutbildning/jaktledarutbildning.svelte";
  import JaktIHalland from "./articles/jaktihalland/jaktihalland.svelte";

  $: events = $state.events;
  $: eventData = $state.eventData;

  $: [{ intensive, summer, calm, leader, weekend }] = events ? events : [{}];
  $: [{ intensive: intensiveData, summer: summerData, calm: calmData, leader: leaderData, weekend: weekendData }] = eventData ? [eventData] : [{}]
 
</script>

<Jagarexamen {intensive} {summer} {calm} data={{ intensiveData, summerData, calmData }} />

<Leadership {leader} data={leaderData} />

<JaktIHalland {weekend} />
