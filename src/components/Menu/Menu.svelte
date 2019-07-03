<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import { quadOut, quadIn } from 'svelte/easing';
  import List from 'components/List';
  import TextField from 'components/TextField';

  export let items = [];
  export let open = false;
  export let value = null;

  const dispatch = createEventDispatcher();

  const inProps = { y: 10, duration: 200, easing: quadIn };
  const outProps = { y: -10, duration: 100, easing: quadOut, delay: 200 };

</script>

<svelte:window on:click={() => open = false} />

<div>
  <div
    class="cursor-pointer relative inline-flex"
    on:click|stopPropagation
  >
    <slot name="activator" />
    {#if open}
      <div class="absolute w-full bottom-0">
        <List
          bind:value
          select
          dense
          {items}
          c="list"
          on:change={({ detail }) => {
            dispatch('change', detail);
            open = false;
          }}
        />
      </div>
    {/if}
  </div>
</div>