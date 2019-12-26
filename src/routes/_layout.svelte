<script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import { AppBar } from "smelte";
  import { Tabs } from "smelte";
  import { Button } from "smelte";
  import { Spacer } from "smelte";
  import { List } from "smelte";
  import { ListItem } from "smelte";
  import { NavigationDrawer } from "smelte";
  import { ProgressLinear } from "smelte";
  import { navMenu, topMenu } from "../utils/menu.js";

  import {
    right,
    elevation,
    persistent,
    showNav,
    showNavMobile,
    breakpoint
  } from "stores.js";

  const { preloading, page } = stores();

  let selected = "";
  const bp = breakpoint();
  $: path = $page.path;
</script>

{#each navMenu as link}
  <a href={link.to} class="hidden">{link.text}</a>
{/each}

<svelte:head>
  <title>Smelte: Material design using Tailwind CSS for Svelte</title>
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<AppBar>
  <a href="." class="px-2 md:px-8 flex items-center">
    <img src="/logo.png" alt="Smelte logo" width="44" />
    <h6 class="pl-3 text-white tracking-widest font-thin text-lg">SMELTE</h6>
  </a>
  <Spacer />
  <Tabs navigation items={topMenu} bind:selected={path} />
  <div class="md:hidden">
    <Button
      icon="menu"
      small
      flat
      remove="p-1 h-4 w-4"
      iconClass="text-white"
      iconClasses={i => i.replace('p-4', 'p-3').replace('m-4', 'm-3')}
      text
      on:click={() => showNavMobile.set(!$showNavMobile)} />
  </div>
  <a href="https://github.com/matyunya/smelte" class="px-4">
    <img src="/github.png" alt="Github Smelte" width="24" height="24" />
  </a>
</AppBar>

{#if $bp}
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
      breakpoint={$bp}>
      <h6 class="px-3 ml-1 pb-2 pt-4 text-xs text-gray-900">Components</h6>
      <List items={navMenu}>
        <span slot="item" let:item class="cursor-pointer">
          {#if item.to === '/examples/search-bar'}
            <hr class="mt-4" />
            <h6 class="px-3 ml-1 pb-2 pt-4 text-xs text-gray-900">Examples</h6>
          {/if}
          {#if item.to === '/typography'}
            <hr class="mt-4" />
            <h6 class="px-3 ml-1 pb-2 pt-4 text-xs text-gray-900">Utilities</h6>
          {/if}

          <a href={item.to}>
            <ListItem
              id={item.id}
              text={item.text}
              to={item.to}
              selected={path.includes(item.to)}
              selectedClasses="bg-primary-transLight hover:bg-primary-transLight"
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
