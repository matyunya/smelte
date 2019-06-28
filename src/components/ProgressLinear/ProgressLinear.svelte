<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  export let app = false;
  export let progress = 0;

  let initialized = false;

  onMount(() => {
    if (!app) return;

    setTimeout(() => {
      initialized = true;
    }, 100);
  });
</script>

<style>
  /* kudos https://codepen.io/shalimano/pen/wBmNGJ */
  .inc {
    animation: increase 2s ease-in-out infinite;
  }
  .dec {
    animation: decrease 2s 0.9s ease-in-out infinite;
  }

  .transition {
    transition: .2s ease-in;
  }

  @keyframes increase {
    from { left: -5%; width: 5%; }
    to { left: 130%; width: 150%;}
  }
  @keyframes decrease {
    from { left: -90%; width: 90%; }
    to { left: 110%; width: 10%;}
  }
</style>

<div
  class:fixed={app}
  class:z-50={app}
  class="top-0 left-0 w-full h-1 bg-primary-100 overflow-hidden relative"
  class:hidden={app && !initialized}
  in:fly="{{ y: 10, duration: 50 }}"
>
  <div
    class="bg-primary-500 h-1 absolute"
    class:inc={!progress}
    class:transition={progress}
    style={progress ? `width: ${progress}%` : ''}
  />
  <div
    class="bg-primary-500 h-1 absolute dec"
    class:hidden={progress}
  />
</div>