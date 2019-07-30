<script>
  import DataTable from "../components/DataTable";

  export let data = [];
  export let columns = [
    { field: "prop" },
    { field: "description" },
    { field: "type", class: "text-xs text-gray-700 nowrap" },
    { field: "default", label: "Default value", class: "text-xs text-gray-700" }
  ];
</script>

<DataTable
  editable={false}
  pagination={false}
  sortable={false}
  {data}
  {columns} />
