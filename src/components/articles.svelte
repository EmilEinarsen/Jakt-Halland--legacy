<script>
  import { state } from "../js/stores";

  import Jagarexamen from "./articles/jagarexamen/jagarexamen.svelte";
  import Leadership from "./articles/jaktledarutbildning/jaktledarutbildning.svelte";
  import JaktIHalland from "./articles/jaktihalland/jaktihalland.svelte";

  $: events = $state.events;
  $: eventData = $state.eventData;

  $: [{ intensive, calm, leader, weekend }] = events ? events : [{}];
  $: [{ intensive: intensiveData, calm: calmData, leader: leaderData, weekend: weekendData }] = eventData ? [eventData] : [{}]
 
</script>

<Jagarexamen {intensive} {calm} data={{ intensiveData, calmData }} />

<Leadership {leader} data={leaderData} />

<JaktIHalland {weekend} />
