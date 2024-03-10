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
} from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Navbar from "../../../components/navbar-appDrawer";
import BackgroundLetterAvatars from "../residentProfile/LettersAvatar";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

const defaultTheme = createTheme();
export default function ViewResident() {
  // For Tabs
  const [value, setValue] = React.useState("1");
  const { residentId } = useParams();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Resident Profile" />
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
              {/* Start of the Intro Section */}
              <Grid item md={4} xs={12}>
                <Paper
                  sx={{
                    pt: 2,
                    pb: 2,
                    display: "flex",
                    flexDirection: "column",
                    // height: 240,
                    // justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BackgroundLetterAvatars name="John Doe" />
                  <Typography variant="h5" mt={1}>
                    John Doe
                  </Typography>
                  {/* <Typography fontSize={14} color="gray" mb={2}>
                    From 12-9-2021
                  </Typography> */}
                  <Chip
                    label={`ID: ${residentId}`}
                    size="small"
                    sx={{ marginBottom: 2, marginTop: 0.5 }}
                  />
                  <Divider flexItem />
                  <List sx={{ width: "100%" }}>
                    <ListItem
                      disablePadding
                      sx={{ width: "100%", textAlign: "center" }}
                    >
                      <ListItemButton
                        component={NavLink}
                        to={`/resident/${residentId}/medicalRecord`}
                      >
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Medications" />
                      </ListItemButton>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Room" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              {/* End of the Intro Section */}
              {/* Start of the Information Section */}
              <Grid item md={8}>
                <Paper
                  sx={{
                    pt: 2,
                    pb: 2,
                    display: "flex",
                    flexDirection: "column",
                    // height: 240,
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  {/* The Start of the Tabs Code */}
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                        >
                          <Tab label="Personal Information" value="1" />
                          <Tab label="Family Members" value="2" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        {/* The Start of Personal Information Tab */}
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                First Name:
                              </Typography>
                              <Typography fontSize={20}>John</Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            {" "}
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Last Name:
                              </Typography>
                              <Typography fontSize={20}> Doe</Typography>
                            </div>
                          </Grid>
                          <Grid item xs={6}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Age:
                              </Typography>
                              <Typography fontSize={20}> 79</Typography>
                            </div>
                          </Grid>
                          <Grid item xs={6}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Marital Status:
                              </Typography>
                              <Typography fontSize={20}> Single</Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Nationality:
                              </Typography>
                              <Typography fontSize={20}> Iraqi</Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                UNCN:
                              </Typography>
                              <Typography fontSize={20}> 1961983209</Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Address:
                              </Typography>
                              <Typography fontSize={20}>
                                {" "}
                                Baghdad / Al-karkh
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Number Of Children:
                              </Typography>
                              <Typography fontSize={20}> 5</Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Room Number
                              </Typography>
                              <Typography fontSize={20}> 109</Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                ID
                              </Typography>
                              <Typography fontSize={20}> R334455</Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Birth Date
                              </Typography>
                              <Typography fontSize={20}> 04/17/1952</Typography>
                            </div>
                          </Grid>
                          {/* <Grid item xs={12} sm={6}>
                            <Typography fontSize={16}>John Doe</Typography>
                          </Grid> */}
                        </Grid>
                        {/* The End of Personal Information Tab */}
                      </TabPanel>
                      <TabPanel value="2">
                        {/* The Start Of Family Members Tab */}
                        <Grid container columnSpacing={2} rowSpacing={4}>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <BackgroundLetterAvatars name="Ahmed Mohamed" />
                              <Typography variant="h5" mt={1}>
                                Ahmed Mohamed
                              </Typography>
                              <Chip
                                label="Son"
                                size="meduim"
                                sx={{ marginBottom: 0.5, marginTop: 0.5 }}
                              />
                              <div style={{ display: "flex", gap: "10px" }}>
                                <LocalPhoneIcon
                                  sx={{ color: "gray" }}
                                ></LocalPhoneIcon>
                                <Typography color="gray" mb={0.5}>
                                  +964 0784 3247 657
                                </Typography>
                              </div>
                              <div style={{ display: "flex", gap: "10px" }}>
                                <EmailIcon sx={{ color: "gray" }}></EmailIcon>
                                <Link>AhmedMohamed@gmail.com</Link>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <BackgroundLetterAvatars name="Ahmed Taha" />
                              <Typography variant="h5" mt={1}>
                                Ahmed Taha
                              </Typography>
                              <Chip
                                label="Son"
                                size="meduim"
                                sx={{ marginBottom: 0.5, marginTop: 0.5 }}
                              />
                              <div style={{ display: "flex", gap: "10px" }}>
                                <LocalPhoneIcon
                                  sx={{ color: "gray" }}
                                ></LocalPhoneIcon>
                                <Typography color="gray" mb={0.5}>
                                  +964 0784 3247 657
                                </Typography>
                              </div>
                              <div style={{ display: "flex", gap: "10px" }}>
                                <EmailIcon sx={{ color: "gray" }}></EmailIcon>
                                <Link>AhmedTaha@gmail.com</Link>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <BackgroundLetterAvatars name="Omar Mahrous" />
                              <Typography variant="h5" mt={1}>
                                Omar Mahrous
                              </Typography>
                              <Chip
                                label="Son"
                                size="meduim"
                                sx={{ marginBottom: 0.5, marginTop: 0.5 }}
                              />
                              <div style={{ display: "flex", gap: "10px" }}>
                                <LocalPhoneIcon
                                  sx={{ color: "gray" }}
                                ></LocalPhoneIcon>
                                <Typography color="gray" mb={0.5}>
                                  +964 0784 3247 657
                                </Typography>
                              </div>
                              <div style={{ display: "flex", gap: "10px" }}>
                                <EmailIcon sx={{ color: "gray" }}></EmailIcon>
                                <Link>OmarMahrous@gmail.com</Link>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <BackgroundLetterAvatars name="Osama Elsayed" />
                              <Typography variant="h5" mt={1}>
                                Osama Elsayed
                              </Typography>
                              <Chip
                                label="Son"
                                size="meduim"
                                sx={{ marginBottom: 0.5, marginTop: 0.5 }}
                              />
                              <div style={{ display: "flex", gap: "10px" }}>
                                <LocalPhoneIcon
                                  sx={{ color: "gray" }}
                                ></LocalPhoneIcon>
                                <Typography color="gray" mb={0.5}>
                                  +964 0784 3247 657
                                </Typography>
                              </div>
                              <div style={{ display: "flex", gap: "10px" }}>
                                <EmailIcon sx={{ color: "gray" }}></EmailIcon>
                                <Link>OsamaElsayed@gmail.com</Link>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <BackgroundLetterAvatars name="Bassem Alaouda" />
                              <Typography variant="h5" mt={1}>
                                Bassem Alaouda
                              </Typography>
                              <Chip
                                label="Brother"
                                size="meduim"
                                sx={{ marginBottom: 0.5, marginTop: 0.5 }}
                              />
                              <div style={{ display: "flex", gap: "10px" }}>
                                <LocalPhoneIcon
                                  sx={{ color: "gray" }}
                                ></LocalPhoneIcon>
                                <Typography color="gray" mb={0.5}>
                                  +964 0784 3247 657
                                </Typography>
                              </div>
                              <div style={{ display: "flex", gap: "10px" }}>
                                <EmailIcon sx={{ color: "gray" }}></EmailIcon>
                                <Link>BassemAlaouda@gmail.com</Link>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                        {/* The End Of Family Members Tab */}
                      </TabPanel>
                    </TabContext>
                  </Box>
                </Paper>
              </Grid>
              {/* End of the Information Section */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
