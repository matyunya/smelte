<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { quadOut, quadIn } from "svelte/easing";
  import List from "../List/List.svelte";
  import TextField from "../TextField";

  export let items = [];
  export let c = "";
  export let value = "";
  export let text = "";
  export let label = "";
  export let color = "primary";
  export let outlined = false;
  export let placeholder = "";
  export let hint = "";
  export let error = false;
  export let append = "";
  export let persistentHint = false;
  export let autocomplete = false;
  export let noUnderline = false;
  export let wrapperClasses = "cursor-pointer relative pb-4";
  export let wrapperBaseClasses = i => i;
  export let appendBaseClasses = i => i;

  export let add = "";
  export let remove = "";
  export let replace = "";

  let showList = false;
  let filteredItems = items;
  let itemsProcessed = [];

  const props = {
    outlined,
    label,
    placeholder,
    hint,
    error,
    append,
    persistentHint,
    color,
    add,
    remove,
    replace,
    noUnderline,
    wrapperBaseClasses,
    appendBaseClasses,
  };

  $: itemsProcessed = items.map(i => typeof i !== 'object'
     ? ({ value: i, text: i })
     : i);

  const inProps = { y: 10, duration: 50, easing: quadIn };
  const outProps = { y: -10, duration: 100, easing: quadOut, delay: 50 };
  const dispatch = createEventDispatcher();

  function getLabel(value) {
    return value ? (itemsProcessed.find(i => i.value === value) || {}).text : "";
  }

  let selectedLabel = getLabel(value);

  function filterItems({ target }) {
    filteredItems = itemsProcessed.filter(i =>
      i.text.toLowerCase().includes(target.value.toLowerCase())
    );
  }
</script>

<svelte:window on:click={() => (showList = false)} />

<div class="{wrapperClasses} {c}">
  <slot name="select">
    <TextField
      select
      {autocomplete}
      value={selectedLabel}
      {...props}
      on:click={e => {
        e.stopPropagation();
        showList = true;
      }}
      on:click
      on:input={filterItems}
      append="arrow_drop_down"
      appendReverse={showList}
    />
  </slot>

  {#if showList}
    <slot name="options">
      <div
        class="list"
        on:click={() => (showList = false)}
        in:fly={inProps}
        out:fly={outProps}
        class:rounded-t-none={!outlined}>
        <List
          bind:value
          select
          items={filteredItems}
          on:change={({ detail }) => {
            selectedLabel = getLabel(detail);
            dispatch('change', detail);
          }} />
      </div>
    </slot>
  {/if}
</div>
