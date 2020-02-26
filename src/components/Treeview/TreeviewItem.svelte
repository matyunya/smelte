<script>
  import { createEventDispatcher } from "svelte";
  import { ListItem } from "../List";
  import Icon from "../Icon";

  export const text = "";
  export const select = false;
  export let showExpandIcon = true;
  export let expandIcon = "arrow_right";
  export let selectable = true;
  export let selected = null;
  export let item = false;
  export let toggle = () => {};
  export let itemProps = () => {};
  export let smelte = {
    icon: {
      class: ""
    },
    itemContent: {
      class: ""
    }
  };

  $: props = itemProps(item);

  const dispatch = createEventDispatcher();
</script>

<ListItem
  {item}
  selected={selectable && selected === item}
  on:click
  class={$$props.class}
  on:contextmenu
  {...props}
  on:click={() => toggle(item)}>
  {#if showExpandIcon && !item.hideArrow && item.items}
    <Icon on:click={e => dispatch('click-expand', e)} class={smelte.icon.class}>
      {expandIcon}
    </Icon>
  {/if}
  <slot {item}>
    <span class={smelte.itemContent.class}>{item.text}</span>
  </slot>
</ListItem>
