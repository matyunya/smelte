<script>
  import Card from "../../components/Card";
  import Button from "../../components/Button";
  import Image from "../../components/Image";

  import Code from "docs/Code.svelte";
  import PropsTable from "docs/PropsTable.svelte";

  import card from "examples/card.txt";
</script>

<Card.Card class="dark:bg-gray-200">
  <div slot="title">
    <Card.Title
      class="dark:text-black"
      title="The three little kittens"
      subheader="A kitten poem"
      avatar="https://placekitten.com/64/64" />
  </div>
  <div slot="media">
    <Image class="w-full" src="https://placekitten.com/300/200" alt="kitty" />
  </div>
  <div slot="text" class="p-5 pb-0 pt-3 text-gray-700 body-2">
    The three little kittens, they lost their mittens,
    <br />
    And they began to cry,
    <br />
    "Oh, mother dear, we sadly fear,
    <br />
    That we have lost our mittens."
  </div>
  <div slot="actions">
    <div class="p-2">
      <Button text>OK</Button>
      <Button text>Meow</Button>
    </div>
  </div>
</Card.Card>

<PropsTable
  data={[
    { prop: "hover", default: "true", description: "Enable hover elevation", type: "Boolean" },
    { prop: "elevation", default: "1", description: "Default elevation value", type: "Number" },
    { prop: "hoverElevation", default: "8", description: "Hover elevation value", type: "Number" },
    { prop: "classes", default: `rounded inline-flex flex-col overflow-hidden duration-200 ease-in`, description: "String of root element classes", type: "String" },
  ]}
/>

<Code code={card} />
