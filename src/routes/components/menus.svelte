<script>
  import { Button } from "smelte";
  import { Menu } from "smelte";
  import { List } from "smelte";
  import { Select } from "smelte";
  import { Icon } from "smelte";
  import { TextField } from "smelte";
  import Code from "components/Code";
  import { Slider } from "smelte";

  import menus from "examples/menus.txt";

  let open = false;
  let open2 = false;
  let selected = "";

  const items = [
    { value: 1, text: "One" },
    { value: 2, text: "Two" },
    { value: 3, text: "Three" },
    { value: 4, text: "Four" },
    { value: 5, text: "Five" }
  ];
</script>

<caption>Selected: {selected || 'nothing'}</caption>

<Menu bind:open {items} bind:value={selected}>
  <div slot="activator">
    <Button on:click={() => (open = !open)}>A menu</Button>
  </div>
</Menu>

<Code code={menus} />