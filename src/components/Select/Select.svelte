<script>
  import {
    createEventDispatcher,
    onMount
  } from "svelte";
  import {
    quadOut,
    quadIn
  } from "svelte/easing";
  import List from "../List/List.svelte";
  import TextField from "../TextField";
  import {
    hideListAction
  } from '../../utils/hide-list-action';

  import {
    writable
  } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  const noop = i => i;

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
  export let showList = false;

  export let inputWrapperClasses = noop;
  export let listClasses = noop;
  export let selectedClasses = noop;
  export let add = "";
  export let remove = "";
  export let replace = "";

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
    return it.map(i => typeof i !== "object" ?
      ({
        value: i,
        text: i
      }) :
      i);
  }

  $: itemsProcessed = process(items);

  onMount(() => {
    selectedLabel = getLabel(value);
  })

  const dispatch = createEventDispatcher();

  function getLabel(value) {
    return value !== undefined ? (itemsProcessed.find(i => i.value === value) || {
      text: ""
    }).text : "";
  }

  function filterItems({
    target
  }) {
    filteredItems = itemsProcessed.filter(i =>
      i.text.toLowerCase().includes(target.value.toLowerCase())
    );
  }

  function handleInputClick() {
    if (autocomplete) {
      showList = true;
    } else {
      showList = !showList;
    }
  }

  const onHideListPanel = () => showList = false;

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

<div class={smelte.root.class} use:hideListAction={onHideListPanel}>
  <slot name="select">
    <TextField
      select
      {dense}
      focused={showList}
      {autocomplete}
      value={selectedLabel}
      {...props}
      class={inputWrapperClasses}
      on:click={handleInputClick}
      on:click-append={(e=> showList = !showList)}
      on:click
      on:input={filterItems}
      append="arrow_drop_down"
      appendReverse={showList}
      />
  </slot>

  {#if showList}
    <slot name="options">
      <div
        class={smelte.options.class}
        on:click={() => (showList = false)}
      >
        <List
          bind:value
          class={listClasses}
          {selectedClasses}
          select
          {dense}
          items={filteredItems}
          on:change={({ detail }) => {
            selectedLabel = getLabel(detail);
            dispatch('change', detail);
          }}
        />
      </div>
    </slot>
  {/if}
</div>
