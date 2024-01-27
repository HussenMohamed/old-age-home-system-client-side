import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Box,
  Toolbar,
  Grid,
  Paper,
  Chip,
  Stack,
  Typography,
  Divider,
  IconButton,
  Fab,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import Navbar from "../../../components/navbar-appDrawer";
import AddIcon from "@mui/icons-material/Add";
import DialogChooseStaff from "../chooseStaffMember";
const defaultTheme = createTheme();

export default function StaffTasks() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Tasks of Jonathan Doe" />
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
                {/* <StaffTable /> */}
                <Paper sx={{ p: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} position="relative">
                      <Typography
                        variant="h4"
                        color="primary"
                        textAlign="center"
                      >
                        To Do
                      </Typography>
                      <Fab
                        color="primary"
                        aria-label="add"
                        sx={{ position: "absolute", top: 5, right: 0 }}
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        <AddIcon />
                      </Fab>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Paper
                        variant="outlined"
                        sx={{ padding: { xs: "10px", sm: "10px", md: "15px" } }}
                      >
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <Chip
                              label="Nurse"
                              color="primary"
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={6} textAlign="end">
                            <IconButton
                              color="primary"
                              aria-label="add an alarm"
                            >
                              <AlarmIcon />
                            </IconButton>
                            <IconButton aria-label="delete" color="error">
                              <DeleteIcon />
                            </IconButton>
                          </Grid>

                          <Grid item xs={12}>
                            <Typography variant="h5">
                              Updating medical records
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1" color="text.secondary">
                              Monitor and update the medical records of the
                              residents John Doe and Jonathan Swift
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Divider flexItem />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", gap: "5px" }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              Assignee:
                            </Typography>
                            <Link
                              style={{
                                cursor: "pointer",
                                color: "black",
                              }}
                              to="/staff/S532344"
                            >
                              John Wick
                            </Link>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", gap: "5px" }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              Assigner:
                            </Typography>
                            <Typography variant="body1">
                              Hussein Mohamed
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", gap: "5px" }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              Assign Date:
                            </Typography>
                            <Typography variant="body1">
                              12/12/2023 - 8:33
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", gap: "5px" }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              Due Date:
                            </Typography>
                            <Typography variant="body1">
                              13/12/2023 - 12:00
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}></Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                {/* <StaffTable /> */}
                <Paper sx={{ p: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        textAlign="center"
                      >
                        Completed
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Paper
                        variant="outlined"
                        sx={{ padding: { xs: "10px", sm: "10px", md: "15px" } }}
                      >
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Chip
                              label="Caregiver"
                              color="primary"
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h5">
                              Assisting residents with daily activities
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1" color="text.secondary">
                              Assisting residents Bob Johnson and David Wilson
                              with daily activities to enhance their hapiness
                              state
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Divider flexItem />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", gap: "5px" }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              Assignee:
                            </Typography>
                            <Link
                              style={{
                                cursor: "pointer",
                                color: "black",
                              }}
                              to="/staff/S532344"
                            >
                              Jane Smith
                            </Link>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", gap: "5px" }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              Assigner:
                            </Typography>
                            <Typography variant="body1">
                              Hussein Mohamed
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", gap: "5px" }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              Assign Date:
                            </Typography>
                            <Typography variant="body1">
                              12/12/2023 - 8:33
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", gap: "5px" }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              Due Date:
                            </Typography>
                            <Typography variant="body1">
                              13/12/2023 - 24:00
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", gap: "5px" }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              Completed at:
                            </Typography>
                            <Typography variant="body1">
                              13/12/2023 - 18:35
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}></Grid>
                      </Paper>
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
