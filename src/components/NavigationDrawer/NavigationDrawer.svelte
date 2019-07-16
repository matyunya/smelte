<script>
  import { fly } from "svelte/transition";
  import { cubicIn } from "svelte/easing";
  import { Scrim } from "../Util";

  export let right = false;
  export let persistent = false;
  export let elevation = true;
  export let showMobile = false;
  export let showDesktop = true;
  export let breakpoint = "";
  export let asideClasses = "fixed top-0 md:mt-16 w-auto drawer overflow-hidden";
  export let navClasses = `h-full bg-white absolute flex w-auto z-20 drawer
     pointer-events-auto overflow-y-auto`;

  function shouldShowWithScrim(mobile, persist, bp) {
    if (bp === "sm") {
      return mobile;
    }

    return !persist;
  }

  $: showWithScrim = shouldShowWithScrim(showMobile, persistent, breakpoint);
  $: show = breakpoint === "sm" ? showMobile : showDesktop;
  $: transitionProps = showWithScrim
    ? {
        duration: 200,
        x: right ? 300 : -300,
        opacity: 1,
        easing: cubicIn
      }
    : { x: 0 };

  function hide() {
    if (breakpoint === "sm") {
      showMobile = false;
      return;
    }
    showDesktop = false;
  }
</script>

<style>
  .aside {
    height: calc(100% - 4rem);
  }
  .drawer {
    min-width: 216px;
  }
  .bordered {
    @apply border-gray-400 border-r border-l;
  }
</style>

{#if show}
  <aside
    class={asideClasses}
    class:right-0={right}
    class:aside={breakpoint !== "sm"}
    class:h-full={breakpoint === "sm"}
    class:left-0={!right}
    class:pointer-events-none={!showWithScrim}
    class:z-50={showWithScrim}
    class:elevation-4={elevation}
    class:bordered={!elevation && !showWithScrim}
    class:z-20={!showWithScrim}
    on:click={() => (showMobile = false)}>
    {#if showWithScrim}
      <Scrim on:click={hide} />
    {/if}
    <nav
      role="navigation"
      class={navClasses}
      transition:fly={transitionProps}>
      <div class="w-full">
        <slot />
      </div>
    </nav>
  </aside>
{/if}
