import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
import { AccountCircle, Delete, Edit, Key, Send } from "@mui/icons-material";
import { MenuItem, ListItemIcon, Button, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"; //example data type
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddItemsDialog from "./addItems/AddItemsDialog";
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

const ProductsTable = (props) => {
  const navigate = useNavigate();
  const { productsData } = props;
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "ProductID", //access nested data with dot notation
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
        accessorKey: "ProductName",
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
        accessorKey: "CurrentStock",
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
        accessorKey: "StockThreshold",
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
    data: productsData,
    enableRowActions: true,
    getRowId: (originalRow) => originalRow.ProductID,
    renderRowActions: ({ row }) => (
      <div style={{ display: "flex", gap: "10px" }}>
        {/* <Tooltip title="Add or Take Items" arrow>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              console.log(row.id);
              // navigate(`/resident/${row.id}/medicalRecord`);
            }}
            sx={{ m: 0 }}
          >
            <AddShoppingCartIcon />
          </Button>
        </Tooltip> */}
        <AddItemsDialog />
        <Tooltip title="Edit product" arrow>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              console.log(row.id);
              navigate(`/inventory/${row.id}/edit`);
            }}
            sx={{ m: 0 }}
          >
            <ModeEditIcon />
          </Button>
        </Tooltip>
      </div>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default ProductsTable;
