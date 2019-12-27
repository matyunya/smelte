<script>
  import { fly } from "svelte/transition";
  import { quadIn } from "svelte/easing";
  import { Scrim } from "../Util";
  import { breakpoints } from "smelte";

  const bp = breakpoints();

  export let right = false;
  export let persistent = false;
  export let elevation = true;
  export let show = $bp !== 'sm';
  export let asideClasses = "fixed top-0 md:mt-16 w-auto drawer overflow-hidden";
  export let navClasses = `h-full bg-white absolute flex w-auto z-20 drawer
    pointer-events-auto overflow-y-auto`;

  export let transitionProps = {
    duration: 200,
    x: -300,
    easing: quadIn,
    opacity: 1,
  };

  $: transitionProps.x = right ? 300 : -300;
  $: persistent = show = $bp !== "sm";

</script>

<style>
  .drawer {
    min-width: 216px;
  }

  .aside {
    height: calc(100vh - 4rem);
  }
</style>
  
{#if show}
  <aside
    class={asideClasses}
    class:right-0={right}
    class:aside={$bp !== "sm"}
    class:h-full={$bp === "sm"}
    class:left-0={!right}
    class:pointer-events-none={persistent}
    class:z-50={!persistent}
    class:elevation-4={elevation}
    class:border-gray-400={!elevation && persistent}
    class:border-r={!elevation && persistent}
    class:border-l={!elevation && persistent}
    class:z-20={persistent}
    transition:fly={transitionProps}
  >
    {#if !persistent}
      <Scrim on:click={() => show = false} />
    {/if}
    <nav
      role="navigation"
      class={navClasses}
    >
      <div class="w-full">
        <slot />
      </div>
    </nav>
  </aside>
{/if}
