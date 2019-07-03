<script>
	import Checkbox from 'components/Checkbox';
  import Code from 'components/Code';

  import { right, elevation, persistent, showNav } from 'stores.js';
</script>

<Checkbox bind:value={$showNav} label="Show drawer" on:change={persistent.update} />
<Checkbox bind:value={$elevation} label="With elevation" on:change={elevation.update} />
<Checkbox bind:value={$right} label="Placed on the right" on:change={right.update} />
<Checkbox bind:value={$persistent} label="Persistent" on:change={persistent.update} />

<Code code={`<script>
  // This is top src/routes/_layout.svelte.

  import NavigationDrawer from 'components/NavigationDrawer';
  import { right, elevation, persistent, showNav, showNavMobile, breakpoint } from 'stores.js';
  import List from 'components/List';
	import ListItem from 'components/List/ListItem.svelte';
  const menu = [
      { to: "/components/text-fields", text: 'Text fields' },
      { to: "/components/buttons", text: 'Buttons' },
      { to: "/components/selection-controls", text: 'Selection controls' },
      { to: "/components/lists", text: 'Lists' },
      ...
    ];
</script>

<NavigationDrawer
  bind:showDesktop={$showNav}
  bind:showMobile={$showNavMobile}
  right={$right}
  persistent={$persistent}
  elevation={$elevation}
  breakpoint={$breakpoint}
>
  <h6
    class="p-6 ml-1 pb-2 text-xs text-gray-900"
  >Components</h6>
  <List items={menu}>
    <span slot="item" let:item={item} class="cursor-pointer">
      {#if item.to === '/typography'}
        <hr>
        <h6 class="p-6 ml-1 py-2 text-xs text-gray-900">Utilities</h6>
      {/if}

      <a href={item.to}>
        <ListItem
          selected={path.includes(item.to)}
          {...item}
          dense
          navigation
        />
      </a>
    </span>
  </List>
  <hr>
</NavigationDrawer>`} />