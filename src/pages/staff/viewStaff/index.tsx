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
} from "@mui/material";
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
import MailIcon from "@mui/icons-material/Mail";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { NavLink, useParams } from "react-router-dom";

const defaultTheme = createTheme();
export default function ViewStaff() {
  const { staffId } = useParams<string>();
  // For Tabs
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Staff Member Profile" />
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BackgroundLetterAvatars name="Jonathan Swift" />
                  <Typography variant="h5" mt={1}>
                    Jonathan Swift
                  </Typography>
                  <Chip
                    label={`ID: ${staffId}`}
                    size="small"
                    sx={{ marginBottom: 2, marginTop: 0.5 }}
                  />
                  <Divider flexItem />
                  <List sx={{ width: "100%", margin: "0", padding: "0" }}>
                    <ListItem
                      disablePadding
                      sx={{ width: "100%", textAlign: "center" }}
                    >
                      <ListItemButton
                        sx={{ padding: "10px 20px" }}
                        component={NavLink}
                        to="/staff/S5346345/tasks"
                      >
                        <ListItemIcon>
                          <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tasks" />
                      </ListItemButton>
                    </ListItem>
                    {/* <Divider variant="middle" />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Room" />
                      </ListItemButton>
                    </ListItem> */}
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
                    overflow: "hidden",
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
                                User Name:
                              </Typography>
                              <Typography fontSize={20}>
                                Jonathan Swift
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
                            {" "}
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Email:
                              </Typography>
                              <Typography
                                fontSize={{ xs: 18, sm: 20 }}
                                component={Link}
                              >
                                {" "}
                                JonathanSwift@email.com
                              </Typography>
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
                                Phone:
                              </Typography>
                              <Typography fontSize={20}>
                                {" "}
                                +964 3236 7824 432
                              </Typography>
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
                                ID:
                              </Typography>
                              <Typography fontSize={20}> {staffId}</Typography>
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
                                Started Working From:
                              </Typography>
                              <Typography fontSize={20}> 14/9/2023</Typography>
                            </div>
                          </Grid>

                          <Grid item xs={12}>
                            <Divider flexItem />
                          </Grid>
                          <Grid item xs={12}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Typography fontSize={20} color="gray">
                                Role:
                              </Typography>
                              <Typography
                                fontSize={22}
                                color="primary"
                                fontWeight="bold"
                              >
                                Nurse
                              </Typography>
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
                                Shift:
                              </Typography>
                              <Typography fontSize={20}>
                                {" "}
                                8:00 - 4:00
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                // alignItems: "center",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Work Days:
                              </Typography>
                              <Stack
                                direction={{ xs: "column", sm: "row" }}
                                columnGap={{ xs: 1, sm: 3 }}
                                rowGap={{ xs: 1 }}
                                useFlexGap
                                flexWrap="wrap"
                                divider={
                                  <Divider orientation="vertical" flexItem />
                                }
                              >
                                {[
                                  "Sunday",
                                  "Monday",
                                  "Tuesday",
                                  "Wednesday",
                                  "Thursday",
                                ].map((day, index) => {
                                  return (
                                    <Typography fontSize={20} key={index}>
                                      {day}
                                    </Typography>
                                  );
                                })}
                              </Stack>
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <div
                              style={{
                                display: "flex",
                                gap: "30px",
                              }}
                            >
                              <Typography fontSize={18} color="gray">
                                Role Description:
                              </Typography>
                              <ul style={{ margin: 0, padding: 0 }}>
                                <li>
                                  <Typography fontSize={20}>
                                    {" "}
                                    Provides medical care and assistance to
                                    residents.
                                  </Typography>
                                </li>
                                <li>
                                  <Typography fontSize={20}>
                                    {" "}
                                    Administers medications and monitors health
                                    conditions.
                                  </Typography>
                                </li>
                              </ul>
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
