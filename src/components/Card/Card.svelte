<script>
  import { ClassBuilder } from "../../utils/classes.js";

  const classesDefault = "rounded inline-flex flex-col overflow-hidden duration-200 ease-in";

  export let hover = true;
  export let classes = classesDefault;

  const cb = new ClassBuilder(classes, classesDefault);

  $: c = cb
    .flush()
    .add(`shadow-sm hover:shadow`, hover)
    .add(classes, true, classesDefault)
    .add($$props.class)
    .get();
</script>

<div
  class={c}>
  <slot name="title" />
  <slot name="media" />
  <slot />
  <slot name="text" />
  <slot name="actions" />
</div>
