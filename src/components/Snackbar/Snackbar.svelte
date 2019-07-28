<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { quadOut, quadIn } from "svelte/easing";
  import { List, Spacer, Button } from "smelte";
  import utils, { ClassBuilder } from "../../utils/classes.js";

  export let value = false;
  export let timeout = 4000;
  export let inProps = { duration: 100, easing: quadIn };
  export let outProps = { duration: 200, easing: quadOut, delay: 200 };
  export let color = "gray";
  export let text = "white";
  export let top = false;
  export let bottom = true;
  export let right = false;
  export let left = false;
  export let noAction = false;
  export let transition = fade;

  const classesDefault = `pointer-events-auto flex absolute py-2 px-4 z-30 mb-4 content-between mx-auto
      rounded items-center elevation-2 h-12`;
  const wrapperDefault = "fixed w-full h-full flex items-center justify-center pointer-events-none";

  let className = classesDefault;
  export {className as class};

  export let wrapperClasses = wrapperDefault;

  const { bg } = utils(color);

  const cb = new ClassBuilder(className, classesDefault);
  const wrapperCb = new ClassBuilder(wrapperClasses, wrapperDefault);

  let classes = "";
  let wClasses = "";

  classes = cb
    .add(bg(800))
    .add("right-0 mr-2", right)
    .add("top-0 mt-2", top)
    .add("left-0 ml-2", left)
    .add("bottom-0", bottom)
    .add("snackbar", !noAction)
    .get();

  wClasses = wrapperCb
    .add(`text-${text}`)
    .get();


  onMount(() => {
    if (!process.browser || !timeout) return;

    setTimeout(() => {
      value = false;
    }, timeout);
  });
</script>

<style>
  .snackbar {
    min-width: 344px;
  }
</style>

{#if value}
  <div class="fixed w-full h-full top-0 left-0 z-30 pointer-events-none">
    <div class={wClasses}>
      <div
        in:transition={inProps}
        out:transition={outProps}
        class={classes}>
        <slot />
        {#if !noAction}
          <Spacer />
          <slot name="action">
            <Button text on:click={() => value = false}>Dismiss</Button>
          </slot>
        {/if}
      </div>
    </div>
  </div>
{/if}
