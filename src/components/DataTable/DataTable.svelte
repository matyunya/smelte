<script>
  export let data = [];
  export let columns = Object.keys(data[0] || {})
    .map(i => ({ label: (i || '').replace('_', ' '), field: i }));
</script>

<style>
  table {
    @apply rounded elevation-3 p-1;

    & th, & td {
      @apply px-3 py-4 font-normal text-right;
    }

    & td {
      @apply text-sm;
    }

    & th:first-child, & td:first-child {
      @apply text-left border-r;
    }

    & th {
      @apply text-gray-600 text-xs;
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
  <thead>
    {#each columns as column, i}
      <slot name="header">
        <th
          class="capitalize"
        >{column.label || column.field}</th>
      </slot>
    {/each}
  </thead>
  <tbody>
  {#each data as item}
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