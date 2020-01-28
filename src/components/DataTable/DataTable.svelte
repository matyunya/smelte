<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import Icon from "../Icon";
  import Button from "../Button";
  import Select from "../Select";
  import TextField from "../TextField";
  import { Spacer } from "../Util";
  import ProgressLinear from "../ProgressLinear";
  import defaultSort from "./sort.js";

  let className = "";
  export {className as class};

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
  export let wrapperClasses = "elevation-3 relative text-sm overflow-x-auto dark:bg-dark-500";
  export let editable = true;
  export let sortable = true;
  export let pagination = true;
  export let scrollToTop = false;
  export let paginatorProps = {
    color: "gray",
    text: true,
    flat: true,
    dark: true,
    remove: "px-4 px-3",
    iconClasses: (c) => c.replace("p-4", ""),
    disabledClasses: (c) => c
      .replace("text-white", "text-gray-200")
      .replace("bg-gray-300", "bg-transparent")
      .replace("text-gray-700", ""),
  };

  let table = "";
  let sortBy = null;

  $: {
    perPage = pagination ? perPage : data.length;
    page = 1;
  }
  $: offset = (page * perPage) - perPage;
  $: sorted = sort(data, sortBy, asc).slice(offset, perPage + offset);
  $: pagesCount = Math.ceil(data.length / perPage);

  const dispatch = createEventDispatcher();

  let editing = false;
</script>

<style>
  th .asc {
    transform: rotate(180deg);
  }
</style>

<table class="{wrapperClasses} {className}" bind:this={table}>
  <thead class="items-center">
    {#each columns as column, i}
      <slot name="header">
        <th
          class="capitalize transition-fast text-gray-600 text-xs hover:text-black dark-hover:text-white p-3 font-normal text-right"
          class:cursor-pointer={sortable || column.sortable}
          on:click={() => {
            if (column.sortable === false || !sortable) return;
            dispatch("sort", column);

            editing = false;
            asc = sortBy === column ? !asc : false;
            sortBy = column;
          }}
        >
          <div class="sort-wrapper flex items-center justify-end">
            {#if sortable && column.sortable !== false}
              <span class="sort" class:asc={!asc && sortBy === column}>
                <Icon small color="text-gray-400 dark:text-gray-100">arrow_downward</Icon>
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
        <tr
          class="hover:bg-gray-50 dark-hover:bg-dark-400 border-gray-200 dark:border-gray-400 border-t border-b px-3"
          on:click={(e) => {
          if (!editable) return;
            editing = { [j]: (e.path.find(a => a.localName === "td") || {}).cellIndex }
          }}
          class:selected={editing[j]}
        > 
          {#each columns as column, i}
            <td
              class="relative p-3 font-normal text-right {column.class || ''}"
              class:cursor-pointer={editable && column.editable !== false}
            >
              {#if editable && column.editable !== false && editing[j] === i}
                <slot name="edit-dialog">
                  <div class="absolute left-0 top-0 z-10 bg-white dark:bg-dark-400 p-2 elevation-3 rounded" style="width: 300px">
                    <TextField
                      value={item[column.field]}
                      textarea={column.textarea}
                      on:change
                      remove="bg-gray-100 bg-gray-300"
                      on:blur={({ target }) => {
                        editing = false;
                        dispatch("update", {
                          item,
                          column,
                          value: target.value
                        });
                      }}
                    />
                  </div>
                </slot>
              {/if}
              {#if column.value}
                {@html column.value(item)}
              {:else}
                {@html item[column.field]}
              {/if}
            </td>
          {/each}
        </tr>
      </slot>
    {/each}
  </tbody>
  {#if pagination}
    <slot name="pagination">
      <tfoot>
        <tr>
          <td colspan="100%" class="border-none">
            <div class="flex justify-between items-center text-gray-700 text-sm w-full h-8">
              <Spacer />
              <div class="mr-1 py-1">
              Rows per page:
              </div>
              <Select
                class="w-16 h-8 mb-5"
                remove="select"
                replace={{ "pt-6": "pt-4" }}
                inputWrapperClasses={(c) => c.replace("mt-2", "").replace("pb-6", "")}
                appendClasses={(c) => c.replace("pt-4", "pt-3").replace("pr-4", "pr-2")}
                noUnderline
                dense
                bind:value={perPage}
                items={perPageOptions}
              />
              <Spacer />
              <div>{offset}-{offset + perPage > data.length ? data.length : offset + perPage} of {data.length}</div>
              <Button
                disabled={(page - 1) < 1}
                icon="keyboard_arrow_left"
                {...paginatorProps}
                on:click={() => {
                  page -= 1;
                  if (scrollToTop) table.scrollIntoView({ behavior: "smooth" });
                }} />
              <Button
                disabled={page === pagesCount}
                icon="keyboard_arrow_right"
                {...paginatorProps}
                on:click={() => {
                  page += 1;
                  if (scrollToTop) table.scrollIntoView({ behavior: "smooth" });
                }} />
              </div>
            </td>
          </tr>
        </tfoot>
    </slot>
  {/if}

  <slot name="footer" />
</table>