import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
  Divider,
  Link,
  Stack,
  TextareaAutosize,
  Switch,
  FormControlLabel,
  IconButton,
  Button,
  Checkbox,
  TextField,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Navbar from "../../../components/navbar-appDrawer";
import BackgroundLetterAvatars from "../../residents/residentProfile/LettersAvatar";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MedicationIcon from "@mui/icons-material/Medication";
import RepeatIcon from "@mui/icons-material/Repeat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function AddMedicalRecord() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  // Illness
  const [illness, setIllness] = useState("");
  const [illnessArray, setIllnessArray] = useState([]);
  const handleAddIllness = () => {
    if (illness == "") {
      toast.error("Please enter an illness");
    } else {
      setIllnessArray([...illnessArray, illness]);
      setIllness("");
    }
  };
  //Allergies
  const [allergies, setIAllergies] = useState("");
  const [allergiesArray, setAllergiesArray] = useState([]);
  const handleAddAllergies = () => {
    if (allergies == "") {
      toast.error("Please enter an illness");
    } else {
      setAllergiesArray([...allergiesArray, allergies]);
      setIAllergies("");
    }
  };
  //Surgery
  const [surgery, setISurgery] = useState("");
  const [surgeryArray, setSurgeryArray] = useState([]);
  const handleAddSurgery = () => {
    if (surgery == "") {
      toast.error("Please enter an illness");
    } else {
      setSurgeryArray([...surgeryArray, surgery]);
      setISurgery("");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Add Medical Record for Resident" />
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
              <Grid item xs={12} display="flex" justifyContent="center">
                <Paper sx={{ p: 2 }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 2, sm: 2, md: 5 }}
                    justifyContent="center"
                    alignItems="center"
                    // divider={<Divider orientation="vertical" flexItem />}
                  >
                    <BackgroundLetterAvatars name="John Doe" />
                    <div>
                      <Typography variant="h5">John Doe</Typography>
                      <Chip label="ID: R334455" />
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <Typography variant="h6">77 Years Old</Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h5">
                        General Health Information
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormHelperText id="weight" sx={{ fontSize: "16px" }}>
                        Weight
                      </FormHelperText>
                      <OutlinedInput
                        name="weight"
                        fullWidth
                        id="weight"
                        endAdornment={
                          <InputAdornment position="end">kg</InputAdornment>
                        }
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                      <RadioButtonCheckedIcon
                        fontSize="small"
                        color="primary"
                      />
                    </Grid> */}
                    <Grid item xs={12} sm={4}>
                      <FormHelperText id="height " sx={{ fontSize: "16px" }}>
                        Height
                      </FormHelperText>
                      <OutlinedInput
                        name="height"
                        fullWidth
                        id="height"
                        endAdornment={
                          <InputAdornment position="end">cm</InputAdornment>
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormHelperText id="height" sx={{ fontSize: "16px" }}>
                        Blood Type
                      </FormHelperText>
                      {/* <OutlinedInput
                        name="bloodType"
                        fullWidth
                        id="bloodType"
                        placeholder="For Example: A-"
                      /> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth
                        // value={age}
                        // onChange={handleChange}
                      >
                        {["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"].map(
                          (type, index) => {
                            return <MenuItem value={index}>{type}</MenuItem>;
                          }
                        )}
                      </Select>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5">Chronic Illness</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <OutlinedInput
                        required
                        fullWidth
                        id="illness"
                        // placeholder="Enter each illnes and then press ADD"
                        name="illness"
                        onChange={(event) => setIllness(event.target.value)}
                        value={illness}
                        endAdornment={
                          <Button
                            variant="contained"
                            // color="primary"
                            sx={{ backgroundColor: "GrayText" }}
                            onClick={handleAddIllness}
                          >
                            ADD
                          </Button>
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        divider={<CircleIcon fontSize="8px" color="disabled" />}
                        spacing={2}
                        flexWrap="wrap"
                        useFlexGap
                        alignItems="center"
                      >
                        {illnessArray.map((value, index) => {
                          return (
                            <Paper variant="outlined" sx={{ p: 1 }} key={index}>
                              {value}
                            </Paper>
                          );
                        })}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5">Allergies</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <OutlinedInput
                        required
                        fullWidth
                        id="allergies"
                        // placeholder="Enter each illnes and then press ADD"
                        name="allergies"
                        onChange={(event) => setIAllergies(event.target.value)}
                        value={allergies}
                        endAdornment={
                          <Button
                            variant="contained"
                            // color="primary"
                            sx={{ backgroundColor: "GrayText" }}
                            onClick={handleAddAllergies}
                          >
                            ADD
                          </Button>
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        divider={<CircleIcon fontSize="8px" color="disabled" />}
                        spacing={2}
                        flexWrap="wrap"
                        useFlexGap
                        alignItems="center"
                      >
                        {allergiesArray.map((value, index) => {
                          return (
                            <Paper variant="outlined" sx={{ p: 1 }} key={index}>
                              {value}
                            </Paper>
                          );
                        })}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5">Surgeries Undergone</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <OutlinedInput
                        required
                        fullWidth
                        id="surgery"
                        // placeholder="Enter each illnes and then press ADD"
                        name="surgery"
                        onChange={(event) => setISurgery(event.target.value)}
                        value={surgery}
                        endAdornment={
                          <Button
                            variant="contained"
                            // color="primary"
                            sx={{ backgroundColor: "GrayText" }}
                            onClick={handleAddSurgery}
                          >
                            ADD
                          </Button>
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        divider={<CircleIcon fontSize="8px" color="disabled" />}
                        spacing={2}
                        flexWrap="wrap"
                        useFlexGap
                        alignItems="center"
                      >
                        {surgeryArray.map((value, index) => {
                          return (
                            <Paper variant="outlined" sx={{ p: 1 }} key={index}>
                              {value}
                            </Paper>
                          );
                        })}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5">
                        Other Relevant Information
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Add Medical Record
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
