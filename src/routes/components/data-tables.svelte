<script>
  import DataTable from "components/DataTable";
  import Code from "components/Code";
  import table from "examples/table.txt";

  let data = [];
  let loading = true;

  async function getData() {
    loading = true;
    const res = await fetch("data.json");
    const body = await res.json();

    data = body._embedded.episodes;

    setTimeout(() => loading = false, 500);
  }

  getData();
</script>

<DataTable
  {data}
  {loading}
  on:update={({ detail }) => {
    const { column, item, value } = detail;

    const index = data.findIndex(i => i.id === item.id);

    data[index][column.field] = value;
  }}
  columns={[
    { label: "ID", field: "id", class: "md:w-10", },
    {
      label: "Ep.",
      value: (v) => `S${v.season}E${v.number}`,
      class: "md:w-10",
      editable: false,
    },
    { field: "name", class: "md:w-10" },
    {
      field: "summary",
      textarea: true,
      value: v => v && v.summary ? v.summary : "",
      class: "text-sm text-gray-700 caption w-full" },
    {
      field: "thumbnail",
      value: (v) => v && v.image
        ? `<img src="${v.image.medium.replace("http", "https")}" height="70" alt="${v.name}">`
        : "",
      class: "w-48",
      sortable: false,
      editable: false,
    }
  ]}
/>

<Code code={table} />