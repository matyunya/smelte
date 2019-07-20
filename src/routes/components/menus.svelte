<script>
  import Button from "components/Button";
  import Menu from "components/Menu";
  import List from "components/List";
  import Select from "components/Select";
  import Icon from "components/Icon";
  import TextField from "components/TextField";
  import Code from "components/Code";
  import Slider from "components/Slider";

  import menus from "examples/menus.txt";

  let open = false;
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