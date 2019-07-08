<script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";
  const { preloading, page } = stores();

  import { fade } from "svelte/transition";

  import AppBar from "components/AppBar";
  import Tabs from "components/Tabs";
  import Button from "components/Button";
  import { Spacer } from "components/Util";
  import List from "components/List";
  import ListItem from "components/List/ListItem.svelte";
  import NavigationDrawer from "components/NavigationDrawer";
  import ProgressLinear from "components/ProgressLinear";

  import {
    right,
    elevation,
    persistent,
    showNav,
    showNavMobile,
    breakpoint
  } from "stores.js";

  let innerWidth = 0;
  let selected = "";

  function calcBreakpoint(width) {
    if (width > 1279) {
      return "xl";
    }
    if (width > 1023) {
      return "lg";
    }
    if (width > 767) {
      return "md";
    }
    return "sm";
  }

  onMount(() => {
    if (!process.browser) return;

    breakpoint.update(() => calcBreakpoint(window.innerWidth));
  });

  function updateBreakpoint({ target }) {
    const bp = calcBreakpoint(target.innerWidth);

    return breakpoint.update(() => bp);
  }

  const menu = [
    { to: "/components/text-fields", text: "Text fields" },
    { to: "/components/buttons", text: "Buttons" },
    { to: "/components/selection-controls", text: "Selection controls" },
    { to: "/components/lists", text: "Lists" },
    { to: "/components/selects", text: "Selects" },
    { to: "/components/snackbars", text: "Snackbars" },
    { to: "/components/dialogs", text: "Dialogs" },
    { to: "/components/navigation-drawers", text: "Navigation drawers" },
    { to: "/components/progress-indicators", text: "Progress indicators" },
    { to: "/components/chips", text: "Chips" },
    { to: "/components/tabs", text: "Tabs" },
    { to: "/components/cards", text: "Cards" },
    { to: "/components/menus", text: "Menus" },
    { to: "/components/images", text: "Images" },
    { to: "/components/sliders", text: "Sliders" },
    { to: "/components/data-tables", text: "Data tables" },

    { to: "/typography", text: "Typography" },
    { to: "/color", text: "Color" }
  ];

  const topMenu = [
    { to: "/components", text: "Components" },
    { to: "/typography", text: "Typography" },
    { to: "/color", text: "Color" }
  ];

  function toggleNav() {
    return showNavMobile.update(() => !$showNavMobile);
  }

  $: path = $page.path;
</script>

<svelte:head>
  <title>Smelte: Material design using Tailwind CSS for Svelte</title>
</svelte:head>

<svelte:window on:resize={updateBreakpoint} />

{#if $preloading}
  <ProgressLinear app />
{/if}

{#each menu as link}
  <a href={link.to} class="hidden">{link.text}</a>
{/each}

<AppBar>
  <a href="." class="px-2 md:px-8 flex items-center">
    <img src="/logo.png" alt="Smelte logo" width="44" />
    <h6 class="pl-3 text-white tracking-widest font-thin text-lg">SMELTE</h6>
  </a>
  <Spacer />
  <Tabs c="sm:hidden md:flex" items={topMenu} bind:selected={path} />
  <div class="md:hidden">
    <Button icon="menu" small text on:click={toggleNav} />
  </div>
  <a href="https://github.com/matyunya/smelte" class="px-4">
    <img src="/github.png" alt="Github Smelte" width="24" height="24" />
  </a>
</AppBar>

{#if $breakpoint}
  <main
    class="container relative p-8 lg:max-w-3xl lg:ml-64 mx-auto mb-10 mt-24
    md:ml-56 md:max-w-md md:px-3"
    transition:fade={{ duration: 300 }}>
    <NavigationDrawer
      bind:showDesktop={$showNav}
      bind:showMobile={$showNavMobile}
      right={$right}
      persistent={$persistent}
      elevation={$elevation}
      breakpoint={$breakpoint}>
      <h6 class="p-6 ml-1 pb-2 text-xs text-gray-900">Components</h6>
      <List items={menu}>
        <span slot="item" let:item class="cursor-pointer">
          {#if item.to === '/typography'}
            <hr />
            <h6 class="p-6 ml-1 py-2 text-xs text-gray-900">Utilities</h6>
          {/if}

          <a href={item.to}>
            <ListItem
              selected={path.includes(item.to)}
              {...item}
              dense
              navigation />
          </a>
        </span>
      </List>
      <hr />
    </NavigationDrawer>

    <slot />

  </main>
{/if}
