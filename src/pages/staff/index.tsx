import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box, Toolbar, Grid, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { NavLink } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

import Navbar from "../../components/navbar-appDrawer";
import StaffTable from "./staffTable";
const defaultTheme = createTheme();

export default function Staff() {
  const {
    isPending,
    error,
    data: staffData,
    isFetching,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["familyMembersData"],
    queryFn: () =>
      axios.get("http://localhost:4500/staff").then((res) => {
        return res.data;
      }),
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Staff" />
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
          {/* Content here */}
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {isSuccess && <StaffTable staffData={staffData} />}
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button variant="contained" component={NavLink} to="/staff/add">
                  Add New Staff Member
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
