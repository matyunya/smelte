<script>
  export let c = '';
  export let color = 'text-gray-700';
  export let small = false;

  let colorClass;
</script>

<i
  aria-hidden="true"
  class={`material-icons ${color} ${c}`}
  class:text-base={small}
>
  <slot></slot>
</i>