<script>
  import { fly } from 'svelte/transition';
  import { quadOut, quadIn } from 'svelte/easing';
  import List from 'components/List/List.svelte';
  import TextField from 'components/TextField.svelte';

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

  let showList = false;

  const props = {
    outlined,
    label,
    placeholder,
    hint,
    error,
    append,
    persistentHint,
  };
</script>

<svelte:window on:click={() => showList = false} />

<div class="cursor-pointer relative pb-4">
  <TextField
    select
    bind:value {...props}
    on:click={(e) => {
      e.stopPropagation();
      showList = true;
    }}
    append={showList ? 'arrow_drop_up' : 'arrow_drop_down'} />

  {#if showList}
    <div
      class="absolute top-1 left-0 bg-white rounded elevation-3 w-full z-10"
      on:click={() => showList = false}
      in:fly="{{ y: 10, duration: 200, easing: quadIn }}"
      out:fly="{{ y: -10, duration: 100, easing: quadOut, delay: 200 }}"
    >
      <List bind:value items={items} />
    </div>
  {/if}
</div>


