import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
import { AccountCircle, Delete, Edit, Key, Send } from "@mui/icons-material";
import { MenuItem, ListItemIcon, Button } from "@mui/material";

//example data type
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

// //nested data is ok, see accessorKeys in ColumnDef below
// const data = [
//   {
//     residentID: "R123456",
//     name: "John Doe",
//     birthDate: "1990-05-15",
//     age: 32,
//     nationality: "US",
//     UNCN: "123456789",
//     permanentAddress: "456 Pine Street",
//     maritalStatus: "Married",
//     numberOfChildren: 2,
//     joiningDate: "2021-02-10",
//     roomNumber: "101",
//   },
//   {
//     residentID: "R789012",
//     name: "Jane Smith",
//     birthDate: "1985-08-22",
//     age: 37,
//     nationality: "CA",
//     UNCN: "987654321",
//     permanentAddress: "789 Oak Avenue",
//     maritalStatus: "Single",
//     numberOfChildren: 0,
//     joiningDate: "2020-10-05",
//     roomNumber: "202",
//   },
//   {
//     residentID: "R345678",
//     name: "Bob Johnson",
//     birthDate: "1978-04-18",
//     age: 44,
//     nationality: "UK",
//     UNCN: "456789012",
//     permanentAddress: "123 Maple Road",
//     maritalStatus: "Divorced",
//     numberOfChildren: 1,
//     joiningDate: "2019-07-15",
//     roomNumber: "303",
//   },
//   {
//     residentID: "R901234",
//     name: "Alice Williams",
//     birthDate: "1995-11-30",
//     age: 26,
//     nationality: "AU",
//     UNCN: "789012345",
//     permanentAddress: "234 Birch Lane",
//     maritalStatus: "Single",
//     numberOfChildren: 0,
//     joiningDate: "2022-03-20",
//     roomNumber: "404",
//   },
//   {
//     residentID: "R567890",
//     name: "Charlie Brown",
//     birthDate: "1982-07-08",
//     age: 39,
//     nationality: "DE",
//     UNCN: "234567890",
//     permanentAddress: "345 Cedar Street",
//     maritalStatus: "Married",
//     numberOfChildren: 3,
//     joiningDate: "2023-01-12",
//     roomNumber: "505",
//   },
//   {
//     residentID: "R112233",
//     name: "Grace Johnson",
//     birthDate: "1989-03-25",
//     age: 33,
//     nationality: "FR",
//     UNCN: "112233445",
//     permanentAddress: "678 Elm Street",
//     maritalStatus: "Single",
//     numberOfChildren: 0,
//     joiningDate: "2020-08-18",
//     roomNumber: "606",
//   },
//   {
//     residentID: "R445566",
//     name: "David Wilson",
//     birthDate: "1975-12-12",
//     age: 46,
//     nationality: "JP",
//     UNCN: "556677889",
//     permanentAddress: "789 Walnut Lane",
//     maritalStatus: "Married",
//     numberOfChildren: 2,
//     joiningDate: "2018-05-07",
//     roomNumber: "707",
//   },
//   {
//     residentID: "R778899",
//     name: "Emma Miller",
//     birthDate: "1992-09-08",
//     age: 29,
//     nationality: "IT",
//     UNCN: "990011223",
//     permanentAddress: "890 Oak Court",
//     maritalStatus: "Divorced",
//     numberOfChildren: 1,
//     joiningDate: "2017-11-23",
//     roomNumber: "808",
//   },
//   {
//     residentID: "R990011",
//     name: "Daniel Davis",
//     birthDate: "1980-06-01",
//     age: 42,
//     nationality: "ES",
//     UNCN: "112233445",
//     permanentAddress: "123 Pine Road",
//     maritalStatus: "Single",
//     numberOfChildren: 0,
//     joiningDate: "2019-04-15",
//     roomNumber: "909",
//   },
//   {
//     residentID: "R334455",
//     name: "Sophia Taylor",
//     birthDate: "1998-11-14",
//     age: 23,
//     nationality: "BR",
//     UNCN: "556677889",
//     permanentAddress: "234 Birch Lane",
//     maritalStatus: "Married",
//     numberOfChildren: 1,
//     joiningDate: "2021-12-30",
//     roomNumber: "1010",
//   },
//   {
//     residentID: "R112233",
//     name: "Olivia Clark",
//     birthDate: "1995-08-17",
//     age: 27,
//     nationality: "CA",
//     UNCN: "112233445",
//     permanentAddress: "789 Maple Street",
//     maritalStatus: "Single",
//     numberOfChildren: 0,
//     joiningDate: "2022-02-12",
//     roomNumber: "111",
//   },
//   {
//     residentID: "R445566",
//     name: "Liam Turner",
//     birthDate: "1982-04-29",
//     age: 40,
//     nationality: "UK",
//     UNCN: "556677889",
//     permanentAddress: "456 Pine Lane",
//     maritalStatus: "Married",
//     numberOfChildren: 2,
//     joiningDate: "2019-09-05",
//     roomNumber: "222",
//   },
//   {
//     residentID: "R778899",
//     name: "Ava White",
//     birthDate: "1990-12-08",
//     age: 31,
//     nationality: "AU",
//     UNCN: "990011223",
//     permanentAddress: "567 Cedar Road",
//     maritalStatus: "Divorced",
//     numberOfChildren: 1,
//     joiningDate: "2018-07-20",
//     roomNumber: "333",
//   },
//   {
//     residentID: "R990011",
//     name: "Noah Harris",
//     birthDate: "1987-02-03",
//     age: 35,
//     nationality: "FR",
//     UNCN: "112233445",
//     permanentAddress: "678 Elm Street",
//     maritalStatus: "Single",
//     numberOfChildren: 0,
//     joiningDate: "2020-04-10",
//     roomNumber: "444",
//   },
//   {
//     residentID: "R334455",
//     name: "Sophie Miller",
//     birthDate: "1997-06-21",
//     age: 24,
//     nationality: "DE",
//     UNCN: "556677889",
//     permanentAddress: "789 Oak Avenue",
//     maritalStatus: "Married",
//     numberOfChildren: 1,
//     joiningDate: "2021-11-15",
//     roomNumber: "555",
//   },
// ];

const ResidentsTable = (props) => {
  const navigate = useNavigate();
  const residentsData = props.residentsData;
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "ResidentID", //access nested data with dot notation
        header: "ID",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "Name",
        header: "Name",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "BirthDate", //normal accessorKey
        header: "Birth Date",
        size: 200,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "Age",
        header: "Age",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "PermanentAddress",
        header: "Permanent Address",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "MaritalStatus",
        header: "Marital Status",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "JoiningDate",
        header: "Joining Date",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "RoomNumber",
        header: "Room Number",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "NumberOfChildren",
        header: "Number Of Children",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
    ],
    []
  );
  const table = useMaterialReactTable({
    columns,
    data: residentsData,
    enableRowActions: true,
    getRowId: (originalRow) => originalRow.residentID,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        // Id = row.id;
        console.info(event, row.id);
        navigate(`/resident/${row.id}`);
      },
      sx: {
        cursor: "pointer", //you might want to change the cursor too when adding an onClick
      },
    }),
    renderRowActionMenuItems: ({ closeMenu, row }) => [
      <MenuItem
        key={0}
        onClick={() => {
          console.log(row.id);
          navigate(`/resident/${row.id}`);
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        View Profile
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Edit Data logic...
          navigate(`/resident/${row.id}/edit`);
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Edit />
        </ListItemIcon>
        Edit Data
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...

          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Delete />
        </ListItemIcon>
        Delete Resident
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
};

export default ResidentsTable;
