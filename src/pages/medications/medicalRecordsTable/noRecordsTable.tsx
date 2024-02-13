import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
import { AccountCircle, Delete, Edit, Key, Send } from "@mui/icons-material";
import {
  MenuItem,
  ListItemIcon,
  Button,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
    residentID: "R123456",
    name: "John Doe",
    age: 32,
    height: "166 cm",
    weight: "71 kg",
    bloodType: "A-",
  },
  {
    residentID: "R234567",
    name: "Jane Smith",
    age: 28,
    height: "175 cm",
    weight: "68 kg",
    bloodType: "B+",
  },
  {
    residentID: "R345678",
    name: "Bob Johnson",
    age: 45,
    height: "180 cm",
    weight: "80 kg",
    bloodType: "O+",
  },
  // Add more objects as needed
  // ...
  {
    residentID: "R987654",
    name: "Alice Brown",
    age: 22,
    height: "160 cm",
    weight: "55 kg",
    bloodType: "AB-",
  },
];
const NoRecordsTable = (props) => {
  const navigate = useNavigate();
  const { residentsWithNoRecords } = props;
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
    ],
    []
  );
  const table = useMaterialReactTable({
    columns,
    data: residentsWithNoRecords,
    enableRowActions: true,
    getRowId: (originalRow) => originalRow.residentID,
    renderRowActions: ({ row }) => (
      <Tooltip title="Add Medical Record" arrow>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            console.log(row.id);
            navigate(`/resident/${row.id}/addMedicalRecord`);
          }}
          sx={{ m: 0 }}
        >
          <PostAddIcon />
        </Button>
      </Tooltip>
    ),
    muiTablePaperProps: {
      elevation: 0, //change the mui box shadow
    },
  });

  return <MaterialReactTable table={table} />;
};

export default NoRecordsTable;
