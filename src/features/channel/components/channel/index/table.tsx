import * as React from 'react';
import {
  DataGrid,
  GridToolbar,
  GridColDef,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import { useChannels } from '@/features/channel/api/getChannels';
import Delete from './delete'
import { useRouter } from 'next/router';

interface Row {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
  image: string;
}

const columns: GridColDef[] = [
  {
    flex: 1,
    field: "Status",
    headerName: "Campaign Name",
    width: 70,
    renderCell: (params: { row: any; }) => {
      const datass = JSON.stringify(params.row, null, 4);
      const d = JSON.parse(datass);

      return (
        <div className="flex my-1">
          <div>
            <img src={d.logo} className="h-10 w-10 rounded-full border" alt="" />
          </div>
          <div className="ml-4">
            <h3 className='text-[18px]'>{d.name}</h3>
            <p className="text-gray-700 text-md">{d.bio}</p>
          </div>
        </div>
      );
    },
  },
  { flex: 1, field: "location", headerName: "Location", width: 30 },
  { flex: 1, field: "industry", headerName: "Industry", width: 30 },
  { flex: 1, field: "currency", headerName: "Currency", width: 30 },
  { flex: 1, field: "audience_number", headerName: "Audience Number", width: 30 },
  {
    flex: 1,
    field: "Action",
    headerName: "Action",
    width: 100,
    renderCell: (params: { row: any; id: any; }) => {
      const router = useRouter()
      const datass = JSON.stringify(params.row, null, 4);
      // const d = JSON.parse(datass);
      const handleRouter = (id: any) => {
        window.open(`/publisher/channel/view?${id}`, '_blank');
      }
      return (
        <div className="flex">
          <button onClick={() => handleRouter(params.id)}><i className="ri-external-link-line text-xl mr-3 text-blue-900"></i></button>
          <Delete id={params.id} />
        </div>
      );
    },
  },

];


export default function DataTable() {
  const [datas, setData] = React.useState<string[]>([]);
  const { data } = useChannels()
  React.useEffect(() => {
    if (data?.data.data == undefined)
      setData([])
    else
      setData(data?.data.data)
  }, [data]);

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#f2f5f7",
            color: "#454954",
            fontWeight: "bold",
            fontSize: "20px"
          },

          fontSize: "17px"

        }}
        rows={datas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        className="p-3"
        density='comfortable'
        getRowId={(row) => row.uuid}
        slots={{ toolbar: GridToolbar }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
