<script>
  import Icon from './Icon.svelte';

  export let outlined = false;
  export let text = false;
  export let block = false;
  export let disabled = false;
  export let icon = null;

  const basic = !outlined && !text;
</script>


<ul class="py-2">
  <slot></slot>
</div>