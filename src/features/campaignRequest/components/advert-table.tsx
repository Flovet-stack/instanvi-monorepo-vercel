import {
    DataGrid,
    GridToolbar,
    GridColDef,
    GridRenderCellParams,
} from '@mui/x-data-grid';
import { useRouter } from 'next/router';
import * as React from 'react';

import { useCampaigns } from '../api/getCampaigns';

import Delete from './delete'


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

                    <div className="ml-4">
                        <h3 className='text-[18px]'>{d.name}</h3>

                    </div>
                </div>
            );
        },
    },
    { flex: 1, field: "target_type", headerName: "Impression", width: 30 },
    { flex: 1, field: "target_number", headerName: "Reach", width: 30 },
    { flex: 1, field: "status", headerName: "Status", width: 30 },
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
                router.push(`/publisher/channel/view?${id}`)
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
    const { data } = useCampaigns()
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
                checkboxSelection
            />
        </div>
    );
}
