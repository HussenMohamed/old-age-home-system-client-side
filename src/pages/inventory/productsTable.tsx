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
    productID: "P123456",
    productName: "Walking canes",
    category: "Mobility Aids",
    currentStock: 32,
    stockThreshold: 10,
  },
  {
    productID: "P1856456",
    productName: " Shampoo",
    category: "Personal Hygiene",
    currentStock: 15,
    stockThreshold: 8,
  },
  {
    productID: "P58240",
    productName: "toothpaste",
    category: "Personal Hygiene",
    currentStock: 5,
    stockThreshold: 10,
  },
  {
    productID: "P83592",
    productName: "Bandages",
    category: "Medical Supplies",
    currentStock: 23,
    stockThreshold: 12,
  },
  {
    productID: "P123456",
    productName: "Protein shakes",
    category: "Nutritional Supplements",
    currentStock: 15,
    stockThreshold: 10,
  },
];

const ProductsTable = () => {
  const navigate = useNavigate();

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "productID", //access nested data with dot notation
        header: "Product ID",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "productName",
        header: "Product Name",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "category", //normal accessorKey
        header: "Category",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "currentStock",
        header: "Current Stock",
        size: 200,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "stockThreshold",
        header: "Stock Threshold",
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
    getRowId: (originalRow) => originalRow.productID,
    renderRowActionMenuItems: ({ closeMenu, row }) => [
      //   <MenuItem
      //     key={0}
      //     onClick={() => {
      //       console.log(row.id);
      //       navigate(`/staff/${row.id}`);
      //       closeMenu();
      //     }}
      //     sx={{ m: 0 }}
      //   >
      //     <ListItemIcon>
      //       <AccountCircle />
      //     </ListItemIcon>
      //     View Profile
      //   </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Edit Data logic...
          navigate(`/inventory/${row.id}/edit`);
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

export default ProductsTable;
