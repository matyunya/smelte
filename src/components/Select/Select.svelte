<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import { quadOut, quadIn } from 'svelte/easing';
  import List from 'components/List/List.svelte';
  import TextField from 'components/TextField';

  export let items = [];
  export let value = '';
  export let text = '';
  export let label = '';
  export let outlined = false;
  export let placeholder = '';
  export let hint = '';
  export let error = false;
  export let append = '';
  export let persistentHint = false;
  export let autocomplete = false;

  let showList = false;
  let filteredItems = items;

  const props = {
    outlined,
    label,
    placeholder,
    hint,
    error,
    append,
    persistentHint,
  };

  const inProps = { y: 10, duration: 200, easing: quadIn };
  const outProps = { y: -10, duration: 100, easing: quadOut, delay: 200 };
  const dispatch = createEventDispatcher();

  function getLabel(value) {
    return value
      ? (items.find(i => i.value === value) || {}).text
      : '';
  }

  $: selectedLabel = getLabel(value);

  function filterItems({ target }) {
    filteredItems = items
      .filter(i => i.text
        .toLowerCase()
        .includes(target.value.toLowerCase()));
  }

</script>

<svelte:window on:click={() => showList = false} />

<div class="cursor-pointer relative pb-4">
  <TextField
    select
    {autocomplete}
    value={selectedLabel}
    {...props}
    on:click={(e) => {
      e.stopPropagation();
      showList = true;
    }}
    on:input={filterItems}
    append={showList ? 'arrow_drop_up' : 'arrow_drop_down'} />

  {#if showList}
    <div
      class="absolute top-1 left-0 bg-white rounded elevation-3 w-full z-10"
      on:click={() => showList = false}
      in:fly={inProps}
      out:fly={outProps}
      class:rounded-t-none={!outlined}
      style="margin-top: 2px"
    >
      <List
        bind:value
        select
        items={filteredItems}
        on:change={({ detail }) => {
          dispatch('change', detail);
        }}
      />
    </div>
  {/if}
</div>


