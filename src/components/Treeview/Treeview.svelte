<script>
  import List, { ListItem } from "../List";
  import Icon from "../Icon";
  import { slide } from "svelte/transition";

  export let items = [];
  export let value = "";
  export let text = "";
  export let dense = false;
  export let navigation = false;
  export let select = false;
  export let level = 0;
  export let showArrow = true;
  export let selectable = true;
  export let listClasses = "rounded";
  export let selectedClasses = "bg-primary-trans";
  let className = "";
  export {className as class};

  let expanded = [];

  function toggle(i) {
    return i && !expanded.includes(i)
      ? expanded.push(i)
      : expanded = expanded.filter(si => si !== i);   
  }
</script>


<List items={items} {...$$props} {listClasses}>
  <span slot="item" let:item>
    <ListItem
      {item}
      {...$$props}
      {...item}
      selected={selectable && expanded.includes(item)}
      {selectedClasses}
      on:click={() => toggle(item) }
      on:click
      itemClasses="flex items-center pl-{level * 3} items-center">
      {#if showArrow && !item.hideArrow && item.items}
        <Icon tip={expanded.includes(item)}>arrow_right</Icon>
      {/if}
      <slot><span>{item.text}</span></slot>
    </ListItem>

    {#if item.items && expanded.includes(item)}
      <div transition:slide>
        <svelte:self {...$$props} items={item.items} level={level + 1} />
      </div>
    {/if}
  </span> 
</List>