<script>
  import Location from "./articles/context/location.md";
  import Subtext from "./components/_subtext.svelte";
  import { fade } from "svelte/transition";

  import { state } from "../js/stores";

  import { isWidthMobile } from "../js/Validate";
  import Ripple from "./components/Ripple/Ripple.svelte";
  import { scrollto } from "svelte-scrollto";

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
      <p>
        Vi hjälper dig att ta jägarexamen, bli jaktledare och jaga i Halland
      </p>
    </div>

    <div class="img" />

    <div class="button-container">
      <div use:scrollto={'#article-1'} class="primary">
        <Ripple style={{ height: '100%' }}>Jägarexamen</Ripple>
      </div>
      <div use:scrollto={'.form'} class="secondary">
        <Ripple style={{ height: '100%' }}>Kontakta oss</Ripple>
      </div>
    </div>

    <div class="text-container">
      <p>Din guide till jakt i Halland</p>
      <span />
      <p>
        Vi hjälper dig att ta jägarexamen, bli jaktledare och jaga i Halland
      </p>
    </div>

    <div class="img" />

    <div class="button-container">
      <div use:scrollto={'#article-1'} class="primary">
        <Ripple style={{ height: '100%' }}>Jägarexamen</Ripple>
      </div>
      <div use:scrollto={'.form'} class="secondary">
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

                {#if calm}Jägarexamen normalkurs, den {calm}.{/if}

                {#if leader}Jaktledarutbildning, den {leader}.{/if}

                <br />
                <Subtext>
                  <Location />
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
