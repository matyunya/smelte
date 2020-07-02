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

<style>
  th .asc {
    transform: rotate(180deg);
  }
</style>

<th
  class={c}
  class:cursor-pointer={sortable || column.sortable}
  on:click={() => {
    if (column.sortable === false || !sortable) return;
    dispatch("sort", column);

    editing = false;
    asc = sortBy === column ? !asc : false;
    sortBy = column;
  }}
>
  <div class={headerColumnClass(column)}>
    {#if sortable && column.sortable !== false && !column.iconAfter}
      <span class="sort" class:asc={!asc && sortBy === column}>
        <Icon small color="text-gray-400 dark:text-gray-100">arrow_downward</Icon>
      </span>
    {/if}
    <span>{column.label || column.field}</span>
    {#if sortable && column.sortable !== false && !!column.iconAfter}
      <span class="sort" class:asc={!asc && sortBy === column}>
        <Icon small color="text-gray-400 dark:text-gray-100">arrow_downward</Icon>
      </span>
    {/if}
  </div>
</th>
