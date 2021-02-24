<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import { ClassBuilder } from "../../utils/classes.js";
  import Icon from "../Icon";
  import Button from "../Button";
  import TextField from "../TextField";
  import ProgressLinear from "../ProgressLinear";

  import Header from "./Header.svelte";
  import Row from "./Row.svelte";
  import Pagination from "./Pagination.svelte";

  import defaultSort from "./sort.js";

  const classesDefault = "shadow relative text-sm overflow-x-auto dark:bg-dark-500";




  export let data = [];
  export let columns = Object.keys(data[0] || {})
    .map(i => ({ label: (i || "").replace("_", " "), field: i }));

  export let page = 1;
  export let sort = defaultSort;
  export let perPage = 10;
  export let perPageOptions = [10, 20, 50];
  export let asc = false;
  export let loading = false;
  export let hideProgress = false;
  export let editable = true;
  export let sortable = true;
  export let pagination = true;
  export let scrollToTop = false;
  export let headerClasses = i => i;
  export let headerRemove = '';
  export let paginationClasses = i => i;
  export let editableClasses = i => i;
  export let paginatorProps = null;
  export let classes = classesDefault;
  export let customSort = false;
  export let sortBy = null;
  export let iconUp = 'arrow_upward';
  export let iconDown = 'arrow_downward';
  export let iconSortable = 'import_export';

  let table = "";

  $: {
    perPage = pagination ? perPage : data.length;
  }
  $: offset = (page * perPage) - perPage;
  $: sorted = (customSort) ? data : sort(data, sortBy, asc).slice(offset, perPage + offset);
  $: pagesCount = Math.ceil(data.length / perPage);

  const dispatch = createEventDispatcher();

  let editing = false;

  const cb = new ClassBuilder(classes, classesDefault);
    $: c = cb
      .flush()
      .add(classes, true, classesDefault)
      .add($$props.class)
      .get();
</script>

<table class={c} bind:this={table}>
  <thead class="items-center">
    {#each columns as column, i}
      <slot name="header" {column}>
        <Header
          class={headerClasses}
          {column}
          bind:asc
          bind:sortBy
          remove={headerRemove}
          {sortable}
          {editing}
          {iconUp}
          {iconDown}
          {iconSortable}
          on:sort={sort}
        />
      </slot>
    {/each}
  </thead>
  {#if loading && !hideProgress}
    <div class="absolute w-full" transition:slide>
      <ProgressLinear />
    </div>
  {/if}
  <tbody>
    {#each sorted as item, index}
      <slot name="item" {item} {index}>
        <Row
          bind:editing
          {index}
          {item}
          {columns}
          {editable}
          {editableClasses}
          on:update
        />
      </slot>
    {/each}
  </tbody>
  {#if pagination}
    <slot name="pagination">
      <Pagination
        bind:page
        bind:perPage
        class={paginationClasses}
        {perPageOptions}
        {scrollToTop}
        {paginatorProps}
        {offset}
        {pagesCount}
        {table}
        total={data.length}
      />
    </slot>
  {/if}

  <slot name="footer" />
</table>
