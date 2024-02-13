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
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Link,
  Stack,
  TextareaAutosize,
  Switch,
  FormControlLabel,
  IconButton,
  Button,
} from "@mui/material";
import ChipV2 from "@mui/material-next/Chip";
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
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MedicationIcon from "@mui/icons-material/Medication";
import RepeatIcon from "@mui/icons-material/Repeat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
const defaultTheme = createTheme();
export default function MedicalRecord() {
  const [tab, setTab] = React.useState("1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Resident Medical Record" />
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
              <Grid item xs={12}>
                <Paper
                  sx={{
                    pt: 2,
                    pb: 2,
                    display: "flex",
                    // flexDirection: "column",
                    // height: 240,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <BackgroundLetterAvatars name="John Doe" />
                    <div>
                      <Typography variant="h5" mt={1}>
                        John Doe
                      </Typography>
                      <Chip
                        label="ID: R334455"
                        // size="small"
                        sx={{ marginBottom: 2, marginTop: 0.5 }}
                      />
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div style={{ textAlign: "center" }}>
                      <Typography variant="h6">77 Years Old</Typography>
                      <Stack
                        direction="row"
                        spacing={{ xs: 1, sm: 2, md: 3 }}
                        justifyContent="center"
                        // justifyContent="flex-end"
                        divider={<Divider orientation="vertical" flexItem />}
                      >
                        <Typography color="text.secondary">65Kg</Typography>
                        <Typography color="text.secondary">1.61m</Typography>
                        <Typography color="text.secondary">A RH+</Typography>
                      </Stack>
                    </div>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item md={12}>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={tab}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                          onChange={handleTabChange}
                          aria-label="lab API tabs example"
                        >
                          <Tab
                            label="Medical Information"
                            value="1"
                            icon={<InfoIcon />}
                            iconPosition="start"
                          />
                          <Tab
                            label="Medications Reminders"
                            value="2"
                            icon={<VaccinesIcon />}
                            iconPosition="start"
                          />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <Grid
                          container
                          spacing={4}
                          justifyContent="space-evenly"
                        >
                          <Grid item sm={12} md={10 / 3} textAlign="center">
                            <Typography variant="h6" gutterBottom>
                              Chronic Illness
                            </Typography>
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "10px",
                                justifyContent: "center",
                              }}
                            >
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                            </div>
                          </Grid>
                          <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                          />
                          <Grid item sm={12} md={10 / 3} textAlign="center">
                            <Typography variant="h6" gutterBottom>
                              Allergies
                            </Typography>
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "10px",
                                justifyContent: "center",
                              }}
                            >
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                            </div>
                          </Grid>
                          <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                          />
                          <Grid item sm={12} md={10 / 3} textAlign="center">
                            <Typography variant="h6" gutterBottom>
                              Surgeries Undergone
                            </Typography>
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "10px",
                                justifyContent: "center",
                              }}
                            >
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                              <Paper
                                elevation={3}
                                sx={{ width: "fit-content", padding: "5px" }}
                              >
                                <Typography color="text.secondary">
                                  Diabetes
                                </Typography>
                              </Paper>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography>Other Relevant Information:</Typography>
                            <Typography color="text.secondary">
                              Yes But Sometimes NO
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6} textAlign="end">
                            <Typography>Date Of the Record:</Typography>
                            <Typography color="text.secondary">
                              26/1/2003
                            </Typography>
                          </Grid>
                        </Grid>
                      </TabPanel>
                      <TabPanel value="2">
                        <Grid container spacing={3} padding={2}>
                          <Grid item sm={12} md={4}>
                            <Paper sx={{ p: 2 }} variant="outlined">
                              <Grid container spacing={1} alignItems="center">
                                <Grid item xs={2}>
                                  <MedicationIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={10}>
                                  <Typography fontSize={18}>
                                    Biguanides
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <RepeatIcon />
                                </Grid>
                                <Grid item xs={10}>
                                  2 Times Daily
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <AccessTimeIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>8:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>2 Pills</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  {/* <Typography>8:00 am</Typography> */}
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>11:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>1 Pills</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2}>
                                  <CalendarMonthIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>EveryDay</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>On Going Treatment</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={12} textAlign="center">
                                  <IconButton color="error">
                                    <DeleteIcon />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </Paper>
                          </Grid>
                          <Grid item sm={12} md={4}>
                            <Paper sx={{ p: 2 }} variant="outlined">
                              <Grid container spacing={1} alignItems="center">
                                <Grid item xs={2}>
                                  <MedicationIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={10}>
                                  <Typography fontSize={18}>
                                    Biguanides
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <RepeatIcon />
                                </Grid>
                                <Grid item xs={10}>
                                  2 Times Daily
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <AccessTimeIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>8:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>2 Pills</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  {/* <Typography>8:00 am</Typography> */}
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>11:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>1 Pills</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2}>
                                  <CalendarMonthIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>EveryDay</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>On Going Treatment</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={12} textAlign="center">
                                  <IconButton color="error">
                                    <DeleteIcon />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </Paper>
                          </Grid>
                          <Grid item sm={12} md={4}>
                            <Paper sx={{ p: 2 }} variant="outlined">
                              <Grid container spacing={1} alignItems="center">
                                <Grid item xs={2}>
                                  <MedicationIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={10}>
                                  <Typography fontSize={18}>
                                    Biguanides
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <RepeatIcon />
                                </Grid>
                                <Grid item xs={10}>
                                  2 Times Daily
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <AccessTimeIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>8:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>2 Pills</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  {/* <Typography>8:00 am</Typography> */}
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>11:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>1 Pills</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2}>
                                  <CalendarMonthIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>EveryDay</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>On Going Treatment</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={12} textAlign="center">
                                  <IconButton color="error">
                                    <DeleteIcon />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </Paper>
                          </Grid>
                          <Grid item sm={12} md={4}>
                            <Paper sx={{ p: 2 }} variant="outlined">
                              <Grid container spacing={1} alignItems="center">
                                <Grid item xs={2}>
                                  <MedicationIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={10}>
                                  <Typography fontSize={18}>
                                    Biguanides
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <RepeatIcon />
                                </Grid>
                                <Grid item xs={10}>
                                  2 Times Daily
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <AccessTimeIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>8:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>2 Pills</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  {/* <Typography>8:00 am</Typography> */}
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>11:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>1 Pills</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2}>
                                  <CalendarMonthIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>EveryDay</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>On Going Treatment</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={12} textAlign="center">
                                  <IconButton color="error">
                                    <DeleteIcon />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </Paper>
                          </Grid>
                          <Grid item sm={12} md={4}>
                            <Paper sx={{ p: 2 }} variant="outlined">
                              <Grid container spacing={1} alignItems="center">
                                <Grid item xs={2}>
                                  <MedicationIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={10}>
                                  <Typography fontSize={18}>
                                    Biguanides
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <RepeatIcon />
                                </Grid>
                                <Grid item xs={10}>
                                  2 Times Daily
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                  <AccessTimeIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>8:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>2 Pills</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  {/* <Typography>8:00 am</Typography> */}
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>11:00 am</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>1 Pills</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={2}>
                                  <CalendarMonthIcon />
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>EveryDay</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography>On Going Treatment</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={12} textAlign="center">
                                  <IconButton color="error">
                                    <DeleteIcon />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </Paper>
                          </Grid>
                          <Grid item xs={12} textAlign="center">
                            <Button
                              variant="contained"
                              size="large"
                              component={NavLink}
                              to="/resident/4534/addMedication/5345"
                            >
                              Add New Medication
                            </Button>
                          </Grid>
                        </Grid>
                      </TabPanel>
                    </TabContext>
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
