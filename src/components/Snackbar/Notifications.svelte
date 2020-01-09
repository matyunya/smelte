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
    item = item || $queue[$queue.length - 1];
    if (typeof item === "string") {
      message = item;
    } else if (item) {
      message = item.toString();
      color = item.color;
    }
  }
</script>

<Snackbar
  value={$queue.length}
  {color}
  on:finish={() => {
    item = false;
    queue.next();
  }}
>
  {message}
</Snackbar>