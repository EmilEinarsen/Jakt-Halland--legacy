<script>
  import Subtext from "./components/_subtext.svelte";
  import { fade } from "svelte/transition";

  import { state } from "../js/stores";

  import { isWidthMobile } from "../js/Validate";
  import Ripple from "./components/Ripple/Ripple.svelte";
  import { scrollTo } from "svelte-scrollto";

  let noResponse = false;
  $: events = $state.events;
	
  setTimeout(() => {
    if (events === undefined) noResponse = true;
  }, 5000);
</script>

<div class="landing-page">
  <div>
    <header />

    <div class="text-container">
      <p>Din guide till jakt i Halland</p>
      <span />
      <p>Vi hjälper dig att ta jägarexamen.</p>
      <p>Nu med skjutsimulator!</p>
    </div>

    <div class="img" />

    <div class="button-container">
      <div on:click={() => scrollTo({element: `.form`})} class="secondary">
        <Ripple style={{ height: '100%' }}>Kontakta oss</Ripple>
      </div>
    </div>

    {#if !noResponse || isWidthMobile()}
      <div class="announcement" transition:fade>
        <div>
          {#if events}
            {#each events as { intensive, calm, leader }}
              <p id="parallaxInfo" transition:fade>
                Nästa kurstillfällen:
                {#if intensive}Jägarexamen intensivkurs, den {intensive}.{/if}

                {#if calm}Jägarexamen normalkurs, den {calm}.<br />{/if}

                {#if leader}Jaktledarutbildning, den {leader}.<br />{/if}

                <br />
                <Subtext>
									Våra kurser hålls i Laholm och Halmstad
                </Subtext>
              </p>
            {/each}
          {:else}
            <p id="parallaxInfo">Nästa kurstillfällen: ...</p>
          {/if}
        </div>
      </div>
    {/if}
  </div>
  <div class="background-block" />
</div>
