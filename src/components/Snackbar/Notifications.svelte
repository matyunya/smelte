<script context="module">
  import notificationQueue from "../../notification-queue";

  export const notifier = notificationQueue();
</script>

<script>
  import Snackbar from "./Snackbar.svelte";

  export let queue = notifier;
  let message;
  let color = "gray";
  let item;

  $: {
    if (!item) {
      item = $queue[0];
    }

    if (typeof item === "string") {
      message = item;
    } else if (item) {
      message = item.toString();
      color = item.color;
    }
  }

  function hash(message) {
    return message ? `${message}${new Date().valueOf()}` : null;
  }

</script>

<Snackbar
  value={Boolean(message)}
  hash={hash(message)}
  {color}
  {...item}
  on:finish={() => {
    queue.remove($queue.indexOf(item));
    item = false;
  }}
>
  {message}
</Snackbar>