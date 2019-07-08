<script>
  import { onMount } from "svelte";

  import Indicator from "./Indicator.svelte";
  import ProgressLinear from "components/ProgressLinear";
  import Tab from "./TabButton.svelte";

  export let selected = null;
  export let navigation = false;
  export let items = [];
  export let indicator = true;
  export let color = "white";
  export let c = "";
  export let loading = false;

  let node;
  let indicatorWidth = 0;
  let indicatorOffset = 0;
  let offset = 0;

  function calcIndicator() {
    indicatorWidth = node ? node.offsetWidth / items.length : 0;

    const left = selected
      ? items.findIndex(i => selected.includes(i.to || i.id))
      : 0;

    offset = left * indicatorWidth;
  }

  onMount(() => calcIndicator(selected));

  $: calcIndicator(selected);
</script>

<div
  class="{c} py-0 h-full {navigation ? 'hidden md:flex' : 'flex'} items-center relative mx-auto z-20"
  bind:this={node}>
  {#each items as item, i}
    <slot name="item">
      <Tab bind:selected {...item} {color}>{item.text}</Tab>
    </slot>
  {/each}
  {#if indicator}
    <Indicator {color} width={indicatorWidth} left={offset} />
  {/if}
</div>
{#if loading}
  <ProgressLinear {color} />
{/if}

<slot {selected} name="content" />
