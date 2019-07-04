<script>
  import { createEventDispatcher, onDestroy } from 'svelte';

  const dispatch = createEventDispatcher();

  export let offset = 0;
  export let throttle = 250;
  export let c = '';
  export let style = '';
  export let once = true;

  let visible = false;
  let wasVisible = false;
  let intersecting = false;
  let removeHandlers = () => {};

  function throttleFn(fn, threshhold) {
    let last, deferTimer;

    return () => {
      const now = +new Date;

      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn();
        }, threshhold);
      } else {
        last = now;
        fn();
      }
    };
  }

  function callEvents(wasVisible, observer, node) {
    if (visible && !wasVisible) {
      dispatch('enter');
      return;
    }

    if (wasVisible && !intersecting) {
      dispatch('leave');
    }

    if (once && wasVisible && !intersecting) {
      removeHandlers();
    }
  }

  function waypoint(node) {
    if (!window) return;

    if (window.IntersectionObserver && window.IntersectionObserverEntry) {
      const observer = new IntersectionObserver(([ { isIntersecting } ]) => {
        wasVisible = visible;
        visible = once ? true : isIntersecting;
        intersecting = isIntersecting;
        callEvents(wasVisible, observer, node);
      });

      observer.observe(node);

      removeHandlers = () => observer.unobserve(node);

      return removeHandlers;
    }

    function checkIsVisible() {
      // Kudos https://github.com/twobin/react-lazyload/blob/master/src/index.jsx#L93
      if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)) return;

      let top;
      let height;

      try {
        ({ top, height } = node.getBoundingClientRect());
      } catch (e) {
        ({ top, height } = defaultBoundingClientRect);
      }

      const windowInnerHeight = window.innerHeight
        || document.documentElement.clientHeight;

      wasVisible = visible;
      intersecting = (top - offset <= windowInnerHeight) &&
        (top + height + offset >= 0);

      visible = once ? true : intersecting;

      callEvents(wasVisible);
    }

    checkIsVisible();

    throttled = throttleFn(checkIsVisible, throttle);

    window.addEventListener('scroll', throttled);
    window.addEventListener('resize', throttled);

    removeHandlers = () => {
      window.removeEventListener('scroll', throttled);
      window.removeEventListener('resize', throttled);
    }

    return removeHandlers;
  }
</script>

<style>
.wrapper {
  display: inline-block;
}
</style>

<div class={`wrapper ${c}`} {style} use:waypoint>
  {#if visible}
    <slot/>
  {/if}
</div>