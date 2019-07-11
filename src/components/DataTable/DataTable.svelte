<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import Icon from "../Icon";
  import Button from "../Button";
  import Select from "../Select";
  import { Spacer } from "../Util";
  import ProgressLinear from "../ProgressLinear";

  import defaultSort from "./sort.js";

  export let data = [];
  export let columns = Object.keys(data[0] || {})
    .map(i => ({ label: (i || '').replace('_', ' '), field: i }));
  export let page = 1;
  export let sort = defaultSort;
  export let perPage = 10;
  export let perPageOptions = [10, 20, 50];
  export let asc = false;
  export let loading = false;
  export let hideProgress = false;
  export let wrapperClasses = "rounded elevation-3";
  export let paginatorProps = {
    color: "gray",
    text: true,
    flat: true,
    dark: true,
    remove: 'px-4 px-3',
    iconClasses: (c) => c.replace('p-4', ''),
    disabledClasses: (c) => c
      .replace('text-gray-500', 'text-gray-200')
      .replace('bg-gray-300', 'bg-transparent')
      .replace('text-gray-700', ''),
    add: 'ripple-gray',
  };

  let table = "";
  let sortBy = null;

  $: {
    perPage = perPage;
    page = 1;
  }
  $: offset = (page * perPage) - perPage;
  $: sorted = sort(data, sortBy, asc).slice(offset, perPage + offset);
  $: pagesCount = Math.ceil(data.length / perPage);

  const dispatch = createEventDispatcher();
</script>

<style>
  table {
    @apply text-sm;

    & th, & td {
      @apply p-3 font-normal text-right;
    }

    & th:first-child, & td:first-child {
      @apply text-left border-r;
    }

    & th {
      @apply text-gray-600 text-xs cursor-pointer;

      & .asc {
        transform: rotate(180deg);
      }

      & .sort-wrapper {
        @apply flex items-center justify-end;
      }

      &:first-child .sort-wrapper {
        @apply justify-start;
      }

      & .sort {
        @apply w-4 h-4 opacity-0 transition-fast;
      }

      &:hover {
        @apply text-black transition-fast;
        & .sort {
          @apply opacity-100;
        }
      }
    }

    & tr {
      @apply border-gray-200 border-t border-b px-3;
      &:hover {
        @apply bg-gray-50;
      }
    }
  }
</style>

<div class={wrapperClasses}>
  <table class="p-3" bind:this={table}>
    <thead class="items-center">
      {#each columns as column, i}
        <slot name="header">
          <th
            class="capitalize"
            on:click={() => {
              if (column.sortable === false) return;
              dispatch("sort", column);

              asc = sortBy === column ? !asc : false;
              sortBy = column;
            }}
          >
            <div class="sort-wrapper">
              {#if column.sortable !== false}
                <span class="sort" class:asc={!asc && sortBy === column}>
                  <Icon small color="text-gray-400">arrow_downward</Icon>
                </span>
              {/if}
              <span>{column.label || column.field}</span>
            </div>
          </th>
        </slot>
      {/each}
    </thead>
    {#if loading && !hideProgress}
      <div class="absolute w-full" transition:slide>
        <ProgressLinear />
      </div>
    {/if}
    <tbody>
      {#each sorted as item, j}
        <slot name="item">
          <tr>
            {#each columns as column, i}
              <td class={column.class || ''}>
                {#if column.value}
                  {@html column.value(item)}
                {:else}
                  {item[column.field]}
                {/if}
              </td>
            {/each}
          </tr>
        </slot>
      {/each}
    </tbody>
  </table>

  <slot name="pagination">
    <div
      id="pagination"
      class="flex justify-between items-center text-gray-700 text-sm">
      <Spacer />
      <div class="mr-1 py-1">
      Rows per page:
      </div>
      <Select
        c="w-16"
        remove="bg-gray-300 bg-gray-100"
        replace={{ 'pt-6': 'pt-4' }}
        wrapperBaseClasses={(c) => c.replace('select', 'h-8').replace('mt-2', '')}
        appendBaseClasses={(c) => c.replace('pt-4', 'pt-3').replace('pr-4', 'pr-2')}
        noUnderline
        bind:value={perPage} items={perPageOptions} />
      <Spacer />
      <div>{offset}-{offset + perPage > data.length ? data.length : offset + perPage} of {data.length}</div>
      <Button
        disabled={(page - 1) < 1}
        icon="keyboard_arrow_left"
        {...paginatorProps}
        on:click={() => {
          page -= 1;
          table.scrollIntoView({ behaviour: 'smooth' });
        }} />
      <Button
        disabled={page === pagesCount}
        icon="keyboard_arrow_right"
        {...paginatorProps}
        on:click={() => {
          page += 1;
          table.scrollIntoView({ behaviour: 'smooth' });
        }} />
    </div>
  </slot>

  <slot name="footer" />
</div>