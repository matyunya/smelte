<script>
  import { createEventDispatcher } from "svelte";
  import { slide, fade } from "svelte/transition";
  import Card from "../Card/Card.svelte";
  import TextField from "../TextField";
  import Menu from "../Menu";
  import Button from "../Button";
  import { getWeekDays, weekStart } from "./util";

  const dispatch = createEventDispatcher();

  export let label = "Date";
  export let open = false;
  export let defaultIcon = "date_range";
  export let value = new Date();
  export let locale = "default";
  export let paginatorProps = {
    color: "gray",
    text: true,
    flat: true,
    dark: true,
    remove: "px-4 px-3 m-4 p-4",
    iconClasses: (c) => c.replace("p-4", ""),
    disabledClasses: (c) => c
      .replace("text-white", "text-gray-200")
      .replace("bg-gray-300", "bg-transparent")
      .replace("text-gray-700", ""),
  };

  $: value = value || new Date() && dispatch("update", value);

  $: year = value.getFullYear();
  $: month = value.toLocaleString(locale, { month: "short" });
  $: firstDayOfWeek = weekStart(locale);
  $: weekdays = getWeekDays(locale, firstDayOfWeek);

  $: lastDayOfMonth = new Date(value.getFullYear(), value.getMonth() + 1, 0);
  $: firstDayOfMonth = new Date(value.getFullYear(), value.getMonth(), 1);

  $: daysInMonth = [...new Array(lastDayOfMonth.getDate() || 0)];

  $: if (typeof value === "string") {
    value = new Date(value);
  }
  
  $: if (!open && value) {
    dispatch("change", value);
  }

  $: dayOffset = firstDayOfMonth.getDay() - firstDayOfWeek;
</script>

<Menu bind:open>
  <div slot="activator">
    <TextField
      {label}
      class="relative"
      append={defaultIcon}
      on:click-append={() => open = !open}
    />
  </div>
  <div slot="menu" class="absolute z-20 bg-white mt-16">
    {#if open}
      <div in:slide={{duration: 100}} out:fade={{duration: 50}}>
        <Card class="p-4 w-full bg-white">
          <div class="flex justify-between mb-4">
            <span class="text-gray-600 uppercase">{year} {month}</span>
            <div class="flex">
              <Button
                icon="keyboard_arrow_left"
                {...paginatorProps}
                on:click={() => value = new Date(value.setMonth(value.getMonth() - 1))} />
              <Button
                icon="keyboard_arrow_right"
                {...paginatorProps}
                on:click={() => value = new Date(value.setMonth(value.getMonth() + 1))} />
            </div>
          </div>

          <div class="flex uppercase">
            {#each weekdays as weekday}
              <div class="w-1/7 p-1 text-gray-400 text-xs text-center">
                {weekday} 
              </div>
            {/each}
          </div>
          <div class="flex flex-wrap">
            <div class="p-1 w-{dayOffset}/7" />
            {#each daysInMonth as i, j}
              <div class="p-1 w-1/7 text-center">
                {j + 1}
              </div>
            {/each}
          </div>
        </Card>
      </div>
    {/if}
  </div>
</Menu>