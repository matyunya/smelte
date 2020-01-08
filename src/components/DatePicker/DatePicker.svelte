<script>
  import { createEventDispatcher } from "svelte";
  import { slide, fade } from "svelte/transition";
  import Card from "../Card/Card.svelte";
  import TextField from "../TextField";
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
  export let yearPicker = false;
  export let todayClasses = "text-black-600 rounded-full border border-black";
  export let selectedClasses = "bg-primary-600 text-white rounded-full";
  export let closeOnSelect = false;
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

  let selected;
  const today = (new Date()).getDate();

  let displayValue = ''; // value.toLocaleDateString();

  $: year = value.getFullYear();
  $: month = value.toLocaleString(locale, { month: "short" });
  $: firstDayOfWeek = weekStart(locale);
  $: weekdays = getWeekDays(locale, firstDayOfWeek);

  $: lastDayOfMonth = new Date(value.getFullYear(), value.getMonth() + 1, 0);
  $: firstDayOfMonth = new Date(value.getFullYear(), value.getMonth(), 1);
  $: isCurrentMonth = (new Date()).getMonth() === value.getMonth();

  $: daysInMonth = [...new Array(lastDayOfMonth.getDate() || 0)]
    .map((i, j) => ({
      day: j + 1,
      isToday: isCurrentMonth && j + 1 === today,
      selected: selected === j + 1,
    }));

  $: if (typeof value === "string") {
    value = new Date(value);
  }
  
  $: if (selected) {
    value = new Date(value.getFullYear(), value.getMonth(), selected);
    dispatch("change", value);
    displayValue = value.toLocaleDateString();

    if (closeOnSelect) {
      open = false;
    }
  }

  $: dayOffset = firstDayOfMonth.getDay() - firstDayOfWeek;

  function next() {
    value = new Date(value.setMonth(value.getMonth() - 1));
  }

  function prev() {
    value = new Date(value.setMonth(value.getMonth() + 1));
  }
</script>

<Menu bind:open>
  <div slot="activator">
    <TextField
      bind:value={displayValue}
      {label}
      class="relative"
      append={defaultIcon}
      on:click-append={() => open = !open}
      on:
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
                on:click={prev} />
              <Button
                icon="keyboard_arrow_right"
                {...paginatorProps}
                on:click={next} />
            </div>
          </div>

          <div class="flex uppercase">
            {#each weekdays as weekday}
              <div class="w-1/7 p-1 text-gray-400 text-xs text-center">
                {weekday} 
              </div>
            {/each}
          </div>
          <div class="flex flex-wrap text-center text-sm">
            {#if dayOffset}<div class="p-1 w-{dayOffset}/7" />{/if} 
            {#each daysInMonth as i}
              <div class="w-1/7 p-1">
                <div class="w-8 h-8 relative {i.isToday && !i.isSelected ? todayClasses : ""} {i.selected ? selectedClasses : ""}"
                  on:click={() => selected = i.day}
                >
                  <Ripple color="gray" class="p-1 w-full h-full">
                    {i.day}
                  </Ripple>
                </div>
              </div>
            {/each}
          </div>
        </Card>
      </div>
    {/if}
  </div>
</Menu>