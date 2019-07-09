<script>
  import DataTable from "components/DataTable";

  import data from "./data.json";
</script>

<DataTable
  data={data._embedded.episodes}
  columns={[
    { label: "ID", field: "id", class: "w-10", },
    {
      label: "Season/Episode",
      value: (v) => `S${v.season}E${v.number}`,
      class: "w-10"
    },
    { field: "name", class: "w-10" },
    {
      field: "summary",
      value: v => v && v.summary ? v.summary.split(".")[0] + "." : "",
      class: "text-xs text-gray-700 w-64 caption text-left" },
    {
      field: "thumbnail",
      value: (v) => v && v.image
        ? `<img src="${v.image.medium.replace("http", "https")}" height="70" alt="${v.name}">`
        : "",
      class: "w-50",
      sortable: false,
    }
  ]}
/>