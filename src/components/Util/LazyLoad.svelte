<script>
export let offset = 0;
export let throttle = 250;

let visible = false;

function throttleFn(fn, threshhold, scope) {
  let last, deferTimer;

  return function () {
    let context = scope || this;

    let now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

function lazyload(node) {
  if (!process.browser) return;

  function checkIsVisible() {
    // Kudos https://github.com/twobin/react-lazyload/blob/master/src/index.jsx#L93
    if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)) return false;

    let top;
    let height;

    try {
      ({ top, height } = node.getBoundingClientRect());
    } catch (e) {
      ({ top, height } = defaultBoundingClientRect);
    }

    const windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

    visible = (top - offset <= windowInnerHeight) &&
          (top + height + offset >= 0);

    if (visible) {
      console.log('yes!')
    }
  }

  checkIsVisible();

  const throttled = throttleFn(checkIsVisible, throttle);

  window.addEventListener('scroll', throttled);
  window.addEventListener('resize', throttled);

  return () => {
    window.removeEventListener('scroll', throttled);
    window.removeEventListener('resize', throttled);
  };
}

</script>

<div use:lazyload>
  {#if visible}
    <slot></slot>
  {/if}
</div>