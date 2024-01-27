import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
  Link,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../../../components/navbar-appDrawer";
import BackgroundLetterAvatars from "./LettersAvatar";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SelectChangeEvent } from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const defaultTheme = createTheme();

export default function ResidentProfile() {
  const { id } = useParams<string>();

  // For Tabs
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // For Form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // For Date Input
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(null);

  // For Status Input
  const [maritalStatus, setStatus] = React.useState("Single");

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  // For Dialoge Warning
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Edit Resident" />
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
              <Grid item md={4} xs={12}>
                <Paper
                  sx={{
                    pt: 2,
                    pb: 2,
                    display: "flex",
                    flexDirection: "column",
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
                    label={`ID: ${id}`}
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
                        to="/resident/5346345/medicalRecord"
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
              <Grid item md={8}>
                <Paper
                  sx={{
                    pt: 2,
                    pb: 2,
                    display: "flex",
                    flexDirection: "column",
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
                                defaultValue="John"
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
                                defaultValue="Doe"
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
                                defaultValue={71}
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
                                  value={maritalStatus}
                                  label="MaritalStatus"
                                  onChange={handleStatusChange}
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
                                id="Nationality"
                                label="Nationality"
                                name="Nationality"
                                defaultValue="Iraqi"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                fullWidth
                                id="uncn"
                                label="UNCN"
                                name="uncn"
                                defaultValue="1961983209"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                name="address"
                                defaultValue="Baghdad / Al-karkh"
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
                                defaultValue={12}
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
                                defaultValue={109}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                fullWidth
                                name="id"
                                label="ID"
                                type="text"
                                id="id"
                                disabled
                                defaultValue="R334455"
                              />
                            </Grid>
                          </Grid>
                          <Grid item xs={12} marginTop={1}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={["DatePicker"]}>
                                <DemoItem label="Birth Date">
                                  <DatePicker
                                    defaultValue={dayjs("1952-04-17")}
                                    // value={dateValue}
                                    onChange={(newValue) =>
                                      setDateValue(newValue)
                                    }
                                  />
                                </DemoItem>
                              </DemoContainer>
                            </LocalizationProvider>
                          </Grid>

                          {/* <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Update Information
                          </Button> */}
                          {/* The Start of Dialoge Warning */}
                          <React.Fragment>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={handleClickOpen}
                            >
                              Update Information
                            </Button>
                            <Dialog
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <DialogTitle id="alert-dialog-title">
                                {"Update Resident Information?"}
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  If You Click Ok, The New Information Will Be
                                  Sent To The Database and Override The Old
                                  Data.
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose} autoFocus>
                                  Ok
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </React.Fragment>
                          {/* The End of Dialoge Warning */}
                        </Box>
                        {/* The End Of the Form Code */}
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
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  marginTop: "10px",
                                }}
                              >
                                <Button
                                  variant="outlined"
                                  startIcon={<DeleteIcon />}
                                  color="error"
                                >
                                  Delete
                                </Button>
                                <Button
                                  variant="outlined"
                                  endIcon={<SendIcon />}
                                >
                                  Profile
                                </Button>
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
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  marginTop: "10px",
                                }}
                              >
                                <Button
                                  variant="outlined"
                                  startIcon={<DeleteIcon />}
                                  color="error"
                                >
                                  Delete
                                </Button>
                                <Button
                                  variant="outlined"
                                  endIcon={<SendIcon />}
                                >
                                  Profile
                                </Button>
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
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  marginTop: "10px",
                                }}
                              >
                                <Button
                                  variant="outlined"
                                  startIcon={<DeleteIcon />}
                                  color="error"
                                >
                                  Delete
                                </Button>
                                <Button
                                  variant="outlined"
                                  endIcon={<SendIcon />}
                                >
                                  Profile
                                </Button>
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
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  marginTop: "10px",
                                }}
                              >
                                <Button
                                  variant="outlined"
                                  startIcon={<DeleteIcon />}
                                  color="error"
                                >
                                  Delete
                                </Button>
                                <Button
                                  variant="outlined"
                                  endIcon={<SendIcon />}
                                >
                                  Profile
                                </Button>
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
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  marginTop: "10px",
                                }}
                              >
                                <Button
                                  variant="outlined"
                                  startIcon={<DeleteIcon />}
                                  color="error"
                                >
                                  Delete
                                </Button>
                                <Button
                                  variant="outlined"
                                  endIcon={<SendIcon />}
                                >
                                  Profile
                                </Button>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </TabPanel>
                      {/* The End Of Family Members Tab */}
                    </TabContext>
                  </Box>
                  {/* The End of the Tabs Code  */}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
