import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
import { AccountCircle, Delete, Edit, Key, Send } from "@mui/icons-material";
import { MenuItem, ListItemIcon, Button } from "@mui/material";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

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
    familyMemebrId: "F123456",
    name: "Ahmed Ali",
    relatedResident: "John Travolta",
    relationship: "Brother",
    phoneNumber: "054387646",
  },
  {
    familyMemebrId: "F123456",
    name: "Ahmed Ali",
    relatedResident: "John Travolta",
    relationship: "Brother",
    phoneNumber: "054387646",
  },
  {
    familyMemebrId: "F123456",
    name: "Ahmed Ali",
    relatedResident: "John Travolta",
    relationship: "Brother",
    phoneNumber: "054387646",
  },
  {
    familyMemebrId: "F123456",
    name: "Ahmed Ali",
    relatedResident: "John Travolta",
    relationship: "Brother",
    phoneNumber: "054387646",
  },
  {
    familyMemebrId: "F123456",
    name: "Ahmed Ali",
    relatedResident: "John Travolta",
    relationship: "Brother",
    phoneNumber: "054387646",
  },
];
const FamilyTable = (props) => {
  const navigate = useNavigate();
  const familyData = props.familyData;
  console.log(`FROM FAMILY MEMBERS TABLE`);
  console.log(familyData);
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "FamilyMemberID", //access nested data with dot notation
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
        accessorKey: "FamilyMemberName",
        header: "Name",
        size: 200,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "ResidentName", //normal accessorKey
        header: "Related Resident",
        size: 200,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "Relationship",
        header: "Relationship",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "PhoneNumber",
        header: "Phone Number",
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
    data: familyData,
    enableRowActions: true,
    getRowId: (originalRow) => originalRow.FamilyMemberID,
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
        key={2}
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

export default FamilyTable;
