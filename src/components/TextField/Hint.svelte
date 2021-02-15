<script>
  import utils, { ClassBuilder, filterProps } from "../../utils/classes.js";
  import { fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";

  let classesDefault = "text-xs py-1 pl-4 absolute left-0";

  export let error = false;
  export let hint = "";

  export let add = "";
  export let remove = "";
  export let replace = "";

  export let transitionProps = { y: -10, duration: 100, easing: quadOut };

  const l = new ClassBuilder($$props.class, classesDefault);

  let Classes = i => i;

  $: classes = l
      .flush()
      .add('text-error-500', error)
      .add('text-gray-600', hint)
      .add(add)
      .remove(remove)
      .replace(replace)
      .get();

  const props = filterProps([
    'error',
    'hint',
  ], $$props);
</script>

<div
  class={classes}
  transition:fly={transitionProps}>
  {@html hint || ''}
  {error || ''}
</div>
