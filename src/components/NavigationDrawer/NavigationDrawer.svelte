<script>
  import { fly } from "svelte/transition";
  import { quadIn } from "svelte/easing";
  import { Scrim } from "../Util";
  import breakpoints from "../../breakpoints";
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  const bp = breakpoints();

  export let persistent = false;
  export let show = true;

  export let transitionProps = {
    duration: 200,
    x: -300,
    easing: quadIn,
    opacity: 1,
  };

  $: transitionProps.x = $$props.right ? 300 : -300;
  $: persistent = show = $bp !== "sm";

  if ($bp === 'sm') show = false;

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

<style>
  .drawer {
    min-width: 250px;
  }

  aside {
    height: calc(100vh - 4rem);
  }
</style>
  
{#if show}
  <aside
    class={smelte.root.class}
    transition:fly={transitionProps}
  >
    {#if !persistent}
      <Scrim on:click={() => show = false} />
    {/if}
    <nav
      role="navigation"
      class={smelte.nav.class}
    >
      <div class="w-full">
        <slot />
      </div>
    </nav>
  </aside>
{/if}
