<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { quadOut, quadIn } from "svelte/easing";
  import List from "../List";
  import TextField from "../TextField";

  export let items = [];
  export let open = false;
  export let value = null;
  export let wrapperClasses = "cursor-pointer relative inline-flex";
  export let listWrapperClasses = "absolute w-full bottom-0";

  const dispatch = createEventDispatcher();

  const inProps = { y: 10, duration: 200, easing: quadIn };
  const outProps = { y: -10, duration: 100, easing: quadOut, delay: 100 };
</script>

<svelte:window on:click={() => (open = false)} />

<div class={wrapperClasses} on:click|stopPropagation>
  <slot name="activator" />
  <slot name="menu">
    {#if open}
      <div class={listWrapperClasses} in:fly={inProps} out:fly={outProps}>
        <List
          bind:value
          select
          dense
          {items}
          class="list"
          on:change
          on:change={() => open = false}
        />
      </div>
    {/if}
  </slot>
</div>