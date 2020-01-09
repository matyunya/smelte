<script>
  import { createEventDispatcher } from "svelte";
  import { slide, fade, fly } from "svelte/transition";
  import Card from "../Card/Card.svelte";
  import TextField from "../TextField";
  import Picker from "./Picker.svelte";
  import Menu from "../Menu";
  import Button from "../Button";
  import Ripple from "../Ripple";
  import { getWeekDays, weekStart } from "./util";

  const dispatch = createEventDispatcher();

  export let label = "Date";
  export let open = false;
  export let defaultIcon = "date_range";
  export let value = new Date();
  export let locale = "default";
  export let todayClasses = "text-primary-600 rounded-full border border-primary-600";
  export let selectedClasses = "bg-primary-600 text-white rounded-full";
  export let closeOnSelect = false;

  const today = (new Date()).getDate();

  let selected;
  let displayValue = '';

  function valid(date) {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
  }

  function change(e) {
    const date = new Date(e.target.value);

    if (valid(date)) {
      value = date;
    }
  }
</script>

<Menu bind:open>
  <div slot="activator">
    <TextField
      value={displayValue}
      {label}
      class="relative"
      append={defaultIcon}
      on:click-append={() => open = !open}
      on:change={change}
    />
  </div>
  <div slot="menu" class="absolute z-20 bg-white mt-16">
    {#if open}
      <Picker
        bind:value
        bind:open
        {locale}
        {todayClasses}
        {selectedClasses}
        {closeOnSelect}
        on:change
        on:change={e => displayValue = e.detail.toLocaleDateString()}
      />
    {/if}
  </div>
</Menu>