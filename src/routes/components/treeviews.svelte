<script>
  import { Treeview } from "smelte";
</script>

<Treeview items={[
  {
    text: "test",
    items: [
      { text: "subtest" },
      { text: "subtest2" }
    ]
  },
  {
    text: "test2",
    items: [
      { text: "subtest" },
      { text: "subtest2" }
    ]
  },
  {
    text: "test3",
    items: [
      { text: "subtest" },
      { text: "subtest2" }
    ]
  }
]} />
