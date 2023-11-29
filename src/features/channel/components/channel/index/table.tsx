import * as React from 'react';
import {
  DataGrid,
  GridToolbar,
  GridColDef,
  GridRenderCellParams,
} from '@mui/x-data-grid';

interface Row {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
  image: string;
}

const columns: GridColDef[] = [
  { flex: 1, field: 'id', headerName: 'ID', width: 70 },
  { flex: 1, field: 'firstName', headerName: 'First name', width: 130 },
  { flex: 1, field: 'lastName', headerName: 'Last name', width: 130 },
  {
    flex: 1,
    field: 'age',
    headerName: 'Age',
    width: 130,
  },
  {
    flex: 1,
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    flex: 1,
    field: 'image',
    headerName: 'image',
    width: 550,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      const datass = JSON.stringify(params.row, null, 4);
      const d: Row = JSON.parse(datass);
      return (
        <div className="flex">
          <img className="rounded-full h-10 w-10 mr-2" src={params.value} />
          {d.lastName}
        </div>
      );
    },
  },
  {
    flex: 1,
    field: 'Action',
    headerName: 'Action',
    renderCell: (params: GridRenderCellParams) => {
      const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const datass = JSON.stringify(params.row, null, 4);
        alert(datass);
        const d: Row = JSON.parse(datass);
        console.log(d.id);
      };

      return (
        <div className="flex">
          <button
            className="px-4 rounded-md bg-green-500 text-white"
            onClick={onClick}
          >
            Edit
          </button>
        </div>
      );
    },
  },
];

const rows: Row[] = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    image:
      'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    image:
      'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45,
    image:
      'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 16,
    image:
      'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: 16,
    image:
      'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: 'Jamison',
    age: 15,
    image:
      'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44,
    image:
      'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36,
    image:
      'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65,
    image:
      'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        className="p-3"
        slots={{ toolbar: GridToolbar }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
