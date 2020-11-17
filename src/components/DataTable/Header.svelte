<script>
  import { ClassBuilder } from "../../utils/classes.js";
  import { createEventDispatcher } from "svelte";
  import Icon from "../Icon";

  const classesDefault = "capitalize duration-100 text-gray-600 text-xs hover:text-black dark-hover:text-white p-3 font-normal text-right";


  export let classes = classesDefault;


  export let column = {};
  export let asc = false;
  export let sortBy = false;
  export let sortable = true;
  export let editing = false;

  const dispatch = createEventDispatcher();

  const cb = new ClassBuilder(classes, classesDefault);
  $: c = cb
    .flush()
    .add(classes, true, classesDefault)
    .add($$props.class)
    .get();

  function headerColumnClass(column) {
    const cb = new ClassBuilder('sort-wrapper flex items-center justify-end');
    if (column.headerReplace) {
      cb.replace(column.headerReplace)
    }
    if (column.headerAdd) {
      cb.add(column.headerAdd);
    }
    if (column.headerRemove) {
      cb.remove(column.headerRemove);
    }
    return cb.get();
  }
</script>

<th
  class={c}
  class:cursor-pointer={sortable || column.sortable}
  on:click={() => {
  if (column.sortable === false || !sortable) return;
    editing = false;
    asc = sortBy === column ? !asc : false;
    sortBy = column;
    dispatch("sort", column);
  }}
>
  <div class={headerColumnClass(column)}>
    {#if sortable && column.sortable !== false && !column.iconAfter}
      {#if sortBy === column}
        <Icon small color="text-gray-400 dark:text-gray-100">{asc ? 'arrow_upward' : 'arrow_downward'}</Icon>
      {:else}
        <Icon small color="text-gray-400 dark:text-gray-100">import_export</Icon>
      {/if}
    {/if}
    <span class={sortBy === column ? 'underline' : ''}>{column.label || column.field}</span>
    {#if sortable && column.sortable !== false && !!column.iconAfter}
      {#if sortBy === column}
        <Icon small class="ml-1" color="text-gray-400 dark:text-gray-100">{asc ? 'arrow_upward' : 'arrow_downward'}</Icon>
      {:else}
        <Icon small class="ml-1" color="text-gray-400 dark:text-gray-100">import_export</Icon>
      {/if}
    {/if}
  </div>
</th>
