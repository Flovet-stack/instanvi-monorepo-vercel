import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

import { useChannels } from "@/features/channel/api/getChannels"



const columns: readonly GridColDef<never>[] = [
  { flex: 1, field: "uuid", headerName: "ID", width: 30 },
  {
    flex: 1,
    field: "Status",
    headerName: "Status",
    width: 70,
    renderCell: (params: { row: any; }) => {
      const datass = JSON.stringify(params.row, null, 4);
      const d = JSON.parse(datass);

      return (
        <div className="flex">
          <div>
            <img src={d.logo} className="h-16 w-16 rounded-full border" alt="" />
          </div>
          <div className="ml-4">
            <h3>{d.name}</h3>
            <p className="text-gray-700 mt-1">{d.bio}</p>
          </div>
        </div>
      );
    },
  },
  { flex: 1, field: "location", headerName: "Location", width: 30 },
  { flex: 1, field: "industry", headerName: "Industry", width: 30 },
  { flex: 1, field: "currency", headerName: "Currency", width: 30 },
  {
    flex: 1,
    field: "Action",
    headerName: "Action",
    width: 100,
    renderCell: (params: { row: any; id: any; }) => {
      const datass = JSON.stringify(params.row, null, 4);
      const d = JSON.parse(datass);
      return (
        <div className="flex">
          <button><i className="ri-external-link-line mr-3 text-blue-900"></i></button>
          <button><i className="ri-delete-bin-6-line text-red-800"></i></button>
        </div>
      );
    },
  },
];

export default function DataTable() {
  const [datas, setData] = useState([]);
  const { data } = useChannels()
  useEffect(() => {
    setData(data?.data.data)
    console.log(data?.data.data)
  }, [datas]);
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        className="p-3"
        slots={{ toolbar: GridToolbar }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}