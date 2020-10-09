<script>
  import AppBar from "components/AppBar";
  import Tabs from "components/Tabs";
  import Button from "components/Button";
  import { Spacer } from "components/Util";
  import List, { ListItem } from "components/List";
  import NavigationDrawer from "components/NavigationDrawer";
  import ProgressLinear from "components/ProgressLinear";
  import Tooltip from "components/Tooltip";
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { navMenu, topMenu } from "../utils/menu.js";
  import { right, elevation, persistent, showNav } from "stores.js";
  import dark from "../dark.js";

  const { preloading, page } = stores();

  let selected = "";

  const darkMode = dark();

  $: path = $page.path;
</script>

<style>
  .github {
    transition: 0.3s ease-out;
  }
  .github:hover {
    transform: rotate(360deg);
  }
</style>

<svelte:head>
  <title>Smelte: Material design using Tailwind CSS for Svelte</title>
  <meta
    name="description"
    content="Smelte: UI framework with very small footprint" />
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

{#each navMenu as link}
  <a href={link.to} class="hidden">{link.text}</a>
{/each}

<AppBar class={i => i.replace('primary-300', 'dark-600')}>
  <a href="." class="px-2 md:px-8 flex items-center">
    <img src="/logo.svg" alt="Smelte logo" width="44" />
    <h6 class="pl-3 text-white tracking-widest font-thin text-lg">SMELTE</h6>
  </a>
  <Spacer />
  <Tabs navigation items={topMenu} bind:selected={path} />

  <Tooltip>
    <span slot="activator">
      <Button
        bind:value={$darkMode}
        icon="wb_sunny"
        small
        flat
        remove="p-1 h-4 w-4"
        iconClass="text-white"
        text />
    </span>
    {$darkMode ? 'Disable' : 'Enable'} dark mode
  </Tooltip>
  <div class="md:hidden">
    <Button
      icon="menu"
      small
      flat
      remove="p-1 h-4 w-4"
      iconClass="text-white"
      text
      on:click={() => showNav.set(!$showNav)} />
  </div>
  <a href="https://github.com/matyunya/smelte" class="px-4 github">
    <img src="/github.png" alt="Github Smelte" width="24" height="24" />
  </a>
</AppBar>

<main
  class="relative p-8 lg:max-w-3xl mx-auto mb-10 mt-24 md:ml-64 md:pl-16
  md:max-w-md md:px-3"
  transition:fade={{ duration: 300 }}>
  <NavigationDrawer
    bind:show={$showNav}
    right={$right}
    persistent={$persistent}
    elevation={$elevation}>
    <h6
      class="px-3 ml-1 pb-2 pt-8 text-sm text-gray-900 font-light
      dark:text-gray-100">
      Components
    </h6>
    <List items={navMenu}>
      <span slot="item" let:item class="cursor-pointer">
        {#if item.to === '/typography'}
          <hr class="mt-4" />
          <h6
            class="px-3 ml-1 pb-2 pt-8 text-sm text-gray-900 font-light
            dark:text-gray-100">
            Utilities
          </h6>
        {/if}

        <a href={item.to}>
          <ListItem
            id={item.id}
            text={item.text}
            to={item.to}
            selected={path.includes(item.to)}
            dense
            selectedClasses="bg-primary-transDark dark:bg-primary-transLight
            hover:bg-primary-transDark dark-hover:bg-primary-transLight" />
        </a>
      </span>
    </List>
    <hr />
  </NavigationDrawer>

  <slot />
</main>
