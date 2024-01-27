import { useMemo } from "react";

//MRT Imports
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from "material-react-table";

//Material UI Imports
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from "@mui/material";

//Icons Imports
import { AccountCircle, Send } from "@mui/icons-material";

//Mock Data
// import { data } from './makeData';
const data = [
  {
    residentID: "R123456",
    name: "John Doe",
    birthDate: "1990-05-15",
    age: 32,
    nationality: "US",
    UNCN: "123456789",
    permanentAddress: "456 Pine Street",
    maritalStatus: "Married",
    numberOfChildren: 2,
    joiningDate: "2021-02-10",
    roomNumber: "101",
  },
  {
    residentID: "R789012",
    name: "Jane Smith",
    birthDate: "1985-08-22",
    age: 37,
    nationality: "CA",
    UNCN: "987654321",
    permanentAddress: "789 Oak Avenue",
    maritalStatus: "Single",
    numberOfChildren: 0,
    joiningDate: "2020-10-05",
    roomNumber: "202",
  },
  {
    residentID: "R345678",
    name: "Bob Johnson",
    birthDate: "1978-04-18",
    age: 44,
    nationality: "UK",
    UNCN: "456789012",
    permanentAddress: "123 Maple Road",
    maritalStatus: "Divorced",
    numberOfChildren: 1,
    joiningDate: "2019-07-15",
    roomNumber: "303",
  },
  {
    residentID: "R901234",
    name: "Alice Williams",
    birthDate: "1995-11-30",
    age: 26,
    nationality: "AU",
    UNCN: "789012345",
    permanentAddress: "234 Birch Lane",
    maritalStatus: "Single",
    numberOfChildren: 0,
    joiningDate: "2022-03-20",
    roomNumber: "404",
  },
  {
    residentID: "R567890",
    name: "Charlie Brown",
    birthDate: "1982-07-08",
    age: 39,
    nationality: "DE",
    UNCN: "234567890",
    permanentAddress: "345 Cedar Street",
    maritalStatus: "Married",
    numberOfChildren: 3,
    joiningDate: "2023-01-12",
    roomNumber: "505",
  },
  {
    residentID: "R112233",
    name: "Grace Johnson",
    birthDate: "1989-03-25",
    age: 33,
    nationality: "FR",
    UNCN: "112233445",
    permanentAddress: "678 Elm Street",
    maritalStatus: "Single",
    numberOfChildren: 0,
    joiningDate: "2020-08-18",
    roomNumber: "606",
  },
  {
    residentID: "R445566",
    name: "David Wilson",
    birthDate: "1975-12-12",
    age: 46,
    nationality: "JP",
    UNCN: "556677889",
    permanentAddress: "789 Walnut Lane",
    maritalStatus: "Married",
    numberOfChildren: 2,
    joiningDate: "2018-05-07",
    roomNumber: "707",
  },
  {
    residentID: "R778899",
    name: "Emma Miller",
    birthDate: "1992-09-08",
    age: 29,
    nationality: "IT",
    UNCN: "990011223",
    permanentAddress: "890 Oak Court",
    maritalStatus: "Divorced",
    numberOfChildren: 1,
    joiningDate: "2017-11-23",
    roomNumber: "808",
  },
  {
    residentID: "R990011",
    name: "Daniel Davis",
    birthDate: "1980-06-01",
    age: 42,
    nationality: "ES",
    UNCN: "112233445",
    permanentAddress: "123 Pine Road",
    maritalStatus: "Single",
    numberOfChildren: 0,
    joiningDate: "2019-04-15",
    roomNumber: "909",
  },
  {
    residentID: "R334455",
    name: "Sophia Taylor",
    birthDate: "1998-11-14",
    age: 23,
    nationality: "BR",
    UNCN: "556677889",
    permanentAddress: "234 Birch Lane",
    maritalStatus: "Married",
    numberOfChildren: 1,
    joiningDate: "2021-12-30",
    roomNumber: "1010",
  },
  {
    residentID: "R112233",
    name: "Olivia Clark",
    birthDate: "1995-08-17",
    age: 27,
    nationality: "CA",
    UNCN: "112233445",
    permanentAddress: "789 Maple Street",
    maritalStatus: "Single",
    numberOfChildren: 0,
    joiningDate: "2022-02-12",
    roomNumber: "111",
  },
  {
    residentID: "R445566",
    name: "Liam Turner",
    birthDate: "1982-04-29",
    age: 40,
    nationality: "UK",
    UNCN: "556677889",
    permanentAddress: "456 Pine Lane",
    maritalStatus: "Married",
    numberOfChildren: 2,
    joiningDate: "2019-09-05",
    roomNumber: "222",
  },
  {
    residentID: "R778899",
    name: "Ava White",
    birthDate: "1990-12-08",
    age: 31,
    nationality: "AU",
    UNCN: "990011223",
    permanentAddress: "567 Cedar Road",
    maritalStatus: "Divorced",
    numberOfChildren: 1,
    joiningDate: "2018-07-20",
    roomNumber: "333",
  },
  {
    residentID: "R990011",
    name: "Noah Harris",
    birthDate: "1987-02-03",
    age: 35,
    nationality: "FR",
    UNCN: "112233445",
    permanentAddress: "678 Elm Street",
    maritalStatus: "Single",
    numberOfChildren: 0,
    joiningDate: "2020-04-10",
    roomNumber: "444",
  },
  {
    residentID: "R334455",
    name: "Sophie Miller",
    birthDate: "1997-06-21",
    age: 24,
    nationality: "DE",
    UNCN: "556677889",
    permanentAddress: "789 Oak Avenue",
    maritalStatus: "Married",
    numberOfChildren: 1,
    joiningDate: "2021-11-15",
    roomNumber: "555",
  },
];

