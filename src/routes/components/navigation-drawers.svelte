<script>
	import Checkbox from 'components/Checkbox';

  import { right, elevation, persistent, showNav } from 'stores.js';
</script>

<Checkbox bind:value={$showNav} label="Show drawer" on:change={persistent.update} />
<Checkbox bind:value={$elevation} label="With elevation" on:change={elevation.update} />
<Checkbox bind:value={$right} label="Placed on the right" on:change={right.update} />
<Checkbox bind:value={$persistent} label="Persistent" on:change={persistent.update} />