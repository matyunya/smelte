<script>
  export let progress = null;
  export let color = "primary";
  export let width = 3;
</script>

<style>
  /* kudos https://codepen.io/shalimano/pen/wBmNGJ */
  .circular {
    animation: rotate 2s linear infinite;
    width: 70px;
    height: 70px;
    position: relative;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
</style>

<svg class="circular">
  <circle
    class="path stroke-{color}"
    cx="35"
    cy="35"
    r="20"
    fill="none"
    stroke-width={width}
    stroke-miterlimit="10"
    style="{progress > 0 ? `
        animation: none;
        stroke-dasharray: ${150000 - progress * 1000};
        stroke-dashoffset: -${124 - (progress * 124) / 100};
      ` : ''};" />
</svg>
