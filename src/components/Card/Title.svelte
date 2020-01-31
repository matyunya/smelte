<script>
  import { ClassBuilder } from "../../utils/classes.js";

  export const hover = true;
  export let title = "";
  export let subheader = "";
  export let avatar = "";

  const classesDefault = "flex px-4 py-2 items-center";
  export let classes = classesDefault;
  let className = "";
  export {className as class};

  const cb = new ClassBuilder(classes, classesDefault);

  $: c = cb
    .flush()
    .add(classes, true, classesDefault)
    .add(className)
    .get();
</script>

<div class={c}>
  <div>
    <img
      class="rounded-full"
      width="44"
      height="44"
      src={avatar}
      alt="avatar"
      class:hidden={!avatar} />
  </div>
  <div class="pl-4 py-2">
    <slot name="title">
      {#if title}
        <div class="font-medium text-lg">{title}</div>
      {/if}
    </slot>
    <slot name="subheader">
      {#if subheader}
        <div class="text-sm text-gray-600 pt-0">
          {subheader}
        </div>
      {/if}
    </slot>
  </div>
</div>