export type Employee = {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  salary: number;
  startDate: string;
  signatureCatchPhrase: string;
  avatar: string;
};

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        id: "employee", //id used to define `group` column
        header: "Employee",
        columns: [
          {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
            id: "name", //id is still required when using accessorFn instead of accessorKey
            header: "Name",
            size: 250,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  alt="avatar"
                  height={30}
                  src={row.original.avatar}
                  loading="lazy"
                  style={{ borderRadius: "50%" }}
                />
                {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: "email", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Email",
            size: 300,
          },
        ],
      },
      {
        id: "id",
        header: "Job Info",
        columns: [
          {
            accessorKey: "salary",
            // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
            filterFn: "between",
            header: "Salary",
            size: 200,
            //custom conditional format and styling
            Cell: ({ cell }) => (
              <Box
                component="span"
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue<number>() < 50_000
                      ? theme.palette.error.dark
                      : cell.getValue<number>() >= 50_000 &&
                        cell.getValue<number>() < 75_000
                      ? theme.palette.warning.dark
                      : theme.palette.success.dark,
                  borderRadius: "0.25rem",
                  color: "#fff",
                  maxWidth: "9ch",
                  p: "0.25rem",
                })}
              >
                {cell.getValue<number>()?.toLocaleString?.("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Box>
            ),
          },
          {
            accessorKey: "jobTitle", //hey a simple column for once
            header: "Job Title",
            size: 350,
          },
          {
            accessorFn: (row) => new Date(row.startDate), //convert to Date for sorting and filtering
            id: "startDate",
            header: "Start Date",
            filterVariant: "date",
            filterFn: "lessThan",
            sortingFn: "datetime",
            Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
            Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
            muiFilterTextFieldProps: {
              sx: {
                minWidth: "250px",
              },
            },
          },
        ],
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: { showColumnFilters: true, showGlobalFilter: true },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
      variant: "outlined",
    },
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          alt="avatar"
          height={200}
          src={row.original.avatar}
          loading="lazy"
          style={{ borderRadius: "50%" }}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Signature Catch Phrase:</Typography>
          <Typography variant="h1">
            &quot;{row.original.signatureCatchPhrase}&quot;
          </Typography>
        </Box>
      </Box>
    ),
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
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
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        Send Email
      </MenuItem>,
    ],
    renderTopToolbar: ({ table }) => {
      const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("deactivating " + row.getValue("name"));
        });
      };

      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("activating " + row.getValue("name"));
        });
      };

      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("contact " + row.getValue("name"));
        });
      };

      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: "flex",
            gap: "0.5rem",
            p: "8px",
            justifyContent: "space-between",
          })}
        >
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextField table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <Button
                color="error"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleDeactivate}
                variant="contained"
              >
                Deactivate
              </Button>
              <Button
                color="success"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleActivate}
                variant="contained"
              >
                Activate
              </Button>
              <Button
                color="info"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleContact}
                variant="contained"
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Box>
      );
    },
  });

  return <MaterialReactTable table={table} />;
};

//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const ResidentsTableV2 = () => (
  //App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Example />
  </LocalizationProvider>
);

export default ResidentsTableV2;
