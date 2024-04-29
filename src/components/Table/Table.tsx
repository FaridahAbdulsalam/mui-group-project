import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { itemData } from "../../data/Items";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "TITLE", width: 100 },
];

type itemData = {
  id: number;
  img: string;
  title: string;
  author: string;
  item: itemData[];
};

const rows = itemData.map((item) => {
  let id = item.id;
  let title = item.title;

  return { id, title };
});



const DataTable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
