<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import Indicator from "./Indicator.svelte";
  import ProgressLinear from "../ProgressLinear";
  import Tab from "./TabButton.svelte";

  export let selected = null;
  export let navigation = false;
  export let items = [];
  export let indicator = true;
  export let color = "white";
  export let notselectedcolor = "white";
  let className = "";
  export {className as class};
  export let loading = false;

  let node;
  let indicatorWidth = 0;
  let indicatorOffset = 0;
  let offset = 0;

  function calcIndicator() {
    indicatorWidth = node ? node.offsetWidth / items.length : 0;

    let left = 0;
    if (selected) {
      const longestMatch = items
        .map((item, index) => [index, item])
        .filter(([index, item]) => selected.includes(item.to || item.id))
        .sort(
          ([index1, item1], [index2, item2]) =>
            (item2.to || item2.id).length - (item1.to || item1.id).length
        )[0];
      if (longestMatch) {
        left = longestMatch[0];
      }
    }

    offset = left * indicatorWidth;
  }

  onMount(() => calcIndicator(selected));

  $: calcIndicator(selected);
</script>

<div
  class="{className} py-0 h-full {navigation ? 'hidden md:flex' : 'flex'} items-center relative mx-auto z-20"
  bind:this={node}>
  {#each items as item, i}
    <slot name="item" {color} {item}>
      <Tab bind:selected {...item} {color} {notselectedcolor}>{item.text}</Tab>
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
