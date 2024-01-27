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

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    staffID: "S123456",
    name: "John Doe",
    role: "Nurse",
    age: 32,
    phoneNumber: "+964 9439 3094 434",
    shift: "10:00 - 16:00",
  },
  {
    staffID: "S123456",
    name: "John Doe",
    role: "Nurse",
    age: 32,
    phoneNumber: "+964 9439 3094 434",
    shift: "10:00 - 16:00",
  },
  {
    staffID: "S234567",
    name: "Jane Smith",
    role: "Doctor",
    age: 28,
    phoneNumber: "+964 9456 7890 123",
    shift: "08:00 - 14:00",
  },
  {
    staffID: "S345678",
    name: "Bob Johnson",
    role: "Paramedic",
    age: 45,
    phoneNumber: "+964 9876 5432 109",
    shift: "12:00 - 18:00",
  },
  {
    staffID: "S987654",
    name: "Alice Brown",
    role: "Receptionist",
    age: 22,
    phoneNumber: "+964 9123 4567 890",
    shift: "09:00 - 15:00",
  },
  // Add more objects as needed
  {
    staffID: "S111111",
    name: "David Miller",
    role: "Surgeon",
    age: 40,
    phoneNumber: "+964 9210 8765 432",
    shift: "07:00 - 13:00",
  },
  {
    staffID: "S222222",
    name: "Emily White",
    role: "Pharmacist",
    age: 35,
    phoneNumber: "+964 9345 6789 012",
    shift: "14:00 - 20:00",
  },
  {
    staffID: "S333333",
    name: "Michael Jones",
    role: "Technician",
    age: 28,
    phoneNumber: "+964 9987 6543 210",
    shift: "11:00 - 17:00",
  },
  {
    staffID: "S234567",
    name: "Jane Smith",
    role: "Doctor",
    age: 28,
    phoneNumber: "+964 9456 7890 123",
    shift: "08:00 - 14:00",
  },
  {
    staffID: "S345678",
    name: "Bob Johnson",
    role: "Paramedic",
    age: 45,
    phoneNumber: "+964 9876 5432 109",
    shift: "12:00 - 18:00",
  },
  {
    staffID: "S987654",
    name: "Alice Brown",
    role: "Receptionist",
    age: 22,
    phoneNumber: "+964 9123 4567 890",
    shift: "09:00 - 15:00",
  },
];

const StaffTable = () => {
  const navigate = useNavigate();

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "staffID", //access nested data with dot notation
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
        accessorKey: "name",
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
        accessorKey: "role", //normal accessorKey
        header: "Role",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone Number",
        size: 200,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "shift",
        header: "Shift",
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
    data,
    enableRowActions: true,
    getRowId: (originalRow) => originalRow.staffID,
    renderRowActionMenuItems: ({ closeMenu, row }) => [
      <MenuItem
        key={0}
        onClick={() => {
          console.log(row.id);
          navigate(`/staff/${row.id}`);
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
        Delete Member
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
};

export default StaffTable;
