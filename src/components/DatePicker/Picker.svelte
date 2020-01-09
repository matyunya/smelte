<script>
  import { createEventDispatcher } from "svelte";
  import { slide, fade, fly } from "svelte/transition";
  import Card from "../Card/Card.svelte";
  import TextField from "../TextField";
  import Menu from "../Menu";
  import Button from "../Button";
  import Ripple from "../Ripple";
  import { getWeekDays, weekStart } from "./util";

  const dispatch = createEventDispatcher();

  export let open = false;
  export let value = new Date();
  export let locale = "default";
  export let todayClasses = "text-primary-600 rounded-full border border-primary-600";
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

  const today = (new Date()).getDate();

  let selected;

  $: year = value.toLocaleString(locale, { year: "numeric" });
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

    if (closeOnSelect) {
      open = false;
    }
  }

  $: dayOffset = Math.abs(firstDayOfMonth.getDay() - firstDayOfWeek);

  function next() {
    value = new Date(value.setMonth(value.getMonth() + 1));
    selected = false;
  }

  function prev() {
    value = new Date(value.setMonth(value.getMonth() - 1));
    selected = false;
  }
</script>

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

    <div class="md:w-64 sm:w-full">
      <div class="flex uppercase text-gray-400 text-xs text-left">
        {#each weekdays as weekday}
          <div class="w-1/7 text-center p-1">
            {weekday} 
          </div>
        {/each}
      </div>
      <div class="flex flex-wrap text-left text-sm">
        {#if dayOffset}<div class="p-1 w-{dayOffset}/7" />{/if} 
        {#each daysInMonth as i}
          <div class="w-1/7 p-1">
            <div class="w-8 h-8 relative {i.isToday && !i.selected ? todayClasses : ""} {i.selected ? selectedClasses : ""}"
              on:click={() => selected = i.day}
            >
              <Ripple color="gray" class="p-1 w-full h-full">
                {i.day}
              </Ripple>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </Card>
</div>