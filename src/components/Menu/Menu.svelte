<script>
  import {
    createEventDispatcher
  } from "svelte";
  import {
    fly
  } from "svelte/transition";
  import {
    quadOut,
    quadIn
  } from "svelte/easing";
  import List from "../List";
  import {
    writable
  } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  export let items = [];
  export let open = false;
  export let value = null;
  export let listProps = {};

  const dispatch = createEventDispatcher();

  export let inProps = {
    y: 10,
    duration: 200,
    easing: quadIn
  };
  export let outProps = {
    y: -10,
    duration: 100,
    easing: quadOut,
    delay: 100
  };

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

<svelte:window on:click={()=> {
  open = false;
  dispatch("close");
  }} />

  <div class={smelte.root.class} on:click|stopPropagation>
    <slot name="activator" />
    <slot name="menu">
      {#if open}
      <div class={smelte.listWrapper.class} in:fly={inProps} out:fly={outProps}>
        <List
          class={smelte.list.class}
          bind:value
          select
          dense
          {items}
          on:change
          on:change={() => (open = false)}
          {...listProps}>
          <slot />
        </List>
      </div>
    {/if}
  </slot>
</div>