import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Paper,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../../../components/navbar-appDrawer";
import { MuiTelInput } from "mui-tel-input";

import * as React from "react";

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import AddNewRoleDialog from "./addNewRoleDialog";
import AddNewShiftDialog from "./addNewShiftDialog";
const defaultTheme = createTheme();

export default function AddStaffMember() {
  const { id } = useParams<string>();

  // states to handle Input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [shift, setShift] = useState("");
  const [email, setEmail] = useState("");

  // fetch the roles so the user can select from them
  const {
    isLoading,
    isError,
    data: roles,
    error,
    isSuccess,
    refetch: rolesRefetch,
  } = useQuery({
    queryKey: ["roles"],
    queryFn: () =>
      fetch("http://localhost:4500/roles").then((res) => res.json()),
  });
  if (isLoading) {
    console.log("Roles Loading");
  }
  if (isError) {
    console.log("Error Fetching Roles " + error.message);
  }
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  queryClient.invalidateQueries({ queryKey: ["roles", "shifts"] });
  // fetch the shifts so the Admin can select from them
  const {
    data: shifts,
    isSuccess: isShiftsSuccess,
    refetch: shiftsRefetch,
  } = useQuery({
    queryKey: ["shifts"],
    queryFn: () =>
      fetch("http://localhost:4500/shift").then((res) => res.json()),
  });
  if (isLoading) {
    console.log("shifts Loading");
  }
  if (isError) {
    console.log("Error Fetching shifts " + error.message);
  }

  const { mutate: sendStaffMemberData } = useMutation({
    mutationKey: ["sendStaffMemberData"],
    mutationFn: (userData) => {
      axios
        .post("http://localhost:4500/staff", userData)
        .then((response) => {
          console.log(response);
          toast.success(response.data.success);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
    },
  });
  // For Form
  const handleSubmit = () => {
    const staffMemberData = {
      username: `${firstName} ${lastName}`,
      phoneNumber: phoneNumber,
      email: email,
      role: role,
      shift: shift,
    };
    // sendResidentData(residentData);
    console.log(staffMemberData);
    sendStaffMemberData(staffMemberData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Add New Staff Member" />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Paper
                  sx={{
                    pt: 2,
                    pb: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* The Start of the Tabs Code */}
                  <Box sx={{ width: "100%", typography: "body1", p: 2 }}>
                    {" "}
                    {/* The Start Of the Form Code */}
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <MuiTelInput
                            value={phoneNumber}
                            onChange={(newValue) => {
                              setPhoneNumber(newValue);
                            }}
                            style={{ width: "100%" }}
                            label="Phone Number"
                            id="phoneNumber"
                            name="phoneNumber"
                            autoComplete="off"
                          />
                        </Grid>

                        <Grid item xs={9}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Role
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              name="demo-simple-select"
                              id="demo-simple-select"
                              value={role}
                              label="Role"
                              onChange={(e) => {
                                setRole(e.target.value);
                              }}
                            >
                              {isSuccess
                                ? roles.map((role, index) => (
                                    <MenuItem key={index} value={role.RoleID}>
                                      {role.RoleName}
                                    </MenuItem>
                                  ))
                                : // You can add a fallback or leave it empty if you don't want to render anything when isSuccess is false
                                  null}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                          <AddNewRoleDialog rolesRefetch={rolesRefetch} />
                        </Grid>
                        <Grid item xs={9}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Shift
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              name="demo-simple-select"
                              id="demo-simple-select"
                              value={shift}
                              label="Role"
                              onChange={(e) => {
                                setShift(e.target.value);
                              }}
                            >
                              {isShiftsSuccess
                                ? shifts.map((shift, index) => (
                                    <MenuItem
                                      key={shift.ShiftID}
                                      value={shift.ShiftID}
                                    >
                                      {shift.StartTime} - {shift.EndTime}
                                    </MenuItem>
                                  ))
                                : // You can add a fallback or leave it empty if you don't want to render anything when isSuccess is false
                                  null}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                          <AddNewShiftDialog shiftsRefetch={shiftsRefetch} />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                      >
                        Add New Staff Member
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
