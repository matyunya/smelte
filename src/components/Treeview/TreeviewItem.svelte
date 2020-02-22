<script>
  import {
    ListItem
  } from "../List";
  import Icon from "../Icon";

  export const text = "";
  export const select = false;
  export let showExpandIcon = true;
  export let expandIcon = "arrow_right";
  export let selectable = true;
  export let selected = null;
  export let item = false;
  export let toggle = () => {};
  export let smelte = {
    icon: {
      class: ""
    },
    itemContent: {
      class: ""
    },
  }
</script>

<ListItem {item} selected={selectable && selected===item} on:click class={$$props.class} on:click={()=>
  toggle(item)}>
  {#if showExpandIcon && !item.hideArrow && item.items}
    <Icon class={smelte.icon.class}>{expandIcon}</Icon>
  {/if}
  <slot {item}><span class={smelte.itemContent.class}>{item.text}</span></slot>
</ListItem>