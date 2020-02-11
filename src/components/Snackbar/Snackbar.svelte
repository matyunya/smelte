<script context="module">
  import { writable } from "svelte/store";
  
  const queue = writable([]);
  let running = false;
</script>

<script>
  import { fade, scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  import { quadOut, quadIn } from "svelte/easing";
  import Button from "../Button";
  import { Spacer } from "../Util";
  import config from "./config";
  import smelter from "../../utils/smelter";

  export let value = false;
  export let timeout = 2000;
  export let inProps = { duration: 100, easing: quadIn };
  export let outProps = { duration: 100, easing: quadOut, delay: 150 };
  export let color = "gray";
  export let text = "white";
  export let top = false;
  export let bottom = true;
  export let right = false;
  export let left = false;
  export let noAction = true;
  export let hash = false;

  const dispatch = createEventDispatcher();

  let tm;
  let node;

  $: {
    hash = hash || (value ? btoa(`${value}${new Date().valueOf()}`) : null);
    value = value;
  }

  $: toggler = () => toggle(value, hash);

  $: if (value) {
    queue.update(u => [...u, toggler]);
  }

  $: if (!running && value && $queue.length) {
    $queue.shift()();
  }

  $: if (!value) clearTimeout(tm);

  function toggle(h, id) {
    if (value === false && running === false) {
      return;
    }
    hash = running = value = id;

    if (!timeout) return;

    tm = setTimeout(() => {
      value = running = hash = false;
      dispatch("finish");

      if ($queue.length) {
        $queue.shift()();
      }
    }, timeout);
  }

  const store = writable(config);

  $: smelte = smelter($store, {
      $$props,
      top,
      bottom,
      right,
      left,
      noAction,
      text,
      color
  });

  // for some reason it doesn't get updated otherwise
  $: if (node) node.classList = smelte.snackbar.class;
</script>

<style>
  .snackbar {
    min-width: 344px;
  }
</style>

{#if value && (running === hash)}
  <div
    class={smelte.container.class}
  >
    <div class={smelte.wrapper.class}>
      <div
        bind:this={node}
        in:scale={inProps}
        out:fade={outProps}
        on:click={() => value = false}>
        <slot /> 
        {#if !noAction}
          <Spacer />
          <slot name="action">
            {#if !timeout}
              <Button text on:click={() => value = false}>Close</Button>
            {/if}
          </slot>
        {/if}
      </div>
    </div>
  </div>
{/if}
