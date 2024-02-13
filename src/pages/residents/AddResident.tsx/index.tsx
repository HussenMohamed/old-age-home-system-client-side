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

import * as React from "react";

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
const defaultTheme = createTheme();

export default function AddResident() {
  const { id } = useParams<string>();

  // states to handle Input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [maritalStatus, setMaritalStatus] = useState("");
  const [nationality, setNationality] = useState("");
  const [uncn, setUncn] = useState("");
  const [address, setAddress] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState();
  const [roomNumber, setRoomNumber] = useState();
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null);

  const { mutate: sendResidentData } = useMutation({
    mutationKey: ["sendResidentData"],
    mutationFn: (userData) => {
      axios
        .post("http://localhost:4500/residents", userData)
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
    const residentData = {
      name: `${firstName} ${lastName}`,
      age: age,
      maritalStatus: maritalStatus,
      nationality: nationality,
      UNCN: uncn,
      permanentAddress: address,
      numberOfChildren: numberOfChildren,
      roomNumber: roomNumber,
      birthDate: birthDate?.format("YYYY-MM-DD"),
    };
    sendResidentData(residentData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Add New Resident" />
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

                        <Grid item xs={6}>
                          <TextField
                            required
                            fullWidth
                            name="age"
                            label="Age"
                            type="number"
                            id="age"
                            onChange={(e) => {
                              setAge(e.target.value);
                            }}
                          />
                        </Grid>

                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Marital Status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="MaritalStatus"
                              value={maritalStatus}
                              onChange={(e) => {
                                setMaritalStatus(e.target.value as string);
                              }}
                            >
                              <MenuItem value="Single">Single</MenuItem>
                              <MenuItem value="Married">Married</MenuItem>
                              <MenuItem value="Divorced">Divorced</MenuItem>
                              <MenuItem value="Widowed">Widowed</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="nationality"
                            label="Nationality"
                            name="nationality"
                            onChange={(e) => {
                              setNationality(e.target.value);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="uncn"
                            label="UNCN"
                            name="uncn"
                            onChange={(e) => {
                              setUncn(e.target.value);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            name="numberOfChildren"
                            label="Number Of Children"
                            type="number"
                            id="numberOfChildren"
                            onChange={(e) => {
                              setNumberOfChildren(e.target.value);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            name="roomNumber"
                            label="Room Number"
                            type="number"
                            id="roomNumber"
                            onChange={(e) => {
                              setRoomNumber(e.target.value);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} marginTop={1}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DemoItem label="Birth Date">
                              <DatePicker
                                defaultValue={birthDate}
                                // value={dateValue}
                                onChange={(newValue) => setBirthDate(newValue)}
                              />
                            </DemoItem>
                          </DemoContainer>
                        </LocalizationProvider>
                      </Grid>

                      <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                      >
                        Add New Resident
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
