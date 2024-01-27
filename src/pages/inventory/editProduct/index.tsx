import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
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

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const defaultTheme = createTheme();
export default function EditProduct() {
  // dueDate with default value
  // const [dueDate, setDueDate] = React.useState<Dayjs | null>(
  //   dayjs("2022-04-17T15:30")
  // );
  // dueDate without default value
  const [dueDate, setDueDate] = React.useState<Dayjs | null>();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Edit Product" />
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
                <Paper sx={{ p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-required"
                        label="Product Name"
                        defaultValue="Bandages"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-required"
                        label="Category"
                        defaultValue="Medical Supplies"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Product Description"
                        multiline
                        defaultValue="Bandages offer gentle and effective wound protection. Made from soft, breathable materials, they provide reliable adhesion while promoting airflow for comfortable healing. Individually wrapped for hygiene and convenience, they're essential for first aid kits at home or in healthcare facilities, ensuring quick and hassle-free recovery"
                        rows={3}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-number"
                        label="Current Stock"
                        type="number"
                        fullWidth
                        defaultValue={15}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-number"
                        label="Stock Threshold"
                        type="number"
                        fullWidth
                        defaultValue={10}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                      <Button variant="contained">Edit Product</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
