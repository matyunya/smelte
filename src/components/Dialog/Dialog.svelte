<script>
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";
  import { quadIn } from "svelte/easing";
  import { Scrim } from "../Util";
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";
  
  export let value;
  export let opacity = 0.5;
  export let persistent = false;

  export let transitionProps = { duration: 150, easing: quadIn, delay: 150 };

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

{#if value}
  <div class={smelte.wrapper.class}>
    <Scrim {opacity} on:click={() => !persistent && (value = false)} />
    <div class={smelte.container.class}>
      <div
        in:scale={transitionProps}
        class={smelte.dialog.class}>
        <div class={smelte.title.class}>
          <slot name="title" />
        </div>
        <slot />
        <div class={smelte.actions.class}>
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
{/if}
