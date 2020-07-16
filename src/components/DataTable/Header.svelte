<script>
  import { ClassBuilder } from "../../utils/classes.js";
  import { createEventDispatcher } from "svelte";
  import Icon from "../Icon";
  import { header as config } from "./config";
  import smelter from "../../utils/smelter";
  import { writable } from "svelte/store";

  export let column = {};
  export let asc = false;
  export let sortBy = false;
  export let sortable = true;
  export let editing = false;

  const dispatch = createEventDispatcher();
  const store = writable($$props.config || config);

  $: smelte = smelter($store, $$props);
</script>

<style>
  th .asc {
    transform: rotate(180deg);
  }
</style>

<th
  class={smelte.root.class}
  class:cursor-pointer={sortable || column.sortable}
  on:click={() => {
    if (column.sortable === false || !sortable) return;
    dispatch("sort", column);

    editing = false;
    asc = sortBy === column ? !asc : false;
    sortBy = column;
  }}
>
  <div class={smelte.wrapper.class}>
    {#if sortable && column.sortable !== false}
      <span class="sort" class:asc={!asc && sortBy === column}>
        <Icon small class={smelte.icon.class}>arrow_downward</Icon>
      </span>
    {/if}
    <span>{column.label || column.field}</span>
  </div>
</th>
