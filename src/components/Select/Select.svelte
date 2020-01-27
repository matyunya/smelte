<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { quadOut, quadIn } from "svelte/easing";
  import List from "../List/List.svelte";
  import TextField from "../TextField";
  import { hideListAction } from '../../utils/hide-list-action';

  export let items = [];
  export let value = "";
  export const text = "";
  export let label = "";
  export let selectedLabel = "";
  export let color = "primary";
  export let outlined = false;
  export let placeholder = "";
  export let hint = "";
  export let error = false;
  export let append = "";
  export let dense = false;
  export let persistentHint = false;
  export let autocomplete = false;
  export let noUnderline = false;
  export let wrapperClasses = "cursor-pointer relative pb-4";
  export let showList = false;
  export let inputWrapperClasses = i => i;
  export let appendClasses = i => i;
  export let labelClasses = i => i;
  export let inputClasses = i => i;
  export let prependClasses = i => i;

  export let add = "";
  export let remove = "";
  export let replace = "";

  let className = "";
  export {className as class};

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
  };

  function process(it) {
    return it.map(i => typeof i !== 'object'
     ? ({ value: i, text: i })
     : i);
  }

  $: itemsProcessed = process(items);

  onMount(() => {
    selectedLabel = getLabel(value);
  })

  const dispatch = createEventDispatcher();

  function getLabel(value) {
    return value !== undefined ? (itemsProcessed.find(i => i.value === value) || { text: "" }).text : "";
  }

  function filterItems({ target }) {
    filteredItems = itemsProcessed.filter(i =>
      i.text.toLowerCase().includes(target.value.toLowerCase())
    );
  }

  const onHideListPanel = () => showList = false;
</script>

<div class="{wrapperClasses} {className}" use:hideListAction={onHideListPanel}>
  <slot name="select">
    <TextField
      select
      {dense}
      focused={showList}
      {autocomplete}
      value={selectedLabel}
      {...props}
      wrapperClasses={inputWrapperClasses}
      {appendClasses}
      {labelClasses}
      {inputClasses}
      {prependClasses}
      on:click={e => (showList = true)}
      on:click-append={(e => showList = !showList)}
      on:click
      on:input={filterItems}
      append="arrow_drop_down"
      appendReverse={showList}
    />
  </slot>

  {#if showList}
    <slot name="options">
      <div
        class="list dark:bg-dark-500"
        on:click={() => (showList = false)}
        class:rounded-t-none={!outlined}>
        <List
          bind:value
          select
          {dense}
          items={filteredItems}
          on:change={({ detail }) => {
            selectedLabel = getLabel(detail);
            dispatch('change', detail);
          }} />
      </div>
    </slot>
  {/if}
</div>
