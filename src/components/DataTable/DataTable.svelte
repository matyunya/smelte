<script>
  export let data = [];
  export let columns = Object.keys(data[0] || {})
    .map(i => ({ label: (i || '').replace('_', ' '), field: i }));
</script>

<style>
  table {
    @apply rounded elevation-3 p-1;

    & th, & td {
      @apply px-6 py-4 font-normal text-sm text-right;
    }

    & th:first-child, & td:first-child {
      @apply text-left border-r;
    }

    & th {
      @apply text-gray-600 text-xs;
      letter-spacing: 0.0892857143em;
    }

    & tr {
      @apply border-gray-200 border-t border-b px-4;
      &:hover {
        @apply bg-gray-50;
      }
    }
  }
</style>

<table>
  <thead>
    {#each columns as column, i}
      <slot name="header">
        <th
          class="capitalize"
        >{column.label}</th>
      </slot>
    {/each}
  </thead>
  <tbody>
  {#each data as item}
    <slot name="item">
      <tr>
        {#each columns as column, i}
          <td>
            {item[column.field]}  
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