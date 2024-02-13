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
  Button,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import Navbar from "../../../components/navbar-appDrawer";
import AddIcon from "@mui/icons-material/Add";
const defaultTheme = createTheme();
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SpecificUncompletedTasks from "../components/specificUncompletedTasks";
import SpecificCompletedTasks from "../components/SpecificCompletedTasks";
export default function MyTasks() {
  const navigate = useNavigate();
  const assigneeId = localStorage.getItem("staffId");
  const {
    data: uncompletedTasks,
    isSuccess: isUncompletedTasksSuccess,
    refetch: uncompletedRefetch,
  } = useQuery({
    queryKey: ["uncompletedTasks"],
    queryFn: () =>
      axios
        .get(`http://localhost:4500/tasks/uncompleted/${assigneeId}`)
        .then((res) => {
          console.log(res.data);
          return res.data;
        }),
  });
  const {
    data: completedTasks,
    isSuccess: isCompletedTasksSuccess,
    refetch: completedRefetch,
  } = useQuery({
    queryKey: ["completedTasks"],
    queryFn: () =>
      axios
        .get(`http://localhost:4500/tasks/completed/${assigneeId}`)
        .then((res) => {
          console.log(res.data);
          return res.data;
        }),
  });
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
                    </Grid>
                    {isUncompletedTasksSuccess &&
                      uncompletedTasks.map((task, index) => (
                        <SpecificUncompletedTasks
                          key={index}
                          task={task}
                          refetch={uncompletedRefetch}
                        />
                      ))}
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
                    {/*  */}
                    {isCompletedTasksSuccess &&
                      completedTasks.map((task, index) => (
                        <SpecificCompletedTasks task={task} key={index} />
                      ))}
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
