<script>
  export let label = "";
</script>

<label
  aria-hidden="true"
  {...$$props}
>
  <slot>{label}</slot>
</label>