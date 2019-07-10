<script>
  import Icon from "../Icon";

  export let data = [];
  export let columns = Object.keys(data[0] || {})
    .map(i => ({ label: (i || '').replace('_', ' '), field: i }));

  export let asc = false;
  let sortBy = null;

  $: sorted = sort(sortBy);

  function sort(col) {
    if (!col) return data;

    if (col.sort) return col.sort(data);

    const sorted = data.sort((a, b) => {
      const valA = col.value ? col.value(a) : a[col.field];
      const valB = col.value ?  col.value(b) : b[col.field];

      const first = asc ? valA : valB;
      const second = asc ? valB : valA;

      if (typeof valA === 'number') {
        return first - second;
      }

      return ('' + first).localeCompare(second);
    });

    return sorted;
  }
</script>

<style>
  table {
    @apply rounded elevation-3 p-2 text-sm;

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

<table class="p-1">
  <thead class="items-center">
    {#each columns as column, i}
      <slot name="header">
        <th
          class="capitalize"
          on:click={() => {
            if (column.sortable === false) return;
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
  <tbody>
  {#each sorted as item}
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
  <tfoot>
    <slot name="footer" />
  </tfoot>
</table>