<script>
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";
  import { quadOut, quadIn } from "svelte/easing";
  import { Scrim } from "../Util";

  export let c = "";
  export let value;
  export let wrapperClasses = "items-center z-50 rounded bg-white p-4 elevation-4";
  export let titleClasses = "text-lg font-bold pb-4";
  export let actionsClasses = "flex w-full justify-end pt-4";

  const transitionProps = { duration: 150, easing: quadIn, delay: 150 };
</script>

{#if value}
  <div class="fixed w-full h-full top-0 left-0 z-30">
    <Scrim on:click={() => (value = false)} />
    <div class="h-full w-full absolute flex items-center justify-center">
      <div
        transition:scale={transitionProps}
        class="{c} {wrapperClasses}">
        <div class={titleClasses}>
          <slot name="title" />
        </div>
        <slot />
        <div class={actionsClasses}>
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
{/if}
