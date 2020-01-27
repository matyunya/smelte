<style global>
  @import "tailwindcss/base";
  @import "tailwindcss/components";

  :global(html) {
    font-family: "Roboto", sans-serif;
  }

  :global(h1, .h1) {
    @apply text-5xl font-light;
    letter-spacing: -1.5px;
  }

  :global(h2, .h2) {
    @apply text-4xl font-light;
    letter-spacing: -0.5px;
  }

  :global(h3, .h3) {
    @apply text-3xl font-normal;
    letter-spacing: 0px;
  }

  :global(h4, .h4) {
    @apply text-2xl font-normal;
    letter-spacing: 0.25px;
  }

  :global(h5, .h5) {
    @apply text-xl font-normal;
    letter-spacing: 0px;
  }

  :global(h6, .h6) {
    @apply text-base font-medium;
    letter-spacing: 0.15px;
  }

  :global(hr) {
    @apply border-t border-gray-400 border-solid;
  }

  :global(.subtitle-1) {
    @apply text-base;
    letter-spacing: 0.15px;
  }

  :global(.subtitle-2) {
    @apply text-base text-sm font-medium;
    letter-spacing: 0.15px;
  }

  :global(.body-1) {
    @apply text-base;
    letter-spacing: 0.5px;
  }

  :global(.body-2) {
    @apply text-sm;
    letter-spacing: 0.25px;
  }

  :global(.button) {
    letter-spacing: 0.0892857143em;
  }

  :global(caption, .caption) {
    font-size: 0.625rem;
    letter-spacing: 0.4px;
    display: inline-block;
  }

  :global(button:focus, input:focus, li:focus, div:focus, textarea:focus) {
    @apply outline-none;
  }

  :global(.list) {
    @apply absolute left-0 bg-white rounded elevation-3 w-full z-20;
    margin-top: 2px;
  }

  :global(.a) {
    @apply underline text-blue-600;
  }

  :global(input[type='number']) {
      -moz-appearance:textfield;
  }

  :global(input::-webkit-outer-spin-button, input::-webkit-inner-spin-button) {
      -webkit-appearance: none;
  }

  :global(.ripple) {
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
  }

  :global(.ripple-normal) {
    animation: ripple-normal 0.6s;
  }

  :global(.ripple-centered) {
    animation: ripple-centered 0.4s;
  }

  @keyframes global-ripple-normal {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  @keyframes global-ripple-centered {
    to {
      transform: scale(1);
      opacity: 0;
    }
  }

  :global(.mode-dark) {
    @apply text-gray-100 bg-dark-500 transition-fast pointer-events-auto;
  }

  @import "tailwindcss/utilities";
</style>