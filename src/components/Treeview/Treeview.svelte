<script>
  import List, { ListItem } from "../List";
  import Icon from "../Icon";

  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";

  export let items = [];
  export let value = "";
  export let text = "";
  export let dense = false;
  export let navigation = false;
  export let select = false;
  export let level = 0;
  export let showExpandIcon = true;
  export let expandIcon = "arrow_right";
  export let selectable = true;
  export let selected = null;
  export let listClasses = "rounded";
  export let selectedClasses = "bg-primary-trans";

  let className = "";
  export {className as class};

  let expanded = [];

  const dispatch = createEventDispatcher();

  function toggle(i) {
    if (selectable && !i.items) {
      dispatch("select", i);
      selected = i;
    }

    expanded = i && !expanded.includes(i)
      ? [...expanded, i]
      : expanded.filter(si => si !== i);
  }
</script>


<List
  items={items}
  {...$$props}
  listClasses="{listClasses} my-3"
>
  <span slot="item" let:item>
    <ListItem
      {item}
      {...$$props}
      {...item}
      selected={selectable && selected === item}
      {selectedClasses}
      on:click={() => toggle(item) }
      on:click
      itemClasses="flex items-center">
      {#if showExpandIcon && !item.hideArrow && item.items}
        <Icon tip={expanded.includes(item)}>{expandIcon}</Icon>
      {/if}
      <slot><span>{item.text}</span></slot>
    </ListItem>

    {#if item.items && expanded.includes(item)}
      <div transition:slide class="ml-6">
        <svelte:self {...$$props} items={item.items} level={level + 1} />
      </div>
    {/if}
  </span> 
</List>