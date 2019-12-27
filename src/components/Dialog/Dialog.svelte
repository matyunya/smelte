<script>
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";
  import { quadIn } from "svelte/easing";
  import { Scrim } from "../Util";

  let className = "";
  export {className as class};
  export let value;
  export let wrapperClasses = "items-center z-50 rounded bg-white p-4 elevation-4";
  export let titleClasses = "text-lg font-bold pb-4";
  export let actionsClasses = "flex w-full justify-end pt-4";
  export let opacity = 0.5;
  export let duration = 150;
  export let delay = 150;
  export let persistent = false;

  const transitionProps = { duration, easing: quadIn, delay };
</script>

{#if value}
  <div class="fixed w-full h-full top-0 left-0 z-30">
    <Scrim {opacity} on:click={() => !persistent && (value = false)} />
    <div class="h-full w-full absolute flex items-center justify-center">
      <div
        in:scale={transitionProps}
        class="{className} {wrapperClasses}">
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
